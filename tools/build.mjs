// Builds one self-contained static site per subject into ../site/<id>/
// from the Obsidian notes in ../<id>/notes.md.
// Usage: cd tools && npm install && npm run build [-- <id> ...]
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import katex from "katex";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(toolsDir, "..");
const siteDir = path.join(root, "site");

// ---- subjects -----------------------------------------------------------------
// lecture / question: regexes matched against a single heading line.
//   lecture groups:  n (number), date?, topic?
//   question groups: n (number), title
// qid: anchor of a question; lecture anchors are always p{N}.
// topics: topic per lecture number; overrides the heading text.
const subjects = [
  {
    id: "akmm",
    short: "AKMM",
    title: "Analiza konstrukcij z MKE",
    url: "https://akmm.podlen-project.com",
    notes: "akmm/notes.md",
    images: "akmm/images",
    lecture: /^# Predavanje (?<n>\d+)\s*-\s*(?<date>.+?)\s*$/,
    question: /^## (?<n>\d+)\.\s*(?<title>.*?)\s*$/,
    qid: (l, q) => `q${q.n}`,
    // The notes only have "Predavanje N - datum", so every topic is set here.
    topics: {
      1: "Geometrijski, fizikalni in matematični model",
      2: "Numerični model: MKR in MKE",
      3: "MRE, MKV in priprava modela",
      4: "Mreženje",
      5: "Lastnosti materiala in KE, izoparametrični KE",
      6: "Interpolacija in numerično integriranje",
      7: "Robni pogoji pri toploti in reševanje sistema",
      8: "3D mehanski problemi",
      9: "Osnosimetrični KE",
      10: "Ravninski KE",
      11: "Plošče, lupine, robni pogoji",
      12: "Linijski KE: palice in nosilci",
      13: "Splošni linijski KE, simetrije, povezovanje KE",
    },
  },
  {
    id: "mnm",
    short: "MNM",
    title: "Numerične metode modeliranja",
    url: "https://mnm.podlen-project.com",
    notes: "mnm/notes.md",
    images: "mnm/images",
    // "## ***PREDAVANJE 2 : Elementi modelirnega območja***", "## ***Predavanje 1***"
    lecture: /^## \**\s*PREDAVANJE (?<n>\d+)\s*(?::\s*(?<topic>.*?))?\s*\**\s*$/i,
    question: /^### \**\s*(?<n>\d+)\.\s*(?<title>.*?)\s*\**\s*$/,
    qid: (l, q) => `p${l.n}-q${q.n}`,
    topics: { 1: "Uvod v modeliranje" },
  },
];

// Headings written in capitals become sentence case; abbreviations stay.
const KEEP_UPPER = new Set(["MKE", "MRE", "MKR", "MKV", "KE", "1D", "2D", "3D"]);
function sentenceCase(s) {
  if (s !== s.toUpperCase()) return s;
  const out = s
    .split(/(\s+|\/|-)/)
    .map((w) => (KEEP_UPPER.has(w) ? w : w.toLowerCase()))
    .join("");
  return out.replace(/\p{L}/u, (c) => c.toUpperCase());
}

// ---- helpers ------------------------------------------------------------------
const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// encodeURIComponent leaves !'()* alone; encode them too for odd Obsidian names
const encodeName = (f) =>
  encodeURIComponent(f).replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());

// Plain web/mail links and relative ones only; any other scheme (javascript: …) is dropped.
const safeHref = (h) => /^(https?:|mailto:|#|[^:]*$)/i.test(h.trim());

// Raw HTML in the notes is shown as text, never passed through.
marked.use({
  gfm: true,
  breaks: false,
  renderer: {
    html: ({ text }) => escapeHtml(text),
    checkbox: () => "", // Obsidian "- [ ]" bullets are personal style: plain bullets
    link({ href, title, tokens }) {
      const inner = this.parser.parseInline(tokens);
      if (!safeHref(href)) return inner;
      const ext = /^https?:/i.test(href) ? ' rel="noopener noreferrer"' : "";
      return `<a href="${escapeHtml(href)}"${title ? ` title="${escapeHtml(title)}"` : ""}${ext}>${inner}</a>`;
    },
    image({ href, text }) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return escapeHtml(text);
      return `<img src="${escapeHtml(href)}" alt="${escapeHtml(text)}" loading="lazy">`;
    },
  },
});

