# Odgovori na izpitna vprašanja – AKMM in MNM

Študentski odgovori na izpitna vprašanja dveh predmetov na Fakulteti za strojništvo UL. Zapiski so v Markdownu (z Obsidianovimi `![[slika]]` vdelavami), iz njih se zgradita dve statični strani.

| Predmet | Zapiski | Stran |
| --- | --- | --- |
| Analiza konstrukcij z MKE (AKMM) | `akmm/notes.md` | <https://akmm.podlen-project.com> |
| Numerične metode modeliranja (MNM) | `mnm/notes.md` | <https://mnm.podlen-project.com> |

Na strani so stranski meni po predavanjih, iskanje (bližnjica `/`), gumb **Skrij odgovore** za samopreverjanje, svetla/temna tema in tisk. Enačbe so izrisane vnaprej s KaTeX, zato stran ne nalaga ničesar s tujih strežnikov.

## Struktura

| Pot | Vsebina |
| --- | --- |
| `akmm/`, `mnm/` | `notes.md` (vir), `images/` (slike iz zapiskov), `slides/` (prosojnice, samo lokalno) |
| `tools/build.mjs` | skripta za gradnjo; nastavitve predmetov so v seznamu `subjects` |
| `tools/assets/` | `app.js`, `theme.js`, `style.css` |
| `site/akmm/`, `site/mnm/` | zgrajeni strani (ne urejaj ročno; sta v gitu, ker Pages ne gradi) |

Oblika zapiskov:

- AKMM: predavanja `# Predavanje N - datum`, vprašanja `## N. Naslov` (številčenje skozi vsa predavanja). Teme predavanj so v `topics` v `build.mjs`.
- MNM: predavanja `## ***PREDAVANJE N : Tema***`, vprašanja `### N. Naslov` (številčenje po predavanjih). Tema 1. predavanja je določena v `topics`.

Povezave: AKMM `#p5` (predavanje), `#q40` (vprašanje); MNM `#p5`, `#p5-q3`.

## Gradnja

Potrebuješ Node.js (≥ 18).

```bash
cd tools
npm install        # samo prvič
npm run build      # oba predmeta
npm run build mnm  # samo en predmet
```

Skripta izpiše število vprašanj in vse neveljavne enačbe ali manjkajoče slike (s številko vrstice). Na strani se objavijo samo slike, ki jih zapiski uporabljajo.

## Lokalni ogled

```bash
python3 -m http.server -d site/mnm 8091   # http://localhost:8091
python3 -m http.server -d site/akmm 8092  # http://localhost:8092
```

## Objava (Cloudflare Pages)

Dva projekta na Cloudflare Pages, povezana s tem repozitorijem:

| Projekt | Izhodna mapa | Domena |
| --- | --- | --- |
| `akmm` | `site/akmm` | akmm.podlen-project.com |
| `mnm` | `site/mnm` | mnm.podlen-project.com |

Ukaz za gradnjo ostane prazen (stran je že zgrajena v `site/`). Vsak push na `main` samodejno objavi obe strani. Varnostne glave (CSP ipd.) in predpomnjenje so v `site/<id>/_headers`, ki ga ustvari `build.mjs`.

Postopek po spremembi zapiskov: `npm run build`, preveri, commit, push.

## Gradivo predavanj se ne objavlja

Prosojnice in drugo gradivo predavanj se **nikoli ne objavijo**. Mapi `akmm/slides/` in `mnm/slides/` ter vse datoteke `*.pdf` in `*.pptx` so v `.gitignore`, `build.mjs` pa v `site/` kopira samo slike iz zapiskov.

## Prispevaj

Našel si napako ali imaš boljši odgovor? Odpri [issue](https://github.com/podlen/mnm_akmm_vprasanja/issues) ali pull request s popravkom v `akmm/notes.md` oz. `mnm/notes.md` (strani `site/` ni treba graditi – to naredim ob združitvi). Odgovori naj bodo popolni, a čim krajši in preprosti.

Odgovori niso uradno gradivo predmeta. Napake so možne, zato jih preveri pri predavanjih.
