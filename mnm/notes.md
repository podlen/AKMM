---
tags:
  - Learning
  - MNM
  - NMMR
  - diplomski
  - fakulteta
---


# ***ODGOVORI NA VPRAŠANJA***
## ***Predavanje 1***

### 1. Neposredni učinek, posredni učinek, odziv.

Učinek = vzrok, je neodvisna veličina. Odziv = posledica, je od učinka odvisna veličina. Primer: na vzmet obesimo maso $m$ (učinek), raztezek $x = c_1 m$ je odziv. Vlogi se lahko tudi zamenjata.

- **Neposredni učinek** je učinek, brez katerega ni odziva (npr. sila na vzmet).
- **Posredni učinek** so ostali parametri sistema, ki tudi vplivajo na odziv (npr. vzmetna togost $k$).

$$\text{odziv} = f(\text{učinek},\ \text{konstitutivni parametri})$$

### 2. Predpogoj za uspešno modeliranje.

Predpogoj za uspešno modeliranje je fizikalno razumevanje problema. Odgovoriti moramo na vprašanja:
- Zakaj? npr. Zakaj pridržujemo pločevino pri globokem vleku?
- Kako? npr. Kako določimo vrstni red izrezov lamel v šestrednem orodju?
- Kdaj? npr. Kdaj pride do pretrga pločevine pri rezanju?
- Kje? npr. Kje se ulitek počasneje ohlaja?
### 3. Kako pridemo do fizikalnega modela.

Do modela pridemo z opazovanjem pojavov in z ugotavljanjem soodvisnosti med veličinami, ki pojav opredeljujejo (učinek – odziv).

Pojav opazujemo in analiziramo na primerih, ki so za opazovani pojav dovolj signifikantni. Tak primer opredeljuje **fizikalni (eksperimentalni) model**. Fizikalni model definira območje in čas opazovanja ter objekte, pomembne za objektivno identifikacijo opazovanega pojava.
### 4. Značilnosti matematičnega modela.

Razvoj veličin v fizikalnem modelu opredeljujejo naravne zakonitosti: splošni aksiomi (akcija = reakcija), fizikalni zakoni (Newtonovi zakoni) in konstitutivni zakoni (trdnina, kapljevina).

Vzpostavitev odnosov, ki obvladujejo opazovani pojav, opredeljuje **matematični model**. Sestavljajo ga algebrajske, diferencialne ali integralske enačbe. Vsak matematični model je postavljen v okvir prostora in časa.
### 5. Značilnosti numeričnega modela.

**Numerični model** je računsko obvladovanje matematičnega modela. Enačbe lahko rešujemo na 2 načina:
1. **Eksaktno analitično reševanje** s funkcijskimi rešitvami v zaključeni obliki. Napake izhajajo iz nenatančnih vhodnih podatkov in iz zapisa realnih števil v računalniški spomin.
2. **Aproksimativno numerično reševanje** z rešitvami v diskretni obliki (v posameznih točkah območja). Napake izhajajo iz nenatančnih vhodnih podatkov, zapisa realnih števil v računalniški spomin in iz izbrane numerične metode. Med diskretnimi točkami rešitev ekstrapoliramo (linearno, kvadratično).
### 6. Razlika med eksaktnim in aproksimativnim reševanjem.

Eksaktno reševanje da funkcijsko rešitev v zaključeni obliki. Ta zadošča vsem točkam območja in robnim pogojem.

Aproksimativno reševanje da rešitev v diskretnih točkah, med katerimi rešitev ekstrapoliramo. Dodatna napaka izhaja iz izbrane numerične metode.
### 7. Katere napake nastanejo pri aproksimativnem numeričnem računanju?

Napake izhajajo iz:
- nenatančnih vhodnih podatkov,
- zapisa realnih števil v računalniški spomin,
- izbrane numerične metode reševanja.
### 8. Značilnosti računalniške simulacije.

Z osvojenim numeričnim modelom je omogočeno računalniško simuliranje. Na simulaciji sta zasnovana načrtovanje in odločanje (o procesu, produktu ...).

Simuliranje je iskanje odziva pri enem ali več naborih spreminjajočih se vhodnih podatkov. Iz odzivov za različne učinke s sintezo pridemo do odločitve. Numerični model omogoča tudi avtomatsko krmiljenje tehnoloških procesov.
### 9. Razlika med geometrijskim in materialnim prostorom.

Glede na gibalno stanje materialnih delcev lahko dogodke obravnavamo v geometrijskem ali materialnem prostoru.

- **Geometrijski prostor**: opazovanje je vezano na časovno fiksno območje geometrijskih točk v prostoru. Ni pomembno, ali so te točke v različnih trenutkih zasedene z različnimi materialnimi delci (npr. vlečenje žice).
- **Materialni prostor**: opazovanje je vezano na fiksno območje snovnih točk, ne glede na njihovo gibalno stanje (npr. preoblikovanje v testastem stanju).

Če snovne točke s časom ne spreminjajo položaja, sta geometrijski in materialni prostor identična.
### 10. Značilnosti časovne obravnave problema.

Čas je fizikalna danost:
- čas ima razsežnost (je enorazsežen),
- čas je progresivna spremenljivka, njegova vrednost lahko le narašča.

Trorazsežni materialni prostor in čas tvorita štirirazsežni hiperprostor.
### 11. Vpliv izbire koordinatnega sistema.

Koordinatni sistem omogoča matematični popis materialnega prostora in dogodkov v njem. Izbira K.S. ne vpliva na fizikalno vsebino problema. Ima pa lahko ključen vpliv na matematično formulacijo in numerično reševanje problema.

## ***PREDAVANJE 2 : Elementi modelirnega območja***

### 1. Območje zajeto v matematičnem modelu.

![[set.png]]

Modelirano območje $\Omega^{M}$ je območje našega zanimanja v materialnem prostoru $\Omega^{\infty}$. Običajno je omejeno: $$\Omega^{M} \subset \Omega^{\infty}$$
Ostalo območje je okolica modeliranega območja: $$\Omega^{\infty - M} = \Omega^{\infty} - \Omega^{M}$$
Zaprto podobmočje $\Omega^{M}$ in odprto podobmočje $\Omega^{\infty - M}$ izkazujeta lastnosti: $$\Omega^{M} \cup \Omega^{\infty - M} = \Omega^{\infty} \quad in \quad \Omega^{M} \cap \Omega^{\infty - M} = \emptyset$$
Mejo med njima tvori ograja $\Gamma^{M}$ (robne točke $\Omega^{M}$). Določa jo Dedekindov presek odprtih podobmočij: $$(\Omega^{M} - \Gamma^{M})/\Omega^{\infty - M} = \Gamma^{M}$$
Modelirano območje je lahko sestavljeno iz več zaprtih podobmočij $\Omega^{M} = \bigcup_{k=1}^{N} \Omega_k$. Mejo med sosednjima podobmočjema določa presek $\Omega_i \cap \Omega_j = \Gamma_{ij}$.
### 2. Redukcija prostorske razsežnosti v matematičnem modelu.

Glede na fizikalne in geometrijske posebnosti problema je matematični model velikokrat mogoče zasnovati v geometrijskem prostoru, katerega razsežnost je manjša od razsežnosti materialnega prostora: $$\Re^3 \rightarrow \Re^p \ ; \quad p \in \{1, 2\}$$
Tako dobimo 3D, 2D ali 1D model. Sama geometrija za redukcijo ni dovolj. Redukcijo morajo dopuščati tudi obremenitve in robni pogoji. Redukcija bistveno skrajša čas računanja.
### 3. Značilnosti diskretnih sistemov.

Diskretni sistemi so sistemi s **končnim** številom prostostnih stopenj.

V modeliranem območju so podobmočja:
- ki ne mejijo druga z drugo,
- katerih medsebojna razdalja je praviloma veliko večja od najdaljše dolžine kateregakoli izmed teh podobmočij,
- katerih porazdelitev snovi nima odločujočega vpliva na odziv preostalih podobmočij; vpliv je odvisen le od količine snovi v podobmočju,
- katerih lastnosti snovi se bistveno razlikujejo od snovi v sosednjih podobmočjih.

Primeri: sistem masnih točk, polja točkovno porazdeljenih električnih nabojev, kristalne kali v talini.
### 4. Značilnosti kontinualnih sistemov.

Kontinualni sistemi so sistemi z **neskončnim** številom prostostnih stopenj.

V modeliranem območju je:
- snov porazdeljena zvezno po posameznih podobmočjih, z morebitno nezveznostjo le na prehodu med sosednjimi podobmočji,
- porazdelitev snovi po podobmočju odločilna za odziv v preostalih podobmočjih.

Kontinualni sistem je limita večprostostnega diskretnega sistema, katerega število prostosti preseže vse meje, razdalje med delci pa so infinitezimalne. Spremenljivke so zvezne funkcije prostorskih koordinat in časa. Reševanje se prevede na reševanje ene ali več diferencialnih enačb.

Primeri:
- plastovite kompozitne plošče
- območje zrak-morje-kopno
- dvofazno območje led-voda (taljenje, strjevanje)
- dvofazno območje trdnina-kapljevina (vodne turbine)
- tehnološko postrojenje za litje
### 5. Razlika med diskretnimi – kontinualnimi sistemi.

| | Diskretni sistemi | Kontinualni sistemi |
|---|---|---|
| Število prostostnih stopenj | končno | neskončno |
| Porazdelitev snovi | ločena podobmočja; na ostale vpliva le količina snovi | zvezna; porazdelitev je odločilna za odziv ostalih podobmočij |
| Reševanje | algebrajske enačbe ali NDE po času | diferencialne enačbe po prostoru (in času) |
### 6. Časovna odvisnost problemov.

Čas je v absolutnem pogledu progresivna spremenljivka, $dt > 0$. Kljub temu lahko nekatere probleme obravnavamo kot časovno nespremenljive.

- **Stacionarni modeli** (časovno neodvisni): $\frac{d}{dt}(\text{učinek},\ \text{konstitutivni parametri},\ \text{odziv}) = 0$
- **Nestacionarni modeli** (časovno odvisni): $\frac{d}{dt}(\text{učinek},\ \text{konstitutivni parametri},\ \text{odziv}) \neq 0$

Časovna odvisnost je relativna. Transportni problemi, ki so v krajevnem smislu stacionarni (vlečenje žice, kontinuirno litje), so v materialnem prostoru nestacionarni. **Obravnava v geometrijskem prostoru omogoča izločitev časovne dimenzije.**
### 7. Kakšen naj bo matematični model?

Matematični model naj bo kolikor je mogoče enostaven. Njegova zahtevnost naj bo ravno tolikšna, da zaobjame vse ključne dejavnike za verodostojnost sistemskega odziva.

Odvečna zahtevnost ne da nujno bistveno boljše predstave o sistemu ali bistveno natančnejšega odziva. Poveča pa zahtevnost računskih postopkov in čas reševanja.

### 8. Kaj določa število prostostnih stopenj problema?

Prostostne stopnje so med seboj linearno neodvisni **nekonstitutivni** parametri sistema, s katerimi je obnašanje sistema enolično določeno. Imenujemo jih tudi osnovne spremenljivke.

Število prostostnih stopenj je odvisno od:
- vrste **osnovne fizikalne spremenljivke** (skalar, vektor, tenzor),
- **konstitucijskih lastnosti** (sistem masnih točk, togo telo, deformabilno telo),
- **prostorske razsežnosti** (1D, 2D, 3D).

Število prostostnih stopenj materialne točke:

| Spremenljivka | 3D | 2D | 1D |
|---|---|---|---|
| skalar | 1 | 1 | 1 |
| vektor | 3 | 2 | 1 |
| tenzor 2. reda | 9 | 4 | 1 |

Število prostostnih stopenj opredeljuje naravo sistema: diskretni sistemi imajo končno, kontinualni pa neskončno število prostostnih stopenj.
### 9. Pristop k reševanju enoprostostnih diskretnih sistemov.

Za enoprostostni diskretni sistem je značilno:
- vselej ga je mogoče obravnavati v 1D prostoru,
- ne glede na značaj osnovne fizikalne spremenljivke ga je mogoče obravnavati skalarno z eno prostostno stopnjo,
- reševanje se prevede na reševanje **ene same enačbe**.

Za sistem zapišemo eno ravnotežno (gibalno) enačbo z eno neznanko, npr. $F = ku$ ali $m\frac{d^2x}{dt^2} = \sum_i F_i(x)$. Stacionarni problem da algebrajsko enačbo (AE), nestacionarni pa navadno diferencialno enačbo (NDE). Enačbo rešimo analitično ali numerično.
### 10. Pristop k reševanju večprostostnih diskretnih sistemov.

Za večprostostni diskretni sistem je značilno:
- spremenljivke, ki določajo prostost sistema, so med seboj linearno neodvisne,
- reševanje se prevede na reševanje **sistema enačb**: sistema algebrajskih enačb (SAE) pri stacionarnih in sistema NDE (SNDE) pri nestacionarnih problemih.

Ko število prostostnih stopenj preseže vse meje, preide diskretni sistem pri posebnih pogojih v kontinualni sistem.
### 11. Funkcijska oblika matematičnih modelov.

Odvisna je od **vrste osnovne fizikalne spremenljivke** (skalar, vektor, tenzor), **prostorske razsežnosti** in **časovne odvisnosti** obravnavanega fizikalnega sistema.

| Sistem | $\frac{d}{dt}() = 0$ | $\frac{d}{dt}() \neq 0$ |
|---|---|---|
| diskretni, enoprostostni | AE | NDE |
| diskretni, večprostostni | SAE | SNDE |
| kontinualni (skalar), 1D | NDE | PDE |
| kontinualni (skalar), 2D, 3D | PDE | PDE |
| kontinualni (vektor, tenzor) | SPDE | SPDE |

AE – algebrajska enačba, NDE – navadna diferencialna enačba, PDE – parcialna diferencialna enačba, S – sistem.


## ***PREDAVANJE 3 : Kontinualni sistemi*** 

### 1. Kaj mora biti izpolnjeno, da lahko konstrukcijski element obravnavamo v enodimenzionalnem prostoru kot statični mehanski problem?

Problem mora biti časovno neodvisen. Element mora biti raven, iz linearno elastičnega gradiva in obremenjen le s točkovno ali zvezno porazdeljeno **osno** obtežbo ter s temperaturno spremembo, ki je konstantna po prerezu.

*Razmislek:* Pri prečni obremenitvi napetost po prerezu ni več konstantna, zato problem ni več osni.
### 2. Kaj je zajeto v vodilni enačbi, ki omogoča reševanje mehansko statično obremenjenega konstrukcijskega elementa v enodimenzionalnem prostoru?

V vodilni enačbi je zajeto:
- **statično ravnotežje** vseh obremenitev na diferencialnem elementu ![[!staticno_ravnotezje.png]] Iz tega sledi $\frac{dN}{dx} = -n(x)$.
- **deformacijska konsistentnost**: deformacija je konsistentna s pomikom, $\frac{du}{dx} = \varepsilon_{xx}$, kjer je $\varepsilon_{xx} = \varepsilon_{xx}^{\sigma} + \varepsilon_{xx}^{T}$ (prispevek napetosti in temperature). ![[deformacije.png]]
- **konstitucijsko obnašanje**: Hookov zakon, $\varepsilon_{xx}^{\sigma} = \frac{\sigma_{xx}}{E}$ in $\varepsilon_{xx}^{T} = \alpha \Delta T$. ![[hookov_zakon.png]]
### 3. Katere so fizikalne spremenljivke osno mehansko obremenjenega konstrukcijskega elementa?

Fizikalni spremenljivki sta:
- vzdolžni pomik $u(x)$ – **primarna** spremenljivka,
- notranja osna sila $N(x)$ – **sekundarna** spremenljivka, izražena s primarno: $N(x) = E A \left(\frac{du}{dx} - \alpha \Delta T\right)$.

Glede na robne pogoje sta konjugirani veličini.
### 4. Izpeljava vodilne enačbe za osno mehansko obremenjen konstrukcijski element.

Statično ravnotežje diferencialnega elementa $dx$: $$dN = -n\,dx \quad \Rightarrow \quad \frac{dN}{dx} = -n(x)$$
Deformacijska konsistentnost: $$\frac{du}{dx} = \varepsilon_{xx}, \quad \varepsilon_{xx} = \varepsilon_{xx}^{\sigma} + \varepsilon_{xx}^{T} \quad \Rightarrow \quad \varepsilon_{xx}^{\sigma} = \frac{du}{dx} - \varepsilon_{xx}^{T}$$
Konstitucijsko obnašanje (Hookov zakon): $$\varepsilon_{xx}^{\sigma} = \frac{\sigma_{xx}}{E}, \quad \varepsilon_{xx}^{T} = \alpha\Delta T, \quad \sigma_{xx} = \frac{N}{A} \quad \Rightarrow \quad N = E A \varepsilon_{xx}^{\sigma}$$
Iz tega sledi notranja osna sila: $$N = EA\left(\frac{du}{dx} - \alpha\Delta T\right)$$
*Note:* $E$, $A$, $\alpha$ in $\Delta T$ so lahko odvisni od $x$.

Ko to vstavimo v $\frac{dN}{dx} = -n(x)$, dobimo vodilno enačbo problema: $$\frac{d}{dx}\left[EA\left(\frac{du}{dx} - \alpha\Delta T\right)\right] = -n(x) \ ; \quad x \in [0, L]$$
To je navadna diferencialna enačba 2. reda z vzdolžnim pomikom $u(x)$ kot osnovno spremenljivko. V celoti opredeljuje spreminjanje $u(x)$ in $N(x)$ na 1D elementu.
### 5. Izpolnjevanje robnih pogojev v primeru osno mehansko obremenjenega konstrukcijskega elementa.

Vodilna enačba upošteva le zvezno porazdeljeno obremenitev v polju elementa in temperaturno spremembo vzdolž elementa. Da je rešitev konsistentna tudi s pomiki in obremenitvami v krajiščih, mora zadostiti robnim pogojem na obeh krajiščih.

Robni pogoji so podani z znano vrednostjo **primarne** ali **sekundarne** spremenljivke v vsakem krajišču:
$$x = 0: \quad u(0) = u_J \quad ali \quad N(0) = \left[EA\left(\frac{du}{dx} - \alpha\Delta T\right)\right]_{x=0} = -F_x^J$$
$$x = L: \quad u(L) = u_K \quad ali \quad N(L) = \left[EA\left(\frac{du}{dx} - \alpha\Delta T\right)\right]_{x=L} = +F_x^K$$
$u(x)$ in $N(x)$ sta konjugirani veličini. Na istem robu je ena izmed njiju znana, druga pa neznana.
### 6. Izpolnjevanje pogojev konsistentnega prehoda na meji med podobmočji v primeru osno mehansko obremenjenega konstrukcijskega elementa.

Če so vsi parametri vodilne enačbe ($n(x)$, $\Delta T(x)$, $A(x)$, $E(x)$, $\alpha(x)$) na celotnem intervalu $x \in [0, L]$ vsak podani z **enim** funkcijskim predpisom, je tudi rešitev $u(x)$ podana z enim funkcijskim predpisom. Takrat so $u(x)$, $\frac{du}{dx}$ in $N(x)$ zvezne in zvezno odvedljive funkcije (1 polje).

Če ima vsaj en parameter na intervalu vsaj dva funkcijska predpisa, interval razdelimo na podintervale $[a_k, b_k]$ (več polj). Na meji med podintervaloma morajo biti izpolnjeni **pogoji konsistentnosti prehoda**. Ti so vedno fizikalno pogojeni, zato njihovo nespoštovanje vedno vodi do napačne rešitve.

Pogoja konsistentnosti prehoda sta:
- zveznost primarne spremenljivke (nerazdružljivost snovnih točk): $u_{k}(b_{k}) = u_{k+1}(a_{k+1})$
- statično ravnotežje notranjih sil in zunanje obremenitve na meji: $N_{k}(b_{k}) = N_{k+1}(a_{k+1}) + F_{k,k+1}$

$N(x)$ je na meji nezvezna le, če na meji deluje koncentrirana sila $F_{k,k+1}$. Drugi pogoj zapišemo s primarno spremenljivko: ![[pogojiprehoda.png]]
$$\left(EA\frac{du}{dx}\right)_k\bigg|_{x=b_k} - \left(EA\frac{du}{dx}\right)_{k+1}\bigg|_{x=a_{k+1}} = F_{k,k+1} + (EA\alpha\Delta T)_k\big|_{x=b_k} - (EA\alpha\Delta T)_{k+1}\big|_{x=a_{k+1}}$$
### 7. Kdaj je rešitev problema eksaktna?

Eksaktni funkcijski predpis $u(x)$ dobimo analitično z dvojnim nedoločenim integriranjem vodilne enačbe. Ker je enačba NDE 2. reda, dobimo 2 integracijski konstanti, ki ju določimo iz robnih pogojev.

Pri več podintervalih dobimo 2 konstanti na podinterval. Določimo jih iz robnih pogojev in pogojev konsistentnosti prehoda.

Rešitev je eksaktna, ko zadošča vodilni enačbi v vsaki točki območja $x \in [0, L]$ ter robnim pogojem (in pogojem konsistentnosti prehoda).

## ***PREDAVANJE 4 : Aproksimativno reševanje***

### 1. Kdaj je rešitev aproksimativna?

Rešitev je aproksimativna, ko zadošča robnim pogojem in pogojem konsistentnosti prehoda, vodilni diferencialni enačbi pa ne v vsaki točki območja $x \in [0, L]$, temveč le v izbranih točkah oz. podobmočjih.

Aproksimativna rešitev je zasnovana na končni množici parametrov $c_i$: $$u_N(x) = f(x, c_i \ ; \ i = 0, 1, \dots, N), \qquad \lim_{N \to \infty} u_N(x) = u(x)$$
### 2. Funkcijski pristop pri aproksimacijskem reševanju.

Pri funkcijskem pristopu je aproksimativna rešitev zasnovana na končni množici $\{ \Psi_{i} (x) \}$ izbranih aproksimacijskih funkcij iste družine. Funkcije $\Psi_i(x)$ so zvezne in zvezno odvedljive.

Aproksimativna rešitev $u_{N}(x)$ je: $$u_{N}(x) = \sum_{i = 0}^{N}c_{i} \Psi_{i} (x)\ ;\ x\in [0, L]$$
V funkcijskem smislu jo opredeljuje izbira funkcij $\Psi_i(x)$, po vrednosti pa koeficienti $c_i$. Neznane koeficiente $c_i$ določimo v postopku reševanja.
### 3. Kako izbrati aproksimacijske funkcije?

Vsako zvezno in poljubnokrat odvedljivo funkcijo lahko razvijemo v Taylorjevo (potenčno) vrsto okoli $x_0$. Zato je smiselna izbira potenc: $$\Psi_i(x) = (x - x_0)^i \ ; \quad i = 0, 1, 2, \dots, N$$
Da nabor $\Psi_{i}(x)$ omogoča popis eksaktne rešitve $u(x)$, mora biti **kompleten**. Vsebovati mora po vrsti vse potence od najnižje ($i = 0$) do najvišje ($i = N$). Izpustitev ene izmed nižjih potenc ni popravljiva.
### 4. Kako določimo koeficiente, s katerimi so aproksimacijske funkcije pomnožene?

$u_N(x)$ ima $N+1$ neznanih koeficientov $c_i$, zato potrebujemo sistem $N+1$ linearno neodvisnih enačb. Da je aproksimativna rešitev fizikalno konsistentna in verodostojna, mora zadostiti **ključnim enačbam** problema:
- enačbam robnih pogojev,
- enačbam pogojev konsistentnosti prehoda,
- in v čim večji meri **vodilni diferencialni enačbi**. Iz nje dobimo manjkajoče enačbe, ko jo zapišemo v izbranih točkah.

Pri več podintervalih $u_N^{(k)}(x)$ iščemo za vsak podinterval posebej. Takrat potrebujemo $\sum_{k=1}^{n}(N_k + 1)$ enačb.
### 5. Interpolacijski pristop pri aproksimativnem reševanju.

Pri **interpolacijskem pristopu** je aproksimativna rešitev zasnovana na končni množici $\{ c_i\}$ diskretnih parametrov. Ti aproksimirajo vrednosti primarne spremenljivke v izbranih točkah območja: $c_i \equiv u_i \approx u(x_i)$.

Aproksimativno rešitev zapišemo kot: $$u_N(x) = \Psi_{int}(x \times \{c_i\ ;\ i = 0,1,\dots,N\})\ ;\ x\in[0,L] $$
V funkcijskem smislu je opredeljena šele z izbiro interpolacijske funkcije $\Psi_{int}$. Ta ekstrapolira diskretne vrednosti $u_i$ na celotno območje $[0, L]$. Pri istem naboru $\{u_i\}$ dobimo z različnimi interpolacijskimi funkcijami različne aproksimacije.

Najprej moramo torej določiti neznane vrednosti $u_i$ v točkah $x_i$. Za $N+1$ neznank potrebujemo sistem $N+1$ linearno neodvisnih enačb. Da je rešitev fizikalno smiselna, sistem tvorimo po vrsti iz **robnih pogojev, pogojev konsistentnega prehoda in vodilne DE**.
### 6. Kako transformiramo diferencialni operator v diferenčnega?

Aproksimacijo gradimo na diskretnih vrednostih $u_i$. Fizikalna konsistenca pa je pogojena z diferencialnimi zvezami (vodilna enačba, $N(x)$), ki zahtevajo funkcijsko obravnavo. Zato diferencialne zveze pretvorimo v diferenčne.

