// 1. Za dva uneta broja ispisati koji je veći a koji je manji.

let n = 5;
let m = 10;

if(n < m){
 console.log(`Broj ${n} je manji, a broj ${m} je veci.`);
} else {
 console.log(`Broj ${m} je manji, a broj ${n} je veci.`);
}

// 2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

let t = -10;
if(t >= 0){
 console.log(`Temperatura je u plusu.`);
} else {
 console.log(`Temperatura je u minusu.`);
}

// 3. U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 

let pol = "m";
if(pol == "m"){
 document.body.innerHTML += `<img src="male.png">`;
} else {
 document.body.innerHTML += `<img src="female.png">`;
}

// 4. U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

let time = new Date().getHours;
if(time < 12){
 console.log(`Jutro je.`);
} else {
 console.log(`Popodne je.`);
}

// 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let godina = new Date().getFullYear();
let godinaRodjenja = 2013;
let age = godina - godinaRodjenja;

if(age >= 18) {
 console.log(`Osoba je punoletna.`);
} else {
 console.log(`Osoba je maloletna.`);
}

// 6. Odrediti najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

n = 5;
m = 24;
let i = 45;
let max = n;

if(n < m){
 max = m;
} if(m < i){
 max = i;
}

console.log(`Najveci broj je ${max}`);

// 7. Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let poeni = 78;

if(poeni < 50){
 console.log(`Pao si`);
} else if(poeni < 60){
 console.log(`Ocena 6`);
} else if(poeni < 70){
 console.log(`Ocena 7`);
} else if(poeni < 80){
 console.log(`Ocena 8`);
} else if(poeni < 90){
 console.log(`Ocena 9`);
} else if(poeni < 100){
 console.log(`Ocena 10`);
}

// 8. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let dan = new Date().getDay();

if(dan == 0 || dan == 6){
 console.log(`Vikend je`);
} else {
 console.log(`Radni dan je`);
}

// 9. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.

time = new Date().getHours();

if (time < 12) {
 console.log(`Dobro jutro`);
} else if (time < 18) {
 console.log(`Dobar dan`);
} else {
 console.log(`Dobro vece`);
}

// 10. Uporediti dva uneta datuma i ispisati koji od njih je raniji. 

let datum1 = "2021/04/21";
let datum2 = "2021/04/20";

if(datum1 < datum2){
 console.log(`Datum ${datum1} je pre datuma ${datum2}.`)
} else {
 console.log(`Datum ${datum2} je pre datuma ${datum1}.`)
}

// 11. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let pocRad = 9;
let krajRad = 17;
time = new Date().getHours();

if(time < pocRad || time >= krajRad){
 console.log(`Firma ne radi`);
} else {
 console.log(`Firma radi`);
}

// 12. Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati doatno)

let pocSatLek1 = 14;
let krajSatLek1 = 19;

let pocSatLek2 = 8;
let krajSatLek2 = 18;

if(krajSatLek1 < pocSatLek2 || krajSatLek2 < pocSatLek1){
 console.log(`NE`);
} else {
 console.log(`DA`);
}

// 13. Za uneti broj ispitati da li je paran ili nije. 

n = 15;

if(n % 2 == 0){
 console.log(`Broj je paran.`);
} else {
 console.log(`Broj je neparan.`);
}

// 14. Za uneti broj ispisati da li je deljiv sa 3 ili ne.

if(n % 3 == 0){
 console.log(`Broj je deljiv sa 3.`);
} else {
 console.log(`Broj nije deljiv sa 3.`);
}

// 15. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

n = 5;
m = 15;

if(n < m){
 document.body.innerHTML += `<p>${m - n}</p>`;
} else {
 document.body.innerHTML += `<p>${n - m}</p>`;
}

// 16. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

n = 0;

if(n <= 0){
 console.log(--n);
} else {
 console.log(++n);
}

// 17. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 

n = 56;
m = 15;
c = 45;
let min = n;
max = m;
let mid = c;
if(n > m && n > c && m < c){
 max = n;
 min = m;
 mid = c;
} else if(c > n && c > m && n < m){
 max = c;
 min = n;
 mid = m;
} else{
 max = m;
 min = c;
 mid = n;
}
console.log(`Najveci broj je ${max}, srednji je ${mid}, a najmanji je ${min}`)

