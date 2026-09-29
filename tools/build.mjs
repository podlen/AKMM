// Builds the static site in ../site from the Obsidian notes in ../*.md
// Usage: cd tools && npm install && npm run build
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import katex from "katex";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "site");
const src = fs
  .readdirSync(root)
  .find((f) => f.endsWith(".md") && f !== "README.md");
if (!src) throw new Error("No notes file found");

let text = fs.readFileSync(path.join(root, src), "utf8").replace(/\r\n/g, "\n");
text = text.replace(/^---\n[\s\S]*?\n---\n/, ""); // Obsidian front matter

// ---- math: pull it out before Markdown sees it, render with KaTeX ----------
const macros = { "\\space": "\\ " };
const math = [];
let mathErrors = 0;
const render = (tex, displayMode) => {
  try {
    return katex.renderToString(tex, {
      displayMode,
      throwOnError: true,
      macros: { ...macros },
    });
  } catch (e) {
    mathErrors++;
    console.warn(`KaTeX: ${e.message}\n  in: ${tex.slice(0, 80)}`);
    return `<code class="math-error">${escapeHtml(tex)}</code>`;
  }
};
const stash = (html) => `MATHTOKEN${math.push(html) - 1}X`;

text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => stash(render(t.trim(), true)));
text = text.replace(/\$([^$\n]+?)\$/g, (_, t) => stash(render(t.trim(), false)));
const leftover = (text.match(/\$/g) || []).length;
if (leftover) console.warn(`Warning: ${leftover} unmatched "$" left in text`);

// ---- Obsidian image embeds --------------------------------------------------
text = text.replace(
  /!\[\[([^\]]+)\]\]/g,
  (_, f) => `<img src="images/${encodeURI(f.trim())}" alt="" loading="lazy">`
);

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function md(s) {
  let html = marked.parse(s, { gfm: true, breaks: false });
  // display math on its own line: unwrap from <p>
  html = html.replace(/<p>(MATHTOKEN\d+X)<\/p>/g, "$1");
  html = html.replace(/MATHTOKEN(\d+)X/g, (_, i) => math[+i]);
  // Obsidian checkbox bullets are personal style: show as plain bullets
  html = html.replace(/<input[^>]*type="checkbox"[^>]*>\s*/g, "");
  // a lone image becomes a figure
  html = html.replace(/<p>(<img [^>]+>)<\/p>/g, '<figure>$1</figure>');
  html = html.replace(/<li>(<img [^>]+>)<\/li>/g, '<li class="fig">$1</li>');
  return html;
}