Če je $u(x)$ v okolici $x_0$ zvezna in zvezno odvedljiva, jo razvijemo v Taylorjevo vrsto: $$u(x_0 + h) = u(x_0) + \frac{h^1}{1!}\frac{d^1u}{dx^1}(x_0) + \frac{h^2}{2!}\frac{d^2u}{dx^2}(x_0) + \frac{h^3}{3!}\frac{d^3u}{dx^3}(x_0) + \ ...$$ Tako izrazimo vrednost v sosednjih točkah $x_0 + h^+$ in $x_0 - h^-$: ![[h+h-.png]]

Vpeljemo oznake: $$u_0 = u(x_0) \ ;\ u^+ = u(x_0 + h^+)\ ;\ u^- = u(x_0 - h^-)$$
$$u^+ = u_0 + \frac{(h^+)^1}{1!}\frac{d^1u_0}{dx^1} + \frac{(h^+)^2}{2!}\frac{d^2u_0}{dx^2} + \frac{(h^+)^3}{3!}\frac{d^3u_0}{dx^3} + \ ...$$
$$u^- = u_0 - \frac{(h^-)^1}{1!}\frac{d^1u_0}{dx^1} + \frac{(h^-)^2}{2!}\frac{d^2u_0}{dx^2} - \frac{(h^-)^3}{3!}\frac{d^3u_0}{dx^3} + \ ...$$
Če velja $h^3 \ll h < 1$, zanemarimo člene s 3. in višjimi odvodi.

Z eliminacijo 2. odvoda dobimo prvi, z eliminacijo 1. odvoda pa drugi odvod: $$\frac{du_0}{dx} \approx \frac{1}{h^+ + h^-}\left[\frac{h^-}{h^+}(u^+ - u_0) - \frac{h^+}{h^-}(u^- - u_0)\right]$$
$$\frac{d^2u_0}{dx^2} \approx \frac{2}{h^+ + h^-}\left[\frac{1}{h^+}(u^+ - u_0) + \frac{1}{h^-}(u^- - u_0)\right]$$
Odvode tako nadomestimo z diferenčnimi operatorji: $\frac{d^r u_0}{dx^r} \approx D^r u_0$.
### 7. Izpeljava centralne diferenčne sheme za 1. odvod funkcije F(x).

Centralno shemo dobimo, ko sta točki enako oddaljeni: $h^- = h^+ = h$.

Za 1. odvod $u^+$ in $u^-$ odštejemo, da se eliminira 2. odvod: $$u^+ - u^- \approx \left(u_0 + h\frac{du_0}{dx} + \frac{h^2}{2}\frac{d^2u_0}{dx^2}\right) - \left(u_0 - h\frac{du_0}{dx} + \frac{h^2}{2}\frac{d^2u_0}{dx^2}\right) = 2h\frac{du_0}{dx}$$
Iz tega sledi: $$\frac{du_0}{dx} \approx \frac{u^+ - u^-}{2h} = D^1 u_0$$
### 8. Izpeljava centralne diferenčne sheme za 2. odvod funkcije F(x).

Za 2. odvod $u^+$ in $u^-$ seštejemo, da se eliminira 1. odvod: $$u^+ + u^- \approx \left(u_0 + h\frac{du_0}{dx} + \frac{h^2}{2}\frac{d^2u_0}{dx^2}\right) + \left(u_0 - h\frac{du_0}{dx} + \frac{h^2}{2}\frac{d^2u_0}{dx^2}\right) = 2u_0 + h^2\frac{d^2u_0}{dx^2}$$
Iz tega sledi: $$\frac{d^2u_0}{dx^2} \approx\frac{u^+ - 2u_0 + u^-}{h^2} = D^2 u_0$$
(*note:* $u^-$, $u_0$ in $u^+$ za $i$-to točko pišemo tudi kot $u_{i-1}$, $u_i$ in $u_{i+1}$.)
### 9. Opišite MKR.

Metoda končnih razlik (MKR) je aproksimativna metoda, ki temelji na interpolacijskem pristopu. **Sistem enačb** za neznane vrednosti $u_k$ temelji na pretvorbi diferencialnih operatorjev v diferenčne (centralne razlike $D^1$ in $D^2$).

Postopek:
1. Območje razdelimo na $N$ podintervalov s korakom $h$. Neznanke so vrednosti $u_k \approx u(x_k)$ v $N+1$ točkah.
2. Sistem linearno neodvisnih enačb tvorimo tako, da v čim večji meri izpolnimo:
	- robne pogoje,
	- pogoje konsistentnosti prehoda,
	- območno enačbo problema (vodilno DE v diferenčni obliki, npr. $EA\frac{u_{k+1} - 2u_k + u_{k-1}}{h^2} = -n_0$ v notranjih točkah).
3. Rešimo sistem. Iz $u_k$ izračunamo še $N_k$ z $D^1$.

Več točk (manjši $h$) načeloma da natančnejšo rešitev.


### 10. Kako lahko zadostimo robnim pogojem pri reševanju po MKR?

Točke vedno izberemo tudi na robu območja. Iz robnih pogojev tvorimo največ toliko enačb, kolikor je robnih pogojev.

- Robni pogoj s primarno spremenljivko zapišemo neposredno, npr. $u(0) = 0 \Rightarrow u_0 = 0$.
- Robni pogoj s sekundarno spremenljivko ($N$) vsebuje odvod, ki ga nadomestimo z $D^1$. Centralna razlika v robni točki potrebuje **dodatno točko izven območja**, npr. $D^1 u_4 = \frac{u_A - u_3}{2h}$.

Dodatna točka poveča število neznank za ena. Manjkajočo enačbo dobimo z zapisom vodilne DE tudi v robni točki ($D^2 u_4$). Vrednost v dodatni točki nima fizikalnega pomena.
### 11. Kako lahko zadostimo pogojem konsistentnega prehoda pri reševanju po MKR?

Prvi pogoj $u_1(L_1) = u_2(L_1)$ je samodejno izpolnjen, ker točko postavimo na mejo med podintervaloma. Tam je ena sama neznana diskretna vrednost.

Drugi pogoj $N_1(L_1) - N_2(L_1) = 0$ vsebuje odvoda: $$EA_1\left(\frac{du_1}{dx}\right)\bigg|_{x=L_1} - E A_2\left(\frac{du_2}{dx}\right)\bigg|_{x = L_1} = EA_1\alpha\Delta T - EA_2\alpha\Delta T$$
$D^1$ sme za vsak podinterval uporabiti le vrednosti iz tega podintervala. Zato za **vsak podinterval posebej dodamo dodatno točko** ($B$ za 1. in $C$ za 2. podinterval). V diskretni obliki je zapis: $$A_1\frac{u_B-u_2}{2h_1} - A_2\frac{u_4 - u_C}{2h_2}  = \alpha\Delta T(A_1 - A_2)$$ ![[2_obmocjiMKR.png]]
Za dodatni neznanki $u_B$ in $u_C$ zapišemo vodilno DE v mejni točki za vsak podinterval posebej.

(*note:* če je eksaktna rešitev polinom največ 2. stopnje, sta $D^1$ in $D^2$ eksaktna. Takrat je MKR rešitev v diskretnih točkah eksaktna.) ![[mkr_acc.png]]

## ***PREDAVANJE 5 : Integralska variacijska formulacija***

### 1. Izpeljava osnovne oblike integralske formulacije.

Reševanje vodilne diff. enačbe lahko prevedemo na reševanje ustrezne integralske enačbe. Izhodišče predstavlja že poznana vodilna enačba problema : $$\frac{d}{dx}[EA(\frac{du}{dx} - \alpha\Delta T)] = -n\space;\space x\in[0, L]$$
Simbolno lahko enačbo zapišemo kot $$D^2u(x) = f(x)$$
kjer je $$D^2 = \frac{d}{dx}[EA(\frac{d}{dx} - \alpha\Delta T)]\space\text{in}\space f(x) = -n(x)$$
Do integralske enačbe pridemo tako, da preoblikujemo vodilno DE v sledečo obliko: $$D^2u(x) - f(x) = 0$$
Enačbo pa nato pomnožimo s poljubno na območju $x\in[0, L]$ odvedljivo funkcijo $v(x)$ :$$[D^2u(x) - f(x)]\space v(x) = 0$$
Ker je po definiciji izraz v oklepaju v funkcijskem produktu na celotem območju, ki ga integriramo ($x\in[0,L]$) ničen, je tudi zapisani produkt, ne glede na to kakšna je funkcija $v(x)$, ničen. $$\int_{0}^{L}[D^2u(x) - f(x)]\space v(x)dx = 0$$
ker je vrednost znotraj integrala 0 je vrednost integrala tudi 0. Tako dobimo **osnovno obliko integralske formulacije**. 

Za osno obremenjeni konstrukcijski element lahko to integralsko enačbo zapišemo kot : $$\int_{0}^{L}\{\frac{d}{dx}[E A[\frac{du}{dx} - \alpha\Delta T)]\}v(x) dx + \int_{0}^{L}n(x)v(x)dx = 0$$
### 2. V čem je prednost integralske formulacije?

Prednost integralske formulacije je, da zajema **vse točke obravnavanega območja** (ne pomeni da je rešitev eksaktna!) Integralska fomulacija je osnova za:
- Metodo končnih razlik (osnovna oblika)
- Metodo končnih elementov (šibka oblika)
- Metodo robnih elementov (inverzna oblika)
### 3. Kako pridemo do manjkajočih enačb v primeru integralske formulacije?

Reševanje katerekoli oblike integralske enačbe zahteva **funkcijsko aproksimacijo** iskane osnovne primarne spremenljivke $u = u(x)$, saj v nasportnem primeru ni mogoče izvrednotiti danih integralov. Ker je $v(x)$ poljubna funkcija, ki je dovolj odvedljiva z izbiro le-te nimamo problema.

Rešitev problema iščemo v obliki aproksimacije $\hat{u} = \hat{u}(x)$ : $$\hat{u} = \hat{u}(x) = \sum_{k = 0}^N a_k \hat{\Psi}_k(x)$$
Aproksimacija je grajena na množici diskretnih vrednosti $\{a_k\}$ ter množici **funkcij** $\{\hat{\Psi}_k\}$ . Funkcije morajo izpolnjevati pogoj : $$\delta_{ik} = 
\begin{cases} 
1, & \text{za } x_k = x_i \\
0, & \text{za } x_k \neq x_i 
\end{cases}$$
Tukaj je $\delta_{ik}$ Kronecker-jev delta tenzor. Te funkcije imajo vrednost 1 v opazovani točki $x_i$ - v vseh **drugih opazovanih točkah** pa je vrednost te funkcije 0.

Kot primer bi za dve vozlišči oziroma točki $x_i$ aproksimacija izgledala tako : $$\hat{u}(x) = \sum_{k=0}^{N = 1}a_k\hat{\Psi}_k(x) = a_0\hat{\Psi}_0 + a_1\hat{\Psi}_1 = a_0(1-\frac{x}{L}) + a_1\frac{x}{L}$$
kjer je $L$ dolžina obravnavanega območja. Taki funkciji $\hat{\Psi}_0$ in $\hat{\Psi}_1$ uporabimo za MKE.
### 4. Izpeljava šibke oblike integralske formulacije.

Izpeljava se začne pri osnovni obliki integralske formulacije, ki smo jo že izpeljali : $$\int_0^L[D^2u(x) - f(x)]\space v(x)\space dx = 0$$
Enačbo lahko preuredimo v naslednjo obliko : $$\int_0^LD^2u(x)v(x)dx = \int_0^Lf(x)v(x)dx$$
Če privzamemo, da je $v(x)$ vsaj enkrat odvedljiva funkcija, lahko integral na levi strani enačbe enkrat integriramo z uporabo Per-Partes metode $\int_{x_1}^{x_2}u(x)dv = uv|_{x1}^{x_2} - \int_{x_1}^{x_2}v(x)du$ : $$\int_0^LD^2 u(x)v(x)dx = D^1u(x)v(x)\biggr{|}_0^L - \int_0^LD^1u(x)\frac{dv(x)}{dx}dx$$
Vidimo, da smo v novi integralski enačbi red diferencialnega opreatorja nad primarno spremenljivko $u(x)$  zmanjšali za 1 $D^2u(x) \rightarrow D^1u(x)$ .

Celotno enačbo lahko sedaj zapišemo kot : $$\int_0^LD^1u(x)\frac{dv(x)}{dx}dx = D^1u(x)v(x)\biggr{|}_0^L - \int_0^Lf(x)v(x)dx$$
Tak zapis integralske enačbe imenujemo **ŠIBKA OBLIKA INTEGRALSKE FORMULACIJE**.

Za enoosno obremenjeni konstrukcijski element je diff. operator $D^1$ enak : $$D^1 = E(x)A(x)(\frac{d}{dx} - \alpha(x)\Delta T(x))$$
To lahko vstavimo v zgornjo enačbo in zapišemo : $$\int_0^L E A\frac{du}{dx}\frac{dv}{dx}dx = [E A(\frac{du}{dx} - \alpha\Delta T)]v(x)\biggr{|}_0^L - \int_0^Lf(x)v(x)dx + \int_0^LE A \alpha\Delta T \frac{dv}{dx}dx$$

### 5. Kateri robni pogoji so zajeti v šibki obliki integralske formulacije?

Če upoštevamo zvezo med primarno spremenljivko $u(x)$ in $N(x)$ dobimo iz zgornje enačbe : $$\int_0^LEA\frac{du}{dx}\frac{dv}{dx}dx = N(L)v(L) - N(0)v(0) - \int_0^Lf(x)v(x)dx + \int_0^LE A \alpha\Delta T \frac{dv}{dx}dx$$
Vidimo da šibka oblika integralske formulacije vključuje robne vrednosti sekundarne spremenljvke $N(x)$. 
### 6. Kako je z izpolnjevanjem diferencialne enačbe v primeru integralske formulacije?

V primeru integralske formulacije DE ni izpolnjena v vseh točkah območja - rešitev **NI** eksaktna.
### 7. Izpeljava inverzne oblike integralske formulacije.

Zapišimo šibko obliko integralske formulacije za 1D osno obremenjeni element : $$\int_0^L\tilde{D}^1u(x)\frac{dv(x)}{dx}dx = N(x)v(x)\biggr{|}_0^L - \int_0^Lf(x)v(x)dx + \int_0^Lf_T(x) \frac{dv}{dx}dx$$
kjer je $\tilde{D}^1 = E(x)A(x)(\frac{d}{dx})$ in je $f_T(x) = E(x)A(x)\alpha(x)\Delta T(x)$.

S takim zapisom lahko vidimo, da lahko levo stran integralske formulacije še enkrat Per-Partes integriramo . $$\int_0^L \tilde{D}^1 u(x) \frac{dv(x)}{dx}dx = u(x) \tilde{D}^1v(x)\biggr{|}_0^L - \int_0^Lu(x)\tilde{D}^2v(x) dx$$
S tem integralska formulacija dobi sledečo obliko : $$\int_0^Lu(x)\tilde{D}^2v(x)dx =u(x)\tilde{D}^1v(x)|_0^L - N(x)v(x)\biggr{|}_0^L + \int_0^Lf(x)v(x)dx - \int_0^Lf_T(x)\frac{dv(x)}{dx}dx$$
Dobljeni obliki integralske enačbe rečemo **INVERZNA OBLIKA INTEGRALSKE FORMULACIJE**.
### 8. Kateri robni pogoji so zajeti v inverzni obliki integralske formulacije?

Iz zgornje enačbe vidimo, da so v inverzni obliki integralske formulacije zajte vrednosti primarne spremenljivke na robovih $u(0)$ in $u(L)$, ter sekundarne spremenljivke na robovih $N(0)$ in $N(L)$. 
### 9. Vloga globalnega koordinatnega sistema pri definiranju geometrije KE?

S koordinatami v globalnem K.S. so označena vozlišča, ki določajo velikost končnega elementa.
### 10. Kako je izvedena aproksimacija primarne spremenljivke pri MKE?

Šibko obliko integralske formulacije lahko zapišemo z aproksimirano rešitvijo $\hat{u}(x)$ - na območju končnega elementa $x\in[0, L_e]$ : $$\int_0^{L_e} D^1\hat{u}(x) \frac{dv(x)}{dx}dx = N(x)v(x)\biggr{|}_0^{L_e} - \int_0^{L_e}f(x)v(x)dx + \int_0^{L_e}f_T(x)\frac{dv(x)}{dx}dx$$
Kot že omenjeno izvedemo osnovno aproksimacijo funkcije $\hat{u}(x)$ na podobmočju $x\in[0,L_e]$, imenovanem končni element (KE), ki ima $N_e$ vozlišč.

Aproksimacijsko funkcijo v posameznem vozlišču $\hat{u}_e$ lahko zapišemo kot : $$\hat{u}_e = \hat{u}_e(x_e) = \sum_{k=0}^{N_e-1}a_k^e\hat{\Psi}_k^e(x_e) \space ; \space x_e\in[0,L_e]$$Kjer je $\hat{\Psi}_k^e = \begin{cases}1, &\text{za  } x_i = x_k\\0, &\text{za  }x_i \neq x_k\end{cases}$  

S to formulo je v naslednjem vprašanju zapisana aproksimativna funkcija.
### 11. Izpeljava enačbe za dvo-vozliščni 1D KE za reševanje osno obremenjenega konstrukcijskega elementa.

V primeru 2-vozliščnega KE je aproksimacija primarne spremenljivke $\hat{u}_e(x_e)$ po njegovem območju zasnovana na 2 polinomih prvega reda:![[KE1D.png]]

S tem je aproksimativna rešitev enaka : $$\hat{u}_e(x_e)= a_0^e(1- \frac{x_e}{L_e}) + a_1^e(\frac{x_e}{L_e})$$
Vidimo, da je funkcijska aproksimacija primarne spremenljivke v območju 2-vozliščnega KE linearna funkcija določena z 2 konstantama.

Glede na to, da pri $x_e = 0$ in $x_e = L_e$ velja : $$\hat{u}_e(0) = a_0^e = U_1^e\space,\space\hat{u}_e(L_e) = a_1^e = U_2^e$$
Ugotovimo, da predstavljata konstanti v aproksimaciji vrednost pomika v vozliščih KE![[ue.png]]

Za izpeljavo sistema enačb za 2-vozliščni KE bomo predpostavili, da je KE:
- konstantnega prereza ($A(x_e) = A_0$)
- konstantnih materialnih lastnosti ($E(x_e) = E_0$ in $\alpha(x_e) = \alpha_0$)

Lahko zapišemo šibko obliko integralske formulacije : $$E_0A_0\int_0^{L_e}\frac{d\hat{u}_e}{dx_e}\frac{dv}{dx_e}dx_e = N_e(L_e)v(L_e) - N_e(0)v(0) + \int_0^{L_e}n(x_e)v(x_e)dx_e + \int_0^{L_e} E_0A_0\alpha_0\Delta T \frac{dv}{dx_e}dx_e$$
V enačbi predstavljata vrednosti $N(0)$ in $N(L_e)$ vozliščne vrenosti notranje osne sile v vozliščih KE: $$N_e(0) = N_1^e\space;\space N_e(L_e) = N_2^e$$![[ne.png]]

V enačbi upoštevajmo aproksimacijo primarne spremenljivke $\hat{u_e}(x_e)$ : $$\begin{multline}E_0A_0\int_0^{L_e}\frac{d}{dx_e}[U_1^e(1-\frac{x_e}{L_e}) + U_2^e(\frac{x_e}{L_e})]\frac{dv}{dx_e}dx_e = \\ = N_2^ev(L_e) - N_1^ev(0) + \int_0^{L_e}n(x_e)v(x_e)dx_e + \int_0^{L_e} E_0A_0\alpha_0\Delta T \frac{dv}{dx_e}dx_e\end{multline}$$ V levem delu enačbe lahko izraz še integriramo.

V zapisani obliki imamo 4 vozliščne vrednosti KE:
- $U_1^e$
- $U_2^e$
- $N_1^e$
- $N_2^e$
Za te 4 neznanke potrebujemo 4 enačbe. 2 enačbi (vodilna enačba problema je DE 2. reda) izhajata iz poznanih vrednosti primarne ali sekundarne spremenljivke na robu območja KE - v vozliščih KE.

Manjkajoči 2 enačbi dobimo z izbiro poljubne funkcije $v(x_e)$. V skladu z **Galerkinovim** pristopom izbire poljubne funkcije izberemo 2 funkciji, ki sta bili uprabljeni v aproksimaciji primarne spremenljivke $\hat{u}_e(x_e)$ : $$v_1(x_e) = \hat{\Psi}_0^e(x_e) = 1 - \frac{x_e}{L_e}$$ $$v_2(x_e) = \hat{\Psi}_1^e(x_e) = \frac{x_e}{L_e}$$
Te 2 funkciji vstavimo v zgoraj zapisano obliko šibke integralske formulacije:

1. enačba : $$\begin{multline}E_0A_0[U_1^e(-\frac{1}{L_e}) + U_2^e(\frac{1}{L_e})]\int_0^{L_e}\frac{dv_1}{dx_e}dx_e =\\= N_2^ev_1(L_e) - N_1^ev_1(0) + \int_0^{L_e}n(x_e)v_1(x_e)dx_e + \int_0^{L_e} E_0A_0\alpha_0\Delta T \frac{dv_1}{dx_e}dx_e\end{multline}$$
Enačbo lahko preuredimo in jo zapušemo v naslednji obliki : $$\frac{E_0A_0}{L_e}[U_1^e - U_2^e] = -N_1^e + \int_0^{L_e}n(1-\frac{x_e}{L_e})dx_e + \int_0^{L_e}E_0A_0\alpha_0\Delta T(-\frac{1}{L_e})dx_e$$
Na enak način izpeljemo tudi 2. enačbo upoštevajoč $v(x_e) = v_2(x_e)$ : $$\frac{E_0A_0}{L_e}[-U_1^e + U_2^e] = N_2^e + \int_0^{L_e}n(\frac{x_e}{L_e})dx_e + \int_0^{L_e}E_0A_0\alpha_0\Delta T(\frac{1}{L_e})dx_e$$
Dobljeni enačbi lahko zapišemo v matrični obliki : 
$$\frac{E_0A_0}{L_e}\begin{bmatrix} 1 &-1 \\ -1 &1 \end{bmatrix} \begin{pmatrix} U_1^e \\ U_2^e \end{pmatrix} = \begin{pmatrix} -N_1^e \\ N_2^e \end{pmatrix} + \begin{pmatrix} F_1^e \\ F_2^e \end{pmatrix}$$
![[matrix.png]]

### 12. Kako se upošteva porazdeljena obremenitev po območju KE pri MKE?

Porazdeljena obremenitev se upošteva na vozliščh KE, kot ekvivalentna sila izračunana kot : $$F_{1n}^e = \int_0^{L_e}n(1-\frac{x_e}{L_e})dx_e$$ in $$F_{2n}^e = \int_0^{L_e}n(\frac{x_e}{L_e})dx_e$$
### 13. Kako je zajet vpliv temperaturne obremenitve pri MKE?

Prav tako je zajet kot ekvivalentna sila v vozliščih in sicer po enačbah : $$F_{1T}^e = \int_0^{L_e}E_0A_0\alpha_0\Delta T(x_e)(-\frac{1}{L_e})dx_e$$
in $$F_{2T}^e = \int_0^{L_e}E_0A_0\alpha_0\Delta T(x_e)(\frac{1}{L_e})dx_e$$
### 14. Opiši postopek reševanja z MKE.

Najprej določimo aproksimacijsko funkcijo pomika $\hat{u}_e(x_e)$ po formuli: 

$$
u_e(x) = \sum_{i=0}^{N_e-1} a_i^{e} \Psi_i^{e} (x)
$$

Pri tem naj velja:

$$
\Psi_i^{e}(x_e) = 
\begin{cases} 
1, & \text{za } x_i = x_k \\
0, & \text{za } x_i \neq x_k 
\end{cases}
$$

Ko imamo izbrano aproksimacijsko rešitev $\hat{u}_e(x_e)$ , jo vstavimo v šibko obliko integralske formulacije. V dvo-vozliščnem problemu imamo 4 nezanke in potrebujemo 4 enačbe. Dve enačbi dobimo iz robnih pogojev - vrednosti primarne ali sekundarne spremenljivke na vozliščih KE. Drugi 2 pa dobimo z izbiro poljubnih funkcij $v_1$ in $v_2$. Izberemo jih po Galerkinovem pristopu - enake funkcije kot aproksimacijski funkciji. Funckij $v_1(x_e)$ in $v_2(x_e)$ vstavimo v šibko integralsko formulacijo. Tako dobimo sistem 2 enačb:

$$
\frac{E_0A_0}{L_e}\begin{bmatrix} 1 &-1 \\ -1 &1 \end{bmatrix} \begin{Bmatrix} U_1^e \\ U_2^e \end{Bmatrix} = \begin{Bmatrix} -N_1^e \\ N_2^e \end{Bmatrix} + \begin{Bmatrix} F_1^e \\ F_2^e \end{Bmatrix}
$$

## ***PREDAVANJE 6 : MKE + MRE***

### 1. Kako se pri MKE upošteva konsistentnost prehoda iz enega podobmočja v drugega?

![[pkp.png]]

Neznane vrednosti primarne spremenjivke $u(x)$ se nanašajo na vozlišča KE. Njihova vrednost zaradi sovpadanja globalne - $X$ in lokalne - $x_e$ koordinatne osi v obravnavanem primeru (slika zgoraj), ne zavisi od lokalnega koordinatnega sistema. Upoštevajoč še pogoj konisistentnega prehoda primarne spremenljivke v vozlišču 2 lahko zapišemo : $$U_1^1 = U_1\space;\space U_2^1 = U_2^2 = U_2\space;\space U_3^2 = U_3$$
Iz slike lahko ugotovimo, da ima v globalnem koordinantnem sistemu problem 3 neznane vrednosti primarne spremenljivke.

