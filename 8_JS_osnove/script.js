// 1. Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

let h = 14;
let m = 15;
let minOdPonoci = h * 60 + m;
console.log(`Od ponoci je proslo ${minOdPonoci} minuta.`);

// 2. Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

minOdPonoci = 755;
h = Math.floor(minOdPonoci / 60);
m = minOdPonoci % 60;
console.log(`Od ponoci je proslo ${h} sata i ${m} minuta.`)

// 3. Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 250;
let novcanica = 500;
let kusur = novcanica - cenaRobe;
console.log(`Kasirka treba da vrati ${kusur} dinara.`)

// 4. Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
let d = new Date();
h = d.getHours();
m = d.getMinutes();
minOdPonoci = h * 60 + m;
console.log(`Od ponoci je proslo ${minOdPonoci} minuta.`);

// 5. Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

let dd = d.getDate();
let mm = d.getMonth();
let yyyy = d.getFullYear();

console.log(`${dd}.${mm}.${yyyy}`);
console.log(`${dd}/${mm}/${yyyy}`);

// 6. Konverzija valute iz evra u dinare (i obrnuto).

let evro = 45;
let dinar = 12000;
let kursEvra = 117;
let evriUDinare = evro * kursEvra;
let dinariUEvre = dinar / kursEvra;
console.log(evriUDinare, dinariUEvre);

// 7. Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 

let dolar = 67;
let kursDolara = 97;
evro = 45;
kursEvra = 117;
let dolarUEvre = (dolar * kursDolara) / kursEvra;
console.log(dolarUEvre);

// 8. Temperatura iz Celzijusa u Farenhajte i obrnuto. F = C * 1.8 + 32

let c = 24;
let f = c * 1.8 + 32;
console.log(f);
f = 75.2;
c = (f - 32) / 1.8;
console.log(c);

// 9. Temperatura iz Celzijusa u Kelvine i obrnuto. K = C + 273.15

c = 32;
let k = c + 273.15;
console.log(k);

k = 320;
c = k - 273.15;
console.log(c);

// 10. Izvršiti konverziju zapremine iz galona u litre i obratno, ako važi da je:
// 1 galon = 3.785 litara.

let g = 5;
let l = g * 3.785;
console.log(l);

l = 50;
g = l / 3.785;
console.log(g);


// Domaci zadatak 6


// 11. Izvršiti konverziju temperature iz Farenhajta u Kelvine i obratno, ukoliko su date sledeće dve formule:
// Celzijus = (Farenhajt - 32) * 5/9
// Kelvin = Celzijus + 273.15
// Temperaturu u Farenhajtima i Kelvinima zadati samostalno.

f = 70;
c = (f - 32) * 5 / 9;
k = c + 273.15;
console.log(k);

k = 288;
c = k - 273.15;
f = f = c * 1.8 + 32;
console.log(f);

// 12. Knjiga ima n poglavlja (broj n unosite sami). 
// Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
// Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.

let n = 12;
let a = 5;
let b = a + 2;

let z = n - (a + b);
console.log(z);

// 13. Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
// Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.

let p = 600;
m = 700;
k = 200;

let cenaDzempera = (p + m - k) / 2;
let kusurPera = p - cenaDzempera;
let kusurMika = m - cenaDzempera;

console.log(kusurPera, kusurMika);

