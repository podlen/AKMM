---
tags:
  - AKMM
  - analiza-MKE
  - fakulteta
  - mag
  - predavanja
  - semester-2
file_creation: 2026-02-23
---
Zbirka odgovorov na vprašanja pri predmetu analiza konstrukcij z MKE.

# Predavanje 1 - 16.2.2026

## 1. Značilnosti geometrijskega modela.

Geometrijski model popisuje **geometrijski prostor** analiziranega območja. Ponavadi geometrijski model izdelamo s CAD programi.

Geom. model vključuje vse elemente geometrijskega območja analiziranega problema. Ponavadi ga je treba za potrebe numeričnega modela poenostaviti. Za poenostavitve je ključno poznati fizikalno ozadje problema.

Poenostavimo lahko na več načinov:

- [ ] simetrije
- [ ] če je več enakih elementov - upoštevamo le enega (lopatice turbine npr.)
- [ ] Preproste poenostavitve - glave vijakov, navoji vijakov. Zmanjšamo kompleksnost mreže, ne da bi zmanjšali natančnost izračuna.

## 2. Značilnosti fizikalnega modela.

Fizikalni model popisuje **fizikalno dogajanje** v analiziranem območju. To ne pomeni enačbe $\rightarrow$ te so v matematičnem modelu.

Fizikalno dogajanje v obravnavanem območju lahko obsega:

- [ ] mehansko stanje (mehanika deformabilnih teles)
- [ ] termalno stanje
- [ ] termo-mehansko stanje
- [ ] elektro-magnetno stanje
- [ ] dinamika tekočin
- [ ] ipd.

Dogajanje je lahko časovno spremenljivo ($\frac{\partial }{\partial t}\neq 0$) ali nespremenljivo ($\frac{\partial }{\partial t} = 0$).

Razumevanje fizikalnega dogajanja je ključno, saj nam napačen fizikalni model vrača napačne rešitve problema - tudi če je numerični model napreden.

Razumevanje fizikalnega modela nam omogoča tudi vrednotenje rezultatov - pogledamo, ali je rezultat fizikalno smiseln ali ne.

## 3. Značilnosti matematičnega modela.

Matematični model opisuje fizikalno dogajanje z enačbami:

- vodilna **diferencialna enačba** problema,
- **robni pogoji** (in pogoji prehoda, če je območje sestavljeno iz več podobmočij).

Primer, osno obremenjena palica:
$$\frac{d}{dx}\left[EA\left(\frac{du}{dx}-\alpha\Delta T\right)\right] = -n_0, \qquad u(0)=0, \qquad N(L)=EA\left(\frac{du}{dx}-\alpha\Delta T\right)_{x=L}=F$$

Matematični model je približek dejanskega dogajanja - vedeti moramo, pod kakšnimi pogoji lahko enačbo uporabimo.

# Predavanje 2 - 23.2.2026

## 4. Značilnosti numeričnega modela.

Numerični model lahko enačbe rešuje **eksaktno**:

- [ ] DE je izpolnjena v vseh točkah območja, eksaktno sta izpolnjena tudi RP in PP.

V večini primerov eksaktne rešitve DE ni mogoče določiti. Zato enačbe rešujemo **aproksimativno** z MKR, MKE, MRE ali MKV:

- [ ] Rešitev je aproksimativna, če DE ni eksaktno izpolnjena v vseh točkah območja ali če RP oz. PP niso eksaktno izpolnjeni.
- [ ] Aproksimativno reševanje prevede reševanje DE v reševanje sistema linearnih enačb.
- [ ] Pri izbiri metode upoštevamo značilnosti fizikalnega modela ter prednosti in slabosti posamezne metode.

## 5. Kdaj je rešitev numeričnega modela eksaktna?

Rešitev numeričnega modela je eksaktna, ko rešitev eksaktno izpolnjuje DE na celotnem območju. Rešitev eksaktno izpolnjuje tudi RP in PP.

## 6. Opiši izhodišča MKR.

Osnovna ideja MKR je, da odvode v DE in RP aproksimiramo s funkcijskimi vrednostmi v diskretnih točkah. Aproksimacija temelji na razvoju funkcije v Taylorjevo vrsto:
$$f(x+h) = f(x) + h f'(x) + \frac{h^2}{2!} f''(x) + \frac{h^3}{3!} f'''(x) + \mathcal{O}(h^4)$$

Iz razvoja za $f_{+1}$ in $f_{-1}$ dobimo centralne razlike:
$$f'_0 \approx \frac{f_{+1}-f_{-1}}{2h}, \qquad f''_0 \approx \frac{f_{+1}-2f_0+f_{-1}}{h^2}$$

Rešitev problema z MKR so funkcijske vrednosti v diskretnih točkah. Med točkami lahko naknadno napnemo interpolacijsko funkcijo.

Primarni robni pogoji in primarni pogoji prehoda so pri MKR izpolnjeni eksaktno (če je na robu/prehodu računska točka). Sekundarni pogoji so izpolnjeni aproksimativno preko aproksimacije odvoda. Za centralno shemo na robu in prehodu potrebujemo dodatne točke.

## 7. Prednosti in slabosti MKR.

Prednost MKR je enostavna uporaba - še posebej za 1D in 2D primere.

Slabost MKR je zahtevna priprava mreže točk, še posebej v 3D in pri poljubni geometriji. Sekundarni RP in PP so izpolnjeni le aproksimativno in zahtevajo dodatne točke.

## 8. Opiši izhodišča MKE.

MKE bazira na integralski formulaciji problema. DE pomnožimo z utežno funkcijo $v(x)$ in integriramo po območju. Za primer palice:
$$\int_0^L\left[\frac{d}{dx}\left(EA\frac{du}{dx}\right) + n(x)\right]v(x)\, dx = 0$$

S *per-partes* integracijo dobimo šibko obliko integralske enačbe, ki je izhodišče MKE:
$$\int_0^L EA\frac{du}{dx}\frac{dv}{dx}\,dx = N(L)\,v(L) - N(0)\,v(0) + \int_0^L n\,v\,dx$$

Obravnavano območje razdelimo na podobmočja - končne elemente (KE). Na območju KE neznano veličino aproksimiramo z vozliščnimi vrednostmi in interpolacijskimi funkcijami, npr. $\hat u(x) = u_1\varphi_1(x) + u_2\varphi_2(x)$. Enačbe dobimo z Galerkinovo metodo ($v = \varphi_i$).

## 9. Prednosti in slabosti MKE.

**Prednosti**:

- možnost obravnave geometrijsko zahtevnih problemov (KE so lahko poljubne velikosti in oblike),
- uporabna za reševanje vseh vrst fizikalnih problemov.

**Slabosti**:

- računsko intenzivna metoda. Izračun pohitrimo z izkoriščanjem simetričnosti in pasovnosti matrike koeficientov.

## 10. Primerjaj MKR in MKE

**Izhodišče**
MKR:

- [ ] aproksimacija odvodov s funkcijskimi vrednostmi (Taylorjeva vrsta).

MKE:

- [ ] šibka oblika integralske enačbe, aproksimacija neznane funkcije po območju KE.

**Izpolnjevanje DE**
MKR:

- [ ] DE je izpolnjena aproksimativno le v diskretnih točkah. Med točke lahko napnemo interpolacijsko funkcijo.

MKE:

- [ ] DE je izpolnjena aproksimativno (v integralskem smislu) po celotnem območju.

**Upoštevanje RP in PP**

MKR:

- [ ] Primarna količina je izpolnjena eksaktno, sekundarna pa aproksimativno (diferenčne sheme)

MKE:

- [ ] Primarna in sekundarna količina sta izpolnjeni eksaktno. Sekundarne količine (npr. $N(L)$) zaradi *per-partes* integracije nastopajo neposredno v šibki obliki.

**Uporaba**

- [ ] MKR je enostavnejša, a je mrežo točk težko pripraviti v 3D. MKE omogoča zahtevne geometrije, a je računsko intenzivnejša.

# Predavanje 3 - 2.3.2026

## 11. Opiši izhodišča MRE.

MRE je zasnovana na integralski formulaciji - izhodišče je **inverzna oblika** integralske enačbe. Dobimo jo z dvakratno *per-partes* integracijo osnovne integralske enačbe, pri čemer vse odvode prenesemo na utežno funkcijo $v$. Neznana funkcija $u$ v integralu po območju nastopa brez odvodov.

Ograjo obravnavanega območja razdelimo na podobmočja - robne elemente (RE). V območju RE **aproksimiramo** neznane veličine.

## 12. Prednosti in slabosti MRE.

**Prednosti**:

- Reševanje območnega problema prevedemo na iskanje neznanih veličin na ograji. Elementi so samo na robu območja, kar pomeni, da imamo za izračunati manj neznank.
- Primerno za reševanje potencialnih problemov (gravitacijski potencial, ustaljen prevod toplote, električni potencial)
- Primerno za reševanje fizikalnih problemov, ki niso prostorsko omejeni

**Slabosti**:

- Poln sistem enačb
- Za izračun vrednosti znotraj obravnavanega območja so potrebni dodatni izračuni.

## 13. Primerjaj MKE in MRE.

- **Izhodišče**: obe izvirata iz integralske formulacije. MKE uporablja šibko obliko, MRE inverzno obliko.
- **Diskretizacija**: pri MKE so elementi in vozlišča po celotnem območju. Pri MRE so le na ograji, vrednosti v notranjosti izračunamo naknadno.
- **Sistem enačb**: pri MKE je matrika simetrična in pasovna. Pri MRE je polna, a manjša (manj neznank).
- **DE**: pri MKE je izpolnjena aproksimativno po območju. Pri MRE je v notranjosti izpolnjena eksaktno.
- **RP**: pri obeh metodah so izpolnjeni eksaktno.
- **PP**: pri MKE so izpolnjeni eksaktno. Pri MRE pogojev prehoda nimamo, saj vse točke ležijo na robu območja.

## 14. Opiši izhodišča MKV.

MKV je zasnovana na integralski formulaciji problema, pri čemer se integral po območju z divergenčnim (Gaussovim) izrekom preoblikuje v integral po ograji, ki omejuje obravnavano območje. Za prevod toplote:
$$\int_\Gamma k\,\mathrm{grad}(T)\cdot\hat n\, d\Gamma = -\int_\Omega q_V\, d\Omega$$

Obravnavano območje je razdeljeno na podobmočja, ki jih imenujemo končni volumni (KV). V posameznem KV je neznana **vrednost primarne veličine v eni točki**. Tok skozi mejo KV aproksimiramo z razliko vrednosti v sosednjih točkah.

## 15. Prednosti in slabosti MKV.

**Prednosti**:

- reševanje območnega problema prevedemo na iskanje vrednosti v posamezni točki - diskretizacija.
- enostavno izpolnjevanje PP med celicami oz. podobmočji.
- Podobno kot MKR - primarna spremenljivka v točki.
- Primerno za reševanje problemov prevoda toplote, toka tekočine

**Slabosti**:

- Robni pogoji primarnih veličin so izpolnjeni aproksimativno, saj točka, v kateri določimo primarno veličino ni na robu KV.

## 16. Primerjaj MKR in MKV.

Obe metodi rešujeta problem z iskanjem vrednosti primarne veličine v diskretnih točkah območja.