Če upoštevamo neznane vrednosti primarne spremenljivke v globalnem koordinantnem sistemu, ter sovpadanje globalnega in lokalnega koordinantnega sistema, lahko zapišemo razširjen sistem enačb (sistem upošteva vse 3 neznane primarne spremenljivke na vsakem končnem elementu) : 

![[pkp.png]]

**KE 1** : $$\frac{E_0A_0}{L_1}\begin{bmatrix} 1&-1&0\\-1&1&0\\0&0&0 \end{bmatrix}\begin{Bmatrix}U_1\\U_2\\U_3\end{Bmatrix} = \begin{Bmatrix} -N_1^1\\N_2^1\\0\end{Bmatrix} + \begin{Bmatrix} F_{1n}^1\\F_{2n}^1\\0\end{Bmatrix}$$
**KE 2** : $$\frac{E_0A_0}{L_2}\begin{bmatrix}0&0&0\\0&1&-1\\0&-1&1\end{bmatrix}\begin{Bmatrix}U_1\\U_2\\U_3\end{Bmatrix} = \begin{Bmatrix} 0\\-N_2^2\\N_3^2\end{Bmatrix} + \begin{Bmatrix} 0\\F_{2n}^2\\F_{3n}^2\end{Bmatrix}$$
Ker v obeh enačbah nastopajo enake 3 neznanke lahko enačbi seštejemo z malo preoblikovanja dobimo obliko enačbe : $$E_0A_0\begin{bmatrix}\frac{1}{L_1}&-\frac{1}{L_1}&0\\-\frac{1}{L_1}&\frac{1}{L_1}+\frac{1}{L_2}&-\frac{1}{L_2}\\0&-\frac{1}{L_2}&\frac{1}{L_2}\end{bmatrix}\begin{Bmatrix}U_1\\U_2\\U_3\end{Bmatrix} = \begin{Bmatrix} -N_1^1\\N_2^1-N_2^2\\N_3^2\end{Bmatrix} + \begin{Bmatrix}F_{1n}^1\\F_{2n}^1 + F_{2n}^2\\F_{3n}^2\end{Bmatrix}$$
Ta sistem enačb se nanaša na celotno območje problema.

V sistemu enačb je v splošnem toliko enačb ($N_{en}$), kolikor je vozlišč KE ($N_v$), pomnoženo s številom primarnih neznank ($N_n$) v posameznem vozlišču: $$N_{en} = N_v\space N_n$$
Torej imamo v primeru 3 vozlišča KE in 1 primarno neznanko, pomik v smeri osi elementa, kar rezultira v sistem 3 enačb. V zapisanem sistemu pa imamo skupno 7 neznank ($U_1,U_2,U_3, N_1^1, N_2^1, N_2^2, N_3^2$)
![[pkp.png]]

3 enačbe imamo že v sistemu enačb, dodatne enačbe pa dobimo:
- 1. robni pogoj : $U_1 = 0$
- 2. robni pogoj : $N_3^2 = 0$
Upoštevamo še porazdeljeno obremenitev $n(x) = n_0$. Še enkrat zapišemo sistem enačb: $$E_0A_0\begin{bmatrix}\frac{1}{L_1}&-\frac{1}{L_1}&0\\-\frac{1}{L_1}&\frac{1}{L_1}+\frac{1}{L_2}&-\frac{1}{L_2}\\0&-\frac{1}{L_2}&\frac{1}{L_2}\end{bmatrix}\begin{Bmatrix}0\\U_2\\U_3\end{Bmatrix} = \begin{Bmatrix} -N_1^1\\N_2^1-N_2^2\\0\end{Bmatrix} + \begin{Bmatrix}-\frac{n_0L_1}{2}\\-\frac{n_0(L_1+L_2)}{2}\\-\frac{n_0L_2}{2}\end{Bmatrix}$$
Pri čemer imamo sedaj 5 neznank ($U_2, U_3, N_1^1, N_2^1, N_2^2$).

Če upoštevamo pogoj konsistentosti prehoda (ravnotežje sil na prehodu med območji) nad sekundarno spremenljivko v vozlišču 2 lahko zapišemo  :  $$-N_2^1 + N_2^2 + F_0 - n_0dx_1 - n_0dx_2 = 0 \rightarrow N_2^1 - N_2^2 = F_0$$
![[pkp_2.png]]

Iz slike je razvidno, da se pogoji konistentnega prehoda upoštevajo kot statično ravnotežje notranjih in zunanjih sil na meji med KE. Konsistentnost primarne spremenljivke pa smo upoštevali že na začetku v sami formulaciji sistema enačb : 
$$U_1^1 = U_1\space;\space U_2^1 = U_2^2 = U_2\space;\space U_3^2 = U_3$$
Vidimo, da smo 2 neznani vrednosti nadomestili s $F_0$.  S tem imamo v sistemu enačb le še 3 neznanke($U_2,U_3,N_1^1$) - kar pomeni, da lahko sistem enačb rešimo : $$E_0A_0\begin{bmatrix}\frac{1}{L_1}&-\frac{1}{L_1}&0\\-\frac{1}{L_1}&\frac{1}{L_1}+\frac{1}{L_2}&-\frac{1}{L_2}\\0&-\frac{1}{L_2}&\frac{1}{L_2}\end{bmatrix}\begin{Bmatrix}0\\U_2\\U_3\end{Bmatrix} = \begin{Bmatrix} -N_1^1\\F_0\\0\end{Bmatrix} + \begin{Bmatrix}-\frac{n_0L_1}{2}\\-\frac{n_0(L_1+L_2)}{2}\\-\frac{n_0L_2}{2}\end{Bmatrix}$$


### 2. Opišite značilnosti sistema linearnih enačb, ki ga dobimo z MKE.

Sistem enačb razširimo na vse prostostne stopnje $N_e = N_v  N_n$ (to je število vozlišč pomnoženo z številom **primarnih** spremenljivk v posameznem vozlišču).

Ko naredimo to rabimo upoštevati robne pogoje problema in pa tudi pogoje konsistentnega prehoda - glej izpeljavo v prejšnjem vprašanju. 

Omembe vredno je tudi, da če primerjamo vektor pomikov in vekor notranjih osnih sil vidimo, da veličine nastopajo v konjugiranih parih. Torej, če je pomik neznan, je znana notranja osna sila in obratno. Za primer v prejšnjem vprašanju velja ta zveza. $$\begin{Bmatrix} U_1 = 0\\U_2\\U_3 \end{Bmatrix}\text{   in   } \begin{Bmatrix} -N_1^1\\N_2^1 - N_2^2 = F_0\\N_3^2 = 0\end{Bmatrix}$$
### 3. Kako določimo funkcijo $v(x)$ v primeru MRE?

MRE - metoda robnih elementov izvira iz inverzne oblike integralske formulacije: $$\int_0^L \hat{u}(x) \tilde{D}^2 v(x) dx = u(x) \tilde{D}^1v(x) \biggr{|}_0^L - N(x)v(x)\biggr{|}_0^L + \int_0^L f(x)v(x) dx - \int_0^Lf_T(x)\frac{dv(x)}{dx}dx$$
Osnovno aproksimacijo $\hat{u}_x$ izvedemo na robu analiziranega območja. V primeru 1D primera je to v $x=0$ in v $x=L$:
![[mkr_meje.png]]
To naredimo tako, da sta aproksimacijski vrednosti v robnih točkah konstanti. 

Funkcijo $v_k(x)$ dobimo iz rešitve diferencialne enačbe:$$\tilde{D}^2v_k(x) = \delta(x-x_k)$$
v posameznih točkah $x_k$, pri čemer je $\delta(x)$ Dirac-ova funkcija z lastnostjo :$$\delta (x-x_k) = \begin{cases} \delta(x-x_k) = 0 & \text{if } x \neq x_k \\ \int_0^L \delta (x-x_k)dx  = & \begin{cases} 1 & \text{if } x_k \in (0,L)\\\frac{1}{2} & \text{if } x_k = 0 \lor x_k = L \end{cases}\end{cases}$$
Za osno obremenjeni primer lahko zapišemo diferencialni operator: $$\tilde{D}^2 = \frac{d}{dx}\biggr{(}E(x)A(x)\biggr{(}\frac{d}{dx}\biggr{)}\biggr{)}$$
Enačbi združimo in zapišemo novo enačbo:$$\frac{d}{dx}\biggr{(}E(x)A(x)\biggr{(}\frac{dv_k(x)}{dx}\biggr{)}\biggr{)} = \delta (x - x_k)$$
Po integraciji zgornje enačbe dobimo: $$E(x)A(x)\biggr{(}\frac{dv_k(x)}{dx}\biggr{)} = H(x-x_k) + C_0$$
kjer je $H(x-x_k)$ Heaviside-ova koračna funkcija, definirana s predpisom: $$H(x-x_k) = \begin{cases} 1 & x>x_k\\ \frac{1}{2} & x=x_k\\0&x<x_k\end{cases}$$
Ko je argument funkcije negativen funkcija vrne vrednost 0, ko pa je pozitiven funkcija vrne vrednost 1.

Funckijo lahko vidimo na sliki: 
![[hevi.png]]

Iz enačbe lahko izrazimo $\frac{dv_k}{dx}$ in jo še enkrat integriramo. Dobimo : $$v_k(x) = \int\frac{H(x-x_k) + C_0}{E(x)A(x)}dx$$
V primeru ko sta $A(x)$ in $E(x)$ konstantna je funkcija $v(x)$ enaka : $$v_k(x) = \frac{(x-x_k) H(x-x_k)}{E_0A_0} + \frac{C_0x}{E_0A_0} + C_1$$
Če upoštevamo, da je $v(-\infty) = 0$ sledi, da mora biti vrednost konstant $C_0$ in $C_1$ enaka 0. 

Dobljeno funkcijo $v_k(x)$ v nadaljevanju uporabimo v inverzni obliki integralske formulacije : $$\begin{multline}\begin{aligned}\int_0^L\hat{u}\frac{d}{dx}\biggr{(}EA\frac{dv_k}{dx}\biggr{)}dx = u(L)\biggr{(}EA\frac{dv_k(L)}{dx}\biggr{)} - u(0)\biggr{(}EA\frac{dv_k(0)}{dx}\biggr{)} - \\- N(L)v_k(L) + N(0)v_k(0) - \int_0^Lnv_kdx - \int_0^LEA\alpha \Delta T\frac{dv_k}{dx}dx \end{aligned}\end{multline}$$
V zapisani enačbi sta neznanki 2 aproksimacijski vrednosti primarne spremenljivke $\hat{u}$ na robu opazovanega območja - po vrednosti sta enaki $\hat{u}(0)$ in $\hat{u}(L)$. Poleg tega sta neznani tudi vrednosti sekundarne spremenljivke na robovih območja - $N(0)$ in $N(L)$. 

Skupno so torej 4 neznanke. Iz robnih pogojev zapišemo 2 enačbi, preostali 2 pa dobimo z izbiro funkcij $v_{k=1,2}(x)$.
![[mkr_prim.png]]

### 4. Definirajte Diracovo funkcijo.

$\delta(x)$ - Dirac-ova (skočna) funkcija z lastnostmi :$$\delta (x-x_k) = \begin{cases} \delta(x-x_k) = 0 & \text{if } x \neq x_k \\ \int_0^L \delta (x-x_k)dx  = & \begin{cases} 1 & \text{if } x_k \in (0,L)\\\frac{1}{2} & \text{if } x_k = 0 \lor x_k = L \end{cases}\end{cases}$$
$$\int_{-\infty}^{\infty}\delta(x)dx = 1$$
$$\delta(x-x_k) = \begin{cases} 0 & x\neq x_k\\1 & x=x_k\end{cases}$$

### 5. Definirajte Heavisidovo funkcijo.

$H(x-x_k)$ Heaviside-ova koračna funkcija, definirana s predpisom: $$H(x-x_k) = \begin{cases} 1 & x>x_k\\ \frac{1}{2} & x=x_k\\0&x<x_k\end{cases}$$
Funckijo lahko vidimo na sliki: 
![[hevi.png]]

### 6. Opiši postopek reševanja z MRE.

Poglejmo si postopek reševanja na primeru : 
![[primer_mre.png]]

Geometrijski model območja, ki ga obravnavamo z MRE : 
![[mre_geo.png]]

Točkovno obremenitev lahko upoštevamo tako, da jo pomnožimo z Diracovo delta funkcijo : $$f_F(x) = F_0 \space \delta (x-L_1) = \begin{cases}f_F(x) = 0 & x\neq L_1 \\ \int_0^LF_0\space \delta(x-L_1)dx = F_0 &L_1 \in (0,L)\end{cases}$$ 
Izraz v integralu je podan v enah enotah kot porazdeljena obremenitev $n$. 

Naslednji korak je določitev funkcije $v_1(x)$, ki se nanaša na robno točko 1 :  $$v_1(x) = \frac{x H(x)}{E_0A_0} \rightarrow \frac{dv_1(x)}{dx} = \frac{H(x)}{E_0A_0} \rightarrow E_0A_0\frac{d^2v_1(x)}{dx^2} = \delta(x)$$
![[obmocje.png]]
Odvod Heavisideove funkcije je Delta funkcija :  $$\delta(x) = \frac{d}{dx}H(x)$$
Tako lahko funckijo $v_1(x)$ in njene odvode uporabimo v inverzni obliki integralske formulacije : $$\begin{multline}\begin{aligned}\int_0^L\hat{u}\biggr{(}E_0A_0\frac{d^2v_1}{dx^2}\biggr{)}dx = \\u(L)\biggr{(}E_0A_0\frac{dv_1(L)}{dx}\biggr{)} - u(0)\biggr{(}E_0A_0\frac{dv_1(0)}{dx}\biggr{)}-N(L)v_1(L) + N(0)v_1(0) -  \int_0^L(n+f_F)v_1dx\end{aligned}\end{multline}$$
Ko upoštevamo funkcijo $v_1(x)$ in njene odvode dobimo naslednjo enačbo : $$\int_0^L\hat{u}\space\delta(x)\space dx = u(L)H(L) - u(0)H(0) - N(L)\frac{LH(L)}{E_0A_0} + N(0)\frac{0H(0)}{E_0A_0} - \int_0^L(n + f_F)\frac{x H(x)}{E_0A_0}dx $$
Enačbo lahko zaradi lastnoti Diracove ($\int_0^L \delta (x-0) dx = \frac{1}{2}$) in Heavisidove($H(L)=1 \text{  in  } H(0) = \frac{1}{2}$) funkcije in oznake neznank, zapišemo : $$\frac{1}{2}U_1 = U_2 - \frac{1}{2}U_1 - N_2\frac{L}{E_0A_0} + N_1\cdot0 - \int_0^L(n+f_F)\frac{xH(x)}{E_0A_0}dx$$
V enačbi so 4 neznanke, 2 robni vrednosti primarne spremenljivke $U_1$ in $U_2$, in 2 robni vrednosti sekundarne spremenljivke $N_1$ in $N_2$. Za zapis enačbe v končni obliki potrebujemo izračunati še integral v zgornji enačbi: $$\int_0^L(n+f_F)\frac{xH(x)}{E_0A_0}dx  = \int_0^L-n_0\frac{xH(x)}{E_0A_0}dx + \int_0^LF_0\space\delta (x-L_1)\frac{xH(x)}{E_0A_0}dx$$
($-n_0$ je zaradi porazdeljene sile, ki kaže v nasprotni smeri K.S)

Izračun integralov nam da naslednja rezultata : $$\int_0^L-n_0\frac{xH(x)}{E_0A_0}dx = \frac{-n_0L^2}{2E_0A_0}$$ in $$\int_0^{L}F_0\space\delta(x-L_1)\frac{xH(x)}{E_0A_0}dx = \frac{F_0L_1}{E_0A_0}$$
Za izbrano robno točko 1 lahko napišemo enačbo : $$U_1 - U_2 = -\frac{N_2L}{E_0A_0} + \frac{n_0L^2}{2E_0A_0} - \frac{F_0L_1}{E_0A_0}$$
S tem smo zaključili zapis enačbe za robno točko 1. Lahko gremo naprej in določimo funkcijo $v_2(x)$, ki se nanaša na robno točko 2 : 
$$v_2(x) = \frac{(L-x)H(L-x)}{E_0A_0}\rightarrow\frac{dv_2(x)}{dx} = \frac{-H(L-x)}{E_0A_0}\rightarrow E_0A_0\frac{d^2v_2(x)}{dx^2} = \delta(L-x)$$
![[tocka2.png]]

Enako kot prej lahko $v_2(x)$ in njene odvode uporabimo v inverzni integralski obliki : $$\begin{multline}\begin{aligned}\int_0^L\hat{u}\biggr{(}E_0A_0\frac{d^2v_2}{dx^2}\biggr{)}dx = \\u(L)\biggr{(}E_0A_0\frac{dv_2(L)}{dx}\biggr{)} - u(0)\biggr{(}E_0A_0\frac{dv_2(0)}{dx}\biggr{)}-N(L)v_2(L) + N(0)v_2(0) -  \int_0^L(n+f_F)v_2dx\end{aligned}\end{multline}$$
Z upoštevanjem funkcije dobimo : $$\begin{multline}\int_0^L\hat{u}\space\delta(L-x)\space dx = -u(L)H(L-L) + u(0)H(L-0) - \\N(L)\frac{(L-L)H(L-L)}{E_0A_0} + N(0)\frac{(L-0)H(L-0)}{E_0A_0} - \int_0^L(n + f_F)\frac{(L-x) H(L-x)}{E_0A_0}dx\end{multline}$$
Še enkrat upoštevamo lastnosti Diracove in Heavisidove funkcije : $$\frac{1}{2}U_2 = -\frac{1}{2}U_2 + U_1 - N_2\cdot0 + N_1\frac{L}{E_0A_0} - \int_0^L(n+f_F)\frac{(L-x)H(L-x)}{E_0A_0}dx$$
Enako kot prej imamo 4 neznanke - 2 primarni in 2 sekundarni. Da dobimo končno obliko enačbe moramo izračunati še integral : $$ \begin{multline}\int_0^L(n+f_F)\frac{(L-x)H(L-x)}{E_0A_0}dx = \\ =\int_0^L\frac{(L-x)H(L-x)}{E_0A_0}dx + \int_0^LF_0\delta(x-L_1)\frac{(L-x)H(L-x)}{E_0A_0}dx\end{multline}$$
Izračun integralov da rezultat : $$\int_0^L-n_0\frac{(L-x)H(L-x)}{E_0A_0}dx = \frac{-n_0L^2}{2E_0A_0}$$
in $$\int_0^LF_0\space\delta(x-L_1)\frac{(L-x)H(L-x)}{E_0A_0}dx = \frac{F_0L_2}{E_0A_0}$$
Za robno točko 2 zapišemo enačbo : $$U_2 - U_1 = \frac{N_1L}{E_0A_0} + \frac{n_0L^2}{E_0A_0} - \frac{F_0L_2}{E_0A_0}$$

Za obravnavan primer imamo sistem 2 enačb s štirimi neznankami ($U_1,U_2,N_1,N_2$) : $$U_2 - U_1 = \frac{N_1L}{E_0A_0} + \frac{n_0L^2}{E_0A_0} - \frac{F_0L_2}{E_0A_0}$$ $$U_1 - U_2 = -\frac{N_2L}{E_0A_0} + \frac{n_0L^2}{2E_0A_0} - \frac{F_0L_1}{E_0A_0}$$
![[primer_mre_2.png]]
![[primer_mre.png]]
 Če upoštevamo robne pogoje, lahko zapišemo še 2 enačbi : $$U_1 = 0$$ $$N_2 = 0$$
 Število neznank se tako zmanjša na 2 ($U_2, N_1$) : $$U_2 - 0 = \frac{N_1L}{E_0A_0} + \frac{n_0L^2}{E_0A_0} - \frac{F_0L_2}{E_0A_0}$$ $$0 - U_2 = -\frac{0\cdot L}{E_0A_0} + \frac{n_0L^2}{2E_0A_0} - \frac{F_0L_1}{E_0A_0}$$
 
Tako lahko iz sistema enačbo izračunamo še preostali 2 neznanki : $$U_2 = -\frac{n_0L^2}{2E_0A_0} + \frac{F_0L_1}{E_0A_0}$$ in $$N_1 = U_2\frac{E_0A_0}{L} - \frac{n_0L}{2} + \frac{F_0L_2}{L} = -n_0L+F_0$$
Vrednosti sta enaki eksaktni rešitvi.

Izračunali smo vrednosti na robovih primera. Zdaj rabimo izračunati še vrednost primarne spremenljivke med robnima točkama, kjer deluje sila $F_0$. 
![[T.png]]
Ponovno zapišemo inverzno integralsko obliko - le da tokrat za funkcijo $v_T(x)$ izberemo :$$v_T(x) = \frac{(x-L_1)H(x-L_1)}{E_0A_0} \rightarrow \frac{dv_T(x)}{dx}=\frac{H(x-L_1)}{E_0A_0}\rightarrow E_0A_0\frac{d^2v_T(x)}{dx^2} = \delta(x-L_1)$$ Inverzna oblika integralske formulacije ima sledečo obliko : $$\begin{multline}\int_0^L\hat{u}\space\delta(x-L_1)dx = \\ =u(L)H(L-L_1) - u(0)H(0-L_1) - N(L)\frac{(L-L_1)H(L-L_1)}{E_0A_0} + \\ +N(0)\frac{(0-L_1)H(0-L_1)}{E_0A_0}-\int_0^L(n+f_F)\frac{(x-L_1)H(x-L_1)}{E_0A_0}dx\end{multline}$$
Enako kot prej upoštevamo lastnosti Diracove in Heavisidove funkcije : $$\begin{multline}u(L_1) = U_T = U_2\cdot1 - U_1\cdot0 - N_2\frac{L-L_1}{E_0A_0} + N_1\frac{-L_1\cdot0}{E_0A_0} - \int_0^L(n+f_F)\frac{(x-L_1)H(x-L_1)}{E_0A_0}dx = \\=U_2- \int_0^L(n+f_F)\frac{(x-L_1)H(x-L_1)}{E_0A_0}dx\end{multline}$$
Vrednost integrala v izrazu je enaka : $$\int_0^L(n+f_F)\frac{(x-L_1)H(x-L_1)}{E_0A_0}dx = -\frac{n_0(L-L_1)^2}{2E_0A_0} + 0$$
Torej je izraz za izračun pomika v točki T enak : 
$$U_T = U_2 + \frac{n_0(L-L_1)^2}{2E_0A_0} = -\frac{n_0L^2}{2E_0A_0} + \frac{F_0L_1}{E_0A_0} + \frac{n_0(L-L_1)^2}{2E_0A_0} = -\frac{n_0(L_1 + 2L_2)L_1}{2E_0A_0} + \frac{F_0L_1}{E_0A_0}$$

Tudi ta vrednost je enaka eksaktni rešitvi.
### 7. Primerjajte MKR in MKE.

MKE je aproksimativna metoda, ki temelji na šibki inegralski formulaciji, kar pomeni da je rešitev DE definirana na celotnem opazovanem območju. MKR  je definirana oz. izpolnjuje DE le v diskretnih točkah. 

Zaradi uporabe centralne diferenčne sheme potrebujemo za določitev R.P. pri MKR dodatne točke na robovih opazovanega območja.

Pri MKE z robnimi pogoji lahko eksaktno izpolnimo tako primarno kot sekundarno spremenljivko, medtem ko pri MKR sekundarno spremenljvko izpolnimo aproksimativno. Enako velja tudi na prehodu med polji (sekundarna spremenljivka in pogoji prehoda)
### 8. Primerjajte MKR in MRE.

MRE je aproksimativna metoda, ki temelji na inverzni integralski formulaciji, ki omogoča izpolnjevanje (popis - ni nujno, da je rešitev eksaktna) DE na celotnem opazovanem območju. MKR temelji na diferenčni shemi, ki DE izpolnjuje le v disktertnih točkah.

Slabost MRE je, da potrebujemo za izračun notranjih vrednosti izvajati dodatne operacije (potrebna še ena formula $v(x)$). Pri MKR so notranje vrednosti znane takoj po izračunu. 

Robne pogoje primarne in sekundarne spremenljvke pri MRE izpolnjujemo eksaktno. Pri MKR pa eksaktno izpolnjujemo le primarni spremenljivki.

Pogoje prehoda pri MRE upoštevamo z uporabo Diracove funkcije (preračunamo točkovne obremenitve v ekvivalentne porazdeljene obremenitve ? nism ziher). Pri MKR uporabimo dodatne točke za izračun primarne in sekundarne spremenljivke na prehodu. 
### 9. Primerjajte MKE in MRE

Obe metodi izvirata iz integralske formulacije, kar pomeni, da je rešitev definirana na celotnem območju. Glavna razlika med metodami je sestava sistema enačb, ki ga uporabimo za izračun problema. Togostna matrika je pri MKE diagonalno simetrična - lažje rešljiva. Pri MRE pa je matrika polna, ampak nekoliko manjša.

Rezultat MKE so vrednosti primarne in sekundarne spremenljivke v vseh vozliščih, medtem ko iz MRE dobimo le vrednosti primarne in sekundarne spremenljivke le na robovih območja. 

V obeh primerih so robni pogoji eksaktno določeni. 

Pogoji prehoda so pri MKE eksaktno določeni (primarna in sekundarna spremenljivka). Pri MRE nimamo pogojev prehoda, saj notranje veličine popišemo z Diracovo funkcijo. 

## ***PREDAVANJE 7 : PREVOD TOPLOTE***

### 1. Katere so primarne in sekundarne veličine v primeru obravnave prevoda toplote?

Pri prevodu toplote je primarna spremenljivka **temperatura** $T(x,y,z,t)$ , sekundarna speremenljivka pa je **toplotni tok** $\hat q (x,y,z,t)$ 
### 2. Kako pridemo do zveze med temperaturo in toplotnim tokom?

