// 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
let btn = document.querySelector('#brojac');
let broj = 1;

btn.addEventListener('click', () => {
  broj++;
  console.log(broj);
});

//  2. Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btn1 = document.querySelector('#brojac1');
let pIspis = document.querySelector('#ispisBrojaca1');
let broj1 = 1;

btn1.addEventListener('click', () => {
  broj1++;
  pIspis.innerHTML = `${broj1}`;
});

// 3. Napraviti dugme + i dugme -.
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
// 4.  Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.
let btnd = document.querySelector('#btnDodaj');
let btno = document.querySelector('#btnOduzmi');
let span = document.querySelector('#upisiBroj');
let broj2 = 0;

btnd.addEventListener('click', () => {
  broj2++;
  span.innerHTML = broj2;
});

btno.addEventListener('click', () => {
  if (broj2 > 0) {
    broj2--;
    span.innerHTML = broj2;
  } else {
    broj2 = 0;
  }
});

// 5. Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
let input = document.querySelector('#polje');
let btnZdravo = document.querySelector('#zdravoDugme');
let pZdravo = document.querySelector('#zdravoParagraf');

btnZdravo.addEventListener('click', () => {
  pZdravo.innerHTML = `Zdravo ${input.value}!`;
});

// 6. Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.
btnZdravo.addEventListener('dblclick', () => {
  alert(`Zdravo ${input.value}!`);
});

// 5. ZADATAK - drugi način
// let inputPrezime = document.getElementById('prezime');
// let btnPosaljiPrezime = document.getElementById('posaljiPrezime');
// let pPrikaziPrezime = document.getElementById('prikaziPrezime');

// btnPosaljiPrezime.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e);
//   pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`;
//   inputPrezime.value = '';
// });

// PRIMER
// let forma = document.getElementById('forma');
// let inputJelo = document.getElementById('jelo');
// let inputPice = document.getElementById('pice');
// let pIspis = document.getElementById('ispis');

// forma.addEventListener('submit', e => {
//   e.preventDefault();
//   pIspis.innerHTML = `<ul>
//         <li>Omiljeno jelo: ${inputJelo.value}</li>
//         <li>Omiljeno piće: ${inputPice.value} </li>
//     </ul>`;
//   forma.reset(); // resetuje sva polja u formi na koju se odnosi
// });

// 7. Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.
let iKvadrat = document.querySelector('#inputKvadrat');
let btnKvadrat = document.querySelector('#btnKvadrat');
let prviIspis = document.querySelector('#ispisRezultata1');

let iPrepolovi = document.querySelector('#inputPrepolovi');
let btnPrepolovi = document.querySelector('#btnPrepolovi');
let drugiIspis = document.querySelector('#ispisRezultata2');

let iKrug = document.querySelector('#inputKrug');
let btnKrug = document.querySelector('#btnKrug');
let treciIspis = document.querySelector('#ispisRezultata3');

btnKvadrat.addEventListener('click', e => {
  e.preventDefault();
  prviIspis.innerHTML = iKvadrat.value ** 2;
  iKvadrat.value = '';
});

btnPrepolovi.addEventListener('click', e => {
  e.preventDefault();
  drugiIspis.innerHTML = iPrepolovi.value / 2;
  iPrepolovi.value = '';
});

btnKrug.addEventListener('click', e => {
  e.preventDefault();
  treciIspis.innerHTML = iKrug.value ** 2 * Math.PI;
  iKrug.value = '';
});