// 18. Za učitani broj ispitati da li je ceo.

n = 23.5;
if(n % 1 == 0){
 console.log(`Broj je ceo`);
} else {
 console.log(`Broj nije ceo`);
}

// 19. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

n = 56;
m = 15;
c = 45;
min = n;
max = m;
mid = c;
if(n > m && n > c){
 if(m < c){
  max = n;
  min = m;
  mid = c;
 }
} else if(c > n && c > m){
 if(n < m){
  max = c;
  min = n;
  mid = m;
 }
} else {
 max = m;
 min = c;
 mid = n;
}

console.log(`Najveci broj je ${max}, srednji je ${mid}, a najmanji je ${min}`);

// 20. Učitati dva cela broja i ispitati da li je veći od njih paran. 

n = 45;
m = 23;

if(n > m && n % 2 == 0){
  console.log(`Broj ${n} veci i paran`);
 } else if(n > m && n % 2 != 0){
  console.log(`Broj ${n} veci i neparan`);
 } else if(n < m && m % 2 == 0){
  console.log(`Broj ${m} je veci i paran`);
 } else {
  console.log(`Broj ${m} je veci i neparan`);
 }


// 21. Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 

// 22. Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

t = -15;

if(t < -15 || t > 40){
 document.body.innerHTML += `Ekstremna temperatura`
} else {
 console.log(`Normalna temepratura`)
}

// 23. Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let g = 2021;

if(g % 4 == 0 && g % 100 != 00 || g % 400 == 0){
 console.log(`Godina je prestupna`);
} else {
 console.log(`Godina nije prestupna`);
}

// 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let d = new Date().getDay();
time = new Date().getHours();
pocRad = 9;
krajRad = 20;
pocRadVik = 10;
krajRadVik = 18;

if(d == 0 || d == 6){
 if(time < pocRadVik || time >= krajRadVik){
  console.log(`Butik ne radi`);
 } else {
  console.log(`Butik radi`);
 }
} if(time < pocRad || time >= krajRad){
 console.log(`Butik ne radi`);
} else {
 console.log(`Butik radi`);
}


// Domaci 7

// 25. Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve v i n određujete sami. 
// Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. 
// Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena. 

let v = 31;
n = 15;
let dozvoljenBroj = Math.floor(v / 3);

if(n <= dozvoljenBroj){
 document.body.innerHTML += `<p>DA</p>`;
} else {
 document.body.innerHTML += `<p>NE</p>`;
 document.body.innerHTML += `<p>Potrebno je da lokal napusti ${n - dozvoljenBroj} gostiju.</p>`;
}

//  Domaci 8

// 26. Ministarstvo zdravlja jedne zemlje je povodom pandemije virusa donelo sledeću odredbu:
// "Ukoliko je procenat pozitivno testiranih stanovnika u odnosu na ukupno testirane stanovnike u jednom danu veći od 30%, i ako je pored toga i procenat pozitivno testiranih stanovnika veći od 10% ukupnog broja stanovnika te zemlje, automatski se uvodi vanredno stanje."
// Za proizvoljno unete vrednosti: ukupan broj stanovnika zemlje, ukupan broj testiranih u jednom danu i ukupan broj pozitivno testiranih u tom danu, na ekranu crvenom bojom ispisati VANREDNO STANJE, ukoliko treba automatski uvesti vanredno stanje prema odredbi koju je ministarstvo donelo (u suprotnom ne ispisivati ništa).

let ukupnoStanovnika = 15000;
let ukupnoTestiranih = 3000;
let ukupnoPozitivnih = 2000;

let procenatPozTes1 = (ukupnoPozitivnih * 100) / ukupnoTestiranih;
let procenatPozTes2 = (ukupnoPozitivnih * 100) / ukupnoStanovnika;


if(procenatPozTes1 > 30 && procenatPozTes2 > 10){
 console.log(`Vanredno stanje`);
}