Termalno stanje v trdnem mediju definira temperaturno polje $T = T(x,y,z,t) [K]$ , ki se v splošnem s časom spreminja. Množica točk $P(x,y,z)$ z enako temperaturo določa časovno spremenljivo **izotermalno ploskev** $T(x,y,z,t) = konst.$  

V opazovanem trenutku $t = \tau$ naj bo v točki $P_0 = P(x_0, y_0, z_0)$ temperatura $T_0$ : $$T(x_0,y_0,z_0,\tau) = T_0$$
![[toplota.png]]

Točke, ki so v neposredni okolici $P_0$ lahko opišemo tako :  $P = P(x_0 + dx, y_0 + dy, z_0 + dz)$ ležijo na isti izotermalni ploskvi in izkazujejo lastnost : $$\frac{\partial T}{\partial x}dx + \frac{\partial T}{\partial y}dy + \frac{\partial T}{\partial z}dz = 0$$
Pri čemer so odvodi nanašanjo na točko $P_0 = P(x_0, y_0, z_0)$.
![[odvod.png]]

Enačbo $$\frac{\partial T}{\partial x}dx + \frac{\partial T}{\partial y}dy + \frac{\partial T}{\partial z}dz = 0$$ lahko zapišemo tudi kot skalarni produkt : $$grad\space T\cdot d\hat r = 0$$
kjer sta $$grad\space T = \frac{\partial T}{\partial x}\hat e_x + \frac{\partial T}{\partial y}\hat e_y + \frac{\partial T}{\partial z}\hat e_z = \hat \nabla T$$
in $$d\hat r = dx \hat e_x + dy \hat e_y + dz\hat e_z$$
![[grad.png]]

Očitno je vektor $grad\space T$ v točki $P_0$ usmerjen pravokotno na izotermalno ploskev $T(x_0, y_0,z_0,\tau) = T_0$ v smeri naraščujoče temperature $T(x,y,z,\tau) = T_0 + dT\text{ , }dT>0$ , saj velja : $$dT = \frac{\partial T}{\partial x}dx + \frac{\partial T}{\partial y}dy + \frac{\partial T}{\partial z}dz = grad\space T\cdot d\hat r > 0$$
enačba nam pove, da oklepata vektorja $grad\space T$ ter $d\hat r$ oster kot ($<90°$). Pri tem vektor $d\hat r$ povezuje točko $P_0 = P(x_0, y_0,z_0)$ na izotermalni ploskvi $T(x,y,z,\tau) = T_0$  in točko $P=P(x,y,z)$ na sosednji izotermalni ploskvi $T(x,y,z,\tau) = T_0 + dT$.
![[sosednji ploskvi.png]]

Med izotermalnima ploskvama $T(x,y,z,\tau) = T_0$ in $T(x,y,z,\tau) = T_0 + dT$ pride do prenosa energije v obliki ***toplotnega toka***, t.j. količine toplote, ki v časovni enoti prehaja skozi enoto površine izotermalne ploskve. Toplotni tok $\hat q [\frac{J}{sm^2}]$ je določen s *Fourierjevim zakonom* : $$\hat q = -k(grad\space T)$$
$k[\frac{J}{msK}]$ je snovna lastnost, imenovana ***toplotna prevodnost***. Iz enačbe sledi, da je toplotni tok usmerjen v smeri padajoče temperature.
![[fourier.png]]


### 3. Izpeljava diferencialne enačbe za 1D prevod toplote.

Analizirajmo prevod toplote v homogenem in izotropnem trdnem telesu, ki ni v termičnem ravnovesju. Začetno temperaturno stanje $T(x,y,z,0) = T_0(x,y,z)$ v času $t=0$, t.j. ob pričetku opazovanja, se zaradi termičnega neravnotežja s časom spreminja $T = T(x,y,z,t)\text{  ,  } t>0$. Na temperaturno stanje v telesu vpliva izmenjava toplote z okolico na mejah telesa ter morebitno generiranje toplote v telesu. Snovna lastnost, ki uravnava hitrost prevoda topote je *toplotna prevodnost - $k$*.

Diferencialno enačbo problema lahko izpeljemo na osnovi obravnave energijske bilance na diferencialno majhnem volumnu - volumskemu elementu. 
![[izpeljava toplota.png]]

V časovnem intervalu $dt$ v diferencialnem elementu $dV = dx\space dy\space dz$  akumulirana ***notranja energija*** $dU [J]$, ki je enaka v elementu generirani toploti $dQ_V$ ter toploti , ki je prešla ploskve elementa $dQ_A$ :
$$dU = dQ_A + dQ_V$$
Akumulirana energija $dU$ se izkazuje v spremembi temp. stanja $dT$, njena velikost pa je : $$dU = dm\space c \space dT = \rho \space c \space dT \space dV$$
kjer sta $\rho [\frac{kg}{m^3}]$ in $c[\frac{J}{kg K}]$ ***specfična gostota*** ter ***specifična toplota***. 

V elementu generirana toplota $dQ_V$ v časovnem intervalu $dt$ je velikosti : $$dQ_V = q_V\space dV\space dt$$
kjer je $q_V = q_V(x,y,z,t) [\frac{J}{sm^3}]$ prostorsko porazdeljeno polje toplotnih izvirov.

Toplota $dQ_A$, ki se v časovnem intervalu $dt$ na osnovi prevoda toplote preko ploskev elementa akumulira v element, je velikosti : $$dQ_A = dQ_x + dQ_y + dQ_z$$
Zdaj lahko analiziramo prispevek prevoda toplote preko ploskev volumskega elementa v $x$-smeri v energijski bilanci : $$dQ^-_x = -k\frac{\partial T}{\partial x}dA_xdt$$ in $$dQ^+_x = -\biggr{[}dQ^-_x + d(dQ^-_x)\biggr{]} = -\biggr{[}-k\frac{\partial T}{\partial x} + \frac{\partial}{\partial x}\biggr{(}-k\frac{\partial T}{\partial x}\biggr{)}dx\biggr{]}dA_xdt$$![[analiza.png]]

Glede na gradient temperaturnega polja izstopa(A)/vstopa(B) v volumski element na mestu $x=x_0$ skozi ploskev $dA_x = dydz$ toplota $dQ^-_x$, na mestu $x = x_0 + dx$ o
pa skozi enako ploskev vstopa(A)/izstopa(B) toplota $dQ^+_x$, keterih velikosti v splošnem zaradi prostorskega spreminjanja temp. stanja nista enaki : 
![[primerab.png]]

Upoštevajoč izstop in vstop toplote v primeru A, ko je dovod toplote skozi ploskve z normalo v smeri $x$ - osi tak, da se **akumulirana toplota** v volumskem elementu **poveča**,  je velikost akumulirane toplote $dQ_x$ enaka : $$dQ_x^+ = dQ_x^+ + dQ_x^- \geq 0$$
Lahko zapišemo : $$dQ_x = \biggr{[}\frac{\partial}{\partial x}\biggr{(}k\frac{\partial T}{\partial x}\biggr{)}dx\biggr{]}dA_xdt = \frac{\partial}{\partial x}\biggr{(}k\frac{\partial T}{\partial x}\biggr{)}dVdt$$
Toplota $dQ_A$, ki se v časovnem intervalu $dt$ na osnovi prevoda toplote preko ploskev volumskega elementa akumulira v elementu, je tedaj velikosti : $$dQ_A = dQ_x + dQ_y + dQ_z = \biggr{[}\frac{\partial}{\partial x} \biggr{(}k\frac{\partial T}{\partial x}\biggr{)} + \frac{\partial}{\partial y} \biggr{(}k\frac{\partial T}{\partial y}\biggr{)} + \frac{\partial}{\partial z} \biggr{(}k\frac{\partial T}{\partial z}\biggr{)}\biggr{]}dVdt$$
Enačbo energijske bilance . $$dQ_A + dQ_V = dU$$
zapišemo v odvisnosti od primarne fizikalne spremenljivke - tempereature $T = T(x,y,z,t)$ : $$\biggr{\{}\biggr{[}\frac{\partial}{\partial x} \biggr{(}k\frac{\partial T}{\partial x}\biggr{)} + \frac{\partial}{\partial y} \biggr{(}k\frac{\partial T}{\partial y}\biggr{)} + \frac{\partial}{\partial z} \biggr{(}k\frac{\partial T}{\partial z}\biggr{)}\biggr{]} + q_V\biggr{\}}dVdt = (\rho\space c\space dT)dV$$
Enačbo lahko še preuredimo - delimo z $dV$ in delimo z $dt$ : $$\frac{\partial}{\partial x} \biggr{(}k\frac{\partial T}{\partial x}\biggr{)} + \frac{\partial}{\partial y} \biggr{(}k\frac{\partial T}{\partial y}\biggr{)} + \frac{\partial}{\partial z} \biggr{(}k\frac{\partial T}{\partial z}\biggr{)} + q_V = \rho\space c\frac{\partial T}{\partial t}$$
To je vodilna enačba problema v trdninah. Za 1D primer se zapiše kot  : $$\frac{\partial}{\partial x}\biggr{(}k\frac{\partial T(x,t)}{\partial x}\biggr{)} + q_V(x,t) = \rho\space c\frac{\partial T(x,t)}{\partial t}$$
Za stacionarne primere ($dt = 0$) odpade člen na desni strani enačbe : $$\frac{d}{dx}\biggr{(}k\frac{dT}{dx}\biggr{)} + q_V = 0$$ 
### 4. Kako se upošteva konvektivni odvod toplote s površine telesa?

***Konvektivni toplotni tok*** je posledica obtekajočega fluida s temperaturo $T_f(x,t)$ ter *prestopnostnim koeficientom* konvekcijskega prenosa toplote $h_f(x,t)$ ali $\alpha(x,t)$ $[\frac{J}{sm^2K}]$ : $$q_n(x,t) = -k\frac{\partial T(x,t)}{\partial x} = q_{\Gamma}(x,t) = -h_f(x,t)[T_f(x,t) - T(x,t)] \text{ , }x\in[x_1,x_2]$$
$q_n$ je toplotni tok v smeri normale na površino. Ta toplotni tok določa temperaturni gradient : $$\frac{\partial T(x,t)}{\partial x}n_x = \frac{h_f(x,t)[T_f(x,t) - T(x,t)]}{k}\text{ , }n_x\in[\hat n_1, \hat n_2]\text{ , }x\in[x_1¸,x_2]$$
![[konverktivni.png]]

### 5. Kako se upošteva odvod toplote s površine telesa s sevanjem?

***Sevalni toplotni tok*** oddaljenega telesa s temp. $T_r(x,t)$ ter prestopnostnim koeficientom sevalnega prenosa toplote $h_r(x,t)$ je določen s Stefan-Boltzmanovim zakonom : $$q_n(x,t) = -k\frac{\partial T(x,t)}{\partial n} = q_{\Gamma}(x,t) = - \sigma_s \varepsilon_s[T_r^4(x,t) - T^4(x,t)]\text{ , }x\in[x_1,x_2]$$
kjer sta $\sigma_s$ in $\varepsilon_s$ *Stefan-Boltzmanova konstanta* in *emisivnost*. 
![[sevanje.png]]

Ker temperatura nastopa na četrto potenco, potrebujemo za rešitev problema reševati nelinearne enačbe.  Lahko vpeljemo poenostavitev, ki linearizira problem, a zahteva iterativno reševanje. Peoblem lahko poenostavimo na sledeč način : $$\begin{multline}q_{\Gamma} =  - \sigma_s \varepsilon_s[T_r^4(x,t) - T^4(x,t)] = \\ =-(\sigma_s \varepsilon_s[T_R^2(x,t) + T^2(x,t)](T-r(x,t) + T(x,t)))[T_r(x,t) - T(x,t)] = \\ =-h_r(x,t)[T_r(x,t) - T(x,t)] \end{multline} $$
Temperaturni gradient pa lahko zapišemo kot : $$\frac{\partial T(x,t)}{\partial x}n_x = \frac{h_r(x,t)[T_r(x,t) - T(x,t)]}{k}$$
### 6. Zapišite enačbe, ki popisujejo toplotne razmere na mejni površini med dvema različnima materialoma.

Na skupni meji podobmočji $\Gamma_{1,2}$ med podobmočji $\Omega_1$ in $\Omega_2$ morajo biti izpolnjeni ***pogoji konsistentnosti prehoda***, ki opredeljujejo obnašanje primarne in sekundarne spremenljivke problema ob prehodu iz enega podobmočja v drugega.
![[pkp_3.png]]
Fizikalna konsistentonst problema se v obravnavanem primeru, če predpostavimo idealen termični kontakt med telesoma, na prehodu med podobmočjema izkazuje v zveznosti primarne spremenljivke $T(x,t)$ : $$T_1(x_p,t) = T_2(x_p,t)$$
ter zveznostjo sekundarne spremenljivke  - toplotnega toka $q(x,t)$ : $$q_{n1}(x_p,t) + q_{n2}(x_p,t) = 0 \rightarrow -k_1 \frac{\partial T_1(x_p,t)}{\partial n_1} = k2 \frac{\partial T_2(x_p,t)}{\partial n_2}$$
( Note : tukaj nimamo minusa na obeh straneh enačbe, ker odvajamo po normali )

Upoštevajoč 1D območje problema lahko pogoj konsistentnosti prehoda za sekundarno spremenljivko zapišemo z enačbo : $$-k_1\frac{\partial T_1(x_p,t)}{\partial x}n_1 = k_2\frac{\partial T_2(x_p,t)}{\partial x}n_2$$
Oziroma  : $$k_1\frac{\partial T_1(x_p,t)}{\partial x} = k_2\frac{\partial T_2(x_p,t)}{\partial x}$$
![[pkp4.png]]

## ***PREDAVANJE 8 : PREVOD TOPLOTE - PRIMERI***

### 1. Aproksimacija primarne spremenljivke v primeru tri-vozliščnega 1D KE.

Enako kot pri dvo-vozliščnih elementih uporabimo aproksimacijsko funkcijo oblike : $$T(x) = \sum_{i=0}^{n=2}T_i\psi_i^e(x) = T_0\psi_0^e(x) + T_1\psi_1^e(x) + T_2\psi_2^e(x)$$
Kjer je $\psi_i^e(x)$ polinom druge stopnje $\psi_i^e(x) = C_0 + C_1x + C_2x^2$. Te funkcije morajo v vozlišču v KE zadočati naslednjim pogojem : $$\psi_0^e(x) = \begin{cases}1&\text{if }x = 0\\0&\text{if }x = \frac{L}{2}\\0&\text{if }x = L  \end{cases}$$
Analogno velja za drugi 2 funkciji. Na koncu dobimo naslednje funkcije: 
![[aprox.png]] ![[aproxtgth.png]]

Enako aproksimacijsko funkcijo bi dobili z Lagrangeovo interpolacijo. Skozi točke $T_0,T_1\text{ in }T_2$ . 
### 2.  Izpeljava tro-vozliščnega 1D KE za osno obremenjen konstrukcijski element.

Izhodišče za izpeljavo tro-vozliščnega končnega elementa je šibka integralska formulacija, ki ima sledečo obliko : $$\int_0^LDu(x)\frac{dv(x)}{dx}dx = N(x)v(x)\biggr{|}_0^L + \int_0^Ln(x)v(x)dx$$
$D$ operator je v tem primeru $\frac{d}{dx}EA$. 

Naslednji korak je, da določimo aproksimacijsko funkcijo za primarno spremenljivko : $$\tilde{u}(x) = \sum_{i=0}^{N=2}u_i\psi_i^e(x)$$ Kjer je funkcija $\psi_i^e(x)$ polinom druge stopnje in mora zadostovati enakim pogojem kot v prejšnjem primeru. Po tem, ko določimo vrednosti funkcij $\psi_0(x)$, $\psi_1(x)$ in $\psi_2(x)$ lahko zapišemo aproksimacijsko funkcijo : $$\tilde u(x) = U_1(\frac{2x^2}{L^2} - \frac{3x}{L} + 1) + U_2(-\frac{4x^2}{L^2} + \frac{4x}{L}) + U_3(\frac{2x^2}{L^2} - \frac{x}{L})$$
Izračunajmo še odvod funkcije, ki ga bomo potrebovali pozneje : $$\frac{d\tilde u(x)}{dx} = U_1(\frac{4x}{L^2}- \frac{3}{L})+U_2(-\frac{8x}{L^2} + \frac{4}{L}) + U_3(\frac{4x}{L^2} - \frac{1}{L})$$
Ker imamo tro-vozliščni končni element potrebujemo za zapis rešitve 3 enačbe, ki jih dobimo iz izbire funkcije $v(x)$. Funkcijo izberemo po Galerkinovem pristopu : 
- $v_0(x) = \psi_0(x) = \frac{2x^2}{L^2} - \frac{3x}{L} + 1$
- $v_1(x) = \psi_1(x) = -\frac{4x^2}{L^2} + \frac{4x}{L}$
- $v_2(x) = \psi_2(x) = \frac{2x^2}{L^2} - \frac{x}{L}$
Funkcije vstavimo v glavno enačbo (šibka integralska oblika) in dobimo sistem 3 enačb:
***1.Enačba***:
$$\begin{multline}\int_0^LEA\biggr{(}U_1(\frac{4x}{L^2}- \frac{3}{L})+U_2(-\frac{8x}{L^2} + \frac{4}{L}) + U_3(\frac{4x}{L^2} - \frac{1}{L})\biggr{)}(\frac{4x}{L^2} - \frac{3}{L})dx= \\=N(L)(\frac{2L^2}{L^2}-\frac{3L}{L}+1) - N(0)\cdot1 + \int_0^Ln(x)\biggr{(}\frac{2x^2}{L^2} - \frac{3x}{L} + 1\biggr{)}dx =\\= \frac{EA}{3L}(7U_1 - 8U_2 + U_3) = -N_1 + \int_0^Ln(x)\biggr{(}\frac{2x^2}{L^2} - \frac{3x}{L} + 1\biggr{)}dx \end{multline}$$
***2.Enačba***:
$$\begin{multline}\int_0^LEA\biggr{(}U_1(\frac{4x}{L^2}- \frac{3}{L})+U_2(-\frac{8x}{L^2} + \frac{4}{L}) + U_3(\frac{4x}{L^2} - \frac{1}{L})\biggr{)}(-\frac{8x}{L^2} + \frac{4}{L})dx= \\=N(L)(-\frac{4L^2}{L^2} + \frac{4L}{L}) - N(0)\cdot0 + \int_0^Ln(x)\biggr{(}-\frac{4x^2}{L^2} + \frac{4x}{L}\biggr{)}dx =\\= \frac{EA}{3L}(-8U_1 + 16U_2 -8 U_3) = \int_0^Ln(x)\biggr{(}-\frac{4x^2}{L^2} + \frac{4x}{L}\biggr{)}dx \end{multline}$$
***3. Enačba:***
$$\begin{multline}\int_0^LEA\biggr{(}U_1(\frac{4x}{L^2}- \frac{3}{L})+U_2(-\frac{8x}{L^2} + \frac{4}{L}) + U_3(\frac{4x}{L^2} - \frac{1}{L})\biggr{)}(\frac{4x}{L^2} - \frac{1}{L})dx= \\=N(L)(\frac{2L^2}{L^2} - \frac{L}{L}) - N(0)\cdot0 + \int_0^Ln(x)\biggr{(}\frac{2x^2}{L^2} - \frac{x}{L}\biggr{)}dx =\\= \frac{EA}{3L}(U_1 - 8U_2 +7 U_3) = N_3 + \int_0^Ln(x)\biggr{(}\frac{2x^2}{L^2} - \frac{x}{L}\biggr{)}dx \end{multline}$$

Enačbe lahko zapišemo v matrični obliki - enačba 3-vozliščnega KE : $$\frac{EA}{3L}\begin{bmatrix}7&-8&1\\-8&16&-8\\1&-6&7\end{bmatrix}\begin{Bmatrix}U_1\\U_2\\U_3\end{Bmatrix} = \begin{Bmatrix}-N_1\\0\\N_3\end{Bmatrix} + \begin{Bmatrix}\int_0^Ln(x)\biggr{(}\frac{2x^2}{L^2} - \frac{3x}{L} + 1\biggr{)}dx\\\int_0^Ln(x)\biggr{(}-\frac{4x^2}{L^2} + \frac{4x}{L}\biggr{)}dx\\\int_0^Ln(x)\biggr{(}\frac{2x^2}{L^2} - \frac{x}{L}\biggr{)}dx\end{Bmatrix}$$
### 3. Izpeljava dvo-vozliščnega 1D KE za enoosni prevod toplote.

Izajamo iz osnovne enačbe prevoda toplote : $$k\frac{\partial^2T(x,t)}{\partial x^2} + q_v(x,t)=0$$
Za izpeljavo KE potrebujemo enačbo zapisati v šibki integeralski obliki : $$\int_0^Lk\frac{dT(x)}{dx}\frac{dv(x)}{dx}dx = k\frac{dT(L)}{dx}v(L) - k\frac{dT(0)}{dx}v(0) + \int_0^Lq_v(x)v(x)dx$$
Za določitev aproksimacijske funkcije $\tilde T(x)$ uporabimo funkcijo : $$\tilde T(x) = T_0\psi_0(x) + T_1\psi_1(x)$$
Kjer sta funkciji $\psi_0$ in $\psi_1$ polinoma prve stopnje : $$\psi_0(x) = 1-\frac{x}{L} \text{ in }\psi_1(x) = \frac{x}{L}$$
Ker je KE dvo-vozliščni potrebujemo za zapis enačbe KE 2 enačbi. Dobimo ju z izbiro funkcij $v(x)$ po Galerkinovem pristopu : 
- $v_0(x) = \psi_0(x)$
- $v_1(x) = \psi_1(x)$
Če vstavimo funkciji v glavno enačbo problema dobimo 2 enačbi, ki v matričnem zapisu izgledata tako : $$\frac{k}{L}\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\begin{Bmatrix}T_1\\T_2\end{Bmatrix} = \begin{Bmatrix}Q_1\\-Q_2\end{Bmatrix} + \begin{Bmatrix}\int_0^Lq_v(x)(1-\frac{x}{L})dx\\\int_0^Lq_v(x)\frac{x}{L}dx\end{Bmatrix}$$
Tukaj sta $Q_1$ in $Q_2$ : 
$$Q_1^e = -k\frac{dT(x)}{dx}$$ $$Q_2^e = -k\frac{dT(L)}{dx}$$
### 4. Izpeljava tri-vozliščnega 1D KE za enoosni prevod toplote.

Ponovno začnemo s šibko obliko integralske enačbe : $$\int_0^Lk\frac{dT(x)}{dx}\frac{dv(x)}{dx}dx = k\frac{dT(L)}{dx}v(L) - k\frac{dT(0)}{dx}v(0) + \int_0^Lq_v(x)v(x)dx$$
Potrebujemo izbrati aproksimacijsko funkcijo $\tilde T(x)$ : $$T(x) = \sum_{i=0}^{n=2}T_i\psi_i^e(x) = T_0\psi_0^e(x) + T_1\psi_1^e(x) + T_2\psi_2^e(x)$$
Kjer so funkcije $\psi_{0,1,2}(x)$ : 
- $\psi_0(x) = \frac{2x^2}{L^2} - \frac{3x}{L} + 1$
- $\psi_1(x) = -\frac{4x^2}{L^2} + \frac{4x}{L}$
- $\psi_2(x) = \frac{2x^2}{L^2} - \frac{x}{L}$

Za zapis enačbe KE potrebujemo 3 enačbe, ki jih dobimo z izbiro $v(x)$ po Galerkinovem pristopu :
- $v_0(x) = \psi_0(x) = \frac{2x^2}{L^2} - \frac{3x}{L} + 1$
- $v_1(x) = \psi_1(x) = -\frac{4x^2}{L^2} + \frac{4x}{L}$
- $v_2(x) = \psi_2(x) = \frac{2x^2}{L^2} - \frac{x}{L}$

Funkcije in njihove odvode vstavimo v glavno enačbo. Dobimo sistem 3 enačb : $$\frac{k}{3L}\begin{bmatrix}7&-8&1\\-8&16&-8\\1&-6&7\end{bmatrix}\begin{Bmatrix}T_1\\T_2\\T_3\end{Bmatrix} = \begin{Bmatrix}Q_1\\0\\-Q_3\end{Bmatrix} + \begin{Bmatrix}\int_0^Lq_v(x)\biggr{(}\frac{2x^2}{L^2} - \frac{3x}{L} + 1\biggr{)}dx\\\int_0^Lq_v(x)\biggr{(}-\frac{4x^2}{L^2} + \frac{4x}{L}\biggr{)}dx\\\int_0^Lq_v(x)\biggr{(}\frac{2x^2}{L^2} - \frac{x}{L}\biggr{)}dx\end{Bmatrix}$$
![[3vKE.png]]

### 5. . Primerjajte dvo-vozliščni 1D KE za osno obremenjen konstrukcijski element in za enoosni prevod toplote.

Osna obremenitev : $$EA\frac{d^2u(x)}{dx^2} = -n(x)$$
$$\frac{EA}{L}\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\begin{Bmatrix}U_1\\U_2\end{Bmatrix} = \begin{Bmatrix}-N_1\\N_2\end{Bmatrix} + \begin{Bmatrix}\int_0^Ln(x)(1-\frac{x}{L})dx\\\int_0^Ln(x)\frac{x}{L}dx\end{Bmatrix}$$
Prevod toplote : $$k\frac{d^2T(x)}{dx^2} = -q_v(x)$$
$$\frac{k}{L}\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\begin{Bmatrix}T_1\\T_2\end{Bmatrix} = \begin{Bmatrix}Q_1\\-Q_2\end{Bmatrix} + \begin{Bmatrix}\int_0^Lq_v(x)(1-\frac{x}{L})dx\\\int_0^Lq_v(x)\frac{x}{L}dx\end{Bmatrix}$$
Obe DE sta drugega reda. Pri osni obremenitvi je primarna spremeljivka pomik, sekundarna pa notranja osna sila. Pri prevodu toplote je primarna spremenljivka temperatura, sekundarna pa toplotni tok. Zapisa v matrični obliki sta zelo podobna. Opazimo, da se v vektorju sekundarnih spremenljivk zamenjata predznaka - zaradi izpeljave enačbe KE.

