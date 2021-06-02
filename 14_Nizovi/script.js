'use strict';
// 1. Ispisati sve elemente niza od 5 stringova.
let niz = ['Ana', 'Milena', 'Jelena', 'Milica', 'Marija'];
let ispis = niz => {
  for (let i = 0; i < niz.length; i++) {
    console.log(niz[i], i);
  }
};
ispis(niz);

// 2. Odrediti zbir elemenata celobrojnog niza.
niz = [1, 2, 3, 4, 5];
let zbir = niz => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
  }
  return suma;
};
console.log(zbir(niz));

// 3. Odrediti proizvod elemenata celobrojnog niza.

let pro = niz => {
  let proizvod = 1;
  for (let i = 0; i < niz.length; i++) {
    proizvod *= niz[i];
  }
  return proizvod;
};
console.log(pro(niz));

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.

let srvr = (niz, callback) => {
  let suma = zbir(niz);
  return suma / niz.length;
};
console.log(srvr(niz, zbir(niz)));

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVrednost = niz => {
  let max = niz[0];
  for (let i = 0; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
    }
  }
  return max;
};
console.log(maxVrednost(niz));

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrednost = niz => {
  let min = niz[0];
  for (let i = 0; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
    }
  }
  return min;
};
console.log(minVrednost(niz));

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMax = (niz, max) => {
  max = maxVrednost(niz);
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] == max) {
      console.log(i);
    }
  }
};
indexMax(niz, maxVrednost(niz));

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.

let indexMin = (niz, callback) => {
  let min = minVrednost(niz);
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] == min) {
      console.log(i);
    }
  }
};
indexMin(niz, minVrednost(niz));

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let veciSrVr = (niz, callback) => {
  let srednjaVr = srvr(niz);
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > srednjaVr) {
      broj++;
    }
  }
  return broj;
};
console.log(veciSrVr(niz, srvr(niz)));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
niz = [-2, -5, 3, 6, 7];
let zbirPozitivnih = niz => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      suma += niz[i];
    }
  }
  return suma;
};
console.log(zbirPozitivnih(niz));

// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
niz = [1, 2, 3, 4, 5, 7];
let brojParnih = niz => {
  let broj = 0;
  niz.forEach(element => {
    if (element % 2 == 0) {
      broj++;
    }
  });
  return broj;
};
console.log(brojParnih(niz));

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
let brojParnihNeparni = niz => {
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 != 0) {
      broj++;
    }
  }
  return broj;
};
console.log(brojParnihNeparni(niz));

// 13. Izračunati sumu elemenata niza sa parnim indeksom.
let sumaNeparni = niz => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 0) {
      suma += niz[i];
    }
  }
  return suma;
};
console.log(sumaNeparni(niz));

// 14. Promeniti znak svakom elementu celobrojnog niza.
niz = [1, -2, 3, 4, -5, 7];
let promeniZnak = niz => {
  for (let i = 0; i < niz.length; i++) {
    console.log(niz[i] * -1);
  }
};
promeniZnak(niz);

// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let promeniZnak2 = niz => {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 1 && i % 2 == 0) {
      console.log(niz[i] * -1);
    }
  }
};
promeniZnak2(niz);

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
niz = ['voce', 'povrce', 'meso', 'jaja', 'mleko'];
let lista = niz => {
  let lista = `<ul>`;
  for (let i = 0; i < niz.length; i++) {
    lista += `<li>${niz[i]}</li>`;
  }
  lista += `</ul>`;
  return (document.body.innerHTML += lista);
};
lista(niz);

// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
niz = ['Aca', 'Pera', 'Mika', 'Zika', 'Pera'];
let tabela = niz => {
  let tabela = `<table>`;
  for (let i = 0; i < niz.length; i++) {
    tabela += `<tr><td>${niz[i]}</td></tr>`;
  }
  tabela += `</table>`;
  return (document.body.innerHTML += tabela);
};
tabela(niz);

// 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let slike = ['1.jpg', '2.jpg', '3.jpg'];
let prikazSlika = slike => {
  let slika = ' ';
  for (let i = 0; i < slike.length; i++) {
    slika += `<img src="${slike[i]}">`;
  }
  return (document.body.innerHTML += slika);
};
prikazSlika(slike);

// 19. Ispisati dužinu svakog elementa u nizu stringova.
let imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije'];
let ispisDuzina = imena => {
  for (let i = 0; i < imena.length; i++) {
    console.log(imena[i].length);
  }
};
ispisDuzina(imena);

// 20. Odrediti element u nizu stringova sa najvećom dužinom.
imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije'];
let najvecaDuzina = imena => {
  let max = imena[0].length;
  let ime = imena[0];
  for (let i = 0; i < imena.length; i++) {
    if (imena[i].length > max) {
      max = imena[i].length;
      ime = imena[i];
    }
  }
  return ime;
};

console.log(najvecaDuzina(imena));

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let veciOdProseka = imena => {
  let suma = 0;
  for (let i = 0; i < imena.length; i++) {
    suma += imena[i].length;
  }

  let as = suma / imena.length;

  let broj = 0;
  for (let i = 0; i < imena.length; i++) {
    if (imena[i].length > as) {
      broj++;
    }
  }
  return broj;
};
console.log(veciOdProseka(imena));

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije'];
let brojSlovoA = imena => {
  let broj = 0;
  for (let i = 0; i < imena.length; i++) {
    let ime = imena[i];
    for (let j = 0; j < ime.length; j++) {
      if (ime[j] == 'a') {
        broj++;
        break;
      }
    }
  }
  return broj;
};

console.log(brojSlovoA(imena));

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.
let pocinjuNaA = imena => {
  let broj = 0;
  for (let i = 0; i < imena.length; i++) {
    let ime = imena[i];
    if (ime[0] == 'a' || ime[0] == 'A') {
      broj++;
      break;
    }
  }
  return broj;
};
console.log(pocinjuNaA(imena));

// 24.

// 25.

// 26.
