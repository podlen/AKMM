# AKMM – Odgovori na vprašanja

Odgovori na vprašanja s predmeta **Analiza konstrukcij s končnimi elementi (AKMM)** na Fakulteti za strojništvo, Univerze v Ljubljani.

Zapiski so napisani v Obsidianu (`Analiza Konstrukcij z MKE - Odgovori na vprašanja.md`), iz njih pa se zgradi statična spletna stran s stranskim menijem po predavanjih in izrisanimi enačbami.

## Spletna stran

Zgrajena stran je v mapi [`site/`](site/) – odpri `site/index.html` prek kateregakoli spletnega strežnika (vse je statično, KaTeX je priložen, zato internet ni potreben).

Funkcije:

- stranski meni s predavanji (tema, datum, število vprašanj); aktivno predavanje pokaže seznam svojih vprašanj, na telefonu se meni odpre z gumbom ☰,
- enačbe izrisane s KaTeX,
- iskanje po vseh vprašanjih (bližnjica `/`),
- gumb **Skrij odgovore** za samopreverjanje (vprašanja ostanejo, odgovore odpreš s klikom),
- svetla/temna tema in tisk (vsa predavanja skupaj).

### Lokalni ogled

```bash
python3 -m http.server -d site 8080
# nato odpri http://localhost:8080
```

Za domači strežnik (nginx, Caddy, Apache …) je dovolj, da kaže na mapo `site/`.

### Ponovna gradnja po spremembi zapiskov

Potrebuješ Node.js (≥ 18).

```bash
cd tools
npm install   # samo prvič
npm run build # prepiše mapo site/
```

Skripta [`tools/build.mjs`](tools/build.mjs) razdeli zapiske po naslovih `# Predavanje N - datum` (predavanja v stranskem meniju) in `## N. Vprašanje` (kartice), izriše enačbe in pretvori Obsidianove slike `![[slika.png]]` (mapa `images/`). Če katera enačba ni veljavna, jo izpiše v konzoli. Teme predavanj v stranskem meniju so v seznamu `topics` na vrhu razdelka HTML v `build.mjs`; ob novem predavanju dodaj vrstico tja.

## Struktura

| Pot | Vsebina |
| --- | --- |
| `Analiza Konstrukcij z MKE - Odgovori na vprašanja.md` | zapiski (vir) |
| `images/` | slike iz zapiskov |
| `tools/` | skripta za gradnjo strani (`build.mjs`) in njena sredstva (`assets/`) |
| `site/` | zgrajena stran (ustvari se samodejno, ne urejaj ročno) |

## Opomba glede gradiva

Objavljeni so samo odgovori. **Gradiva predavanj (prosojnice, PDF-ji …) se ne objavljajo** – mapa `lectures/` in datoteke `*.pdf` / `*.pptx` so v `.gitignore`, zato jih lahko hraniš lokalno, ne da bi jih po nesreči objavil.

Odgovori so študentski zapiski in niso uradno gradivo predmeta – napake so možne, zato jih preveri pri predavanjih.