Razlikujeta se v matematični formulaciji. MKR temelji na aproksimaciji odvodov s funkcijskimi vrednostmi (s pomočjo razvoja v Taylorjevo vrsto). MKV pa temelji na integralski formulaciji, ki jo prevedemo na integral po ograji KV. Tok skozi ograjo nato aproksimiramo z razlikami vrednosti v sosednjih točkah, podobno kot pri MKR.

Pri MKR je primarni robni pogoj izpolnjen eksaktno (točka mora biti na robu območja). Sekundarni RP pa so aproksimirani preko vrednosti primarne spremenljivke. Pri MKV je ravno obratno. Sekundarni RP so eksaktno izpolnjeni, primarni RP pa so izpolnjeni aproksimativno z interpolacijo od računske točke KV do roba.

Za MKR so primarni PP izpolnjeni eksaktno, sekundarni pa aproksimativno. Pri MKV je obratno.

## 17. Primerjaj MKE in MKV.

Obe metodi izvirata iz integralske formulacije problema. Pri MKE neznano veličino aproksimiramo po celotnem območju končnega elementa. Pri MKV pa se integral po območju prevede na integral po površini (ograji volumna), primarna veličina pa se izračuna le v eni diskretni točki znotraj posameznega KV.

Robni pogoji so pri MKE izpolnjeni eksaktno (primarni in sekundarni). Pri MKV so primarni RP izpolnjeni aproksimativno (z interpolacijo). Sekundarni RP so izpolnjeni eksaktno.

Pogoji prehoda so pri MKE izpolnjeni eksaktno. Pri MKV je pogoj prehoda za sekundarne spremenljivke izpolnjen eksaktno, vrednost primarne spremenljivke med KV pa je določena aproksimativno.

## 18. Komentiraj izpolnjevanje diferencialne enačbe, robnih pogojev in pogojev konsistentnosti prehoda v primeru uporabe MKR.

Diferencialna enačba je izpolnjena aproksimativno le v diskretnih točkah.

Primarni RP so izpolnjeni eksaktno - pogoj za to je, da je računska točka na robu območja. Sekundarni RP so izpolnjeni aproksimativno preko vrednosti primarne spremenljivke (uporabiti moramo dodatne točke, če uporabljamo centralno diferenčno shemo).

PP so izpolnjeni na enak način kot RP.

## 19. Komentiraj izpolnjevanje diferencialne enačbe, robnih pogojev in pogojev konsistentnosti prehoda v primeru uporabe MKE.

Diferencialna enačba je izpolnjena aproksimativno (v integralskem smislu) po celotnem območju.

Primarni in sekundarni RP so izpolnjeni eksaktno.

Za PP velja enako kot RP.

## 20. Komentiraj izpolnjevanje diferencialne enačbe, robnih pogojev in pogojev konsistentnosti prehoda v primeru uporabe MRE.

Diferencialna enačba je **v notranjosti območja izpolnjena eksaktno**, po ograji območja pa je izpolnjena aproksimativno.

Primarni in sekundarni RP so izpolnjeni eksaktno.

Ker so elementi samo na robu območja, PP ni.

**DODATNO:**

- **Zakaj je DE v notranjosti izpolnjena eksaktno?**
    V inverzni obliki so vsi odvodi na utežni funkciji $v$. Za $v$ izberemo **fundamentalno (analitično) rešitev** DE, pri kateri je $\frac{d^2v}{dx^2}$ sorazmeren z Diracovo delta funkcijo v izbrani točki $\xi$. Integral po notranjosti območja se zato skrči v vrednost $u(\xi)$. Aproksimiramo le veličine na ograji.
- **Zakaj je to hkrati slabost?**
    Sistem enačb nam da rezultate **samo na robu**. Za vrednost v notranji točki moramo fundamentalno rešitev postaviti v to točko in **naknadno izračunati integral** iz znanih robnih vrednosti. Vsaka notranja točka zahteva svoj dodaten izračun.

## 21. Komentiraj izpolnjevanje diferencialne enačbe, robnih pogojev in pogojev konsistentnosti prehoda v primeru uporabe MKV.

Diferencialna enačba je izpolnjena aproksimativno (v povprečju) po posameznem končnem volumnu, vrednost primarne spremenljivke pa določimo v 1 točki.

Sekundarni RP so izpolnjeni eksaktno. Primarni pa aproksimativno z interpolacijo od središča volumna do roba (zato ker računska točka nikoli ni na robu območja).

Za PP velja enako kot RP.

## 22. Priprava geometrijskega modela.

Priprava geometrijskega modela je prvi korak pri reševanju problema z MKE.

Večino časa je treba geometrijski model poenostaviti:

- detajle, ki bistveno ne vplivajo na rezultate analize, odstranimo iz geometrijskega modela.
- pod določenimi pogoji lahko volumske geometrijske modele nadomestimo s ploskovnimi (npr. pločevina) ali celo z linijskimi modeli (npr. palične konstrukcije).

Da lahko to naredimo, moramo poznati fizikalno ozadje problema. Tako lahko osmislimo poenostavitve.

## 23. Izbira oblike KE.

Glede na geometrijski model izbiramo med:

**1D KE**:

- 2-vozliščni KE (raven)
- 3-vozliščni KE (lahko ukrivljen)

**2D KE**:

- trikotnik: 3- ali 6-vozliščni
- štirikotnik: 4- ali 8-vozliščni

**3D KE**:

- tetraeder: 4- ali 10-vozliščni
- prizma: 6- ali 15-vozliščni
- heksaeder: 8- ali 20-vozliščni

KE z vmesnimi vozlišči uporabljajo interpolacijsko funkcijo višjega reda. Zato enako velik KE bolj natančno popiše rešitev in ukrivljeno geometrijo. Slabost je daljši čas izračuna.

Na obliko KE vpliva tudi način mreženja:

- **Prosto mreženje**: trikotni ali štirikotni (2D) in le tetraedrični (3D) KE. Priprava mreže je hitra in avtomatizirana, primerna za zelo kompleksne oblike.
- **Strukturirano mreženje:** predvsem štirikotni (2D) in heksaedrični (3D) KE. Zahteva več časa za pripravo geometrije, a pogosto daje boljše rezultate.

# Predavanje 4 - 9.3.2026

## 24. Prednosti in slabosti prostega mreženja.

**Prednosti**:

- Hitro in avtomatsko
- Dobro, ko hočemo videti, kje so kritična mesta
- Omogoča mreženje kompleksnih oblik

**Slabosti**:

- Dobljen rezultat je manj natančen, kot če bi uporabljali strukturirano mrežo
- V 3D so možni le tetraedrični KE (v 2D pretežno trikotni). Ti elementi so bolj togi - zato jih za natančno rešitev potrebujemo več kot pri strukturirani mreži.
- Na gostoto tetraedrov v notranjosti volumna lahko vplivamo le delno.

## 25. Prednosti in slabosti strukturiranega mreženja.

**Prednosti**:

- Mreža je prilagojena problemu, gostoto lahko lokalno nadzorujemo.
- Bolj natančni izračuni, saj so uporabljeni heksaedrični oz. štirikotni KE.

**Slabosti**:

- Območje moramo sami razdeliti na podobmočja enostavnih oblik (2D: 3, 4 ali 5 robov; 3D: brez lukenj, vrinjenih ploskev, robov in točk), kar vzame več časa.

## 26. Kako lahko vplivamo na obliko mreže 2D KE.

- **Gostota točk na ograji** (seed): globalno ali lokalno, enakomerno ali neenakomerno ("bias"). Točke, ki so del geometrije, so nepremične. Točke morajo ustrezno popisati ukrivljene dele ograje (curvature control).
- **Oblika KE**:
  - trikotniki - mreženje je vedno izvedljivo,
  - štirikotniki - mreženje ni vedno izvedljivo,
  - pretežno štirikotniki, trikotniki le izjemoma - mreženje je vedno izvedljivo.
- **Način mreženja**: prosto, prosto na urejen način (mapped meshing, če območje omejujejo 4 krivulje) ali strukturirano z delitvijo na podobmočja s 3, 4 ali 5 robovi.

## 27. Kriterij za oceno kvalitete mreže 2D KE.

Kriterijev za oceno mreže je več:

- razmerje med najdaljšo in najkrajšo stranico elementa ($a \geq b$):
	- $$1\leq f_r=\frac{a}{b}\leq \infty$$
	- $$f_{r,max}\leq5$$
	- ![[Pasted image 20260309214606.png]]

- največji in najmanjši notranji kot trikotnega ali štirikotnega elementa
	- $$0^\circ\leq\alpha\leq180^\circ$$
	- $$45^\circ\leq\alpha_{min}$$
	- $$\alpha_{max}\leq135^\circ$$
	- ![[Pasted image 20260309214748.png]]
- oblikovni faktor (samo za trikotni KE; $A_{\Delta id}$ je ploščina enakostraničnega trikotnika)
	- $$1\geq f_\Delta=\frac{A_\Delta}{A_{\Delta id}}\geq0$$
	- $$f_{\Delta min}\geq0.5$$
	- ![[Pasted image 20260309214946.png]]

- odstopanje stranice KE od geometrije mreženega območja ($h$ je poves, $L$ dolžina stranice)
	- $$0\leq f_g=\frac{h}{L}\leq \infty$$
	- $$f_{g,max}\leq0.1$$
	- ![[Pasted image 20260309215053.png]]

## 28. Kako lahko vplivamo na obliko mreže 3D KE.

Pri prostem mreženju na obliko vplivamo z mrežo, narejeno na površinah (s trikotniki), ki definirajo volumen. Mrežo na površini definiramo z gostoto točk na ograji (enakomerno ali "bias"). Na gostoto tetraedrov v sami notranjosti volumna lahko vplivamo le delno (z načinom generacije) in predvsem posredno preko mreže na površini.

Pri strukturiranem mreženju na obliko mreže vplivamo tako, da kompleksno geometrijo razdelimo na enostavna podobmočja ali pa (pri swept meshingu) določimo izhodiščno ploskev, na kateri je 2D mreža, ter izberemo smer generiranja heksaedričnih KE v prostor.

## 29. Kriterij za oceno kvalitete mreže 3D KE.

Kriteriji in mejne vrednosti so enaki kot pri 2D mreži:

- razmerje med najdaljšo in najkrajšo stranico: $f_{r,max}\leq5$
- največji in najmanjši notranji kot na ploskvi, ki omejuje volumski KE: $45^\circ\leq\alpha_{min}$, $\alpha_{max}\leq135^\circ$
- oblikovni faktor (se računa le za tetraedrični KE)
	- $$1\geq f_\Delta=\frac{V_\Delta}{V_{\Delta id}}\geq0$$
	- $$f_{\Delta min}\geq0.5$$
- odstopanje ploskve KE od geometrije mreženega območja: $f_{g,max}\leq0.1$

## 30. Načini strukturiranega mreženja.

Strukturirano mreženje volumna uporabimo, ko želimo mrežo s heksaedričnimi KE. Imamo 2 možnosti:

**Delitev na podobmočja.** Geometrijo razdelimo na podobmočja enostavnih volumskih oblik. Ta podobmočja ne smejo vsebovati lukenj, vrinjenih ploskev, robov in točk. Ploskve, ki jih omejujejo, morajo biti strukturirano mrežljive. Nato določimo gostoto točk na ograjah podobmočij (enakomerno ali ne) in generiramo heksaedrično strukturirano mrežo.