### 6. Kako lahko izboljšamo natančnost rešitve pri uporabi polinomske aproksimacije?

Lahko povečamo stopnjo polinoma - to naredimo pri tro-vozliščnem KE (na ravni elementa). Pri tem moramo biti pazljivi, saj se z večanjem stopnje polinoma povečuje numerična napaka računanja. Poleg tega prevelike stopnje polinomov ne dajejo fizikalno smiselnih rešitev.

Lahko pa razdelimo območje na več podobmočji, pri čemer vsako izmed podobmočji aproksimiramo s svojo polinomsko funkcijo, katere stopnja je enaka minimalni zahtevani stopnji aproksimacijskega polinoma (to je stopnja vodilne DE). Moramo biti pozorni, da zadostimo pogojem konsistentnega prehoda. 
### 7. Kako lahko izboljšamo natančnost rešitve pri reševanju z MKR?

Zgostimo mrežo (numerično postane proces bolj zahteven) ali pa opazovano območje razdelimo na več polj. To nam omogoča, da na območjih z večjimi gradienti uporabimo bolj gosto mrežo. Drugje pa lahko prihranimo pri času računanja z redkejšo mrežo.
### 8. Kako lahko izboljšamo natančnost rešitve pri reševanju z MKE?

Lahko uporabimo več KE, zamenjamo dvo-vozliščne KE za tri-vozliščne KE, ali pa uporabimo kombinacijo tro in dvo-vozliščnih KE. Tri-vozliščne KE uporabimo tam, kjer je gradient primarne spremenljivke večji. Več kot imamo vozlišč bolj natančna bo rešitev.

## ***PREDAVANJE 9 : REŠEVANJE ČASOVNO ODVISNEGA PREVODA TOPLOTE***

### 1. Kako rešujemo časovno odvisne probleme?

Matematični popis fizikalnega dogajanja podaja vodilna enačba časovno odvisnega prevoda toplote v trdnini. Zaradi enostavnejšega prikaza obravnave časovno odvisnega temp. polja, obravanavamo v nadajevanju 1D prevod toplote pri konstantni prevodnosti $k$, gostoti $\rho$ in toplotni kapaciteti $c$ : $$k\frac{\partial^2 T(x,t)}{\partial x^2}+q_V(x,t) = \rho c\frac{\partial T(x,t)}{\partial t}\text{ , }x\in[0,L]\text{ in } t\geq 0$$
Pri časovno odvisnem problemu moramo poleg robnih pogojev določiti tudi začetno temperaturno stanje : $$T(x,t=0) = T_0(x)$$
Pri določitvi pracialnega odvoda temperature po času upoštevajmo, da funkcijske odvisnosti temperature od časa ne poznamo, zato se poslužimo diferenčnega zapisa parcialnega odvoda : $$\frac{\partial T(x,t)}{\partial t} \approx\frac{T(x,t+\Delta t) - T(x,t)}{\Delta t} = \frac{T(x, t_{k+1}) - T(x, t_k)}{\Delta t}$$
Moramo upoštevati, da je čas progresivna veličina ![[čas.png]]

Vodilno enačbo problema lahko zapišemo na sledeči način : $$k\frac{\partial^2T(x, t_{k+\beta})}{\partial x^2} + q_V(x, t_{k + \beta}) = \rho c\frac{T(x, t_{k+1}) - T(x,t_k)}{\Delta t}\text{ , } t_{k+\beta}\in[t_k, t_{k+1}]$$
Z izbiro keoficienta $\beta \in[0,1]$, določimo časovni trenutek v časovnem, intervalu $t_{k+\beta}\in[t_k, t_{k+1}]$ v katerem izpolnjujnemo DE. Aproksimativno vrednost temperature in volumske generacije toplote za izbrani časovni trenutek zapišemo : 

$$T(x, t_{k+\beta})=T(x, t_k)(1-\beta) + T(x, t_{k+1})\beta$$
$$q_V(x,t_{k+\beta}) = q_v(x, t_k)(1-\beta) + q_V(x, t_{k+1})\beta$$
![[dt.png]]
Poleg funkcijske odvisnosti temperature od časa, ne poznamo tudi funkcijske odvisnosti temperature od koordinate $x$, zato v nadaljevanju uporabimo za reševanje časovno odvisnega problema MKR in MKE. 
### 2. Reševanje časovno odvisnega prevoda toplote po MKR

V primeru 1D prevoda toplote v trdnini obravnavamo diskretne vrednosti temperature $T(x_i,t_k)$ v prostoru in času. 
![[tmkr.png]]

Vodilno enačbo problema : $$k\frac{\partial^2T(x, t_{k+\beta})}{\partial x^2} + q_V(x, t_{k + \beta}) = \rho c\frac{T(x, t_{k+1}) - T(x,t_k)}{\Delta t}\text{ , } t_{k+\beta}\in[t_k, t_{k+1}]$$
Zapišemo v diferenčni obliki za točko $x_i$ in časovni trenutek $t_{k+\beta}$ : $$\begin{multline}k\frac{T(x_{i+1},t_{k+\beta}) - 2T(x_i, t_{k+\beta}) + T(x_{i-1}, t_{k+\beta})}{\Delta x^2} + q_V(x_i, t_{k+\beta}) = \rho c\frac{T(x_i, t_{k+1}) - T(x_i, t_k)}{\Delta t} \\\text{ , }t_{k+\beta}\in[t_k,t_{k+1}]\end{multline}$$
Linearno aproksimacijo temperature in volumske generacije toplote v trenutku $t_{k+\beta}$ v odvisnosti od diskretnih vrednosti za časovna intervala $t_k$ in $t_{k+1}$ zapišemo kot : $$T(x, t_{k+\beta})=T(x, t_k)(1-\beta) + T(x, t_{k+1})\beta$$
$$q_V(x,t_{k+\beta}) = q_v(x, t_k)(1-\beta) + q_V(x, t_{k+1})\beta$$


### 3. Navedite značilnosti metode diferenčnega koraka naprej.

Za primer izbire $\beta = 0$, DE problema izpolnjujemo ***eksplicitno*** v točki $x_i$ v časovnem trenutku $t_k$ : $$k\frac{T(x_{i+1},t_{k}) - 2T(x_i, t_{k}) + T(x_{i-1}, t_{k})}{\Delta x^2} + q_V(x_i, t_{k}) = \rho c\frac{T(x_i, t_{k+1}) - T(x_i, t_k)}{\Delta t}$$
Grafično lahko diskretne vrednosti temperature, ki nastopajo v zgornji enačbi, prikažemo na sledeči način : 
![[beat0.png]]

Rdeč krogec predstavlja edino neznano vrednost $T(x_i, t_{k+1})$ v DE, medtem ko modri krogci predstavljajo že znane diskretne vrednosti temperature, ki nastopajo v diferenčni enačbi.

Ker je to edina neznanka v diferenčni enačbi jo lahko izrazimo : $$T(x_i, t_{k+1}) = T(x_i, t_k) + \frac{\Delta t}{\rho c}\biggr{[}k\frac{T(x_{i+1}, t_k) - 2T(x_i, t_k) + T(x_{i-1},t_k)}{\Delta x^2} + q_V(x_i, t_k)\biggr{]}$$
Enačba nam omogoča, da lahko izračunamo vse neznane diskretne vrednosti $T(x_i, t_{k+1})$ v časovnem trenutnku $t_{k+1}$ ***brez reševanja sistema enačb***.

Prikazani numerični postopek reševanja časovno odvisnega problema je poimenovan ***Forward-Difference Method*** oz. diferenčna metoda naprej.

Rezultati reševanja so ***pogojno numerično stabilni***. Za stabilno rešitev moramo izpolnjevati sledeča kriterija : $$\frac{k}{\rho c}\frac{\Delta t}{\Delta x^2}\leq0.5$$
$$\Delta t\leq\frac{\rho c}{2k}\Delta x^2$$
### 4. Navedite značilnosti metode diferenčnega koraka nazaj.

Če si izbiremo $\beta = 1$. Diferencialno enačbo problema v tem preimeru ***implicitno*** izpolnjujemo v točki $x_i$ v časovnem trenutku $t_{k+1}$ : $$k\frac{T(x_{i+1},t_{k+1}) - 2T(x_i, t_{k+1}) + T(x_{i-1}, t_{k+1})}{\Delta x^2} + q_V(x_i, t_{k+1}) = \rho c\frac{T(x_i, t_{k+1}) - T(x_i, t_k)}{\Delta t}$$
Grafično lahko diskretne vrednosti temperature, ki nastopajo v zgornji enačbi, prikažemo na sledeči način : 
![[nazaj.png]]
Rdeče pike predstavljajo neznane vrednosti v diferenčni enačbi in se nanašajo na časovni trenutek $t_{k+1}$, medem ko modra barva predstavlja že znano diskretno vrednost temperature, ki nastopa v diferečni enačbi.

V diferenčni enačbi so sedaj tri neznane vrednosti : 
- $T(x_{i-1}, t_{k+1})$
- $T(x_{i}, t_{k+1})$
- $T(x_{i+1}, t_{k+1})$
Enačbo lahko preuredimo tako, da so na levi strani enačaja vse neznane vrednosti, na desni pa vse znane : $$-\frac{k}{\Delta x^2}T(x_{i+1}, t_{k+1}) + \biggr{(}\frac{2k}{\Delta x^2} + \frac{\rho c}{\Delta t}\biggr{)}T(x_i, t_{k+1}) - \frac{k}{\Delta x^2} T(x_{i-1},t_{k+1}) = \frac{\rho c}{\Delta t}T(x_i, t_k) + q_V(x_i, t_{k+1})$$
Za keoficiente pred temperaturami lahko vpeljemo naslednje okrajšave : 
- $K_1^{BD} = -\frac{k}{\Delta x^2}$
- $K_2^{BD} = \frac{2k}{\Delta x^2} + \frac{\rho c}{\Delta t}$
- $C = \frac{\rho c}{\Delta t}$ 
S temi koeficienti lahko zgornjo enačbo zapišemo v krajši obliki : $$K_1^{BD}T(x_{i+1}, t_{k+1}) + K_2^{BD}T(x_i, t_{k+1}) + K_1^{BD}T(x_{i-1}, t_{k+1}) = C\space T(x_i, t_k) + q_V(x_i, t_{k+1})$$
Izraz omogoča izračun vseh neznanih diskretnih vrednosti temperature $T(x_i, t_{k+1})$ v časovnem trenutnku $t_{k+1}$ na način, da se tvori ***sistem linearnih enačb***, pri čemer mora biti število enačb enako številu neznanih diskretnih vrednosti. **V sistemu enačb morajo biti zajeti tudi robni pogoji.**

Numerični postopek reševanja problema se imenuje ***Backward-Difference method***. 

Rezultati reševanja so brezpogojno numerično stabilni.
### 5. Navedite značilnosti metode pod imenom Crank-Nicolson

Za primer ko je $\beta = 0.5$, diferencialno enačbo problema izpolnjujemo v točki $x_i$ v časovnem trenutku $t_{k+0.5}$ : 
$$k\frac{T(x_{i+1},t_{k+0.5}) - 2T(x_i, t_{k+0.5}) + T(x_{i-1}, t_{k+0.5})}{\Delta x^2} + q_V(x_i, t_{k+0.5}) = \rho c\frac{T(x_i, t_{k+1}) - T(x_i, t_k)}{\Delta t}$$
Diskretne vrednosti temperature in generacije toplote v časovnem trenutku $t_{k+0.5}$ aproksimirajmo upoštevajoč linearno interpolacijo : $$T(x, t_{k+0.5})=T(x, t_k)\space0.5 + T(x, t_{k+1})\space0.5$$
$$q_V(x,t_{k+0.5}) = q_v(x, t_k)\space0.5 + q_V(x, t_{k+1})\space0.5$$
V diferenčni enačbi lahko tako nadomestimo diskretne vrednosti temperature vezane na časovni trenutek $t_{k+0.5}$ : $$\begin{multline}k\frac{[T(x_{i+1}, t_k)\space0.5 + T(x_{i+1},t_{k+1})\space0.5] - 2\space[T(x_{i}, t_k)\space0.5 + T(x_{i},t_{k+1})\space0.5]+ [T(x_{i-1}, t_k)\space0.5 + T(x_{i-1},t_{k+1})\space0.5]}{\Delta x^2} + \\ +[q_V(x_i, t_k)\space0.5 + q_V(x_i, t_{k+1})\space0.5] = \rho c\frac{T(x_i, t_{k+1}) - T(x_i, t_k)}{\Delta t} \end{multline}$$
Grafično lahko diskretne vrednosti temperature, ki nastopajo v zapisani enačbi prikažemo na sledeči način : 
![[cn.png]]
V diferenčni enačbi so tri neznane vrednosti (rdeče pike). Enačbo preuredimo tako, da neznane vrednosti nastopajo na levi strani enačaja : $$\begin{multline}\frac{k}{2\Delta x^2}T(x_{i+1}, t_{k+1}) - \biggr{(}\frac{k}{\Delta x^2} + \frac{\rho c}{\Delta t}\biggr{)}T(x_i, t_{k+1}) + \frac{k}{2\Delta x^2}T(x_{i}, t_{k+1}) = \\ =-\frac{k}{2\Delta x^2}T(x_{x+1}, t_k) + \biggr{(}\frac{k}{\Delta x^2}-\frac{\rho c}{\Delta t}\biggr{)}T(x_i, t_k) - \frac{k}{2\Delta x^2}T(x_{i_1}, t_k) + [q_V(x, t_k)\space 0.5 + q_V(x_i, t_{k+1})\space0.5]\end{multline}$$
Za keoficiente pred temperaturami lahko vpeljemo naslednje okrajšave : 
- $K_1^{CN} = \frac{k}{2\Delta x^2}$
- $K_2^{CN} = \frac{k}{\Delta x^2} + \frac{\rho c}{\Delta t}$
- $K_3^{CN} = \frac{k}{\Delta x^2} - \frac{\rho c}{\Delta t}$
- $C = \frac{\rho c}{\Delta t}$ 
Z novimi konstantami lahko zapišemo skrajšano obliko enačbe v točki $x_i$ in časovnem trenutku   $t_{k+1}$ : $$\begin{multline}K_1^{CN} T(x_{i+1},t_{k+1}) - K_2^{CN}T(x_i, t_{k+1}) + K_1^{CN}T(x_{i-1}, t_{k+1}) = \\ = -\biggr{[}K_1^{CN}T(x_{i+1},t_k) - K_3^{CN}T(x_i,t_k) + K_1^{CN}T(x_{i-1}, t_k)\biggr{]} + \biggr{[}q_V(x_i, t_k)\space 0.5 + q_V(x_i, t_{k+1}) \space 0.5\biggr{]}\end{multline}$$
Izraz omogoča izračun vseh neznanih diskretnih vrednosti temperature $T(x_i, t_{k+1})$ v časovnem trenutku $t_{k+1}$ na način, da se tvori ***sistem linearnih enačb***, pri čemer mora biti število enačb enako številu neznanih diskretnih vrednosti. V sistemu enačb morajo biti zajeti robni pogoji.

Prikazana metoda se imenuje ***Crank-Nicolson (CN)*** metoda. Od vseh treh navedenih metod je najbolj natančna in je ***brezpogojno numerično stabilna***.
### 6. Reševanje časovno odvisnega prevoda toplote po MKE.

Izhodišče je diferencialna enačba problema : $$k\frac{\partial^2T(x, t_{k+\beta})}{\partial x^2} + q_V(x, t_{k+\beta}) = \rho c\frac{T(x, t_{k+1}) - T(x, t_k)}{\Delta t}$$


Enačbo preoblikujemo v šibko obliko integralske formulacije, ki se, v primeru upoštevanja časovne odvisnosti za 1D primer prevoda toplote v trdnini zapiše kot : $$\begin{multline} k\int_0^L\frac{\partial \tilde T_e(x_e, t_{k+\beta})}{\partial x_e}\frac{dv(x_e)}{dx_e}dx_e = -Q_e(L, t_{k + \beta})v(L) + Q_e(0, t_{k+\beta})v(0) + \\+\int_0^Lq_V(x_e, t_{k+\beta})v(x_e)dx_e - \int_0^L\rho c\frac{\tilde T_e(x_e, t_{k+1}) - \tilde T_e(x_e, t_k)}{\Delta t}v(x_e)dx_e\text{ , }t_{k+\beta} \in [t_k, t_{k+1}]\end{multline}$$
Formula se nanaša na posamezni KE v časovnem trenutku $t_{k+\beta}$. 

Enačbo izpeljujemo za dvo-vozliščni KE, s katerim lahko obravnavamo 1D prostorsko in časovno spreminjanje temperature. Grafično lahko dvo-vozliščni KE prikažemo na naslednji način : 
![[tKE.png]]

Raporeditev temperature v KE v trenutku $t_{k+\beta}$ je podana z aproksimacijo : $$\tilde T_e(x_e, t_{k+\beta})= T_1^e(t_{k+\beta})\biggr{(}1-\frac{x_e}{L}\biggr{)} + T_2^e(t_{k+\beta})\biggr{(}\frac{x_e}{L}\biggr{)}$$
V skladu z Galerkinovim pristopom izberemo za funkciji $v(x_e)$:
- $v_1(x_e) = 1- \frac{x_e}{L}$
- $v_2(x_e) = \frac{x_e}{L}$
V analizi časovno ustaljenega prevoda toplote smo že uporabili dvo-vozliščni KE, tako da matrično obliko dela enačbe, v katerem ni prispevka časovne toplotne inercije materiala, že poznamo :  $$\begin{multline}\frac{k}{L}\begin{bmatrix}1&-1\\-1&1\end{bmatrix} \begin{Bmatrix}T_1^e(t_{k+\beta})\\T_2^e(t_{k+\beta})\end{Bmatrix} = \begin{Bmatrix}Q_1^e(t_{k+\beta})\\-Q_2^e(t_{k+\beta})\end{Bmatrix} + \begin{Bmatrix}Q_{1V}^e(t_{k+\beta})\\Q_{2V}^e(t_{k+\beta})\end{Bmatrix} - \int_0^L\rho c\frac{\tilde T_e(x_e, t_{k+1}) - \tilde T_e(x_e, t_k)}{\Delta t}\begin{Bmatrix}v_1(x_e)\\v_2(x_e)\end{Bmatrix}dx_e\end{multline}$$

Izvrednotimo integral : $$\int_0^L\rho c\frac{\tilde T_e(x_e, t_{k+1}) - \tilde T_e(x_e, t_k)}{\Delta t}\begin{Bmatrix}v_1(x_e)\\v_2(x_e)\end{Bmatrix}dx_e$$
Upoštevajoč aproksimacijo temperature za primer dvo-vozliščnega KE : $$\tilde T_e(x_e, t_{k})= T_1^e(t_{k})\biggr{(}1-\frac{x_e}{L}\biggr{)} + T_2^e(t_{k})\biggr{(}\frac{x_e}{L}\biggr{)}$$
$$\tilde T_e(x_e, t_{k+1})= T_1^e(t_{k+1})\biggr{(}1-\frac{x_e}{L}\biggr{)} + T_2^e(t_{k+1})\biggr{(}\frac{x_e}{L}\biggr{)}$$
Matrični zapis izvrednotenega integrala je oblike : $$\int_0^L\rho c\frac{\tilde T_e(x_e, t_{k+1}) - \tilde T_e(x_e, t_k)}{\Delta t}\begin{Bmatrix}v_1(x_e)\\v_2(x_e)\end{Bmatrix}dx_e = \frac{\rho c L}{\Delta t}\begin{bmatrix}2&1\\1&2\end{bmatrix}\begin{Bmatrix}T_1^e(t_{k+1}) - T_1^e(t_k)\\T_2^e(t_{k+1}) - T_2^e(t_k)\end{Bmatrix}$$
Na krajše : $$[K_e]\{T^e(t_{k+\beta})\}\Delta t = \{Q^e(t_{k+\beta})\} \Delta t + \{Q^e_V(t_{k+\beta})\} \Delta t - [C_e]\{T^e(t_{k+1}) - T^e(t_k) \}$$
Linearno aproksimacijo diskretne vrednosti temperature, toplotnega toka in volumske generacije toplote v časovnem trenutku $t_{k+\beta}$ v odvisnosti od diskretnih vrednosti za časovne trenutke $t_k$ in $t_{k+1}$ zapišemo :  $$T_i^e(x_i, t_{k+\beta}) = T_i^e(x_i, t_k)(1-\beta) + T_i^e(x_i, t_{k+1})\beta$$$$Q_i^e(x_i, t_{k+\beta}) = Q_i^e(x_i, t_k)(1-\beta) + Q_i^e(x_i, t_{k+1})\beta$$
$$Q_{iV}^e(x_i, t_{k+\beta}) = Q_{iV}^e(x_i, t_k)(1-\beta) + Q_{iV}^e(x_i, t_{k+1})\beta$$
Glede na izbiro konstante $\beta$ lahko problem naprej rešujemo z diferenčno metodo naprej, nazaj ali pa po Crank-Nicolson metodi - bolj detajlen postopek v eučilnici.
### 7.  Od česa zavisi velikost stabilnega koraka pri metodi diferenčnega koraka naprej?

Pri metodi diferenčnega koraka naprej je velikost stabilnega koraka odvisna od gostote medija $\rho$, njegove specifične toplote $c$ , gostote mreže $\Delta x$ in časovnega koraka $\Delta t$ : $$\frac{k}{\rho c}\frac{\Delta t}{\Delta x^2}\leq0.5$$
$$\Delta t\leq\frac{\rho c}{2k}\Delta x^2$$
### 8. Posebnost reševanja časovno odvisnega prevoda toplote po MKE z metodo diferenčnega koraka naprej?

Ob izbiri koeficienta $\beta = 0$, diferencialno enačbo problema izpolnjujemo v območju KE v časovnem trenutku $t_k$ : 
![[mke naprej.png]]
Rdeči krogci so vozlišča KE, kjer je vrednost temperature neznana v časovnem trenutku $t_{k+1}$. Z modro barvo so obarvana vozlišča, kjer je vrednost temperature poznana. 

