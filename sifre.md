
# Sigurnost Playfairove šifre

Playfairova šifra bila je popularna tehnika šifriranja u 19. stoljeću, a danas se još uvijek povremeno koristi u nekim aplikacijama. Međutim, zbog razvoja tehnologije i dolaskom računala, više se ne smatra sigurnom metodom šifriranja. Playfairova šifra ima nekoliko slabosti koje je čine ranjivom na napade.

---
### Prednosti korištenja Playfairove šifre
Playfairova šifra ima nekoliko značajnih prednosti u odnosu na supstitucijsku šifru: 
  - Budući da je šifra bigramska, u kriptogramu se gube sve riječi koje se sastoje od samo jednog slova (npr. "a"), koje dosta utječu na frekvencije. 
  - Nadalje, bigramsko šifriranje **smanjuje na pola** broj elemenata dostupnih analizi frekvencije. Alfabet otvorenog teksta ima 26 slova, ali se od njih može napraviti 676 bigrama. Dva najčešća slova u engleskom jeziku, "e" i "t", pokazuju prosječnu frekvenciju od 12% odnosno 9%, a dva najčešća engleska bigrama postižu frekvenciju od samo 3.25% odnosno 2.5%. Dakle, broj bigrama je puno veći od broja individualnih slova, dok su frekvencije najfrekventnijih bigrama puno ujednačenije od frekvencija najfrekventnijih slova. Navedena svojstva izdižu ovu šifru iznad svih suvremenica upravo po kriptografskim mjerilima i smatrana je šifrom koju se ne može probiti.

Njezino jednostavno korištenje činilo ju je idealnom za primjenu na terenu. Playfair je predložio da se ona koristi u predstojećem krimskom ratu. Nema nikakvih dokaza da je ona primijenjena u tom ratu, ali gotovo pola stoljeća kasnije korištena je u burskom ratu. Britansko Ministarstvo rata držalo je njezinu upotrebu u tajnosti jer je bila prihvaćena kao šifra kopnene vojske. Premda Playfair nije nikada tvrdio da je pronalazač te šifre, ona je u žargonu Ministarstva rata dobila naziv Playfairova šifra i taj naziv je ostao do danas.

---

### Nedostatci Playfairove šifre
#### Ograničeni ključni prostor
Jedna od glavnih slabosti Playfairove šifre je njezin ograničeni ključni prostor. Šifra koristi matricu od [ 5x5 ] slova, što znači da postoji samo 25 mogućih slova u ključu. Tako ograničen ključni prostor čini je ranjivom na napade tipa **brute-force**, gdje napadač pokušava svaki mogući ključ dok ne pronađe onaj ispravan.

#### Nedostatak difuzije
Još jedna slabost Playfairove šifre je nedostatak difuzije. Difuzija je svojstvo algoritama šifriranja koje osigurava da se male promjene u tekstu nešifriranog teksta manifestiraju kao velike promjene u kriptiranom tekstu. Playfairova šifra ne pruža veliku razinu difuzije, što znači da će male promjene u tekstu ne šifriranom tekstu dovesti do malih promjena u kriptiranom tekstu. To olakšava napadaču da pstavi određene pretpostavke o originalnom tekstu.

#### Ranjivost na napade s poznatim dijelom teksta
Playfairova šifra također je ranjiva na napade s poznatim dijelom originalnog teksta. Ako je napadaču poznat neki dio originalnog teksta te odgovarajući kriptirani tekst, može te informacije koristiti kako bi odredio ključ koji se koristi u šifriranju. To je zato što Playfairova šifra koristi jednostavnu zamjenu jednog slova za drugo, što se lako može obrnuti uz ispravan ključ.

#### Ranjivost na napade analize frekvencije
Playfairova šifra nepotpuno skriva frekvencije pojavljivanja slova, što je čini ranjivom na napade s analizom frekvencije. U ovoj vrsti napada, napadač analizira frekvenciju slova u kriptiranom tekstu kako bi pokušao odrediti ključ koji se koristi u šifriranju.

---

### Sigurnost u današnje vrijeme

Unatoč ovim slabostima, Playfairova šifra može biti korisna u određenim situacijama. Na primjer, može se koristiti kao jednostavna tehnika šifriranja za poruke koje ne zahtijevaju visoku razinu sigurnosti. Također se može koristiti kao alat za učenje za studente koji su zainteresirani za kriptografiju.

Međutim, za većinu modernih kriptografskih aplikacija Playfairova šifra nije preporučljiva. Umjesto toga, preferiraju se moderne tehnike šifriranja poput Naprednog standarda šifriranja (AES) i RSA algoritma. Ove tehnike šifriranja koriste mnogo veće ključeve i pružaju bolju difuziju i jaču otpornost na napade, čineći ih sigurnijima od Playfairove šifre.

Zaključno, iako je Playfairova šifra nekada smatrana sigurnom metodom šifriranja, danas se više ne smatra sigurnom po modernim standardima. Njezin ograničeni ključni prostor, nedostatak difuzije, ranjivost na napade poznatog teksta i osjetljivost na analizu frekvencije čine je ranjivom na napade. 

---
## Primjene Playfarove šifre kroz povijest
Jedna od najznačajnijih povijesnih primjena Playfairove šifre bila je u Prvom i Drugom svjetskom ratu. Britanska vojska je šifru intenzivno koristila za kodiranje poruka koje sadrže važne vojne informacije. U to je vrijeme smatrana vrlo sigurnom metodom šifriranja jer ju neprijateljske snage nisu lako mogle razbiti. Šifra se koristila za prijenos osjetljivih informacija, poput kretanja vojske, planova bitke i tajnih obavještajnih podataka između vojnih jedinica i zapovjedništava.

Playfairova šifra također je korištena i od strane drugih zemalja tijekom dva svjetska rata. Na primjer, Sjedinjene Države i Francuska također su koristile ovu metodu šifriranja za zaštitu vojnih komunikacija. Smatralo se da je šifra dovoljno sigurna da zaštiti važne informacije od presretanja neprijateljskih snaga. Međutim, kao i sa svakom metodom šifriranja, postoji uvijek rizik da će biti razbijena, a neprijateljske snage neprestano rade na dešifriranju poruka.

Playfairova šifra se koristila ne samo za vojne komunikacije, već i za diplomatske komunikacije. Tijekom Hladnog rata, Sjedinjene Države su je koristile za zaštitu diplomatskih poruka. Šifra se koristila za šifriranje osjetljivih informacija koje su slale ambasade i druge diplomatske misije.



# Literatura
Christensen, Chris (2006). ["Polygraphic Ciphers" (PDF)](https://www.nku.edu/~christensen/section%2019%20playfair%20cipher.pdf). Northern Kentucky University, Chris Christensen. Retrieved January 9, 2018.

---


 [Cohen, Fred. "A Short History of Cryptography". Introductory Information Protection. Retrieved 9 January 2018.](http://all.net/edu/curr/ip/Chap2-1.html)
 
---

Jasmina Brkić "Povijest kriptografije i Playfairova šifra" Diplomski rad. Sveučilište J. J. Strossmayera u Osijeku, Odjel za matematiku, Sveučilišni nastavnički studij matematike i informatike