**Sweep mesh.** Uporabimo ga, ko lahko ohranimo enako topologijo vozlišč vzdolž določenega roba. Določimo izhodiščno ploskev z 2D mrežo (štirikotniki za heksaedrične KE) in smer generiranja. Nato določimo gostoto točk na robovih in generiramo mrežo, ki ima v vsakem prerezu enako topologijo vozlišč in KE.

# Predavanje 5 - 16.3.2026

## 31. Določitev fizikalnih lastnosti materiala.

Fizikalne lastnosti materiala nastopajo kot koeficienti v diferencialni enačbi problema. Za izotropen material podamo:

- **toplotni problem**: toplotna prevodnost $k(T)$ [W/(m K)], gostota $\rho(T)$ [kg/m³] in specifična toplota $c(T)$ [J/(kg K)], ki nastopajo v enačbi

$$\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right)+\frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right)+\frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right)+Q=\rho c\,\frac{\partial T}{\partial t}$$

- **mehanski problem** (Hookov model linearno elastičnega materiala): modul elastičnosti $E$ [Pa] in Poissonovo število $\nu$ [1].

## 32. Določitev geometrijskih lastnosti ploskovnih KE.

Ploskovnim elementom moramo določiti še debelino KE $t$ [m] in normalo na površino KE.

## 33. Določitev geometrijskih lastnosti linijskih KE.

Linijskim elementom moramo definirati karakteristike prereza:

- ploščina prereza - $A$
- težiščni vztrajnostni momenti ploskve - $I_x, I_y$ in $I_{xy}$
- torzijski vztrajnostni moment - $I_t$

Definirati moramo tudi lego prereza glede na težiščnico - od te lege so odvisni vztrajnostni momenti prereza.

Prav tako moramo definirati lego glavnih vztrajnostnih osi.

## 34. Izpeljava šibke integralske enačbe za časovno ustaljen prostorski prevod toplote.

Vodilna enačba (konstanten $k$) in Fourierov zakon:

$$k\Delta T + Q_V = 0, \qquad \mathbf{q} = -k\nabla T \quad\Rightarrow\quad -\nabla^T\mathbf{q} + Q_V = 0$$

1. Enačbo pomnožimo s poljubno (testno) funkcijo $v$ in integriramo po volumnu:

$$\int_\Omega(-\nabla^T\mathbf{q})\,v\, d\Omega + \int_\Omega Q_V v\, d\Omega = 0$$

2. Uporabimo pravilo za odvod produkta $\nabla^T(\mathbf{q}\,v) = (\nabla^T\mathbf{q})\,v + \mathbf{q}^T\nabla v$:

$$\int_\Omega \mathbf{q}^T\nabla v\, d\Omega - \int_\Omega \nabla^T(\mathbf{q}\,v)\, d\Omega + \int_\Omega Q_V v\, d\Omega = 0$$

3. Z Gaussovim (Greenovim) izrekom drugi integral prevedemo na površino $\Gamma$, ki omejuje $\Omega$:

$$\int_\Omega \nabla^T(\mathbf{q}\,v)\, d\Omega = \int_\Gamma \mathbf{q}^T\mathbf{n}\,v\, d\Gamma = \int_\Gamma (q_x n_x + q_y n_y + q_z n_z)\,v\, d\Gamma$$

4. V prvi integral vstavimo $\mathbf{q} = -k\nabla T$. Dobimo šibko obliko:

$$k\int_\Omega \left(\frac{\partial T}{\partial x}\frac{\partial v}{\partial x} + \frac{\partial T}{\partial y}\frac{\partial v}{\partial y} + \frac{\partial T}{\partial z}\frac{\partial v}{\partial z}\right)d\Omega = -\int_\Gamma (q_x n_x + q_y n_y + q_z n_z)\, v\, d\Gamma + \int_\Omega Q_V v\, d\Omega$$

Oblika je šibka, ker vsebuje le prve odvode $T$ (vodilna enačba vsebuje druge).

## 35. Interpolacija temperaturnega polja po območju prostorskega heksaedričnega KE.

Temperaturo po KE aproksimiramo z vozliščnimi temperaturami $T_j$ in interpolacijskimi funkcijami $\psi_j$:

$$T(x,y,z) \approx\hat T(x,y,z) = \sum_{j=1}^{N_v}T_j\psi_j(x,y,z)$$

$N_v$ je število vozlišč KE. Heksaedrični KE ima vsaj 8 vozlišč (npr. 8 ali 20).

Pri izoparametričnem KE interpolacijo zapišemo v naravnih koordinatah:

$$\hat T(x,y,z) = \tilde T(\tilde x,\tilde y,\tilde z) = \sum_{j=1}^{N_v}T_j\tilde\psi_j(\tilde x,\tilde y,\tilde z)$$

## 36. Interpolacija geometrije v primeru izoparametričnega KE.

Pri izoparametričnem KE geometrijo interpoliramo z istimi funkcijami $\tilde\psi_j$ kot primarno spremenljivko. Funkcije preslikajo pravilen KE iz naravnega KS v KE "nepravilne" (tudi ukrivljene) oblike v kartezičnem KS:

$$x = x(\tilde x, \tilde y, \tilde z) = \sum_{j=1}^{N_v}x_j \tilde \psi_j( \tilde x, \tilde y, \tilde z)$$

$$y = y(\tilde x, \tilde y, \tilde z) = \sum_{j=1}^{N_v}y_j \tilde \psi_j (\tilde x, \tilde y, \tilde z)$$

$$z = z (\tilde x,\tilde y, \tilde z) = \sum_{j=1}^{N_v} z_j \tilde \psi_j ( \tilde x, \tilde y, \tilde z)$$

Tako KE bolje popišejo geometrijo območja (npr. ukrivljen rob).

## 37. Razlika med Kartezijskim in naravnim koordinatnim sistemom.

- **Kartezijev KS** $(x,y,z)$: globalni KS dejanske geometrije. KE je v njem lahko poljubne oblike.
- **Naravni KS** $(\tilde x,\tilde y,\tilde z)$: lokalni, brezdimenzijski KS posameznega KE, v katerem ima KE pravilno obliko. Pri heksaedru gredo koordinate od $-1$ do $+1$, pri tetraedru od $0$ do $1$.

Interpolacijske funkcije $\tilde\psi_j$ zapišemo enkrat v naravnem KS in veljajo za vse KE iste vrste. Meje $-1$ do $+1$ ustrezajo tudi Gaussovi integraciji. V kartezični KS KE preslikamo z interpolacijo geometrije.

## 38. Kaj predstavlja Jacobijeva matrika?

Jacobijeva matrika vsebuje parcialne odvode kartezičnih koordinat po naravnih koordinatah:

$$[J] = \begin{bmatrix}
\frac{\partial x}{\partial\tilde x} & \frac{\partial y}{\partial\tilde x} & \frac{\partial z}{\partial\tilde x}\\
\frac{\partial x}{\partial\tilde y} & \frac{\partial y}{\partial\tilde y} & \frac{\partial z}{\partial\tilde y}\\
\frac{\partial x}{\partial\tilde z} & \frac{\partial y}{\partial\tilde z} & \frac{\partial z}{\partial\tilde z}
\end{bmatrix}$$

Opisuje preslikavo med naravnim in kartezičnim KS. Z njeno inverzijo izračunamo odvode interpolacijskih funkcij po kartezičnih koordinatah:

$$\begin{Bmatrix}\frac{\partial\psi_j}{\partial x}\\ \frac{\partial\psi_j}{\partial y}\\ \frac{\partial\psi_j}{\partial z}\end{Bmatrix} = [J]^{-1}\begin{Bmatrix}\frac{\partial\tilde\psi_j}{\partial\tilde x}\\ \frac{\partial\tilde\psi_j}{\partial\tilde y}\\ \frac{\partial\tilde\psi_j}{\partial\tilde z}\end{Bmatrix}$$

Njena determinanta pretvori diferencial volumna: $d\Omega = |J|\,d\tilde x\,d\tilde y\,d\tilde z$.

# Predavanje 6 - 23.3.2026

## 39. Katere zahteve mora izpolnjevati interpolacijska funkcija?

1. Polinomska funkcija z vsaj toliko monomi, kot je vozlišč KE.
2. Monomi morajo biti med seboj linearno neodvisni.
3. Zagotavljati mora zvezni prehod primarne spremenljivke preko meja KE (včasih tudi njenih odvodov).
4. Biti mora kompletna (vsebuje vse monome do določene stopnje) oz. vsaj geometrijsko izotropna (enaka zastopanost vseh spremenljivk).

## 40. Določitev interpolacijske funkcije za določene KE

Monome izberemo iz Pascalovega tetraedra. Polinom mora biti kompleten ali vsaj geometrijsko izotropen in imeti toliko koeficientov $C_i$, kolikor ima KE vozlišč.

Za KE z $N_v$ vozlišči določimo $N_v$ funkcij $\psi_j$. Koeficiente dobimo iz pogoja

$$\psi_j(x_i,y_i,z_i) = \delta_{ij} = \begin{cases}1, & i=j\\ 0, & i\neq j\end{cases}$$

Za popis konstantnega polja mora veljati $\sum_{j=1}^{N_v}\psi_j = 1$.

**4-vozliščni tetraedrični KE** ($N_v = 4$):

$$
\psi(x,y,z) = C_1 + C_2 x + C_3 y + C_4 z
$$

V naravnem KS: $\tilde\psi_1 = 1-\tilde x-\tilde y-\tilde z$, $\tilde\psi_2 = \tilde x$, $\tilde\psi_3 = \tilde y$, $\tilde\psi_4 = \tilde z$.

**8-vozliščni heksaedrični KE** ($N_v = 8$):

$$
\psi(x,y,z) = C_1 + C_2 x + C_3 y + C_4 z + C_5 xy + C_6 xz + C_7 yz + C_8 xyz
$$

V naravnem KS: $\tilde\psi_j = \frac{1}{8}(1+\tilde x\tilde x_j)(1+\tilde y\tilde y_j)(1+\tilde z\tilde z_j)$, kjer so $(\tilde x_j,\tilde y_j,\tilde z_j)$ koordinate vozlišča $j$ ($\pm1$).

**10-vozliščni tetraedrični KE** ($N_v = 10$):

$$
\psi(x,y,z) = C_1 + C_2 x + C_3 y + C_4 z + C_5 x^2 + C_6 y^2 + C_7 z^2 + C_8 xy + C_9 xz + C_{10} yz
$$

**20-vozliščni heksaedrični KE** ($N_v = 20$):

$$
\begin{aligned}
\psi(x,y,z) &= C_1 + C_2 x + C_3 y + C_4 z \\
&+ C_5 x^2 + C_6 y^2 + C_7 z^2 \\
&+ C_8 xy + C_9 xz + C_{10} yz + C_{11} xyz \\
&+ C_{12} x^2y + C_{13} xy^2 + C_{14} x^2z + C_{15} xz^2 \\
&+ C_{16} y^2z + C_{17} yz^2 + C_{18} x^2yz + C_{19} y^2xz + C_{20} z^2xy
\end{aligned}
$$

## 41. Matrični zapis sistema enačb za posamezni KE (ustaljeni prevod toplote)

Za KE zapišemo $N_v$ enačb, po eno za vsako vozlišče (v vozlišču je neznana ena temperatura):