Matrični zapis enačbe preide iz : $$[K_e]\{T^e(t_{k+\beta})\}\Delta t = \{Q^e(t_{k+\beta})\} \Delta t + \{Q^e_V(t_{k+\beta})\} \Delta t - [C_e]\{T^e(t_{k+1}) - T^e(t_k) \}$$ na : $$[K_e]\{T^e(t_{k})\}\Delta t = \{Q^e(t_{k})\} \Delta t + \{Q^e_V(t_{k})\} \Delta t - [C_e]\{T^e(t_{k+1}) - T^e(t_k) \}$$
Enačbo preuredimo, da so neznane vrednosti na levi strani enačaja : $$[C_e]\{T^e(t_{k+1}\} = \biggr{[}[C_e] - [K_e]\Delta t\biggr{]}\{T^e(t_k)\} + \{Q^e(t_k)\} + \{Q_V^e(t_k)\}\Delta{t}$$
Dobljeni sistem enačb lahko razširimo na celotno domeno in seštejemo posamezne prispevke KE. Tako dobimo sistem enačb celotnega problema : $$[C]\{T(t_{k+1}\} = \biggr{[}[C] - [K]\Delta t\biggr{]}\{T(t_k)\} + \{Q(t_k)\} + \{Q_V(t_k)\}\Delta{t}$$
Dobljeni sistem enačb nam omogoča izračun vozliščnih vrednosti temperature $T(x_i, T_{k+1})$ v časovnem trenutku $t_{k+1}$. Seveda brez reševanja celotnega sistema enačb v tem primeru ne gre.

Lahko se izognemo reševanju sistema enačb z diagonalizacijo matrike $[C]$. Izvedemo jo tako, da najprej diagonaliziramo matriko elementa $[C_e]$ : $$[C_e] = \frac{\rho c L}{6}\begin{bmatrix}2&1\\1&2\end{bmatrix} \approx \frac{\rho c L}{6}\begin{bmatrix}2+1&0\\0&1+2\end{bmatrix} = \frac{\rho c L}{6}\begin{bmatrix}3&0\\0&3\end{bmatrix}$$
Z razširitvijo na vse prostostne stopnje problema in s seštevanjem prispevkov posameznih KE dobimo diagonalizirano matriko $[C]$  : $$[C]\approx[D] = \begin{bmatrix}D_{11}&0&...&0\\0&D_{22}&...&0\\...&...&...&...\\0&0&...&D_{nn}\end{bmatrix}$$
Razširjena matrika omogoča zapise enačbe KE na sledeč način : $$[D]\{T(t_{k+1})\} = \biggr{[}[D] - [K]\Delta t\biggr{]}\{T(t_k)\} + \{Q(t_k)\} \Delta t + \{Q_V(t_k)\}\Delta t$$
Enačba nam z diagonalizirano matriko omogoča izračun vseh diskretnih vrednosti temperature $T(x_i, t_{k+1})$ v časovnem trenutku $t_{k+1}$ ***brez reševanja sistema enačb***.

## ***PREDAVANJE 10 : METODA KONČNIH VOLUMNOV***

### 1.  Izpeljava izhodiščne enačbe za MKV za primer reševanja nestacionarnega prevoda toplote v trdnini.

Metodo končnih volumnov (***MKV***) bomo prikazali na primeru prevoda toplote v trdnini. 

Izhodiščno enačbo problema predstavlja sledeča enačba : $$\frac{\partial}{\partial x}\biggr{(}k\frac{\partial T}{\partial x}\biggr{)}+\frac{\partial}{\partial y}\biggr{(}k\frac{\partial T}{\partial y}\biggr{)}+\frac{\partial}{\partial z}\biggr{(}k\frac{\partial T}{\partial z}\biggr{)} + q_V = \rho c\frac{\partial T}{\partial t}$$ Enačbo lahko zapišemo tudi v sledeči obliki : $$div[k\space grad(T)] = -q_V + \rho c\frac{\partial T}{\partial t}$$
Izvedemo integracijo diferencialne enačbe po obravnavanem območju $\Omega$ in dobimo : $$\int_{\Omega}div[k\space grad(T)] d\Omega = \int_{\Omega}\biggr{[}-q_V + \rho c\frac{\partial T}{\partial t}\biggr{]}d\Omega$$
V skladu z ***divergenčnim teoremom (Gaussov izrek)***, lahko integral po območju $\Omega$ prevedemo v integral po površini obravnavanega območja $\Gamma$  : $$\int_{\Omega}div[k\space grad(T)]d\Omega = \int_{\Gamma}k\space grad(T)\space \hat{n}\space d\Gamma$$
![[Pasted image 20241228114008.png]]
Velja vedeti, da divergenčni teorem ni aproksimacija!

Izhodiščno enačbo za ***metodo končnih volumnov*** tako zapišemo kot : $$\int_{\Gamma}k\space grad(T)\space \hat n \space d\Gamma = \int_{\Omega}\biggr{[}-q_V + \rho c\frac{\partial T}{\partial t}\biggr{]}d\Omega$$
### 2. Izpeljava enačbe za posamezni KV za primer reševanja nestacionarnega prevoda toplote v trdnini.

Omejimo se na 1D primer nestacionarnega prevoda toplote, pri čemer so $k\text{ , }\rho\text{ , }c = konst$. V takšnem primeru izkazuje temperaturno polje lastnost : $$T = T(x,t)$$
Gradient temperature je v tem primeru enak : $$grad(T(x,t)) = \biggr{(}\frac{\partial T(x,t)}{\partial x},0,0\biggr{)}$$
Integralska enačba pa se preoblikuje v obliko : $$\int_{\Gamma}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma = \int_0^L\biggr{[}-q_V + \rho c\frac{\partial T}{\partial x}\biggr{]}A dx$$
Pri čemer je $A$ ploščina prereza z normalo v $x$ smeri.

Obravnavano območje $X\in[0,L]$ razdelimo na podobmočja $x_v\in[0,L_v]$ , imenovana ***končni volumni*** (KV) ($v=i$). Vsakemu KV pripada ***lokalni koordinatni sistem*** $x_v$.

V podobmočju posameznega KV se nahaja ***točka*** KV ($p=j$), v kateri se določa disktretna vrednost primarne spremenljivke, ki je v obravnavanem primeru vrednost temperature $T_p$.
![[Pasted image 20241228115401.png]]

Obravnavajmo posamezni KV v časovnem trenutku $t_{k+\beta}\in[t_k, t_{k+1}]$. Integral po celotnem območju nadomestiomo z vsoto integralov po posameznem KV : $$\sum_v\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma = \sum_v\int_0^{L_v}\biggr{[}-q_V + \rho c\frac{\partial T}{\partial t}\biggr{]}A\space dx$$
Ker ne poznamo funkcije temperature, lahko integral v vsoti na levi strani enačbe za posamezni KV aproksimativno zapišemo : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx\biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^+} (T_{p+1}(t_{k +\beta}) - T_p(t_{k+\beta}))\biggr{]}-\biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^-} (T_{p}(t_{k +\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]}$$
![[Pasted image 20241228120155.png]]

Integral v vsoti na desni strani pa za posamezni KV aproksimativno zapišemo : $$\int_0^{L_v}\biggr{[}-q_V + \rho c\frac{\partial T}{\partial t}\biggr{]}\space A\space dx \approx -(q_V(t_{k+\beta}))_p\space A_pL_v + \rho c\frac{T_p(t_{k+1}) - T_p(t_k)}{\Delta t}A_pL_v$$
![[Pasted image 20241228120544.png]]

Enačbo za posamezni KV sedaj zapišemo kot : $$\begin{multline}\biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^+} (T_{p+1}(t_{k +\beta}) - T_p(t_{k+\beta}))\biggr{]}-\biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^-} (T_{p}(t_{k +\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]} = \\ =   -(q_V(t_{k+\beta}))_p\space A_pL_v + \rho c\frac{T_p(t_{k+1}) - T_p(t_k)}{\Delta t}A_pL_v\end{multline}$$
Za krajši zapis lahko vpeljemo še nekaj konstant : $$K_v^+ = \biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^+}\text{ , }K_v^- = \biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^-}\text{, }V_v = A_pL_v\text{ , }C_v = \frac{\rho c V_v}{\Delta t}$$
Krajši zapis enačbe : 
$$K_v^+T_{p+1}(t_{k+\beta}) - (K_v^+ + K_v^-)T_p(t_{k+\beta}) + K_v^-T_{p-1}(t_{k+\beta}) = -(q_V(t_{k\beta}))_pV_v+C_v[T_p(t_{k+1}) - T_p(t_k)]$$
![[Pasted image 20241228121330.png]]

### 3. Kako so upoštevani robni pogoji pri MKV?

Obravnavajmo robne pogoje, ki se nanašajo na 1D prevod toplote v trdnini v skladu z MKV. Enačba za KV, ki se nahaja na robu obravnavanega območja, vključuje tudi robne pogoje. 

V primeru, ko je na robu območja poznana ***temperatura*** $T_\Gamma(t)$, integral na levi strani enačaja v enačbi za posamezni KV, ki se nahaja na robu območja in je robna vrednost poznana na meji $m^-$ - na levi , zapišemo : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^+}(T_{p+1}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^-}(T_{p}(t_{k+\beta}) - T_\Gamma(t_{k+\beta}))\biggr{]} $$
![[Pasted image 20241228122049.png]]

Če je robni pogoj poznan na meji $m^+$, potem integral zapišemo tako : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^+}(T_{\Gamma}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^-}(T_{p}(t_{k+\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]} $$
![[Pasted image 20241228122206.png]]

V primeru, ko je na robu območja poznan toplotni tok $q_\Gamma(t)$, integral na levi strani enačaja v enačbi za posamezni KV, ki se nahaja na robu obravnavanega območja in je robna vrednost poznana na meji $m^-$ , zapišemo : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx\biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^+}(T_{p+1}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - q_\Gamma(t_{k+\beta})(A)_{m^-}$$

![[Pasted image 20241228122441.png]]

Če je robna vrednost poznana na meji $m^+$, potem integral zapišemo v obliki : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx q_\Gamma (t_{k+\beta})(A)_{m^+} \space - \space \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^-}(T_{p}(t_{k+\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]}$$

![[Pasted image 20241228122742.png]]

V primeru, ko je rob območja izpostavljen ***konvektivnemu toplotnemu toku*** $q_\Gamma(t) = -h_f[T_f(t) - T(t)]$ , integral na levi strani enačaja v enačbi za posamezni KV, ki se nahaja na robu obravnavanega območja in je robna vrednost poznana na meji $m^-$ , zapišemo : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx \biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^+}(T_{p+1}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - q_\Gamma(t_{k+\beta}) (A)_{m^-}$$
Kjer je $q_\Gamma(t_{k+\beta})$ : $$q_\Gamma(t_{k+\beta}) = \frac{T_p(t_{k+\beta}) - T_f(t_{k+\beta})}{((\frac{k}{\Delta X_v^-})^{-1} + (h_f)^{-1})_{m^-}}$$
![[Pasted image 20241228123622.png]]

Če je robna vrednost toplotnega toka poznana na meji $m^+$ , potem integral zapišemo v sledeči obliki : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx q_\Gamma(t_{k+\beta}) (A)_{m^+} \space - \space \biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^-}(T_p(t_{k+\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]} $$
Kjer je $q_\Gamma(t_{k+\beta})$ : $$q_\Gamma(t_{k+\beta}) = \frac{T_p(t_{k+\beta}) - T_f(t_{k+\beta})}{((\frac{k}{\Delta X_v^+})^{-1} + (h_f)^{-1})_{m^+}}$$

Pri upoštevanju konvekcije na robu obravnavanega območja moramo upoštevati da temperatura na robu $T_r$ ni neznanka problema pri obravnavanju z MKV.

![[Pasted image 20241228124111.png]]

### 4. Kako izpolnimo pogoje konsistentnosti prehoda pri MKV?

***Pogoj konsistentnega prehoda*** na meji med ***končnima volumnoma*** v primeru, ko gre za spremembo toplotne prevodnosti $k$ , izpolnimo tako, da izračunamo nadomestno toplotno prevodnost, ki velja za mejo med njima : $$k_m = \frac{2}{\biggr{(}\frac{1}{k_p} + \frac{1}{k_{p+1}}\biggr{)}}$$

![[Pasted image 20241228124527.png]]


### 5. Kako je upoštevana znana temperatura na robu obravnavanega območja pri MKV?

V primeru, ko je na robu območja poznana ***temperatura*** $T_\Gamma(t)$, integral na levi strani enačaja v enačbi za posamezni KV, ki se nahaja na robu območja in je robna vrednost poznana na meji $m^-$ - na levi , zapišemo : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^+}(T_{p+1}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^-}(T_{p}(t_{k+\beta}) - T_\Gamma(t_{k+\beta}))\biggr{]} $$
![[Pasted image 20241228122049.png]]

Če je robni pogoj poznan na meji $m^+$, potem integral zapišemo tako : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^+}(T_{\Gamma}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^-}(T_{p}(t_{k+\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]} $$
![[Pasted image 20241228122206.png]]

### 6. Kako je upoštevan znani toplotni tok na robu obravnavanega območja pri MKV?

V primeru, ko je na robu območja poznan toplotni tok $q_\Gamma(t)$, integral na levi strani enačaja v enačbi za posamezni KV, ki se nahaja na robu obravnavanega območja in je robna vrednost poznana na meji $m^-$ , zapišemo : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx\biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^+}(T_{p+1}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - q_\Gamma(t_{k+\beta})(A)_{m^-}$$

![[Pasted image 20241228122441.png]]

Če je robna vrednost poznana na meji $m^+$, potem integral zapišemo v obliki : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx q_\Gamma (t_{k+\beta})(A)_{m^+} \space - \space \biggr{[}\biggr{(}\frac{k A}{\Delta X_v}\biggr{)}_{m^-}(T_{p}(t_{k+\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]}$$

![[Pasted image 20241228122742.png]]

### 7.  Kako je upoštevan konvektivni toplotni tok na robu obravnavanega območja pri MKV?

V primeru, ko je rob območja izpostavljen ***konvektivnemu toplotnemu toku*** $q_\Gamma(t) = -h_f[T_f(t) - T(t)]$ , integral na levi strani enačaja v enačbi za posamezni KV, ki se nahaja na robu obravnavanega območja in je robna vrednost poznana na meji $m^-$ , zapišemo : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx \biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^+}(T_{p+1}(t_{k+\beta}) - T_p(t_{k+\beta}))\biggr{]} - q_\Gamma(t_{k+\beta}) (A)_{m^-}$$
Kjer je $q_\Gamma(t_{k+\beta})$ : $$q_\Gamma(t_{k+\beta}) = \frac{T_p(t_{k+\beta}) - T_f(t_{k+\beta})}{((\frac{k}{\Delta X_v^-})^{-1} + (h_f)^{-1})_{m^-}}$$
![[Pasted image 20241228123622.png]]

Če je robna vrednost toplotnega toka poznana na meji $m^+$ , potem integral zapišemo v sledeči obliki : $$\int_{\Gamma_v}k\frac{\partial T}{\partial x}\space n_x\space d\Gamma \approx q_\Gamma(t_{k+\beta}) (A)_{m^+} \space - \space \biggr{[}\biggr{(}\frac{kA}{\Delta X_v}\biggr{)}_{m^-}(T_p(t_{k+\beta}) - T_{p-1}(t_{k+\beta}))\biggr{]} $$
Kjer je $q_\Gamma(t_{k+\beta})$ : $$q_\Gamma(t_{k+\beta}) = \frac{T_p(t_{k+\beta}) - T_f(t_{k+\beta})}{((\frac{k}{\Delta X_v^+})^{-1} + (h_f)^{-1})_{m^+}}$$

Pri upoštevanju konvekcije na robu obravnavanega območja moramo upoštevati da temperatura na robu $T_r$ ni neznanka problema pri obravnavanju z MKV.

![[Pasted image 20241228124111.png]]

### 8. Primerjajte MKV z MKE.

V obeh primerih metoda temelji na ***integralski formulaciji***, kar pomeni, da so zajete vse točke obravnavanega območja. Na robu obravnavanega območja pri MKE ***eksaktno*** izpolnjujemo tako primarno kot tudi sekundarno spremenljivko. Pri MKV pa eksaktno izpolnjujemo le ***sekundarno spremenljivko***, primarno pa aproksimiramo. To je zato, ker je točka, v kateri določamo temperaturo KV nekje v notranjosti KV in ne na robu. 

Na prehodu med podobmočji pri MKE primarno spremenljivko popisujemo z vozlišno vrednostjo KE, sekundarno pa z razliko veličine v vozlišču. Pri MKV, pa je pogoj prehoda vedno izpolnjen, kadar nimamo ponorov ali izvorov toplote $q_V$ in kadar nimamo sprememb keficienta toplotne prevodnost $k$. Če pride do spremembe toplotne prevodnosti med podobmočji, moramo izračunati ***nadomestno toplotno prevodnost*** - $k_m$ na meji med KV.
### 9. Primerjajte MKV z MKR.

V primeru MKV je osnova metode ***integralska formulacija***, ki zajema vse točke opaznovanega območja.  Pri MKR pa DE izpolnjujemo v ***diskretnih točkah*** s pomočjo aproksimacije s centralno diferenčno shemo. Na robu območja pri MKR primarno spremenljivko ***eksaktno popišemo***, sekundarno pa ***aproksimiramo***. Pri MKV je ravno obratno. 

Na prehodu med podobmočji pri MKR primarno veličino na robu enega podobmočja enačimo s primarno veličino na robu drugega podobmočja, sekundarno veličino pa popišemo z aproksimacijo s pomočjo dodatnih točk. Pri MKV pa je pogoj prehoda vedno izpolnjen, kadar nimamo $q_v$ in spreminjajočega se $k$. Če pride do spremembe toplotne prevodnosti med podobmočji, moramo izračunati ***nadomestno toplotno prevodnost*** - $k_m$ na meji med KV.

## ***PREDAVANJE 11 : STATIKA ENOOSNIH UPOGIBNO OBREMENJENIH ELEMENTOV***

### 1. Analizirajte vpliv temperaturne obremenitve na deformacijsko-napetostno stanje v konstrukcijskem elementu.

Analizirajmo raven enoosni element dolžine $L$ spremenljivega prečnega prereza $A(x)$ in vztrajnostnega momenta $I_y(x)$ iz linearno elastičnega materiala, ki je v krajiščih $J$ in $K$ obremenjen s točkovnima silama $F_z^J$ in $F_z^K$ , in točkovnima momentoma $M_y^J$ in $M_y^K$ ter vzdolž osi elementa z zvezno porazdeljeno prečno obremenitvijo $p_z(x)$, pri čemer je element vzdolž osi izpostavljen tudi temperaturni spremembi $\Delta T(x,z)$, ki se po višini prereza ***spreminja linearno***. V neobremenjenem stanju je element v termičnem ravnotežju pri temperaturi okolice $\vartheta_0$. Snovni lastnosti sta modul elastičnosti $E$ in temperaturni razteznostni koeficient $\alpha$ . Upogibna obremenitev deluje v ravnini, ki jo določata težiščna os elementa in glavna vztrajnostna os prereza.

![[Pasted image 20241228183532.png]]

Analiza vpliva linearne temperaturne spremembe po prerezu elementa : 

![[Pasted image 20241228183625.png]]

Od leve proti desni imamo : 
- [ ] ***FIKSNO VPETA VLAKNA*** : ne morejo se premakinti, zato je $\varepsilon_{xx} = 0\rightarrow$ zaradi tega se ustvarijo napetosti $\sigma_{xx}$ 
- [ ] ***PROSTO VPETA VLAKNA*** : nimamo vpetja zato pride le do spremembe dolžine vlaken. $\sigma_{xx} = 0$
- [ ] ***POVEZANA VLAKNA*** : zaradi različnih sprememb dolžine posameznih vlaken pride do upogibnih deformacij. $\sigma_{xx} = 0$. To velja le če se temperatura po prerezu spreminja linearno. 

Naj bosta $\vartheta^+(x)$ , $\vartheta^-(x)$ temperaturi obeh skrajnih površin oz. vlaken prereza $A(x)$ na razdalji $h(x)$ v smeri $z$. Linearno spreminjanje temperature $\vartheta(x,z)$ po višini prereza lahko zapišemo kot vsoto : $$\vartheta(x,z) = \vartheta(x,0) + \frac{(\vartheta^+(x) - \vartheta^-(x))}{h(x)}z$$

![[Pasted image 20241228184502.png]]

Glede na termično ravnovesno stanje pri $\vartheta_0$ je temperaturna sprememba $\Delta T(x,z)$ določena z : $$\Delta T(x,z) = \vartheta(x,z) - \vartheta_0 = \Delta T_x(x) + \Delta T_z(x,z) $$
$$\Delta T_x(x) = \vartheta(x,0) - \vartheta_0\text{ ; }\Delta T_z(x,z) = \Delta \vartheta_{zh}(x) z$$
Kjer smo vpeljali enačbo : $$\Delta\vartheta_{zh}(x) = \frac{(\vartheta^+(x) - \vartheta^-(x))}{h(x)}$$
Kar predstavlja spremembo temperature po višini.

![[Pasted image 20241228184953.png]]
### 2. Izpeljava diferencialne enačbe za primer enoosnih upogibno obremenjenih konstrukcijskih elementov.

Od koordinate $z$ neodvisna sprememba $\Delta T_x(x)$ vpliva na enakomerno dilatacijo vseh točk v prerezu, ne pa na upogibno deformiranje elementa, zato v nadaljevanju upoštevamo le upogibni del temperaturne spremembe $\Delta T_z(x,z)$ : $$\Delta T_z(x,z) = \Delta \vartheta_{zh}(x)z$$
V analizi upogiba enoosnega elementa moramo upoštevati vodilne enačbe problema, ki izhajajo iz:
- [ ] Statičnega ravnotežja vseh obremenitev
- [ ] Deformacijske konsistentnosti
- [ ] Konstitucijskega obnašanja

Diferencialno enačbo problema izpeljemo z obravnavo diferencialno majhnega elementa v koordinatnem sistemu, ki ga določajo težiščna os elementa ter glavne vztrajnostne osi prereza. Glede na spremenljivost geometrijskih karakteristik prereza $A(x)\text{ , }I(x)$ vzdolž osi elementa je potrebno še predpostaviti, da ležijo vsa težišča prerezov na premici ter da se usmerjenost glavnih vztrajnostnih momentov osi vzdolž prereza ne spreminja.

***STATIČNO RAVNOTEŽJE*** : 
![[Pasted image 20241228185819.png]]

***DEFORMACIJSKA KONSISTENTNOST GLEDE NA POVES ELEMENTA*** : 
![[Pasted image 20241228185928.png]]

***KONSTITUCIJSKO OBNAŠANJE - HOOKE-OV ZAKON*** : $$\sigma_{xx} = E\varepsilon_{xx}^{\sigma}\text{  ,  }\sigma_{xx} = \frac{M_y}{I_y} z\rightarrow M_y = \frac{EI_y\varepsilon_{xx}^\sigma}{z}$$
Iz zgornjih enačb lahko izpeljemo vodilno enačbo problema : 

Kot prvo lahko združimo formulo za moment $M_y$ in deformacijo $\varepsilon_{xx}^\sigma$ - enako kot pri osno obremenjenih nosilcih moramo upoštevati še temperaturno obremenitev :
$$M_y = \frac{EI_y\varepsilon_{xx}^\sigma}{z} \land \varepsilon_{xx}^\sigma = -z\biggr{(}\frac{d^2w}{dx^2} + \alpha \Delta\vartheta_{zh}\biggr{)}\rightarrow M_y = - EI_y\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}$$
Iz enačbe za statično ravnotežje lahko zapišemo : $$\frac{dT_z}{dx} = \frac{d}{dx}\biggr{(}\frac{dM_y}{dx}\biggr{)} = -p_z(x)\rightarrow\frac{d^2M_y}{dx^2} = -p_z(x)$$
V enačbo lahko vstavimo še formulo za upogibni moment in dobimo vodilno enačbo problema : $$\frac{d^2}{dx^2}\biggr{[}EI_y\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]} = p_z(x)\text{ , }x\in[0,L]$$
z upogibkom $w(x)$ kot osnovno spremenljivko problema. 

Bolj splošno - za vse primere upogibno obremenjenih elementov lahko enačbo zapišemo : $$\frac{d^2}{dx^2}\biggr{[}EI\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{h}\biggr{)}\biggr{]} = p(x)\text{ , }x\in[0,L]$$
Enačba je navadna diferencialna enačba četrtega reda in v celoti določa spreminjanje funkcije prečnega pomika, t.j. upogibka $w(x)$ ter naklon $\varphi(x)$ upogibnice. Poleg tega določa tudi spreminjanje notranjih sil - prečne sile $T(x)$ in upogibnega momenta $M(x)$ vzdolž enoosnega elementa.

Fizikalne spremenljivke problema so:
- [ ] Upogibek $w(x)$ - osnovna primarna spremenljivka
- [ ] Naklon $\varphi(x)$ - druga osnovna spremenljivka
***PRIMARNI SPREMENLJIVKI SKUPAJ TVORITA DEFORMACIJSKI VELIČINI***
- [ ] Moment $M(x)$ - prva sekundarna spremenljivka
- [ ] Prečna sila $T(x)$ - druga sekundarna spremenljivka
***SEKUNDARNI SPREMNLJIVKI SKUPAJ TVORITA STATIČNI VELIČINI***

Veličine nastopanjo v konjugiranih parih : 
$$w(x)\leftrightarrow T(x) \text{ in }\varphi (x) \leftrightarrow M(x)$$

V odvisnosti od primarne spremenljivke $w(x)$ izrazimo preostale veličine : 
$$\varphi = \frac{dw}{dx} ; \text{ za }\biggr{|}\frac{dw}{dx}\biggr{|}\approx0 \rightarrow\varphi\approx \tan\varphi = \frac{dw}{dx}$$
$$M = -EI\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_h\biggr{)}$$
$$T = -\frac{d}{dx}\biggr{[}EI\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_h\biggr{)}\biggr{]}$$

Rešitev problema podaja vodilna enačba, ki pa vključuje le vpliv zvezno porazdeljene prečne obremenitve ter temperaturne spremembe vzdolž elementa.

Da bo rešitev vodilne enačbe konsistentna tudi s premiki in obremenitvami v krajiščih $J$ in $K$, ***mora rešitev zadostiti robnim pogojem na obeh krajiščih***.
### 3. Zapišite pogoje konsistentnega prehoda med dvema podobmočjema v primeru upogibno obremenjenega konstrukcijskega elementa.

Na meji med podobmočji morajo biti izpolnjeni ***pogoji konsistentnosti prehoda***, ki opredeljujejo obnašanje primarnih in sekundarnih spremenljivk problema ob prehodu iz enega podintervala v drugega.

Fizikalna konsistentnost problema se v primeru statične analize izkazuje :
- [ ] z ***zveznostjo porazdelitve snovnih točk vzdolž celotnega intervala*** $[0,L]$ ter njihovo nerazdružljivostjo, kar pogojuje tudi zveznost obeh primarnih spremenljivk $w(x)$ in $\varphi(x)$ na prehodu ($x = x_p$) med posameznimi podintervali : $$w_k(x_p) = w_{k+1}(x_p)$$ $$\varphi_k(x_p) = \varphi_{k+1}(x_{p})$$
- [ ] s ***statičnim ravnotežjem med zunanjimi obremenitvami in notranjimi silami*** vzdlož celotnega intervala $[0,L]$. V točkah, ki ne sovpadajo s krajišči podintervalov ($x\neq x_p$), je ravnotežje zagotovljeno z izpolnitvijo diferencialne enačbe problema. Izpolnitev ravnotežja v krajiščih podintervalov ($x=x_p$) pa daje naslednji pogojni enačbi : $$M_k(x_p) = M_{k+1}(x_p) + M_p$$ $$T_k(x_p) = T_{k+1}(x_p) + F_p$$ kjer sta $F_p$ in $M_p$ sila in moment morebitne koncentrirane obtežbe v točki $x=x_p$. ![[Pasted image 20241228204828.png]]

Iz zapisanih pogojev sledi, da sta sekundarni spremenljivki $M(x)$ in $T(x)$ nezvezni na meji med dvema intervaloma le v primeru, ko je meja obremenjena z ustrezno koncentrirano(točkovno) obtežbo. Skokovita sprememba sekundarne spremenljivke $M(x)$ je po velikosti enaka velikosti momenta $M_p$, sprememba sekundarne spremenljivke $T(x)$ pa velikosti sile $F_p$ - vidimo na dveh enačbah zgoraj.