// ---- split into lectures and questions --------------------------------------
const parts = text.split(/^# (?=Predavanje )/m);
const intro = parts.shift().trim();
const lectures = parts.map((chunk) => {
  const [head, ...rest] = chunk.split("\n");
  const m = head.match(/^Predavanje (\d+)\s*-\s*(.+)$/);
  const body = rest.join("\n");
  const qs = body.split(/^## /m);
  const lead = qs.shift().trim();
  return {
    n: m ? +m[1] : 0,
    date: m ? m[2].trim() : "",
    lead,
    questions: qs.map((q) => {
      const [title, ...r] = q.split("\n");
      const t = title.match(/^(\d+)\.\s*(.*)$/);
      return {
        num: t ? +t[1] : null,
        title: (t ? t[2] : title).trim(),
        body: r.join("\n").trim(),
      };
    }),
  };
});

const inlineTitle = (s) => md(s).replace(/^<p>|<\/p>\s*$/g, "").trim();

// ---- HTML -------------------------------------------------------------------
const nQuestions = lectures.reduce((a, l) => a + l.questions.length, 0);
const tabs = lectures
  .map(
    (l, i) =>
      `<button role="tab" class="tab" id="tab-p${l.n}" data-lec="p${l.n}" aria-controls="p${l.n}" aria-selected="${i === 0}">` +
      `<span class="tab-n">Predavanje ${l.n}</span><span class="tab-d">${escapeHtml(l.date)}</span></button>`
  )
  .join("");

const sections = lectures
  .map((l, i) => {
    const toc = l.questions
      .map(
        (q) =>
          `<li><a href="#q${q.num}">${q.num ? `<b>${q.num}.</b> ` : ""}${inlineTitle(q.title)}</a></li>`
      )
      .join("");
    const cards = l.questions
      .map(
        (q) => `<details class="q" id="q${q.num}" open>
<summary><span class="qn">${q.num ?? ""}</span><span class="qt">${inlineTitle(q.title)}</span></summary>
<div class="a">${md(q.body)}</div>
</details>`
      )
      .join("\n");
    return `<section role="tabpanel" class="lec" id="p${l.n}" aria-labelledby="tab-p${l.n}"${i ? " hidden" : ""}>
<div class="lec-head"><h2>Predavanje ${l.n}</h2><span class="date">${escapeHtml(l.date)}</span></div>
<div class="lec-grid">
<nav class="toc" aria-label="Vprašanja"><h3>Vprašanja</h3><ol>${toc}</ol></nav>
<div class="cards">${cards}</div>
</div>
</section>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="sl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AKMM – Odgovori na vprašanja</title>
<meta name="description" content="Odgovori na vprašanja s predmeta Analiza konstrukcij s končnimi elementi (Fakulteta za strojništvo, UL).">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%277%27 fill=%27%231f5fbf%27/%3E%3Ctext x=%2716%27 y=%2722%27 font-size=%2716%27 font-family=%27sans-serif%27 font-weight=%27700%27 text-anchor=%27middle%27 fill=%27white%27%3EFE%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="vendor/katex.min.css">
<link rel="stylesheet" href="style.css">
<script>try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
</head>
<body>
<header class="top">
  <div class="top-in">
    <div class="brand"><h1>AKMM</h1><p>${escapeHtml(intro.replace(/^Zbirka odgovorov na vprašanja pri predmetu /i, "").replace(/\.$/, "").replace(/^./, (c) => c.toUpperCase()))}</p></div>
    <div class="tools">
      <input id="search" type="search" placeholder="Išči po ${nQuestions} vprašanjih …" aria-label="Iskanje">
      <button id="fold" type="button" title="Skrij vse odgovore za samopreverjanje">Skrij odgovore</button>
      <button id="theme" type="button" aria-label="Preklopi temo">◐</button>
    </div>
  </div>
</header>
<div class="tabbar"><div class="tabs" role="tablist" aria-label="Predavanja">${tabs}</div></div>
<main id="main">
${sections}
<p id="empty" hidden>Ni zadetkov.</p>
</main>
<footer><p>Odgovori študentov za študente – ni uradno gradivo predmeta. Napake sprejmite z zdravo mero previdnosti in preverite pri predavanjih.</p></footer>
<script src="app.js"></script>
</body>
</html>
`;

// ---- write ------------------------------------------------------------------
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "vendor/fonts"), { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), html);
for (const f of ["style.css", "app.js"])
  fs.copyFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "assets", f), path.join(out, f));

// KaTeX: ship only woff2 fonts (all current browsers) to keep the site small
const kdist = path.join(root, "tools/node_modules/katex/dist");
let css = fs.readFileSync(path.join(kdist, "katex.min.css"), "utf8");
css = css.replace(/,url\(fonts\/[^)]+\.woff\) format\("woff"\)/g, "").replace(/,url\(fonts\/[^)]+\.ttf\) format\("truetype"\)/g, "");
fs.writeFileSync(path.join(out, "vendor/katex.min.css"), css);
for (const f of fs.readdirSync(path.join(kdist, "fonts")).filter((f) => f.endsWith(".woff2")))
  fs.copyFileSync(path.join(kdist, "fonts", f), path.join(out, "vendor/fonts", f));

// images referenced by the notes
const imgDir = path.join(root, "images");
if (fs.existsSync(imgDir)) {
  fs.mkdirSync(path.join(out, "images"), { recursive: true });
  for (const f of fs.readdirSync(imgDir)) fs.copyFileSync(path.join(imgDir, f), path.join(out, "images", f));
}

console.log(`Built ${lectures.length} lectures, ${nQuestions} questions, ${math.length} formulas → site/` + (mathErrors ? ` (${mathErrors} math errors)` : ""));
if (mathErrors) process.exitCode = 1;