$$
k[M]\{T\} = \{q\} + \{Q\}
$$

- $k$: toplotna prevodnost materiala
- $[M]$: matrika toplotne prevodnosti — **simetrična**, elementi so:

$$
M_{Ij} = \int_\Omega \left( \frac{\partial\psi_I}{\partial x}\frac{\partial\psi_j}{\partial x} + \frac{\partial\psi_I}{\partial y}\frac{\partial\psi_j}{\partial y} + \frac{\partial\psi_I}{\partial z}\frac{\partial\psi_j}{\partial z} \right) d\Omega = M_{jI}
$$

- $\{T\}$: vektor temperatur v vozliščih (primarna neznanka)
- $\{q\}$: ekvivalentni vozliščni toplotni izvori/ponori zaradi toplotnega toka skozi površino KE:

$$
q_I = -\int_\Gamma[q_x n_x + q_y n_y + q_z n_z]\, \psi_I\, d\Gamma
$$

- $\{Q\}$: vektor ekvivalentnih vozliščnih vrednosti izvora/ponora toplote v volumnu:

$$
Q_I = \int_\Omega Q_V\, \psi_I\, d\Omega
$$

## 42. Kako pri integriranju po volumnu KE preidemo iz Kartezijevega koordinatnega sistema v naravni koordinatni sistem?

Izhajamo iz krajevnega vektorja $\vec{r} = x\vec{e}_x + y\vec{e}_y + z\vec{e}_z$ in definiramo vektorje stranic diferencialnega volumna:

$$
\vec{a} = \frac{\partial\vec{r}}{\partial\tilde{x}}d\tilde{x}, \quad \vec{b} = \frac{\partial\vec{r}}{\partial\tilde{y}}d\tilde{y}, \quad \vec{c} = \frac{\partial\vec{r}}{\partial\tilde{z}}d\tilde{z}
$$

Diferencial volumna je njihov mešani produkt:

$$
\begin{aligned}
d\Omega &= \vec{a}\cdot(\vec{b}\times\vec{c}) \\
&= \begin{vmatrix}
\frac{\partial x}{\partial\tilde{x}} & \frac{\partial y}{\partial\tilde{x}} & \frac{\partial z}{\partial\tilde{x}}\\
\frac{\partial x}{\partial\tilde{y}} & \frac{\partial y}{\partial\tilde{y}} & \frac{\partial z}{\partial\tilde{y}}\\
\frac{\partial x}{\partial\tilde{z}} & \frac{\partial y}{\partial\tilde{z}} & \frac{\partial z}{\partial\tilde{z}}
\end{vmatrix} d\tilde{x}\,d\tilde{y}\,d\tilde{z} \\
&= |J|\,d\tilde{x}\,d\tilde{y}\,d\tilde{z} = |J|\,d\tilde\Omega
\end{aligned}
$$

Integral po heksaedričnem KE ima tako meje od $-1$ do $+1$:

$$
\int_\Omega f\,d\Omega = \int_{-1}^{+1}\int_{-1}^{+1}\int_{-1}^{+1}\tilde f\,|J|\,d\tilde x\,d\tilde y\,d\tilde z
$$

Elemente $[J]$ izračunamo iz koordinat vozlišč in odvodov $\tilde\psi_j$, npr. $\frac{\partial x}{\partial\tilde x} = \sum_j x_j\frac{\partial\tilde\psi_j}{\partial\tilde x}$. Odvode $\partial\psi_j/\partial x_i$ pod integralom izrazimo z $[J]^{-1}$.

## 43. Prehod iz Kartezijevega v naravni KS pri integriranju po površini

Diferencial površine je dolžina vektorskega produkta vektorjev ploskve:

$$
d\Gamma = |\vec{a}\times\vec{b}| =
\begin{vmatrix}
\vec{e}_x & \vec{e}_y & \vec{e}_z \\
\frac{\partial x}{\partial\tilde{x}} & \frac{\partial y}{\partial\tilde{x}} & \frac{\partial z}{\partial\tilde{x}} \\
\frac{\partial x}{\partial\tilde{y}} & \frac{\partial y}{\partial\tilde{y}} & \frac{\partial z}{\partial\tilde{y}}
\end{vmatrix}
d\tilde{x}\,d\tilde{y} = |j|\,d\tilde{x}\,d\tilde{y} = |j|\,d\tilde\Gamma
$$

Meje integracije v naravnem KS so od $-1$ do $+1$. Pri heksaedru površinski integral razdelimo na 6 ploskev. Na vsaki je ena naravna koordinata konstantna ($\pm1$), integriramo pa po ostalih dveh.

## 44. Gaussovo numerično integriranje po eni spremenljivki

Integral s poljubnimi mejami preslikamo na interval od $-1$ do $+1$ in ga aproksimiramo z uteženo vsoto funkcijskih vrednosti v $m$ točkah:

$$
I = \int_{x_{sp}}^{x_{zg}} f(x)\,dx = \int_{-1}^{+1}\tilde{f}(\tilde{x})\,d\tilde{x} \approx \sum_{i=1}^m w_i\,\tilde{f}(\tilde{x}_i)
$$

Uteži $w_i$ in lege točk $\tilde{x}_i$ določimo tako, da formula točno integrira polinom $\tilde f = a_0 + a_1\tilde x + \dots + a_n\tilde x^n$. Lihe potence pri integraciji od $-1$ do $+1$ dajo nič:

$$
I = 2a_0 + \frac{2}{3}a_2 + \frac{2}{5}a_4 + \cdots + \frac{2}{2k+1}a_{2k}
$$

Z izenačenjem koeficientov pri $a_k$ dobimo nelinearen sistem enačb za $(w_i, \tilde{x}_i)$:

$$
\sum_{i=1}^m w_i = 2, \qquad \sum_{i=1}^m w_i\tilde x_i^{2k-1} = 0, \qquad \sum_{i=1}^m w_i\tilde x_i^{2k} = \frac{2}{2k+1}
$$

Pari $(w_i, \tilde{x}_i)$ so tabelirani, npr.:

- $m=1$: $w=2$, $\tilde x=0$
- $m=2$: $w=1$, $\tilde x=\pm0{,}577350$
- $m=3$: $w=0{,}888889$ pri $\tilde x=0$ in $w=0{,}555556$ pri $\tilde x=\pm0{,}774597$

Z $m$ točkami je rezultat točen za polinome do stopnje $2m-1$.

## 45. Numerično integriranje po več spremenljivkah z Gaussovo formulo

Gaussovo formulo razširimo z večkratnimi vsotami. Integracijske točke so kombinacije 1D točk ($m^2$ oz. $m^3$ točk). Za **2D** območje:

$$
I = \int_{-1}^{+1}\int_{-1}^{+1}\tilde{f}(\tilde{x},\tilde{y})\,d\tilde{x}\,d\tilde{y} \approx \sum_{j=1}^m\sum_{i=1}^m w_j\,w_i\,\tilde{f}(\tilde{x}_i,\tilde{y}_j)
$$

Za **3D** območje:

$$
I = \int_{-1}^{+1}\int_{-1}^{+1}\int_{-1}^{+1}\tilde{f}(\tilde{x},\tilde{y},\tilde{z})\,d\tilde{x}\,d\tilde{y}\,d\tilde{z} \approx \sum_{k=1}^m\sum_{j=1}^m\sum_{i=1}^m w_k\,w_j\,w_i\,\tilde{f}(\tilde{x}_i,\tilde{y}_j,\tilde{z}_k)
$$

## 46. Numerično integriranje po trikotnem ali tetraedričnem območju

Gaussovo formulo prilagodimo za trikotno/tetraedrično obliko s pomočjo **površinskih** oz. **volumskih koordinat** ($\Lambda$).

**Trikotno območje** ($\Gamma \equiv A_{IJK}$):

$$
I = \int_\Gamma f(x,y)\,d\Gamma \approx A_{IJK}\sum_{i=1}^m w_i\,\tilde{f}(\Lambda_{Ii}, \Lambda_{Ji}, \Lambda_{Ki})
$$

**Tetraedrično območje** ($\Omega \equiv V_{1234}$):

$$
I = \int_\Omega f(x,y,z)\,d\Omega \approx V_{1234}\sum_{i=1}^m w_i\,\tilde{f}(\Lambda_{1i},\Lambda_{2i},\Lambda_{3i},\Lambda_{4i})
$$

Uteži in koordinate integracijskih točk so vnaprej tabelirane za različno število točk $m$ (npr. $m=1$: $w=1$ v težišču, $\Lambda = 1/3$ oz. $1/4$).

## 47. Izračun integrala po volumnu z volumskimi koordinatami

Volumska koordinata je razmerje volumna delnega tetraedra (točka $T$ in tri vozlišča) in volumna KE, npr. $\Lambda_1 = V_{T234}/V_{1234}$. Za 4-vozliščni tetraeder so interpolacijske funkcije kar volumske koordinate: $\psi_j = \Lambda_j = a_j + b_j x + c_j y + d_j z$.

Kadar pod integralom nastopajo volumske koordinate, integral izračunamo **analitično**:

$$
\int_\Omega (\Lambda_1)^r(\Lambda_2)^p(\Lambda_3)^s(\Lambda_4)^t\,d\Omega = (6\Omega)\frac{r!\,p!\,s!\,t!}{(r+p+s+t+3)!}, \quad 0! = 1
$$

Za integral po trikotni površini:

$$
\int_\Gamma (\Lambda_I)^r(\Lambda_K)^p(\Lambda_L)^s\,d\Gamma = (2\Gamma)\frac{r!\,p!\,s!}{(r+p+s+2)!}
$$

Volumen tetraedra izračunamo iz determinante:

$$
\Omega = V_{1234} = \frac{1}{6}
\begin{vmatrix}
1 & x_1 & y_1 & z_1 \\
1 & x_2 & y_2 & z_2 \\
1 & x_3 & y_3 & z_3 \\
1 & x_4 & y_4 & z_4
\end{vmatrix}
$$

Primer: $\int_\Omega \Lambda_I\,d\Omega = 6\Omega\,\frac{1!}{4!} = \frac{\Omega}{4}$, zato je pri konstantnem $Q_V$: $Q_I = Q_V\,V_{1234}/4$. Matrika prevodnosti je $M_{Ij} = (b_I b_j + c_I c_j + d_I d_j)\,V_{1234}$.

## 48. Kako pridemo do sistema linearnih enačb za posamezni KE?

1. Zapišemo šibko (integralsko) formulacijo fizikalnega problema.
2. Po **Galerkinovi metodi** izberemo testne funkcije $v = \psi_I(x,y,z)$.
3. Primarno spremenljivko po elementu aproksimiramo z interpolacijskimi funkcijami: $T \approx \hat{T} = \sum_{j=1}^{N_v} T_j\,\psi_j(x,y,z)$
4. Aproksimacijo vstavimo v integralsko enačbo in izpeljemo:

$$
k[M]\{T\} = \{q\} + \{Q\}, \quad I = 1,\ldots,N_v
$$

5. Integrale po volumnu in površini izračunamo numerično (Gaussova formula) ali analitično (volumske koordinate).

## 49. Kako pridemo do sistema linearnih enačb za celotno območje?

1. Za vsak posamezni KE sestavimo lokalni sistem enačb ($N_v \times N_v$ matrika).
2. Vsako lokalno matriko **razširimo** na dimenzijo globalnega sistema (vrstice/stolpci vozlišč, ki ne pripadajo elementu, dobijo vrednost 0).
3. Vse razširjene matrike in vektorje **seštejemo** (superpozicija):