Iz odvisnosti med sekundarno spremenljivko $M(x)$ in primarno spremenljivko $w(x)$ zapišemo : $$\biggr{(}EI\frac{d^2w}{dx^2}\biggr{)}_{k+1}\biggr{|}_{x=x_p} - \biggr{(}EI\frac{d^2w}{dx^2}\biggr{)}_{k}\biggr{|}_{x=x_p} = M_p - (EI\alpha\Delta\vartheta_h)_{k+1}|_{x=x_p} + (EI\alpha\Delta\vartheta_h)_{k}|_{x=x_p}$$
Iz odvisnosti med sekundarno spremenljivko $T(x)$ in primarno spremenljivko $w(x)$ zapišemo : $$\begin{multline}\biggr{[}\frac{d}{dx}\biggr{(}EI\frac{d^2w}{dx^2}\biggr{)}\biggr{]}_{k+1}\biggr{|}_{x=x_p} - \biggr{[}\frac{d}{dx}\biggr{(}EI\frac{d^2w}{dx^2}\biggr{)}\biggr{]}_{k}\biggr{|}_{x=x_p} =\\= F_p - \biggr{[}\frac{d(EI\alpha\Delta\vartheta_h)}{dx}\biggr{]}_{k+1}\biggr{|}_{x=x_p} +\biggr{[}\frac{d(EI\alpha\Delta\vartheta_h)}{dx}\biggr{]}_{k}\biggr{|}_{x=x_p}\end{multline} $$
Iz enačb opazimo, da morebitna zveznost sekundarnih spremenljivk $M(x)$ in $T(x)$ na meji med dvema podintervaloma še ne zagotavlja tudi zveznosti višjih odvodov (od drugega naprej) primarne spremenljivke $w(x)$.

---
Ni del vprašanja, ampak verjetno še vseeno dobro znati.