const katexVersion = JSON.parse(
  fs.readFileSync(path.join(toolsDir, "node_modules/katex/package.json"), "utf8")
).version;
const vendorPath = `vendor/katex-${katexVersion}`; // versioned, so it can be cached forever

// ---- one subject ------------------------------------------------------------------
function buildSubject(S) {
  const out = path.join(siteDir, S.id);
  const source = fs.readFileSync(path.join(root, S.notes), "utf8").replace(/\r\n/g, "\n");
  let text = source.replace(/^---\n[\s\S]*?\n---\n/, ""); // Obsidian front matter
  const lineOf = (snippet) => {
    const i = source.indexOf(snippet);
    return i < 0 ? "?" : source.slice(0, i).split("\n").length;
  };

  // math: pull it out before Markdown sees it, render with KaTeX
  const tokens = [];
  const stash = (html) => `XTOKEN${tokens.push(html) - 1}X`;
  const errors = [];
  let nMath = 0;
  const render = (tex, displayMode) => {
    nMath++;
    try {
      // KaTeX has no multline environment; gathered breaks lines the same way, centred
      const kt = tex.replace(/\\(begin|end)\{multline\*?\}/g, "\\$1{gathered}");
      return katex.renderToString(kt, {
        displayMode,
        throwOnError: true,
        strict: "ignore",
        macros: { "\\space": "\\ " },
      });
    } catch (e) {
      errors.push(`${S.notes}:${lineOf(tex)}: ${e.message.split("\n")[0]}`);
      return `<code class="katex-error">${escapeHtml(tex)}</code>`;
    }
  };
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => stash(render(t.trim(), true)));
  text = text.replace(/\$([^$\n]+?)\$/g, (_, t) => stash(render(t.trim(), false)));
  const leftover = (text.match(/\$/g) || []).length;
  if (leftover) console.warn(`[${S.id}] ${leftover} unmatched "$" left in text`);

  // Obsidian image embeds ![[file.png]] / ![[file.png|300]]
  const imgDir = path.join(root, S.images);
  const usedImages = new Set();
  const missing = [];
  text = text.replace(/!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g, (_, f) => {
    f = f.trim();
    const file = path.join(imgDir, f);
    if (path.dirname(file) !== imgDir || !fs.existsSync(file)) {
      missing.push(f);
      return stash(`<code>${escapeHtml(f)}</code>`);
    }
    usedImages.add(f);
    const v = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 10);
    return stash(`<img src="images/${encodeName(f)}?v=${v}" alt="" loading="lazy">`);
  });

  const unstash = (html) => html.replace(/XTOKEN(\d+)X/g, (_, i) => tokens[+i]);
  const md = (s) => {
    let html = marked.parse(s);
    html = html.replace(/<p>(XTOKEN\d+X)<\/p>/g, "$1"); // display math / lone image on its own line
    html = unstash(html);
    html = html.replace(/^(<img [^>]+>)$/gm, "<figure>$1</figure>");
    html = html.replace(/<li>(<img [^>]+>)<\/li>/g, '<li class="fig">$1</li>');
    return html;
  };
  const inline = (s) => unstash(marked.parseInline(s));

  // split into lectures and questions, line by line
  const lectures = [];
  let lec = null;
  let q = null;
  for (const line of text.split("\n")) {
    const lm = line.match(S.lecture);
    if (lm) {
      const n = +lm.groups.n;
      lec = {
        n,
        date: (lm.groups.date || "").trim(),
        topic: S.topics?.[n] || sentenceCase((lm.groups.topic || "").trim()),
        questions: [],
      };
      lectures.push(lec);
      q = null;
      continue;
    }
    const qm = lec && line.match(S.question);
    if (qm) {
      q = { n: +qm.groups.n, title: qm.groups.title.trim(), body: [] };
      q.id = S.qid(lec, q);
      lec.questions.push(q);
      continue;
    }
    if (q) q.body.push(line);
  }

  const ids = new Set();
  for (const l of lectures)
    for (const x of l.questions) {
      if (ids.has(x.id)) console.warn(`[${S.id}] duplicate anchor #${x.id}`);
      ids.add(x.id);
    }

  const nQuestions = lectures.reduce((a, l) => a + l.questions.length, 0);
  const others = subjects.filter((o) => o.id !== S.id);

  const sidebar = lectures
    .map((l, i) => {
      const qs = l.questions
        .map((x) => `<li><a href="#${x.id}"><span>${x.n}.</span> ${inline(x.title)}</a></li>`)
        .join("");
      const meta = [l.date, `${l.questions.length} vpr.`].filter(Boolean).join(" · ");
      return `<li class="lec-item" data-lec="p${l.n}"${i === 0 ? " data-active" : ""}>
<a class="lec-link" href="#p${l.n}"><span class="ln">${l.n}</span><span class="lt">${escapeHtml(l.topic)}<small>${escapeHtml(meta)}</small></span></a>
<ol class="qs">${qs}</ol>
</li>`;
    })
    .join("\n");

  const sections = lectures
    .map((l, i) => {
      const qs = l.questions
        .map(
          (x) => `<details class="q" id="${x.id}" open>
<summary><span class="qn">${x.n}.</span> <span class="qt">${inline(x.title)}</span></summary>
<div class="a">${md(x.body.join("\n").trim())}</div>
</details>`
        )
        .join("\n");
      const eyebrow = [`Predavanje ${l.n}`, l.date].filter(Boolean).join(" · ");
      return `<section class="lec" id="p${l.n}"${i ? " hidden" : ""}>
<header class="lec-head"><p>${escapeHtml(eyebrow)}</p><h2>${escapeHtml(l.topic)}</h2></header>
${qs}
</section>`;
    })
    .join("\n");

  const html = `<!doctype html>
<html lang="sl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${S.short} – ${escapeHtml(S.title)}: odgovori na vprašanja</title>
<meta name="description" content="Odgovori na izpitna vprašanja pri predmetu ${escapeHtml(S.title)} (Fakulteta za strojništvo, UL).">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${vendorPath}/katex.min.css">
<link rel="stylesheet" href="style.css">
<script src="theme.js"></script>
</head>
<body>
<header class="top">
<button id="menu" type="button" aria-label="Predavanja" aria-controls="side" aria-expanded="false">☰</button>
<h1 class="brand"><b>${S.short}</b> <span>${escapeHtml(S.title)}</span></h1>
<nav class="other" aria-label="Drugi predmeti">${others.map((o) => `<a href="${o.url}" title="${escapeHtml(o.title)}">${o.short} →</a>`).join(" ")}</nav>
<div class="tools">
<input id="search" type="search" placeholder="Išči med ${nQuestions} vprašanji …" aria-label="Iskanje" autocomplete="off">
<button id="fold" type="button" title="Skrij odgovore za samopreverjanje">Skrij odgovore</button>
<button id="theme" type="button" aria-label="Preklopi temo" title="Svetla/temna tema">◐</button>
</div>
</header>
<div class="shell">
<aside class="side" id="side">
<nav aria-label="Predavanja"><ol class="lecs">
${sidebar}
</ol></nav>
</aside>
<div class="scrim" id="scrim" hidden></div>
<main id="main">
${sections}
<p id="empty" hidden>Ni zadetkov.</p>
<footer>Študentski zapiski, ni uradno gradivo predmeta. Preveri pri predavanjih.</footer>
</main>
</div>
<script src="app.js"></script>
</body>
</html>
`;

  const notFound = `<!doctype html>
<html lang="sl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 – ${S.short}</title>
<style>body{margin:0;padding:3rem 16px;font:16px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#fff;color:#1b1f23}a{color:#1a56b0}@media (prefers-color-scheme:dark){body{background:#141618;color:#e3e5e8}a{color:#8db4f0}}</style>
</head>
<body>
<h1>404</h1>
<p>Te strani ni. <a href="/">Nazaj na ${S.short}</a></p>
</body>
</html>
`;

  const headers = `/*
  Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Cross-Origin-Opener-Policy: same-origin

/vendor/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable
`;

  const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1a56b0"/><text x="16" y="20.5" font-size="${S.short.length > 3 ? 9.5 : 11.5}" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="#fff">${S.short}</text></svg>\n`;

  // ---- write ----
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(path.join(out, vendorPath, "fonts"), { recursive: true });
  fs.writeFileSync(path.join(out, "index.html"), html);
  fs.writeFileSync(path.join(out, "404.html"), notFound);
  fs.writeFileSync(path.join(out, "_headers"), headers);
  fs.writeFileSync(path.join(out, "favicon.svg"), favicon);
  for (const f of ["style.css", "app.js", "theme.js"])
    fs.copyFileSync(path.join(toolsDir, "assets", f), path.join(out, f));

  // KaTeX: only woff2 fonts (all current browsers) to keep the site small
  const kdist = path.join(toolsDir, "node_modules/katex/dist");
  let css = fs.readFileSync(path.join(kdist, "katex.min.css"), "utf8");
  css = css
    .replace(/,url\(fonts\/[^)]+\.woff\) format\("woff"\)/g, "")
    .replace(/,url\(fonts\/[^)]+\.ttf\) format\("truetype"\)/g, "");
  fs.writeFileSync(path.join(out, vendorPath, "katex.min.css"), css);
  for (const f of fs.readdirSync(path.join(kdist, "fonts")).filter((f) => f.endsWith(".woff2")))
    fs.copyFileSync(path.join(kdist, "fonts", f), path.join(out, vendorPath, "fonts", f));

  // only images the notes reference; never slides or documents
  if (usedImages.size) fs.mkdirSync(path.join(out, "images"), { recursive: true });
  for (const f of usedImages) {
    if (/\.(pdf|pptx?)$/i.test(f)) throw new Error(`[${S.id}] refusing to publish ${f}`);
    fs.copyFileSync(path.join(imgDir, f), path.join(out, "images", f));
  }

  for (const e of errors) console.warn(`[${S.id}] KaTeX ${e}`);
  for (const f of missing) console.warn(`[${S.id}] missing image: ${f}`);
  console.log(
    `[${S.id}] ${lectures.length} lectures, ${nQuestions} questions, ${nMath} formulas, ` +
      `${usedImages.size} images → site/${S.id}/` +
      (errors.length ? ` (${errors.length} math errors)` : "")
  );
  return errors.length + missing.length;
}

// ---- main -----------------------------------------------------------------------
const wanted = process.argv.slice(2);
const chosen = wanted.length ? subjects.filter((s) => wanted.includes(s.id)) : subjects;
if (chosen.length !== (wanted.length || subjects.length))
  throw new Error(`Unknown subject in: ${wanted.join(", ")}`);

// site/ holds only the subject folders; anything else (e.g. an old top-level build) goes
fs.mkdirSync(siteDir, { recursive: true });
const keep = new Set(subjects.map((s) => s.id));
for (const f of fs.readdirSync(siteDir))
  if (!keep.has(f)) fs.rmSync(path.join(siteDir, f), { recursive: true, force: true });

let problems = 0;
for (const S of chosen) problems += buildSubject(S);
if (problems) process.exitCode = 1;