$$
k[M_k]\{T\} = \{q_q\} + \{q_Q\}
$$

kjer so skupni elementi matrike vsota prispevkov vseh elementov, ki si delijo isto vozlišče:

$$
M_{ij}^{(skupni)} = M_{ij}^{(1)} + M_{ij}^{(2)} + \cdots
$$

4. Upoštevamo robne pogoje (predpisane temperature ali tokovi) in rešimo globalni sistem enačb za neznane temperature $\{T\}$.

# Predavanje 7 - 31.3.2026

## 50. Zakaj se ne izračunava integralov po površini, ki je skupna dvema končnima elementoma?

Ker na skupni površini sosednjih elementov velja zakon o ohranitvi toplotnega toka, kar pomeni, da je iztekajoči tok iz prvega elementa enak pritekajočemu toku v drugi element ($q_n^{(1)} = -q_n^{(2)}$). Pri sestavljanju globalnega sistema enačb se prispevki teh integralov v vozliščih med seboj izničijo ($\{q^{(1)}\} + \{q^{(2)}\} = 0$), zato se integrali izračunavajo le po zunanjih (prostih) površinah območja.

## 51. Kako je v izračunu z MKE upoštevan konvektivni robni pogoj prestopa toplote na površini območja?

Na prosti površini s konvekcijo je toplotni tok odvisen od temperature površine:

$$q_n = h\,(T - T_{zrak})$$

Tok vstavimo v površinski integral $q_I = -\int_\Gamma q_n\,\psi_I\,d\Gamma$ in interpoliramo $T = \sum_j T_j\psi_j$:

$$q_I = -h\sum_{j=1}^{N_v} T_j\int_\Gamma \psi_j\,\psi_I\,d\Gamma + h\,T_{zrak}\int_\Gamma \psi_I\,d\Gamma$$

1. Del, ki je odvisen od neznanih temperatur vozlišč $\{T\}$, tvori **matriko prestopnosti** $[M_h]$. Prenesemo ga na levo stran k matriki prevodnosti.
2. Del, ki je odvisen od znane temperature zraka $T_{zrak}$, tvori **vektor ekvivalentnih vozliščnih toplotnih izvorov** $\{q_q\}$ na desni strani.

Sistem za celotno območje:

$$(k[M_k] + h[M_h])\{T\} = \{q_q\} + \{q_T\} + \{q_Q\}$$

$\{q_T\}$ so neznani tokovi na površinah s predpisano temperaturo.

## 52. Kako je v izračunu z MKE upoštevan robni pogoj prestopa toplote s sevanjem na površini območja?

Toplotni tok zaradi sevanja je $q_s = \sigma \varepsilon (T^4 - T_\infty^4)$, s temperaturami v K. Zaradi četrte potence je robni pogoj **nelinearen**.

Lineariziramo ga z razcepom:

$$T^4 - T_{\infty}^4 = (T^2 + T_{\infty}^2)(T + T_{\infty})(T - T_{\infty})$$

Tok zapišemo v obliki konvekcije z nadomestno toplotno prestopnostjo $h_s$:

$$q_s = h_s(T - T_{\infty}), \qquad h_s = \sigma\varepsilon\,(T^2 + T_{\infty}^2)(T + T_{\infty})$$

Nato ga upoštevamo enako kot konvekcijo ($[M_h]$ in $\{q_q\}$). Ker je $h_s$ odvisen od neznane $T$, ga računamo iterativno: $h_s$ izračunamo s $T$ iz prejšnje iteracije, rešimo sistem in ponavljamo do konvergence.

## 53. Primerjaj metode za reševanje sistema linearnih enačb.

Metode delimo na direktne in iterativne:

- **Direktne metode** (Gaussova eliminacija s pivotiranjem, razcep LU ali Choleskega):
    - **Prednosti:** So numerično stabilne in dajo rešitev v končnem številu korakov.
    - **Slabosti:** Čas reševanja s številom enačb narašča hitreje kot linearno (potenčno). Zahtevajo veliko delovnega pomnilnika.
- **Iterativne metode** (Gauss-Seidlova, Gauss-Jacobijeva metoda, metoda konjugiranih gradientov):
    - **Prednosti:** Čas reševanja narašča približno linearno s številom enačb. Porabijo manj pomnilnika.
    - **Slabosti:** Potrebujejo konvergenčni kriterij, konvergenca pa ni vedno zagotovljena.
- **Povzetek:** Za manjše sisteme so boljše direktne metode, pri velikih sistemih (nad $10^6$ enačb) pa so zaradi hitrosti in pomnilniške učinkovitosti bolj smiselne iterativne metode.

# Predavanje 8 - 13.4.2026

## 54. Izhodiščna enačba za reševanje statičnega 3D mehanskega problema z MKE.

Izhodišče so diferencialne enačbe ravnotežja ($k = x, y, z$):

$$ \frac{\partial \sigma_{kx}}{\partial x} + \frac{\partial \sigma_{ky}}{\partial y} + \frac{\partial \sigma_{kz}}{\partial z} + \rho a_k = 0 $$

Pomnožimo jih s poljubnimi funkcijami $v_k$, integriramo po območju KE in z Greenovim teoremom preoblikujemo v šibko obliko. Ta uravnoteži notranje napetosti z zunanjimi površinskimi in volumskimi obremenitvami:

$$ \int_\Omega \{\sigma\}^T \{\partial v\}\, d\Omega = \int_\Gamma \{p\}^T \{v\}\, d\Gamma + \int_\Omega \rho \{a\}^T \{v\}\, d\Omega $$

## 55. Kako je izbrana poljubna funkcija $v$ v primeru 3D KE za reševanje mehanskega problema?

V skladu z Galerkinovo metodo so $v$ enake oblikovnim funkcijam $[N]$, s katerimi interpoliramo pomike. Namesto vozliščnih pomikov jih pomnožimo s poljubnimi vozliščnimi vrednostmi $\{\Upsilon\}$:

$$ \{v\} = [N]\{\Upsilon\} \quad \text{in} \quad \{\partial v\} = [L][N]\{\Upsilon\} $$

Tukaj je $[L]$ matrika operatorjev parcialnih odvodov.

Ko to vstavimo v šibko obliko, $\{\Upsilon\}$ izpostavimo. Enačba mora veljati za poljubne $\{\Upsilon\}$, zato jih okrajšamo. Ko izpostavimo še pomike $\{U\}$, dobimo enačbo KE:

$$ \underbrace{\int_{\Omega_e} \big([L][N]\big)^T [E] \big([L][N]\big)\, d\Omega}_{[K]_e} \{U\}_e = \int_{\Gamma_e} [N]^T \{p\}\, d\Gamma + \int_{\Omega_e} \rho [N]^T \{a\}\, d\Omega $$

## 56. Katere so primarne neznanke pri reševanju 3D mehanskih problemov?

Primarne neznanke so pomiki v vozliščih. V 3D prostoru ima vsako vozlišče 3 translacijske prostostne stopnje, KE pa $3N_v$ prostostnih stopenj:

$$ \{U\}_i = \{U_{ix}, U_{iy}, U_{iz}\}^T $$

V vozliščih s predpisanim pomikom je namesto pomika neznana sila (reakcija).

## 57. Kako se izračunajo komponente napetostnega tenzorja?

Izračunajo se na nivoju posameznega KE, v **integracijskih točkah**. Deformacije dobimo z odvajanjem interpoliranih vozliščnih pomikov, napetosti pa iz reološkega (Hookeovega) zakona z materialno matriko $[E]$:

$$ \{\varepsilon\}_e = [L][N]\{U\}_e, \qquad \{\sigma\}_e = [E]\{\varepsilon\}_e $$

## 58. Kaj predstavlja vrednost in predznak komponente vektorja pomika?

Vrednost pove, za koliko dolžinskih enot se je vozlišče premaknilo glede na neobremenjeno stanje. Predznak določa smer premika vzdolž osi ($x, y$ ali $z$) globalnega koordinatnega sistema.

## 59. Kaj predstavlja vrednost in predznak normalne komponente deformacijskega tenzorja?

Vrednost je relativna sprememba dolžine materialnega delca v smeri osi (brezdimenzijska). Pozitiven predznak (+) pomeni **razteg**, negativen (-) pa **skrček**.

$$ \varepsilon_{xx} = \frac{\partial u_x}{\partial x} $$

## 60. Kaj predstavlja vrednost in predznak normalne komponente napetostnega tenzorja?

Vrednost je normalna sila na enoto ploskve, pravokotne na os. Pozitiven predznak (+) pomeni natezno napetost, negativen (-) pa tlačno napetost.

## 61. Kako je definirana strižna komponenta deformacijskega tenzorja?

Strižna deformacija $\gamma_{xy}$ je sprememba pravega kota med smerema $x$ in $y$. Komponenta tenzorja je njena polovica:

$$ \varepsilon_{xy} = \frac{\gamma_{xy}}{2} = \frac{1}{2} \left( \frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x} \right) $$

Analogno velja za $\varepsilon_{xz}$ in $\varepsilon_{yz}$.

## 62. Kako preverimo, ali je obremenitev mehansko obremenjene komponente v dopustnih vrednostih?

Iz glavnih napetosti $\sigma_1 \ge \sigma_2 \ge \sigma_3$ izračunamo eno **primerjalno (ekvivalentno) napetost** in jo primerjamo z dopustno napetostjo materiala ($\sigma_{ekv} \le \sigma_{dop}$). Najpogosteje uporabimo von Misesovo primerjalno napetost, ki je vedno pozitivna:

$$ \sigma_{ekv}^{\text{Mises}} = \sqrt{0.5 \left[ (\sigma_1-\sigma_2)^2 + (\sigma_1-\sigma_3)^2 + (\sigma_2-\sigma_3)^2 \right]} $$

Druga možnost je primerjalna napetost po Tresci:

$$ \sigma_{ekv}^{\text{Tresca}} = \max\left( \frac{|\sigma_1-\sigma_2|}{2}, \frac{|\sigma_1-\sigma_3|}{2}, \frac{|\sigma_2-\sigma_3|}{2} \right) $$

## 64. Kako so definirane komponente deformacijskega tenzorja v cilindričnem koordinatnem sistemu?

Normalne komponente opisujejo razteg v smereh $r, \varphi, z$:

$$ \varepsilon_{rr} = \frac{\partial u_r}{\partial r}, \quad \varepsilon_{\varphi\varphi} = \frac{u_r}{r} + \frac{1}{r}\frac{\partial u_\varphi}{\partial \varphi}, \quad \varepsilon_{zz} = \frac{\partial u_z}{\partial z} $$

Strižne komponente vsebujejo dodatne člene ($1/r$) zaradi ukrivljenosti sistema:

$$ \varepsilon_{r\varphi} = \frac{1}{2} \left( \frac{1}{r} \frac{\partial u_r}{\partial \varphi} + \frac{\partial u_\varphi}{\partial r} - \frac{u_\varphi}{r} \right), \quad \varepsilon_{rz} = \frac{1}{2} \left( \frac{\partial u_r}{\partial z} + \frac{\partial u_z}{\partial r} \right), \quad \varepsilon_{\varphi z} = \frac{1}{2} \left( \frac{\partial u_\varphi}{\partial z} + \frac{1}{r}\frac{\partial u_z}{\partial \varphi} \right) $$

