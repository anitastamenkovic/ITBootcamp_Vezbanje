// Klikom na dugme, prikazati poruku u konzoli nakon 2 sekunde. U prethodnom primeru dodati još jedno dugme i klikom na to dugme, prekinuti ispis poruke u konzoli.
let startbtn = document.querySelector('#start');
let stoptbtn = document.querySelector('#stop');
let clock = null;

startbtn.addEventListener('click', () => {
  if (clock === null) {
    clock = setTimeout(function () {
      console.log(`Prikaz poruke u konzoli nakon 2 sekunde!`);
      clock = null;
    }, 2000);
  }
});

stoptbtn.addEventListener('click', () => {
  clearTimeout(clock);
  clock = null;
});

// Klikom na dugme ispisati tekst u divu
let ispisBtn1 = document.querySelector('#ispisbtn1');
let ispisDiv1 = document.querySelector('#ispisdiv1');
let stopIspisbtn1 = document.querySelector('#stopIspis1');
let clock2 = null;

ispisBtn1.addEventListener('click', () => {
  if (clock2 === null) {
    clock2 = setTimeout(function () {
      ispisDiv1.innerHTML = `Ispis u divu!`;
      clock2 = null;
    }, 2000);
  }
});

stopIspisbtn1.addEventListener('click', () => {
  clearTimeout(clock2);
  clock2 = null;
});

// Napraviti digitalni sat na stranici koji pokazuje trenutno vreme.
let ispisBtn2 = document.querySelector('#ispisbtn2');
let ispisDiv2 = document.querySelector('#ispisdiv2');
let stopIspisbtn2 = document.querySelector('#stopIspis2');
let clock3 = null;

ispisBtn2.addEventListener('click', () => {
  if (clock3 === null) {
    clock3 = setTimeout(function () {
      let datum = new Date();
      let sati = datum.getHours();
      let minuti = datum.getMinutes();
      let sekunde = datum.getSeconds();
      ispisDiv2.innerHTML = `${sati}:${minuti}:${sekunde}`;
      clock3 = null;
    }, 1000);
  }
});

stopIspisbtn2.addEventListener('click', () => {
  clearTimeout(clock3);
  clock3 = null;
});

///////////////////////////////////////////////////////////
// Klikom na dugme, prikazivati poruku u konzoli na 2 sekunde. U prethodnom primeru dodati još jedno dugme i klikom na to dugme, prekinuti ispis poruke u konzoli.
let startbtn2 = document.querySelector('#start2');
let stoptbtn2 = document.querySelector('#stop2');
let clock4 = null;

startbtn2.addEventListener('click', () => {
  if (clock4 === null) {
    clock4 = setInterval(function () {
      console.log(`Prikaz poruke u konzoli nakon 2 sekunde!`);
    }, 2000);
  }
});

stoptbtn2.addEventListener('click', () => {
  clearInterval(clock4);
  clock4 = null;
});

// Klikom na dugme ispisivati tekst u divu na 2 sekunde
let ispisBtn3 = document.querySelector('#ispisbtn3');
let ispisDiv3 = document.querySelector('#ispisdiv3');
let stopIspisbtn3 = document.querySelector('#stopIspis3');
let clock5 = null;

ispisBtn3.addEventListener('click', () => {
  if (clock5 === null) {
    clock5 = setInterval(function () {
      ispisDiv3.innerHTML += `Ispis u divu!`;
    }, 2000);
  }
});

stopIspisbtn3.addEventListener('click', () => {
  clearInterval(clock5);
  clock5 = null;
});

// Napraviti digitalni sat na stranici koji odkucava trenutno vreme
let ispisBtn4 = document.querySelector('#ispisbtn4');
let ispisDiv4 = document.querySelector('#ispisdiv4');
let stopIspisbtn4 = document.querySelector('#stopIspis4');
let clock6 = null;

ispisBtn4.addEventListener('click', () => {
  if (clock6 === null) {
    clock6 = setInterval(function () {
      let datum = new Date();
      let sati = datum.getHours();
      let minuti = datum.getMinutes();
      let sekunde = datum.getSeconds();
      ispisDiv4.innerHTML = `${sati}:${minuti}:${sekunde}`;
    }, 1000);
  }
});

stopIspisbtn4.addEventListener('click', () => {
  clearInterval(clock6);
  clock6 = null;
});

// Napraviti dva dugmeta i input kao na slici. Klikom na dugme „Start“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde. Klikom na dugme „Stop“ pauzira se odbrojavanje.
let startbtn3 = document.querySelector('#start3');
let stopbtn3 = document.querySelector('#stop3');
let resetbtn = document.querySelector('#reset');
let input = document.querySelector('#input');

let clock7 = null;
input.value = 0;

startbtn3.addEventListener('click', () => {
  if (clock7 === null) {
    clock7 = setInterval(() => {
      input.value++;
    }, 1000);
  }
});

stopbtn3.addEventListener('click', () => {
  clearInterval(clock7);
  clock7 = null;
});

resetbtn.addEventListener('click', () => {
  input.value = '';
});