***Robni pogoji*** so definirani z znanimi velikostmi primarnih ali sekundarnih spremenljivk v obeh krajiščih : 
$x = x_J = 0$ : $$w_z(0) = w_J \space\space\space\text{ ali }\space\space\space T_z(0) = -\frac{d}{dx}\biggr{[}EI_y\biggr{(}\frac{d^2w_z}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}_{x=0} = -F_z^J$$
$$\varphi_y(0) = \varphi _J \space\space\space\text{ ali }\space\space\space M_y(0) = -\biggr{[}EI_y\biggr{(}\frac{d^2w_z}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}_{x=0} = -M_y^J$$
$x=x_K=L$ : $$w_z(L) = w_K \space\space\space\text{ ali }\space\space\space T_z(L) = -\frac{d}{dx}\biggr{[}EI_y\biggr{(}\frac{d^2w_z}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}_{x=L} = +F_z^K$$
$$\varphi_y(L) = \varphi _K \space\space\space\text{ ali }\space\space\space M_y(L) = -\biggr{[}EI_y\biggr{(}\frac{d^2w_z}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}_{x=L} = +M_y^K$$

![[Pasted image 20241228211540.png]]

### 4. Izpeljite centralno diferenčno enačbo za tretji odvod funkcije.

Diferencialni operator tretjega reda $D^3$ zapišemo v diferenčni obliki s centralnimi razlikami na sledeči način : $$\begin{multline}D^3w_0 = \frac{d^3w_0}{dx^3} = \frac{d}{dx}\biggr{(}\frac{d^2w_0}{dx^2}\biggr{)} \approx \frac{\biggr{(}\frac{d^2w_0}{dx^2}\biggr{)}_{+1} - \biggr{(}\frac{d^2w_0}{dx^2}\biggr{)}_{-1}}{2h} = \frac{\biggr{(}\frac{w_{+2} - 2w_{+1} + w_0}{h^2}\biggr{)} - \biggr{(}\frac{w_{0} - 2w_{-1} + w_{-2}}{h^2}\biggr{)}}{2h} = \\ =\frac{w_{+2} - 2w_{+1} + 2w_{-1} -w_{-2} }{2h^3} \end{multline}$$
![[Pasted image 20241228212532.png]]
### 5. Izpeljite centralno diferenčno enačbo za četrti odvod funkcije.

Diferencialni operator tretjega reda $D^4$ zapišemo v diferenčni obliki s centralnimi razlikami na sledeči način : $$\begin{multline}D^4w_0 = \frac{d^4w_0}{dx^4} = \frac{d^2}{dx^2}\biggr{(}\frac{d^2w_0}{dx^2}\biggr{)} \approx \frac{\biggr{(}\frac{d^2w_0}{dx^2}\biggr{)}_{+1} - 2\biggr{(}\frac{d^2w_0}{dx^2}\biggr{)}_{0} + \biggr{(}\frac{d^2w_0}{dx^2}\biggr{)}_{-1}}{h^2} = \\ = \frac{\biggr{(}\frac{w_{+2} - 2w_{+1} + w_0}{h^2}\biggr{)} - 2\biggr{(}\frac{w_{+1} - 2w_{+0} + w_{-1}}{h^2}\biggr{)} + \biggr{(}\frac{w_{0} - 2w_{-1} + w_{-2}}{h^2}\biggr{)}}{h^2} = \frac{w_{+2} - 4w_{+1} + 6w_0 - 4w_{-1} + w_{-2}}{h^4} \end{multline}$$

![[Pasted image 20241228212532.png]]

---

Številske vzorce, ki ponazarjajo udeležbo funkcijskih vrednosti centralne in sosednjih okoliških točk v izrazih za aproksimacijo odvodov, je mogoče slikovno prikazati tudi tako: 

![[Pasted image 20241228213311.png]]
### 6. Polinomsko aproksimacijsko reševanje upogibno obremenjenega konstrukcijskega elementa.

Pri polinomskem aproksimativnem reševanju problema upogibno obremenjenega linijskega konstrukcijskega elementa aproksimativno funkcijsko odvisnost primarne spremenljivke $w(x)$ zapišemo v obliki končne vrste : $$w_N(x) = \sum_{i= 0}^Nc_ix^{i}\text{ ; }x\in[0,L]$$
Da bi bila aproksimativna rešitev $w_N(x)$ ne glede na stopnjo njene aproksimacije tudi fizikalno konsistentna in verodostojna, mora le-ta zadostiti ***ključnim enačbam*** problema :
- [ ] enačbe, s katerimi so definirani ***robni pogoji***
- [ ] enačbe, s katerimi so definirani pogoji ***konsistentnosti prehoda***
- [ ] in v čim večji meri ***vodilno enačbo***
Polinomsko aproksimativno rešitev določa $(N+1)$ neznanih keoficientov $c_i$, katerih rešitev zahteva obstoj ustreznega sistema $(N+1)$ linearno neodvisnih enačb.

V primeru, ko so parametri v funkcijskem predpisu $w(x)$ opredeljeni z več funkcijskimi predpisi (več podobmočji), pa je potrebno upoštevati da aproksimativno rešitev iščemo za vsak podinterval $x\in[a_k, b_k]$ posebej : $$W_{N_k}^{(k)}(x) = \sum_{i=0}^{N_k}c_i^{(k)} x^{i}\text{ ; }x\in[a_k, b_k]$$
pri čemer je $N_k$ lahko za posamezno območje različen.

Aproksimativno rešitev določa $\biggr{(}\sum_{k=1}^{n}N_k +1\biggr{)}$ neznanih koeficientov $c_i^{(k)}$ , katerih izračun zahteva obstoj ustreznega sistema $\biggr{(}\sum_{k=1}^{n}N_k +1\biggr{)}$ linearno neodvisnih enačb. 

Sistem linearno neodvisnih enačb dobimo tako, da upoštevamo ***robne pogoje, pogoje konsistentnosti prehoda in v čim večji meri vodilno diferencialno enačbo***.

Minimalna stopnja $N_{min}$ polinomske aproksimacije, v posameznem podintervalu obravnavanega območja, je določena z vodilno enačbo problema, ki je diferencialna enačba 4. reda. Da lahko polinomska aproksimacija izpolni robne pogoje, pogoje konsistentnosti prehoda ter diferencialno enačbo vsaj v eni točki območja, mora biti minimalna stopnja polinoma : $$N_k \geq N_{min} = 4$$
### 7. Reševanje upogibno obremenjenega konstrukcijskega elementa po MKR.

Pri reševanju z MKR najprej diskretiziramo območje $[0,L]$ na določeno število podintervalov, katerih dolžine naj bodo enake, kar pa sicer ni obvezno. Naj bo širina posameznega podintervala $h$, število vseh poditervalov pa $N$. Točke $x_k$ , $k = 1,2,...,(N-1)$, ki razmejujejo podintervale (to so notranje točke), ter krajišča intervala $[0,L]$ tvorijo nabor točk, v katerih želimo poiskati aproksimativne vrednosti osnovne spremenljivke $w_k \approx w(x_k)$ , $k = 0,1,2,...(N)$ . 
![[Pasted image 20241229110819.png]]

Morebitne diferencialne zveze nadomestimo z diskretiziranimi diferenčnimi s centralnimi razlikami. Pri obravnavi upogibno obremenjenega elementa se pojavijo, poleg že uporabljenih diferencialnih opreatorjev prvega in drugega reda ($D^1, D^2$), še operatorja tretjega in četrtega reda ($D^3, D^4$).

Neznanke tako diskretiziranega problema so torej funkcijske vrednosti osnovne spremenljivke v $(N+1)$ točkah intervala $[0, L]$. Za obravnavani primer, ki ne izkazuje nezveznosti na intervalu, sledi: 
![[Pasted image 20241229111214.png]]

Enačbe na osnovi ***robnih pogojev***:
Iz naslova izpolnitve robnih pogojev je možno tvoriti največ toliko enačb, kolikor je na voljo robnih pogojev. V obravnavanem primeru imamo 4 robne pogoje : 

1 . ***Robni pogoj*** - poves v $x=0$ : $$w(0) = 0\rightarrow w_0 = 0$$
2 . ***Robni pogo***j - naklon v točki $x=0$ : $$\frac{dw(0)}{dx} = 0 \rightarrow D^1w_0 = \frac{w_1 - w_A}{2h} = 0$$ Z dodatno točko $A$ se je povečalo tudi število neznanih vrednosti $w_k$, ter posledično potrebno število enačb. V nadaljevanju izračunane vrednosti v dodatnih točkah nimajo fizikalnega pomena.
![[Pasted image 20241229112200.png]]

3 . ***Robni pogoj*** - Notranji moment v $x=L$ : $$-EI\frac{d^2w(L)}{dx^2} = 0\rightarrow -EID^2w_4 = -EI\biggr{(}\frac{w_3 - 2w_4 + w_B}{h^2}\biggr{)} = 0$$
![[Pasted image 20241229112203.png]]

4 . ***Robni pogoj*** - Notranja prečna sila v $x=L$ : $$-\frac{d}{dx}\biggr{(}EI\frac{d^2w(L)}{dx^2}\biggr{)} = F_0 \rightarrow EID^3w_4 = -EI\biggr{(}\frac{w_C-2w_b + 2w_3 - w_2}{2h^3}\biggr{)} = F_0$$
Zaradi diferenčnega operatorja $D^3$ potrebujemo dodatno točko $C$.
![[Pasted image 20241229112501.png]]


Enačbe na osnovi izpolnotve ***območne enačbe problem***a v notranjih točkah območja:

Za vsako točko $x_k\text{ ; }k = 2,3,...,(N-2)$ v notranjosti opazovanega intervala zapišemo območno diferencialno enačbo v ustrezni diferenčni diskretizirani obliki : $$EI\frac{d^4w_k}{dx^4} = (p_z)_k\rightarrow EID^4w_k = (p_z)_k = EI\biggr{(}\frac{w_{k+2} - 4w_{k+1} + 6w_k - 4w_{k-1} + w_{k-2}}{h^4}\biggr{)} = (p_z)_k$$
Manjkajoče štiri enačbe dobimo v obravnavanem primeru na osnovi izpolnitve območne enačbe problema v točkah 2 in 3, dodatne točke $A$, $B$ in $C$ pa omogočajo izpolnitev območne enačbe problema tudi v točkah 1 in 4.
![[Pasted image 20241229112501.png]]

## ***PREDAVANJE 12 : OBRAVNAVA UPOGIBNO OBREMENJENEGA 1D LINIJSKEGA ELEMENTA Z MKE***

### 1. Izpeljite izhodiščno enačbo za MKE za primer upogibno obremenjenega konstrukcijskega elementa.

MKE je zasnova na šibki obliki integralske formulacije problema. V nadaljevanju izvedimo postopek prevedbe vodilne diferencialne enačbe problema upogibno obremenjenega 1D linijskega elementa: $$\frac{d^2}{dx^2}\biggr{[}EI_y\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}=p_z\text{ ; }x\in[0,L]$$
v integralsko obliko.

Vodilno enačbo zapišemo na sledeči način : $$D^4w(x) - f(x) = 0\text{ ; }x\in[0,L]$$ kjer je $D^4$ : $$D^4 = \frac{d^2}{dx^2}\biggr{[}E(x)I_y(x)\biggr{(}\frac{d^2}{dx^2} + \alpha(x)\Delta\vartheta_{zh}(x)\biggr{)}\biggr{]}$$ in je $$f(x) = p_z(x)$$
Enačbo nato množimo s poljubno na območju $x\in[0,L]$ odvedljivo funkcijo $v(x)$ : $$\biggr{[}D^4w(x) - f(x)\biggr{]}v(x) = 0$$
Ker je po definiciji izraz v oglatem oklepaju v funkcijskem produktu na celotnem integracijskem območju $x\in[0,L]$ ničen, je tudi zapisani produkt, ne glede na to kakšna je funkcija $v(x)$, ničen.

Tako ustvarjeni funkcijski produkt integriramo po celotnem območju $x\in[0,L]$ : $$\int_0^L\biggr{[}D^4w(x) - f(x)\biggr{]}v(x)dx = 0$$
Dobljeno, simbolno zapisano osnovno obliko integralske formulacije, preuredimo v obliko : $$\int_0^LD^4w(x)v(x)dx = \int_0^Lf(x)v(x) dx$$
Ob privzetju, da je funkcija $v(x)$ vsaj dvakrat odvedljiva funkcija lahko integral na levi strani enačaja dvakrat integriramo *per partes* : $$\int_0^LD^4w(x)v(x)dx = D^3w(x)v(x)\biggr{|}_0^L - \int_0^LD^3w(x)\frac{dv(x)}{dx}dx$$
$$\int_0^LD^3w(x)\frac{dv(x)}{dx}dx = D^2w(x)\frac{dv(x)}{dx}\biggr{|}_0^L - \int_0^LD^2w(x)\frac{d^2v(x)}{dx^2}dx$$

V zapisani novi integralski enačbi lahko ugotovimo, da se je red diferencialnega operatorja nad primarno spremenljivko $w(x)$ zmanjšal za 2 $(D^4w(x)\rightarrow D^2w(x))$ : $$\int_0^LD^4w(x)v(x)dx = D^3w(x)v(x)\biggr{|}_0^L - D^2w(x)\frac{dv(x)}{dx}\biggr{|}_0^L + \int_0^LD^2w(x)\frac{d^2v(x)}{dx^2}dx$$
Zapišimo za upogibno obremenjeni element diferencialni operator $D^3$ :  $$D^4 = \frac{d^2}{dx^2}\biggr{[}E(x)I_y(x)\biggr{(}\frac{d^2}{dx^2} + \alpha(x)\Delta\vartheta_{zh}(x)\biggr{)}\biggr{]}\rightarrow D^3 = \frac{d}{dx}\biggr{[}E(x)I_y(x)\biggr{(}\frac{d^2}{dx^2} + \alpha(x)\Delta\vartheta_{zh}(x)\biggr{)}\biggr{]}$$
in še $D^2$ : $$D^3 = \frac{d}{dx}\biggr{[}E(x)I_y(x)\biggr{(}\frac{d^2}{dx^2} + \alpha(x)\Delta\vartheta_{zh}(x)\biggr{)}\biggr{]} \rightarrow D^2 = E(x)I_y(x)\biggr{(}\frac{d^2}{dx^2} + \alpha(x)\Delta\vartheta_{zh}(x)\biggr{)}$$
Upoštevajoč diferencialne operatorje za upogibno obremenjen 1D linijski element, zapišemo integral na levi strani integralske enačbe v sledeči obliki : $$\begin{multline}\int_0^L\biggr{\{}\frac{d^2}{dx^2}\biggr{[}EI_y\biggr {(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}\biggr{\}}v\space dx = \\ =\biggr{\{}\frac{d}{dx}\biggr{[}EI_y\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}v\biggr{\}}\biggr{|}_0^L - \biggr{\{}\biggr{[}EI_y\biggr{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{(}\frac{dv}{dx}\biggr{)}\biggr{]}\biggr{\}}\biggr{|}_0^L +\\+ \int_0^L\biggr{[}EI_y\biggr {(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx\end{multline}$$

V zapisani enačbi se nahajajo robne vrednosti sekundarnih veličin, $M_y(x)$ in $T_z(x)$ : $$\begin{multline}\int_0^L\biggr{\{}\frac{d^2}{dx^2}\biggr{[}EI_y\biggr {(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}\biggr{\}}v\space dx =\\=-\biggr{[}T_z(x)v(x)\biggr{]}_0^L + \biggr{[}M_y(x)\biggr{(}\frac{dv(x)}{dx}\biggr{)}\biggr{]}_0^L + \int_0^L\biggr{[}EI_y\bigg{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\bigg{]}\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx \end{multline}$$
***Šibka oblika integralske formulacije*** za obravnavani ***končni element*** je tako podana z enačbo : $$\int_0^L\biggr{[}EI_y\bigg{(}\frac{d^2w}{dx^2} + \alpha\Delta\vartheta_{zh}\biggr{)}\biggr{]}\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx = \biggr{[}T_z(x)v(x)\biggr{]}_0^L - \biggr{[}M_y(x)\biggr{(}\frac{dv(x)}{dx}\biggr{)}\biggr{]}_0^L + \int_0^Lp_zv\space dx$$
Integral na levi strani integralske formulacije preuredimo tako, da ostane v njem samo primarna neznanka $w(x)$ : $$\begin{multline}\int_0^L\biggr{[}EI_y\biggr{(}\frac{d^2w}{dx^2}\biggr{)}\biggr{]}\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx =\\=\biggr{[}T_z(x)v(x)\biggr{]}_0^L - \biggr{[}M_y(x)\biggr{(}\frac{dv(x)}{dx}\biggr{)}\biggr{]}_0^L + \int_0^Lp_zv\space dx - \int_0^L(EI_y\alpha\Delta\vartheta_{zh})\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx \end{multline}$$
Šibko obliko integralske formulacije zapišimo z aproksimirano rešitvijo $\tilde{w}(x)$ : $$\begin{multline}\int_0^{L_e}\biggr{[}EI_y\biggr{(}\frac{d^2\tilde{w}_e}{dx^2}\biggr{)}\biggr{]}\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx =\\=\biggr{[}T_z(x)v(x)\biggr{]}_0^{L_e} - \biggr{[}M_y(x)\biggr{(}\frac{dv(x)}{dx}\biggr{)}\biggr{]}_0^{L_e} + \int_0^{L_e}p_zv\space dx - \int_0^{L_e}(EI_y\alpha\Delta\vartheta_{zh})\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx \end{multline}$$
Pri čemer izvedemo osnovno aproksimacijo funkcije $\tilde w_e(x_e)$ na podobmočju $x_e\in[0, L_e]$, imenovanem *končni element* (KE), s pomočjo $N_e$ diskretnih vozliščnih vrednosti na tem podobmočju : $$\tilde w_e = \tilde w_e(x_e) = \sum_{k=1}^{N_e}a_k^e \tilde \Psi_{k-1}^e(x_e) \text{ ; }x_e\in[0,L_e]$$
V skladu z Galerkinovim pristopom izbire poljubne funkcije $v_k(x)$, le-te izberemo enake interpolacijskim funkcijam za aproksimacijo na podobmočju $x_e \in [0, L_e]$ : $$v_k = v_k(x_e) = \tilde \Psi_{k-1}^e(x_e)\text{ ; }k = 1,2,...,N_e$$
V primeru ***dvo-vozliščnega*** KE ($N_e = 4$) je aproksimacija primarne spremenljivke po njegovem območju zasnovana na štirih polinomih tretjega reda in diskretnih vozliščnih vrednosti povesa in naklona upogibnice : $$\tilde w_e = \tilde w_e(x_e) = W_1^e\tilde\Psi_0^e(x_e) + \varphi_1^e\tilde\Psi_1^e(x_e)+W_2^e\tilde\Psi_2^e(x_e)+ \varphi_2^e\tilde\Psi_3^e(x_e) \text{ ; }x_e\in[0, L_e]$$
Funkcije $\tilde\Psi_{0,1,2,3}^e$ imajo sledečo obliko : $$\tilde\Psi_0^e(x_e) = 1-3\frac{x_e^2}{L_e^2} + 2\frac{x_e^3}{L_e^3}$$ $$\tilde\Psi_1^e(x_e) = x_e - 2 \frac{x_e^2}{L_e} + \frac{x_e^3}{L_e^2}$$ $$\tilde\Psi_2^e(x_e) = 3\frac{x_e^2}{L_e^2} - 2\frac{x_e^3}{L_e^3}$$ $$\tilde\Psi_3^e(x_e) = -\frac{x_e^2}{L_e} + \frac{x_e^3}{L_e^2}$$
![[Pasted image 20241229141902.png]]

![[Pasted image 20250107225024.png]]


V nadaljevanju izpeljimo sistem enačb za dvo-vozliščni KE konstantnega vztrajnostnega momenta prereza $I_y(x_e) = I_{y0}$ in konstantnih materialnih lastnosti $E(x_e) = E_0$ in $\alpha(x_e) = \alpha_0$ , ki omogoča analizo upogibno obremenjenega 1D linijskega konstrukcijskega elementa.

Šibko obliko integralske formulacije tako zapišemo : $$\begin{multline}E_0I_{y0}\int_0^{L_e}\biggr{(}\frac{d^2\tilde w_e}{dx^2}\biggr{)}\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx = \\ =T_{2z}^e v(L_e) - T_{1z}^ev(0) - M_{2y}^e\frac{dv(L_e)}{dx} + M_{1y}^e\frac{dv(0)}{dx} + \int_0^{L_e}p_z v\space dx - E_0I_{y0}\int_0^{L_e}(\alpha_0\Delta\vartheta_{zh})\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx\end{multline}$$
V zapisani enačbi predstavljajo vrednosti $T_{1z}^e$ , $T_{2z}^e$ vozliščne vrednosti notranje prečne sile ter $M_{1y}^e$ , $M_{2y}^e$ vozliščne vrednosti notranjega momenta v vozliščih KE.
![[Pasted image 20241229142929.png]]

Upoštevajoč aproksimacijo primarne spremenljivke $\tilde w_e(x_e)$, lahko šibko obliko integralske formulacije zapišemo tako : $$\begin{multline}E_0I_{y0}\int_0^{L_e}\frac{d^2}{dx^2}\biggr{[}W_1^e\tilde\Psi_0^e(x_e) + \varphi_1^e\tilde\Psi_1^e(x_e)+W_2^e\tilde\Psi_2^e(x_e)+ \varphi_2^e\tilde\Psi_3^e(x_e)\biggr{]}\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx = \\=T_{2z}^e v(L_e) - T_{1z}^ev(0) - M_{2y}^e\frac{dv(L_e)}{dx} + M_{1y}^e\frac{dv(0)}{dx} + \int_0^{L_e}p_z v\space dx - E_0I_{y0}\int_0^{L_e}(\alpha_0\Delta\vartheta_{zh})\biggr{(}\frac{d^2v}{dx^2}\biggr{)}dx\end{multline}$$
V zapisani enačbi je neznanih ***osem*** vozliščnih vrednosti KE, in sicer vrednosti povesa in naklona upogibnice ($W_1^e, W_2^e, \varphi_1^e, \varphi_2^e$), ki predstavljajo primarni spremenljivki, ter vrednosti notranje prečne sile in notranjega momenta ($T_{1z}^e,T_{2z}^e, M_{1y}^e,M_{2y}^e$), ki predstavljajo sekundarni spremenljivki.
![[Pasted image 20241229143716.png]]

Za ***osem*** neznank potrebujemo ***osem*** enačb. ***Štiri enačbe*** (vodilna enačba problema je diferencialna enačba četrtega reda) izhajajo iz poznanih vrednosti primarne ali sekundarne spremenljivke na robu območja KE, torej v obeh vozliščih KE.

Manjkajoče ***štiri*** enačbe dobimo z izbiro poljubne funkcije $v(x_e)$. V skladu z Galerkinovim pristopom izberemo štiri funkcije, ki so bile uporabljene v aproksimaciji primarne spremenljivke $\tilde w_e(x_e)$ : $$v_1 = \tilde\Psi_0^e,\quad v_2 = \tilde\Psi_1^e,\quad v_3 = \tilde\Psi_2^e,\quad v_4 = \tilde\Psi_3^e$$
Štiri enačbe, ki jih dobimo z izbiro funkcije $v(x_e)$ in integriranjem integralske enačbe, zapišimo za dvo-vozliščni KE v sledeči matrični obliki : $$\frac{E_0I_{y0}}{L_e^3}\begin{bmatrix}12&6L_e&-12&6L_e\\6L_e &4L_e^2&-6L_e&2L_e^2\\-12&-6L_e&12&-6L_e\\6L_e&2L_e^2&-6L_e&4L_e^2\end{bmatrix}\begin{Bmatrix}W_1^e\\\varphi_1^e\\W_2^e\\\varphi_2^e\end{Bmatrix} = \begin{Bmatrix}-T_{1z}^e\\M_{1y}^e\\T_{2z}^e\\-M_{2y}^e\end{Bmatrix} + \begin{Bmatrix}\tilde F_{1z}^e\\\tilde M_{1y}^e\\\tilde F_{2z}^e\\\tilde M_{2y}^e\end{Bmatrix}$$
v kateri so zajete tudi ekvivalentne vozliščne obremenitve, ki izhajajo iz porazdeljene prečne obremenitve $p_z(x_e)$ in linearno po prerezu porazdeljene temperaturne razlike $\Delta\vartheta_{zh}(x_e)$ : $$\tilde F_{1z}^e = F_{1p}^e + F_{1T}^e$$ $$\tilde F_{2z}^e = F_{2p}^e + F_{2T}^e$$ $$\tilde M_{1y}^e = M_{1p}^e + M_{1T}^e$$ $$\tilde M_{2y}^e = M_{2p}^e + M_{2T}^e$$
![[Pasted image 20241229144959.png]]

Ekvivalentne vozliščne vrednosti obremenitve dobimo z izračuni sledečih integralov : 
$$\tilde F_{1z}^e = F_{1p}^e + F_{1T}^e\text{ <|> } F_{1p}^e=\int_0^{L_e}p_z\tilde\Psi_0^e(x_e)dx_e\text{ <|> }F_{1T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde \Psi_0^e(x_e)}{dx^2}dx_e$$ $$\tilde M_{1y}^e = M_{1p}^e +  M_{1T}^e\text{ <|> }M_{1p}^e=\int_0^{L_e}p_z\tilde\Psi_1^e(x_e)dx_e\text{ <|> }M_{1T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde \Psi_1^e(x_e)}{dx^2}dx_e$$ $$\tilde F_{2z}^e = F_{2p}^e + F_{2T}^e \text{ <|> } F_{2p}^e = \int_0^{L_e}p_z\tilde\Psi_2^e(x_e)dx_e \text{ <|> }F_{2T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde\Psi_2^e(x_e)}{dx^2}dx_e$$ $$\tilde M_{2y}^e = M_{2p}^e + M_{2T}^e \text{ <|> }M_{2p}^e=\int_0^{L_e}p_z\tilde\Psi_3^e(x_e)dx_e\text{ <|> }M_{2T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde \Psi_3^e(x_e)}{dx^2}dx_e$$

### 2. Aproksimacija primarne spremenljivke po območju dvo-vozliščnega KE za primer upogibno obremenjenega konstrukcijskega elementa.

V primeru ***dvo-vozliščnega*** KE je aproksimacija primarne spremenljivke po njegovem območju zasnovana na štirih polinomih tretjega reda in diskretnih vozliščnih vrednosti povesa in naklona upogibnice : $$\tilde w_e = \tilde w_e(x_e) = W_1^e\tilde\Psi_0^e(x_e) + \varphi_1^e\tilde\Psi_1^e(x_e)+W_2^e\tilde\Psi_2^e(x_e)+ \varphi_2^e\tilde\Psi_3^e(x_e) \text{ ; }x_e\in[0, L_e]$$
Funkcije $\tilde\Psi_{0,1,2,3}^e$ imajo sledečo obliko : $$\tilde\Psi_0^e(x_e) = 1-3\frac{x_e^2}{L_e^2} + 2\frac{x_e^3}{L_e^3}$$ $$\tilde\Psi_1^e(x_e) = x_e - 2 \frac{x_e^2}{L_e} + \frac{x_e^3}{L_e^2}$$ $$\tilde\Psi_2^e(x_e) = 3\frac{x_e^2}{L_e^2} - 2\frac{x_e^3}{L_e^3}$$ $$\tilde\Psi_3^e(x_e) = -\frac{x_e^2}{L_e} + \frac{x_e^3}{L_e^2}$$
To so Hermitovi polinomi: vsaka funkcija ima v svojem vozliščnem parametru (poves ali naklon v vozlišču) vrednost 1, v ostalih treh pa 0. Tako sta med KE zvezna poves in naklon, kar zahteva šibka oblika z drugimi odvodi.
![[Pasted image 20241229141902.png]]

### 3. Kako je upoštevana porazdeljena prečna obremenitev za primer upogibno obremenjenega konstrukcijskega elementa pri reševanju z MKE?

Z ekvivalentnimi vozliščnimi silami in momenti, ki sledijo iz člena $\int_0^{L_e}p_zv\,dx$ šibke oblike (Galerkin, $v = \tilde\Psi_k^e$). Prištejemo jih vektorju desne strani : $$F_{1p}^e=\int_0^{L_e}p_z\tilde\Psi_0^e(x_e)dx_e$$ $$F_{2p}^e=\int_0^{L_e}p_z\tilde\Psi_2^e(x_e)dx_e$$ $$M_{1p}^e=\int_0^{L_e}p_z\tilde\Psi_1^e(x_e)dx_e$$
$$M_{2p}^e=\int_0^{L_e}p_z\tilde\Psi_3^e(x_e)dx_e$$
Za konstantno $p_z = p_0$ : $F_{1p}^e = F_{2p}^e = \frac{p_0L_e}{2}$, $M_{1p}^e = \frac{p_0L_e^2}{12}$, $M_{2p}^e = -\frac{p_0L_e^2}{12}$.


### 4. Kako je upoštevana temperaturna obremenitev za primer upogibno obremenjenega konstrukcijskega elementa pri reševanju z MKE?

Temperaturni člen šibke oblike prenesemo na desno stran. Z $v = \tilde\Psi_k^e$ dobimo ekvivalentne vozliščne obremenitve, ki jih prištejemo vektorju desne strani : $$F_{1T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde \Psi_0^e(x_e)}{dx^2}dx_e$$ $$F_{2T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde\Psi_2^e(x_e)}{dx^2}dx_e$$ $$M_{1T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde \Psi_1^e(x_e)}{dx^2}dx_e$$ $$M_{2T}^e = -E_0I_{y0}\alpha_0\int_0^{L_e}\Delta\vartheta_{zh}\frac{d^2\tilde \Psi_3^e(x_e)}{dx^2}dx_e$$
Za konstantno $\Delta\vartheta_{zh}$ : $F_{1T}^e = F_{2T}^e = 0$, $M_{1T}^e = E_0I_{y0}\alpha_0\Delta\vartheta_{zh}$, $M_{2T}^e = -E_0I_{y0}\alpha_0\Delta\vartheta_{zh}$.



## ***PREDAVANJE 13 : APROKSIMACIJA ODVODOV NA OSNOVI LEVIH/DESNIH RAZLIK***

### 1. Izpeljite desno diferenčno enačbo za prvi odvod funkcije.

Leve/desne razlike uporabimo tam, kjer točk na eni strani ni: na robu območja in pri časovno odvisnih problemih (progresivne spremenljivke).
![[Pasted image 20250123112235.png]]

Za aproksimacijo odvodov v primeru desnih/levih razlik si pomagamo s Taylorjevo vrsto : 
![[Pasted image 20250123112404.png]]

Za prvi odvod uporabimo točki $w_1 = w(x_0 + h)$ in $w_2 = w(x_0 + 2h)$ : $$w_1 = w_0 + h\frac{dw_0}{dx} + \frac{h^2}{2}\frac{d^2w_0}{dx^2} + \frac{h^3}{6}\frac{d^3w_0}{dx^3} + ...$$ $$w_2 = w_0 + 2h\frac{dw_0}{dx} + 2h^2\frac{d^2w_0}{dx^2} + \frac{4h^3}{3}\frac{d^3w_0}{dx^3} + ...$$
Drugi odvod eliminiramo s kombinacijo $4w_1 - w_2$ in izrazimo prvi odvod : $$\frac{dw_0}{dx} = -\frac{1}{2h}\biggr{(}3w_0 - 4w_1 + w_2\biggr{)} + \frac{h^2}{3}\frac{d^3w_0}{dx^3} + ...$$
Člen s tretjim odvodom in višje zanemarimo (napaka $O(h^2)$) : $$\frac{dw_0}{dx} \approx \mp \frac{1}{2h}\biggr{(}3w_0 - 4w_{\pm1} + w_{\pm 2}\biggr{)} = D_{\pm}w_0$$
Za desno shemo vzamemo pozitivne indekse $w$, za levo negativne.
### 2. Izpeljite desno diferenčno enačbo za drugi odvod funkcije.

Iz Taylorjevih vrst za $w_1$, $w_2$ in $w_3$ eliminiramo prvi in tretji odvod ter izrazimo drugi odvod v točki $x = x_0$ (napaka $O(h^2)$) : $$\frac{d^2w_0}{dx^2} \approx \frac{1}{h^2}\biggr{(}2w_0 - 5w_{\pm1} + 4w_{\pm2} - w_{\pm 3}\biggr{)} = D_\pm^2w_0$$
Za desni odvod vzamemo pozitivne indekse $w$.
### 3. Opišite postopek izpeljave modificirane diferenčne enačbe za drugi odvod funkcije.

Na robu podobmočja razpolovimo korak, zato ima notranja točka $w_0$ regularne delitve ($h = konst.$) sosednjo točko na razdalji $h/2$ (točka $+\frac{1}{2}$ oz. $-\frac{1}{2}$). Tako ne potrebujemo zunanje točke, ki bi jo zahtevale centralne razlike.
![[Pasted image 20250123115103.png]]

Postopek :
1. Za vsako sosednjo točko (tudi za točko $\pm\frac{1}{2}$) zapišemo Taylorjevo vrsto okoli $x_0$ in zanemarimo člene po tretjem odvodu.
2. Iz dobljenih enačb eliminiramo prvi in tretji odvod ter izrazimo drugi odvod.

Tako ohranimo red natančnosti centralnih diferenčnih shem, $O(h^2)$.

### 4. Opišite postopek izpeljave modificirane diferenčne enačbe za tretji odvod funkcije.

Enako kot pri drugem odvodu, le da Taylorjeve vrste razvijemo do vključno četrtega odvoda (člene od petega naprej zanemarimo). Eliminiramo prvi, drugi in četrti odvod ter izrazimo tretji odvod. Natančnost ostane $O(h^2)$.
### 5. Opišite postopek izpeljave modificirane diferenčne enačbe za četrti odvod funkcije.

Enako kot prej. Taylorjeve vrste razvijemo do vključno petega odvoda (člene od šestega naprej zanemarimo). Eliminiramo prvi, drugi, tretji in peti odvod ter izrazimo četrti odvod.
### 6.  Opišite načine izpolnjevanja pogojev konsistentnega prehoda med dvema podobmočjema v primeru upogibno obremenjenega konstrukcijskega elementa pri uporabi MKR.

Na prehodu morajo biti zvezni poves $w$, naklon $\frac{dw}{dx}$, notranji moment $M_y$ in prečna sila $T_z$. Načini :

- Ekvidistančna mreža s centralnimi razlikami. Potrebujemo dodatne točke, ki nimajo fizikalnega pomena.
- Ekvidistančna mreža z levimi/desnimi razlikami. Dodatne točke niso potrebne, natančnost pa je manjša.
- Drugačna diskretizacija podobmočij: na robu vsakega podobmočja razpolovimo korak in uporabimo modificirane diferenčne enačbe za izpolnitev RP in PKP.
### 7. Kako ocenjujemo napako uporabljene diferenčne enačbe?

Napako ocenimo s prvim izpuščenim členom Taylorjeve vrste. Potenca $h$ v tem členu določa red napake, npr. za centralno razliko : $$\frac{dw_0}{dx} = \frac{w_1 - w_{-1}}{2h} - \frac{h^2}{6}\frac{d^3w_0}{dx^3} - ... \quad\Rightarrow\quad O(h^2)$$
Pri napaki $O(h^2)$ se napaka ob razpolovitvi koraka zmanjša približno 4-krat.
### 8. Izpeljite centralno diferenčno enačbo za Laplaceov operator upoštevajoč kartezične koordinate.

Laplaceov operator $\nabla^2$ je divergenca gradienta : $$\nabla^2 v(x, y, z) = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2}+ \frac{\partial^2 v}{\partial z^2} $$
Če želimo Laplaceov operator zapisati v diferenčni obliki s centralno diferenčno shemo v 2D kartezičnih koordinatah (enak korak $h$ v obeh smereh), zapišemo sledeče : $$\frac{\partial^2 v}{\partial x^2} \approx \frac{v(x-h,y) - 2v(x,y) + v(x+h,y)}{h^2} $$ $$\frac{\partial^2v}{\partial y^2} \approx \frac{v(x,y-h) - 2v(x,y) + v(x, y+h)}{h^2}$$
Oba prispevka seštejemo in z oznako $v_{n,m} = v(x_n, y_m)$ zapišemo (napaka $O(h^2)$) : $$\nabla^2 v(x,y) = \frac{\partial^2v}{\partial x^2} + \frac{\partial^2v}{\partial y^2} \approx \frac{v_{n-1,m}+ v_{n+1,m} + v_{n, m-1} + v_{n, m+1} -4 v_{n,m}}{h^2}$$
Grafični prikaz : 
![[Pasted image 20250123121218.png]]


### 9. Izpeljite centralno diferenčno enačbo za Laplaceov operator upoštevajoč cilindrične koordinate.

Obravnavamo 2D primer ($z$ = konst.), spremenijo se koordinate $x$ in $y$ : $$x = r\space cos(\varphi)$$ $$y = r\space sin(\varphi)$$ $$r^2 = x^2 + y^2$$

Rabimo spremeniti še diferencialne operatorje : $$\frac{\partial }{\partial x} = \frac{\partial }{\partial r}\frac{\partial r}{\partial x} + \frac{\partial }{\partial \varphi}\frac{\partial \varphi}{\partial x}$$ $$\frac{\partial }{\partial y} = \frac{\partial }{\partial r}\frac{\partial r}{\partial y} + \frac{\partial }{\partial \varphi}\frac{\partial \varphi}{\partial y}$$
Za našo uporabo so zanimivi operatorji do vključno drugega reda : 

![[Pasted image 20250123121951.png]]

Lahko vidimo da se Laplaceov operator spremeni : $$\nabla^2 = \frac{\partial^2 }{\partial x^2} + \frac{\partial ^2}{\partial y^2} = \frac{\partial ^2}{\partial r^2} + \frac{1}{r}\frac{\partial}{\partial r} + \frac{1}{r^2}\frac{\partial^2}{\partial \varphi^2}$$V nadaljevanju je smiselno oštevilčiti točke, s katerimi bomo izpeljevali diferenčno shemo ($v_1$, $v_3$ v radialni smeri, $v_2$, $v_4$ v obodni smeri) : 
![[Pasted image 20250123122540.png]]

Zapišimo parcialne odvode, ki nastopajo v enojnem Laplaceovem operatorju : 
$$\frac{\partial v_0}{\partial r}\approx \frac{v_1 - v_3}{2\Delta r}$$ $$\frac{\partial v_0}{\partial\varphi} \approx \frac{v_2 - v_4}{2 \Delta\overset{\frown}\varphi}$$
Še drugi odvodi : $$\frac{\partial ^2 v_0}{\partial r^2}\approx\frac{v_1 - 2v_0 + v_3}{\Delta r^2}$$ $$\frac{\partial^2 v_0}{\partial \varphi^2}\approx \frac{v_2 - 2v_0 + v_4}{\Delta\overset{\frown}\varphi^2}$$
S tem lahko zapišemo diferenčno obliko Laplaceovega operatorja v cilindričnih koordinatah (2D) : $$\nabla^2 v_0 = \frac{\partial ^2 v_0}{\partial r^2} + \frac{1}{r_0}\frac{\partial v_0}{\partial r} + \frac{1}{r_0^2}\frac{\partial^2 v_0}{\partial \varphi^2} \approx \frac{v_1 - 2v_0 + v_3}{\Delta r^2} + \frac{v_1 - v_3}{2r_0 \Delta r} + \frac{v_2 - 2v_0 + v_4}{(r_0 \Delta \overset{\frown}\varphi)^2} $$
Grafični prikaz : 
![[Pasted image 20250123123752.png]]


### 10. Izpeljite centralno diferenčno enačbo za mešani odvod $\frac{\partial^2 F(x,y)}{\partial x \partial y}$

Na centralno razliko po $y$, $\frac{\partial v}{\partial y} \approx \frac{v(x, y_0 + \Delta y) - v(x, y_0 - \Delta y)}{2\Delta y}$, uporabimo še centralno razliko po $x$ : $$\begin{multline}\frac{\partial^2 v_0}{\partial x\partial y} \approx \frac{1}{4\Delta x\Delta y}\biggr{[}v(x_0 + \Delta x, y_0 + \Delta y) -\\- v(x_0 + \Delta x, y_0 - \Delta y) -\\- v(x_0 - \Delta x, y_0 + \Delta y) +\\+ v(x_0 -\Delta x, y_0 - \Delta y)\biggr{]}\end{multline}$$
### 11. Izpeljite centralno diferenčno enačbo za mešani odvod $\frac{\partial^4 F(x,y)}{\partial x^2 \partial y^2}$

Na centralno razliko za $\frac{\partial^2 v}{\partial y^2}$ uporabimo še centralno razliko za $\frac{\partial^2}{\partial x^2}$ ($\Delta x = \Delta y = h$; $v_1$–$v_4$ so sosednje točke v smereh $x$ in $y$, $v_5$–$v_8$ diagonalne točke) : $$\frac{\partial^4v_0}{\partial x^2\partial y^2}\approx\frac{4v_0 - 2(v_1 + v_2 + v_3 + v_4) + v_5 + v_6 + v_7 + v_8}{h^4}$$
![[Pasted image 20250123124839.png]]

## ***PREDAVANJE 14 : REŠEVANJE 2D ČASOVNO USTALJENEGA PREVODA TOPLOTE Z METODO KONČNIH ELEMENTOV***

### 1. Izpeljite šibko obliko integralske enačbe za 2D časovno ustaljen prevod toplote.

Izhodiščna enačba problema v 2D kartezičnih koordinatah : $$\frac{\partial }{\partial x}\biggr{(}k\frac{\partial T}{\partial x}\biggr{)} + \frac{\partial}{\partial y}\biggr{(}k\frac{\partial T}{\partial y}\biggr{)} + q_V = 0 \space , \space(x,y)\in\Omega_{2D}$$

Enačbo množimo s poljubno na območju odvedljivo funkcijo $v(x,y)$ : $$\biggr{[}div[k\space grad(T)] + q_V\biggr{]}v(x,y) = 0$$
Izraz lahko integriramo po obravnavanem območju : $$\int_{\Omega_{2D}}\biggr{[}div[k\space grad(T)] + q_V\biggr{]}v(x,y)\space d\Omega_{2D}= 0$$
Dobili smo ***osnovno obliko integralske formulacje***. Dobljeno enačbo lahko preoblikujemo : $$\int_{\Omega_{2D}}\biggr{[}div[k\space grad(T)]\biggr{]}v(x,y)\space d\Omega_{2D}= -\int_{\Omega_{2D}}q_Vv(x,y)\space d\Omega_{2D}$$
Integral na levi lahko z upoštevanjem ***Green-Gaussovega teorema*** zapišemo malo drugače : $$\int_{\Omega_{2D}}\biggr{[}div[k\space grad(T)]\biggr{]}v(x,y)\space d\Omega_{2D} = \int_{\Gamma_{2D}}\biggr{[}k\space grad(T)\biggr{]} \hat n \space v(x,y) d\Gamma - \int_{\Omega_{2D}}\biggr{[}grad(v(x,y))\biggr{]}\biggr{[}k\space grad(T)\biggr{]}d\Omega$$

***ŠIBKO OBLIKO INTEGRALSKE FORMULACIJE*** LAHKO ZAPIŠEMO KOT : $$\int_{\Omega_{2D}}\biggr{[}grad(v)\biggr{]}\biggr{[}k\space grad(T)\biggr{]}d\Omega = -\int_{\Gamma_{2D}}q_n\space v \space d\Gamma + \int_{\Omega_{2D}}q_V\space v\space d\Omega$$
Pri tem smo upoštevali, da je $q_n$ velikost toplotnega toka v smeri normale $\hat n$ na ograjo območja $\Gamma_{2D}$ : $$-\biggr{[}k\space grad(T)\biggr{]}\hat n = q_n$$

Na delu ograje območja $\Gamma_1$ je toplotni tok poznan ($q_n = q_0$). Na preostalem delu $\Gamma_2$ je predpisana temperatura, toplotni tok $q_{\Gamma_2}$ pa ni poznan : $$\int_{\Gamma_{2D}}q_n\space v\space d\Gamma  = \int_{\Gamma_1}q_0\space v\space d\Gamma + \int_{\Gamma_2}q_{\Gamma_2}\space v\space d\Gamma\space , \space \Gamma_1 \cup \Gamma_2 = \Gamma_{2D}$$
Obravnavano območje nato razdelimo na podobmočja, ki sovpadajo z območjem 2D KE, in na vsakem KE temperaturo aproksimiramo (Galerkin: $v = \hat\psi_k^e$).
### 2. Zapišite aproksimacijo temperaturnega polja po območju trivozliščnega 2D KE.

V primeru ***trivozliščnega 2D KE*** je aproksimacija primarne spremenljivke po njegovem območju zasnovana na naslednji način : $$\hat T_e(x_e,y_e) = T_1^e\hat\psi_1^e(x_e, y_e) + T_2^e\hat\psi_2^e(x_e,y_e) + T_3^e\hat\psi_3^e(x_e,y_e)$$
Za kartezijeve koordinate ima funkcija $\hat\psi_k^e$ naslednjo obliko : $$\hat\psi_k^e(x_e,y_e) = c_0^k + c_1^kx_e + c_2^ky_e\space, \space k = 1,2,3$$
Funkcija je linearna v obeh koordinatah $x_e$ in $y_e$, zato je gradient temperature po KE konstanten.
![[Pasted image 20250123131953.png]]

Koeficiente $c_0^k, c_1^k, c_2^k$ določimo iz pogoja Kroneckerjeve delte v vozliščih $(x_v, y_v)$ : $$\hat\psi_k^e(x_v, y_v) = \delta_{vk}\space , \space v,k = 1,2,3$$

![[Pasted image 20250123132213.png]]

### 3. Zapišite aproksimacijo temperaturnnega polja po območju štirivozliščnega 2D KE.

Funkcijska aproksimacija za štirivozliščni 2D KE je podana kot : $$\hat T_e(x_e,y_e) = T_1^e\hat\psi_1^e(x_e,y_e) + T_2^e\hat\psi_2^e(x_e, y_e) + T_3^e\hat\psi_3^e(x_e, y_e) + T_4^e\hat\psi_4^e(x_e, y_e) $$ Pri tem pa mora veljati : $$\hat\psi_k^e(x_e, y_e) = c_0^k + c_1^kx_e + c_2^k
y_e + c_3^kx_ey_e\space , \space k = 1,2,3,4$$ in še : $$\hat\psi_k^e(x_v, y_v) = \delta_{vk} = \begin{cases}1 & \text{ if } v = k\\ 0&\text{ if }v\neq k\end{cases}\space\space\space ,\space\space\space \text{ kjer sta }\space\space\space v,k = 1,2,3,4$$
### 4. Zapišite simetrijske robne pogoje za primer 2D prevoda toplote v primeru reševanja z MKR.

Pri simetričnem problemu lahko obravnavano območje zmanjšamo in s tem znatno skrajšamo čas računanja.

Na simetrijski meji je toplotni tok enak nič, ker je temperatura v točkah na obeh straneh meje enaka : $$q_n = -k\frac{\partial T}{\partial n} = 0$$ Temperatura na simetrijski meji ni poznana. Izračunamo jo s centralno diferenčno shemo v 2D, pri čemer za zrcalno točko izven območja upoštevamo $T_{-1,m} = T_{1,m}$ (meja $x$ = konst.) : $$\frac{2T_{1,m} + T_{0,m-1} + T_{0,m+1} - 4T_{0,m}}{h^2} + \frac{q_V}{k} = 0$$

Ostale mejne točke obravnavamo enako kot če ne bi imeli simetrijske meje, saj je na njih že definiran robni pogoj (Dirichlet, Neumann, Robin).
### 5. Zapišite simetrijske robne pogoje za primer 2D prevoda toplote v primeru reševanja z MKE

Na simetrijski meji $\Gamma_s$ velja naravni (Neumannov) robni pogoj $q_n = 0$. Robni integral v šibki obliki je tam enak nič : $$\int_{\Gamma_s}q_n\space v\space d\Gamma = 0$$
Za vozlišča na simetrijski meji zato v vektor desne strani ne dodamo ničesar. Njihove temperature ostanejo neznanke.
### 6. Kako upoštevamo konvektivni robni pogoj na robu območja v primeru 2D prevoda toplote v primeru reševanja z MKE?

Na delu ograje $\Gamma_3$ velja konvektivni toplotni tok ($T_f$ temperatura fluida, $h_f$ prestopnostni koeficient) : $$q_n = -h_f(T_f - T) = h_f(T - T_f)$$
Vstavimo ga v robni integral šibke oblike : $$-\int_{\Gamma_3}q_n\space v\space d\Gamma = -\int_{\Gamma_3}h_f\space T\space v\space d\Gamma + \int_{\Gamma_3}h_f\space T_f\space v\space d\Gamma$$
Člen z neznano temperaturo $T$ prenesemo na levo stran. Z aproksimacijo $\hat T_e = \sum_j T_j^e\hat\psi_j^e$ in $v = \hat\psi_i^e$ dobimo za KE z robom na $\Gamma_3$ prispevek k matriki : $$K_{ij}^{h} = \int_{\Gamma_3^e}h_f\space\hat\psi_i^e\hat\psi_j^e\space d\Gamma$$ in prispevek k vektorju desne strani : $$F_i^{h} = \int_{\Gamma_3^e}h_f\space T_f\space\hat\psi_i^e\space d\Gamma$$
Za raven rob KE dolžine $L_\Gamma$ z linearno aproksimacijo ter konstantnima $h_f$ in $T_f$ : $$\mathbf K^h = \frac{h_fL_\Gamma}{6}\begin{bmatrix}2&1\\1&2\end{bmatrix}\space , \space \mathbf F^h = \frac{h_fT_fL_\Gamma}{2}\begin{Bmatrix}1\\1\end{Bmatrix}$$
Temperature vozlišč na $\Gamma_3$ ostanejo neznanke.