## 65. Katere mehanske veličine se v primeru uporabe 3D KE izračunavajo v vozliščih in katere v integracijskih točkah posameznega KE?

- **Vozlišča:** primarne neznanke – pomiki ($\{U\}$) in ekvivalentne sile ($\{F\}$).

- **Integracijske točke:** sekundarne neznanke – deformacije ($\{\varepsilon\}$) in napetosti ($\{\sigma\}$).

## 66. Vloga globalnega koordinatnega sistema.

V globalnem koordinatnem sistemu so definirani geometrija (vozlišča elementov), robni pogoji in obremenitve. Omogoča rotacijo vseh poljubno zasukanih elementov v skupen referenčni sistem in sestavljanje sistema enačb celotnega problema:

$$ [K]\{U\} = \{F\} $$

## 67. Kako je zajet vpliv lastne teže v primeru uporabe 3D KE?

Zajet je kot volumska obremenitev $\gamma_k = \rho\, a_k$ (pri lastni teži je $a_k = g$ v smeri gravitacije). Integriramo jo po volumnu KE in z interpolacijskimi funkcijami $[N]$ pretvorimo v ekvivalentne vozliščne sile:

$$ \{F_V\}_e = \int_{\Omega_e} \rho\, a_k [N]^T d\Omega = \int_{\Omega_e} \gamma_k [N]^T d\Omega $$

# Predavanje 9 - 20.4.2026

## 68. Kaj mora biti izpolnjeno, da lahko uporabimo osnosimetrične KE?

Da lahko problem obravnavamo kot osnosimetrični problem (privzemimo, da je os simetrije "z" koordinatna os), morajo biti osnosimetrični:

1. geometrija obravnavanega območja,
2. materialne lastnosti,
3. predpisani robni pogoji,
4. obremenitev obravnavanega območja.

## 69. Opišite prednosti uporabe osnosimetričnih KE v primerjavi z uporabo volumskih KE?

Uporabimo lahko bistveno manj končnih elementov in imamo precej manjše število enačb (primer s predavanj: 200 000 enačb s 3D KE in 3400 enačb z 2D osnosimetričnimi KE). To omogoča hitrejši izračun ali pa uporabo veliko gostejše mreže za isti računski čas. Prav tako lažje in boljše popišemo geometrijo, saj namesto celotnega 3D volumna modeliramo le 2D presek.

## 70. Katere komponente deformacijskega tenzorja so različne od nič v primeru obravnave problema z osnosimetričnimi KE?

Od nič so različne 4 komponente, tri normalne in ena strižna:

$$ \varepsilon_{rr} = \frac{\partial u_r}{\partial r}, \quad \varepsilon_{\varphi\varphi} = \frac{u_r}{r}, \quad \varepsilon_{zz} = \frac{\partial u_z}{\partial z}, \quad \gamma_{rz} = \frac{\partial u_r}{\partial z} + \frac{\partial u_z}{\partial r} $$

Komponenti $\gamma_{r\varphi}$ in $\gamma_{\varphi z}$ sta enaki 0.

## 71. Kako je določena obodna deformacija v primeru obravnave problema z osnosimetričnimi KE?

Obodna deformacija je relativna sprememba dolžine loka $r\,d\varphi$ zaradi radialnega pomika $u_r$:

$$\varepsilon_{\varphi\varphi} = \frac{(r + u_r)\,d\varphi - r\,d\varphi}{r\,d\varphi} = \frac{u_r}{r}$$

Moramo paziti: tudi če so vsi odvodi $\frac{\partial}{\partial \varphi}=0$, je $\varepsilon_{\varphi\varphi}$ različna od 0, saj je posledica radialnega pomika $u_r$.

## 72. Kaj predstavlja aksialna točkovna obremenitev v primeru obravnave problema z osnosimetričnimi KE?

Aksialna točkovna obremenitev v vozlišču 2D osnosimetričnega KE predstavlja celotno aksialno silo na radiju vozlišča $r_F$. V realnosti je to linijska obremenitev $f_z$ [N/m], porazdeljena po celotnem obodu krožnice s tem radijem:

$$ F_z = 2\pi r_F f_z $$

## 73. Kaj predstavlja radialna točkovna obremenitev v primeru obravnave problema z osnosimetričnimi KE?

Radialna točkovna obremenitev v vozlišču predstavlja celotno radialno silo na radiju vozlišča $r_F$. V realnosti je to radialna linijska obremenitev $f_r$ [N/m], porazdeljena po celotnem obodu krožnice s tem radijem:

$$ F_r = 2\pi r_F f_r $$

## 74. Kako obravnavamo volumske obremenitve v primeru obravnave problema z osnosimetričnimi KE?

Volumske obremenitve (npr. lastna teža ali centrifugalna sila) obravnavamo tako, da zanje izračunamo ekvivalentne vozliščne sile za posamezni KE. Izračun je vezan na vrtenino, ki jo dobimo z vrtenjem površine KE okoli osi simetrije, zato nastopa faktor $2\pi r$:

$$\{F_V\}_e = \int_{\Omega_e}\rho_k\,a_k\,[N]^T\,2\pi r\,d\Omega = \int_{\Omega_e}\gamma\,[N]^T\,2\pi r\,d\Omega$$

Obremenitev mora biti osnosimetrična: lastna teža le v smeri osi simetrije, centrifugalna sila pa v radialni smeri.

## 75. Kaj mora biti izpolnjeno, da lahko problem obravnavamo kot ravninsko napetostni problem?

Da lahko problem obravnavamo kot ravninsko napetostni problem (v ravnini x-y), mora biti izpolnjeno naslednje:

1. Komponente napetostnega tenzorja $\sigma_{zz}$, $\sigma_{xz}$ in $\sigma_{yz}$ morajo biti tako majhne, da jih lahko zanemarimo.
2. Material mora biti homogen, njegove fizikalne lastnosti pa so lahko tudi ortotropne (različne lastnosti v pravokotnih smereh).
3. Predpisani robni pogoji se morajo nanašati izključno na ravnino obravnavanega problema.
4. Obremenitev mora ležati v ravnini obravnavanega problema.

# Predavanje 10 - 4.5.2026

## 76. Opišite prednosti uporabe ravninskih KE v primerjavi z uporabo volumskih KE?

1. **Bistveno manj prostostnih stopenj:** mrežimo le ravnino, vozlišče pa ima 2 prostostni stopnji namesto 3. Primer s predavanj: 80 700 enačb s 3D KE in 9600 enačb z 2D KE. Izračun je zato hitrejši, za isti čas pa lahko uporabimo gostejšo mrežo.

2. **Ni problema oblikovnega razmerja (aspect ratio):** tanka struktura (npr. pločevina) bi z 3D KE zahtevala zelo sploščene elemente (npr. stranica 100 mm, debelina 1 mm), ki vodijo do numeričnih napak. Pri 2D KE debelina ni dimenzija mreže, temveč le parameter $h$ v togostni matriki.

## 77. Kako izračunamo deformacijo v smeri pravokotno na ravnino problema v primeru uporabe ravninsko napetostnega KE in linearno elastičnega materialnega modela?

Pri ravninskem napetostnem stanju (RNS) je $\sigma_{zz} = 0$. To vstavimo v Hookeov zakon:

$$
\sigma_{zz} = 0 = \frac{E}{(1+\nu)(1-2\nu)}\left[\nu \,\varepsilon_{xx} + \nu \,\varepsilon_{yy} + (1-\nu)\,\varepsilon_{zz}\right]
$$

Iz te enačbe izrazimo deformacijo $\varepsilon_{zz}$:

$$
\varepsilon_{zz} = -\frac{\nu}{1-\nu}(\varepsilon_{xx} + \varepsilon_{yy})
$$

## 78. Kaj mora biti izpolnjeno, da lahko problem obravnavamo kot ravninsko deformacijski problem?

Da lahko problem obravnavamo kot ravninsko deformacijski problem (RDS v ravnini x-y), mora biti izpolnjeno naslednje:

1. Komponente deformacijskega tenzorja $\varepsilon_{zz}$, $\varepsilon_{xz}$ in $\varepsilon_{yz}$ morajo biti enake 0 oz. tako majhne, da jih lahko zanemarimo.
2. Material mora biti homogen, njegove fizikalne lastnosti pa so lahko tudi ortotropne.
3. Predpisani robni pogoji se vzdolž "z" koordinatne osi ne smejo spreminjati.
4. Obremenitev se vzdolž "z" koordinatne osi ne sme spreminjati.

## 79. V čem se razlikuje KE za reševanje ravninsko napetostnega problema od ravninsko deformacijskega problema?

Oba sta 2D KE z dvema pomikoma ($u_x$ in $u_y$) v vozlišču in brez zasukov. Razlikujeta se v dveh stvareh.

**1. Materialna matrika $[E]$** (za $\{\varepsilon\} = \{\varepsilon_{xx}, \varepsilon_{yy}, \gamma_{xy}\}^T$):

RNS predpostavi tanek element, ki ne prenaša napetosti pravokotno na ravnino ($\sigma_{zz}=0$, $\varepsilon_{zz} \neq 0$):

$$ [E]_{RNS} = \frac{E}{1-\nu^2}\begin{bmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1}{2}(1-\nu) \end{bmatrix} $$

RDS predpostavi dolgo strukturo z blokiranim deformiranjem v smeri $z$ ($\varepsilon_{zz}=0$, $\sigma_{zz} \neq 0$):

$$ [E]_{RDS} = \frac{E}{(1+\nu)(1-2\nu)}\begin{bmatrix} 1-\nu & \nu & 0 \\ \nu & 1-\nu & 0 \\ 0 & 0 & \frac{1}{2}(1-2\nu) \end{bmatrix} $$

**2. Pomen parametra $h$** v togostni matriki in obremenitvah:

$$ [K]_e = \int_{\Omega_e} \big([L][N]\big)^T [E] \big([L][N]\big)\, h\, d\Omega, \qquad F_k = h f_k $$

- **RNS (tanke plošče):** $h$ je dejanska debelina plošče.
- **RDS (dolge strukture, npr. jez, cev):** $h$ je dolžina obravnavanega območja v smeri $z$. Pogosto vzamemo enotsko dolžino, tako da so sile in togosti podane na enoto dolžine.

## 80. V čem se razlikujejo tri- in štirivozliščni KE za reševanje ravninskih problemov?

**Trivozliščni KE** imajo linearne interpolacijske funkcije, zapisane s trikotniškimi koordinatami:

$$ \psi_j = \Lambda_j = a_j + b_j x + c_j y $$

Pomiki so zato linearni, deformacije in napetosti pa po celotnem KE **konstantne**. Element slabše popisuje gradient napetosti, zato za natančen rezultat potrebujemo precej gosto mrežo. Integrale lahko izračunamo analitično, brez numerične integracije.

**Štirivozliščni KE** (izoparametrični) imajo bilinearne interpolacijske funkcije v naravnem koordinatnem sistemu:

$$ \tilde{\psi}_j = \frac{1}{4}\left(1 + \tilde{x}\tilde{x}_j\right)\left(1 + \tilde{y}\tilde{y}_j\right) $$

Deformacije in napetosti se po KE **spreminjajo**, zato je element natančnejši in omogoča redkejšo mrežo. Integrali se izračunavajo numerično z **Gaussovo integracijo**, napetosti pa v integracijskih (Gaussovih) točkah. Pri reducirani integraciji (1 točka) element nekaterih oblik deformacije ne zazna, saj je deformacija v središču enaka 0.

## 81. Kako izračunamo napetost v smeri pravokotno na ravnino problema v primeru uporabe ravninsko deformacijskega KE in linearno elastičnega materialnega modela?

Pri ravninskem deformacijskem stanju (RDS) je $\varepsilon_{zz} = 0$, napetost $\sigma_{zz}$ pa ni nič. Izračunamo jo iz Hookeovega zakona:

$$
\sigma_{zz} = \frac{E}{(1+\nu)(1-2\,\nu)}\left[\nu \,\varepsilon_{xx} + \nu\,\varepsilon_{yy}\right] = \nu\left(\sigma_{xx} + \sigma_{yy}\right)
$$

## 82. Kaj mora biti izpolnjeno, da lahko problem obravnavamo kot generalizirani ravninsko deformacijski problem?

Da lahko problem obravnavamo kot generalizirani ravninsko deformacijski problem (GRDS), mora veljati:

1. Komponenti deformacijskega tenzorja $\varepsilon_{xz}$ in $\varepsilon_{yz}$ morata biti enaki 0 oz. tako majhni, da jih lahko zanemarimo.
2. Material mora biti homogen, njegove fizikalne lastnosti pa so lahko ortotropne.
3. Predpisani robni pogoji se vzdolž "z" koordinatne osi ne spreminjajo.
4. Obremenitev se vzdolž "z" koordinatne osi ne spreminja.
5. Krajni površini analiziranega območja, katerih normali sta vzporedni z osjo "z", ostaneta plani (ravni) v obremenjenem stanju.
6. Komponenta deformacijskega tenzorja $\varepsilon_{zz}$ je konstantna (pri RDS je enaka nič), oziroma od te konstantne vrednosti le malo odstopa.

# Predavanje 11 - 11.5.2026

## 83. Kaj mora biti izpolnjeno, da lahko problem obravnavamo kot upogibno obremenjeno ploščo?

Problem lahko obravnavamo kot upogibno obremenjeno ploščo (v x-y ravnini), ko velja:

- obravnavano geometrijsko območje mora ležati v ravnini, pri čemer mora biti izmera v z-smeri (debelina) majhna glede na ostale mere obravnavanega območja ($h \ll L_x, L_y$).
- material je homogen, njegove lastnosti pa so lahko ortotropne.
- obremenitev je lahko usmerjena samo pravokotno na ravnino, v kateri leži ploskev.
- komponenta napetostnega tenzorja $\sigma_{zz}$ mora biti tako majhna, da jo lahko zanemarimo.
- dimenzije **srednje ravnine plošče** se med obremenjevanjem le malo spremenijo, tako da lahko v tej ravnini komponente deformacijskega tenzorja $\varepsilon_{xx}$, $\varepsilon_{yy}$ in $\varepsilon_{xy}$ zanemarimo.

## 84. Kaj zajema Reissner-Mindlinova teorija plošč?

Reissner-Mindlinova teorija plošč nam pravi, da so pomiki v ravnini ($u_x$ in $u_y$) linearno povezani z zasuki ($\varphi_x$ in $\varphi_y$).

$$u_x = +z\,\varphi_y$$
$$u_y = -z\,\varphi_x$$

Teorija predpostavlja planost prereza v deformiranem stanju, pri čemer pa prerez v splošnem **ni več pravokoten** na srednjo ravnino plošče (upoštevanje prečnih strižnih deformacij). Srednja ravnina plošče se dimenzijsko ne spremeni.

## 85. Kako se izvede numerično integriranje v primeru obravnave upogibno obremenjene plošče?

V ravnini x-y (v ravnini plošče) se izvaja **Gaussova numerična integracija**, kjer se količine izračunavajo v integracijskih točkah.

Po debelini plošče (v z-smeri) imamo dve možnosti:

1. **Analitična integracija:** Če je material homogen in linearno elastičen, lahko integral po z-smeri izračunamo vnaprej analitično (tako dobimo upogibne togosti).
2. **Numerična integracija (uporaba v praksi, npr. Abaqus):** Izvaja se po **Simpsonovi metodi**. Simpsonova metoda upošteva liho število točk – točke so postavljene na robove integracijskega območja (zgornja in spodnja površina) in v sredino. To nam ustreza, saj se pri upogibu plošč največje normalne napetosti pojavijo ravno na vrhu in dnu plošče, največje strižne napetosti pa v srednji ravnini ($z=0$).

## 86. Katere so neznanke v vozliščih v primeru obravnave upogibno obremenjene plošče?

V primeru upogibno obremenjene plošče imamo v posameznem vozlišču 3 primarne neznanke:

- pomik v z-smeri: $u_z$
- zasuk okoli x-osi: $\varphi_x$
- zasuk okoli y-osi: $\varphi_y$

## 87. Kako se upošteva porazdeljena obremenitev po območju plošče?

Porazdeljeno mehansko obremenitev se preračuna v ekvivalentne vozliščne sile. Kot že omenjeno, mora obremenitev $p$ delovati v z-smeri (normalno na ravnino plošče).

$$\{F_p\}_e = \int_{\Omega_e}p\,[N]^T\,d\Omega$$

## 88. V čem so posebnosti analize deformacijsko-napetostnega stanja v upogibno obremenjeni plošči?

V grafičnih prikazovalnikih (post-procesorjih) so rezultati prikazani (narisani) na **srednji ravnini plošče**, vendar pa prikazane vrednosti napetosti dejansko predstavljajo **maksimalne vrednosti, ki se nahajajo na površini** (spodnji ali zgornji strani plošče), saj so pri upogibu napetosti tam največje.

## 89. Kako so izpolnjeni robni pogoji v primeru 3D KE v primeru mehanske analize?

Robni pogoji (tako kinematični kot statični, vključno s prostimi površinami, kjer napetosti izzvenijo v nič) so lahko izpolnjeni **eksaktno**, če je mreža dovolj gosta, saj ima 3D element popolno svobodo deformiranja v vseh smereh.

## 90. Kako so izpolnjeni robni pogoji v primeru 2D KE v primeru mehanske analize?

Prav tako so robni pogoji na robovih 2D domene izpolnjeni **eksaktno**.

## 91. Kako so izpolnjeni robni pogoji v primeru obravnave upogibno obremenjene plošče?

Pri KE plošče so nekateri naravni robni pogoji na prostih površinah **kršeni (neizpolnjeni)**.

- Zanemarjen je robni pogoj za obremenitev v z-smeri, saj predpostavimo, da je $\sigma_{zz} = 0$ po celotni debelini, čeprav na površini deluje obremenitev $p$.
- V formulaciji (RM teorija) je upoštevano, da sta prečni strižni deformaciji ($\gamma_{xz}, \gamma_{yz}$) konstantni po celotni debelini KE. Kar pomeni, da strižna napetost na zgornji in spodnji prosti površini ni enaka nič, kar fizično ni pravilno (robni pogoj za strig ni izpolnjen). Zato se v praksi uporabljajo strižni korekcijski faktorji.

## 92. Kaj vpliva na natančnost izračuna komponent napetostnega tenzorja?

Na natančnost vpliva število elementov (gostota mreže) in število integracijskih točk (npr. reducirana vs. polna integracija), ki so uporabljene v elementu. Prav tako na natančnost vpliva tip elementa (linearne ali kvadratne interpolacijske funkcije, tj. 3-vozliščni, 4-vozliščni, 8-vozliščni elementi itd.).

## 93. Na čem bazira definicija lupinskega KE?

Definicija lupinskega KE bazira na **superpoziciji** KE ravninskega napetostnega stanja (stena/membrana) in KE upogibno obremenjene plošče. Lupina lahko prenaša tako osne (membranske) sile kot upogibne momente.

## 94. Kakšna je vloga globalnega in lokalnega Kartezijevega koordinatnega sistema v primeru obravnave mehanskega problema z lupinskimi KE?

- V **globalnem koordinatnem sistemu** $(x, y, z)$ je definirana geometrija lupine, prav tako se v njem definirajo rešitve primarnih neznank (vozliščni pomiki in zasuki).
- V **lokalnem koordinatnem sistemu** $(\hat{x}, \hat{y}, \hat{z})$, ki je vezan na tangencialno in normalno smer posameznega elementa, pa sta definirana deformacijski in napetostni tenzor (sekundarne veličine).

# Predavanje 12 - 18.5.2026

## 95. Kaj mora biti izpolnjeno, da lahko konstrukcijo obravnavamo z linijskimi KE, ki prenašajo samo osno obremenitev?

Da lahko konstrukcijo obravnavamo kot paličje, mora biti izpolnjeno:

1. Konstrukcijski element (imenovan palica) prenaša predvsem osno obremenitev (nateg/tlak).
2. Material mora biti homogen in izotropen.
3. Prerez palice mora biti majhen glede na njeno dolžino ($L \gg A$).
4. Obremenjene smejo biti le povezave med palicami (vozlišča), pri čemer mora biti obremenitev točkovna.

## 96. Kaj moramo upoštevati pri pripravi numeričnega modela z linijskimi KE, ki prenašajo samo osno obremenitev?

Pri pripravi modela s paličnimi elementi moramo upoštevati, da obremenitve lahko delujejo **izključno v vozliščih** in samo kot točkovne sile. Ker element prenaša le osne obremenitve, v vozliščih **ni rotacijskih prostostnih stopenj** (ni zasukov, vozlišča delujejo kot idealni členki). To pomeni, da **eni fizični palici pripada le en končni element**, saj linearne interpolacijske funkcije znotraj elementa eksaktno popišejo konstantno osno silo.

## 97. Kaj mora biti izpolnjeno, da lahko konstrukcijo obravnavamo z linijskimi KE, ki prenašajo samo upogibno obremenitev?

Da lahko konstrukcijo obravnavamo kot upogibno obremenjen nosilec (v ravnini x-z), mora veljati:

1. Konstrukcijski element (nosilec) je obremenjen predvsem upogibno.
2. Material je homogen in izotropen.
3. Prerez nosilca je majhen glede na njegovo dolžino ($L \gg A$).
4. Obremenitev v obliki sile mora biti usmerjena prečno na nosilec (v smeri "z" koordinatne osi).
5. Obremenitev v obliki momenta mora biti usmerjena okoli "y" koordinatne osi.

## 98. Značilnosti KE, ki prenaša upogibno obremenitev, in je zasnovan upoštevajoč Euler-Bernoullijevo teorijo nosilcev?

Euler-Bernoullijeva teorija predpostavlja planost prerezov v deformiranem stanju, pri čemer prerez ostane **strogo pravokoten na težiščnico**. To pomeni, da teorija povsem **zanemarja strižne deformacije** ($\gamma_{xz} = 0$).
Ker je zasuk definiran zgolj kot odvod povesa ($\varphi_y = - \frac{du_z}{dx}$), poves in zasuk nista neodvisna. Za aproksimacijo primarne spremenljivke se uporablja en sam polinom 3. stopnje (Hermitovi kubični polinomi), ki zagotavlja zveznost tako povesa kot naklona med elementi ($C^1$ zveznost).

## 99. Značilnosti KE, ki prenaša upogibno obremenitev, in je zasnovan upoštevajoč Timoshenkovo teorijo nosilcev?

Timoshenkova teorija prav tako predpostavlja planost prerezov, vendar **prerez v splošnem ni več pravokoten na težiščnico**, kar pomeni, da **upošteva prečne strižne deformacije**.
Vozliščni neznanki, poves ($u_z$) in zasuk ($\varphi_y$), sta pri tej formulaciji obravnavani kot popolnoma **neodvisni spremenljivki**. To pomeni, da ima vsaka svojo interpolacijsko funkcijo (potrebna je le $C^0$ zveznost). Pri najenostavnejšem 2-vozliščnem elementu se tako za poves kot za zasuk uporabljata linearni aproksimaciji (polinomi prvega reda).

## 100. Primerjajte KE, ki prenašajo upogibno obremenitev, in so zasnovani na Timoshenkovi teoriji nosilcev.

Primerjava teh elementov se v osnovi nanaša na problematiko strižne togosti in **način numeričnega integriranja** matrike togosti (kot je prikazano na prosojnicah – predavanje 12, str. 68–70):

1. **Polna integracija (2 Gaussovi točki):** Če integral izračunamo eksaktno (z 2 točkama za linearni element), element postane pri vitkih nosilcih prekomerno tog. Temu pojavu rečemo "strižno zaklepanje" (*shear locking*).
2. **Reducirana integracija (1 Gaussova točka):** Da se izognemo strižnemu zaklepanju, se pogosto uporabi reducirana integracija samo z 1 Gaussovo točko. To umetno "omehča" element in omogoča pravilno obnašanje tudi pri vitkih nosilcih.
3. **Modificirana (kubična) oblika Timoshenkovega elementa:** To je hibridni element, ki združuje prednosti obeh teorij. Uporablja kubično polinomsko aproksimacijo (kot E-B element), hkrati pa v enačbe vključi faktor strižne podajnosti materiala ($C$). Ta element daje odlične rezultate tako za debele (kjer je strig pomemben) kot za vitke nosilce (brez strižnega zaklepanja).

# Predavanje 13 - 25.5.2026

## 101. Katere obremenitve lahko obravnavamo s splošnim prostorskim linijskim KE?

Splošni prostorski linijski element (3D nosilec) lahko prenaša:

- **osno (natezno/tlačno) obremenitev** v smeri težiščne osi,
- **torzijsko obremenitev** okoli težiščne osi,
- **upogibno obremenitev** v dveh med seboj pravokotnih ravninah.

## 102. Kako je v formulaciji splošnega prostorskega linijskega KE upoštevana torzijska obremenitev?

Torzijska obremenitev je upoštevana na matematično identičen način kot osna (natezna) obremenitev. Formulacija ima enake oblikovne funkcije in strukturo lokalne togostne matrike, le da:

- namesto modula elastičnosti $E$ uporabimo strižni modul $G$,
- namesto preseka $A$ uporabimo torzijski vztrajnostni moment $J_x$ (oz. $I_t$),
- primarne neznanke niso translacije, temveč rotacije okoli osi elementa ($\Phi_x$),
- obremenitev predstavlja torzijski moment ($M_x$).

Prispevki te torzijske matrike se nato preprosto prištejejo (superponirajo) na ustrezna mesta v globalni matriki elementa.

## 103. Izpeljite sistem enačb za osno obremenjeni linijski KE.

Izhajamo iz šibke (integralske) oblike diferencialne enačbe za osno obremenjen linijski konstrukcijski element (palico):

$$
\int_0^L EAu''(x)v(x)\,dx + \int_0^L n(x)v(x)\, dx = 0
$$

Prvi izraz integriramo *per-partes* in upoštevamo zvezo za osno silo $N(x) = EAu'(x)$:

$$
N(L)v(L) - N(0)v(0) - \int_0^L EAu'(x)v'(x)\,dx + \int_0^L n(x)v(x)\,dx = 0
$$

Uporabimo Galerkinov pristop, kjer za testne funkcije $v(x)$ izberemo linearne oblikovne (interpolacijske) funkcije. Pomik zapišemo matrično:

$$
u(x) = \Psi_1(x)\,U_1 + \Psi_2(x)\,U_2 = \begin{bmatrix} \Psi_1 & \Psi_2 \end{bmatrix} \begin{bmatrix} U_1 \\ U_2 \end{bmatrix} = [N(x)]\{U\}
$$

Odvod pomika (deformacija) je:

$$
u'(x) = \frac{d}{dx}[N(x)]\{U\} = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} \{U\} = [B]\{U\}
$$

Testne funkcije $\{v\}$ in njihov odvod $\{v'\}$ so:

$$
\{v\} = \begin{bmatrix} \Psi_1(x) \\ \Psi_2(x) \end{bmatrix}, \quad \{v'\} = [B]^T = \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix}
$$

Vstavimo v šibko obliko (upoštevamo $N_1 = N(0)$ in $N_2 = N(L)$):

$$
\begin{bmatrix} 0 \\ N_2 \end{bmatrix} - \begin{bmatrix} N_1 \\ 0 \end{bmatrix} - \int_0^L EA [B]^T [B] \,dx \{U\} + \int_0^L n(x)\{v\}\,dx = 0
$$

Izračunamo integral produkta matrik $[B]^T [B]$:

$$
\int_0^L \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix} \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} dx = \int_0^L \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} dx = \frac{L}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = \frac{1}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
$$

Preuredimo enačbo, da dobimo znani sistem:

$$
\frac{EA}{L}\begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} U_1 \\ U_2 \end{Bmatrix} = \begin{Bmatrix} -N_1 \\ N_2 \end{Bmatrix} + \begin{Bmatrix} \int_0^L n(x)\Psi_1(x)\,dx \\ \int_0^L n(x)\Psi_2(x)\,dx \end{Bmatrix}
$$

## 104. Izpeljite sistem enačb za torzijsko obremenjeni linijski KE.

Enačbe se izpeljejo na matematično identičen način kot pri osni obremenitvi. Razlika je le v fizikalnih veličinah vodilne diferencialne enačbe:

$$
GI_t\varphi''(x) = -m(x)
$$

kjer je $G$ strižni modul, $I_t$ torzijski vztrajnostni moment (pri splošnih prerezih se označuje tudi kot $J_x$), $\varphi$ je kot zasuka okoli osi elementa, $m(x)$ pa je porazdeljen torzijski moment.
Končni sistem enačb je analogno:

$$
\frac{GI_t}{L}\begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} \Phi_1 \\ \Phi_2 \end{Bmatrix} = \begin{Bmatrix} -M_{x1} \\ M_{x2} \end{Bmatrix} + \begin{Bmatrix} \int_0^L m(x)\Psi_1(x)\,dx \\ \int_0^L m(x)\Psi_2(x)\,dx \end{Bmatrix}
$$

## 105. Prednosti in slabosti uporabe linijskih KE.

**Prednosti:** Izjemno majhno število enačb (hiter in računsko zelo ugoden izračun). Omogočajo izjemno hitro spreminjanje numeričnega modela (v eni sekundi lahko spremenimo I-profil v cevni profil, le z zamenjavo parametrov $A, I_y, I_z, J_x$, brez ponovnega mreženja geometrije).

**Slabosti:** Geometrijo opisujejo zgolj težiščnice. Na stikih (spojih) linijskih elementov se fizikalni volumni elementov lahko prekrivajo ali puščajo praznine, zaradi česar lokalno deformacijsko in napetostno stanje na samem spoju (npr. zvari, lokalne koncentracije napetosti) **ni natančno popisano**.

## 106. Reševanje zrcalno simetričnih mehanskih problemov.

Če sta geometrija in obremenitev zrcalno simetrični (glede na neko ravnino), lahko modeliramo le polovico konstrukcije. Na prerezani (simetrijski) ravnini moramo predpisati **simetrijske robne pogoje**:

- Pomik v smeri **normale** na simetrijsko ravnino je enak nič.
- Zasuka okoli obeh osi, ki **ležita v** simetrijski ravnini, sta enaka nič.

*(Primer: Če je simetrijska ravnina $y-z$, je njena normala os $x$. Zato zaklenemo $u_x = 0$, $\varphi_y = 0$ in $\varphi_z = 0$.)*

## 107. Reševanje antisimetričnih mehanskih problemov.

Antisimetrijo lahko uporabimo, ko sta **geometrija in material simetrična**, vendar pa je **obremenitev antisimetrična** (zrcalna slika obremenitve deluje v nasprotni smeri). Na prerezani ravnini predpišemo **antisimetrijske robne pogoje**:

- Pomika v obeh smereh, ki **ležita v** antisimetrijski ravnini, sta enaka nič.
- Zasuk okoli osi, ki je **normalna** na antisimetrijsko ravnino, je enak nič.

*(Primer: Če je antisimetrijska ravnina $y-z$, je normala os $x$. Zato zaklenemo $u_y = 0$, $u_z = 0$ in $\varphi_x = 0$.)*

## 108. Reševanje mehanskih problemov s ciklično ponovljivo geometrijo, robnimi pogoji in obremenitvijo.

Takšne probleme (npr. propelerji, turbine) obravnavamo v **cilindričnem koordinatnem sistemu**. Zmodeliramo le en ponavljajoči se segment ("rezino"). Na obeh odrezanih robovih (rob A in rob B) predpišemo **ciklične robne pogoje**, ki zahtevajo, da so pomiki (in zasuki) v radialni, obodni in aksialni smeri na robu A strogo enaki tistim na robu B ($u_r^A = u_r^B$, $u_\varphi^A = u_\varphi^B$, $u_z^A = u_z^B$). Pri tem je ključno, da imata robova A in B **popolnoma identično topologijo mreže**.

## 109. Kako izvedemo povezavo volumskih in linijskih KE?

3D volumski elementi (solid) imajo v vozliščih **samo translacijske prostostne stopnje** (nimajo zasukov). Če linijski element (nosilec, ki prenaša momente) pripnemo na 3D element zgolj v enem skupnem vozlišču, se to vozlišče obnaša kot **krogelni členek** (momenti se ne prenesejo).
Da bi prenesli momente, moramo linijski element povezati z **več vozlišči** volumskega elementa in s tem ustvariti ročico (dvojico sil). V praksi se to izvede tako, da se linijski element podaljša in "vtisne" (embed) v notranjost volumskega elementa preko več vozlišč, ali pa se vozlišče nosilca s pomočjo kinematičnih zvez (togih povezav / rigid links) togo poveže s skupino vozlišč na površini 3D elementa. (Kinematične zveze nam uničujejo diagonalnost matrike in zelo upočasnijo izračun.)

## 110. Kako izvedemo povezavo volumskih in lupinskih KE?

Problem je identičen kot pri povezavi z linijskimi elementi. Lupinski elementi (shell) imajo rotacijske prostostne stopnje, volumski 3D elementi pa ne. Če jih združimo samo v eni vrsti vozlišč, dobimo členkast stik (moment se ne prenese).
Povezavo izvedemo tako, da lupinski element potisnemo v notranjost volumskega območja (združitev vozlišč po celotni debelini 3D elementa, s čimer se moment prenese kot nateg/tlak v teh vozliščih), ali pa s posebnimi kinematičnimi robnimi pogoji povežemo vozlišča lupine z vozlišči na naležnih ploskvah volumskega elementa.
