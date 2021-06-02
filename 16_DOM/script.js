// Dohvatiti prvi paragraf na stranici.
let prviParagraf = document.querySelector(`p:first-child`);
// moze i p:first-of-type
console.log(prviParagraf);

// Dohvatiti prvi div tag sa klasom „error“.
let prviDivError = document.querySelector(`div.error:first-of-type`);
console.log(prviDivError);

// Dohvatiti poslednji red u tabeli.
let poslednjiRed = document.querySelector(`table tr:last-child`);
console.log(poslednjiRed);

// Dohvatiti sve linkove na stranici.
let sviLinkovi = document.querySelectorAll(`a`);
console.log(sviLinkovi);

// Dohvatiti sve slike na stranici.
let sveSlike = document.querySelectorAll(`img`);
console.log(sveSlike);

////////////////////////////////////////////////////
// Promena elemenata
////////////////////////////////////////////////////

// Dohvatiti sve paragrafe i dodati tekst VAZNO!!!
let sviParagrafi = document.querySelectorAll(`p`);
sviParagrafi.forEach(e => {
  e.innerHTML += `VAZNO!!!`;
  // moze i e.textContent
});

// Divovima sa klasom "error" dodati po jedan h1
let sviDivoviError = document.querySelectorAll(`div.error`);
sviDivoviError.forEach(e => {
  e.innerHTML += `<h1>ERROR</h1>` + e.innerHTML;
  // ako hoces ispred da stavis
});

// U svakom i-tom paragrafu dodati broj i**2, za svako i = 1, 2, 3, ....n
for (let i = 0; i < sviParagrafi.length; i++) {
  sviParagrafi[i].innerHTML += `${(i + 1) ** 2}`;
}

// Svim slikama dodati tekst
sveSlike.forEach(e => {
  e.alt += `Tekst`;
});

// Sve paragrafe oboji ljubicasto
sviParagrafi.forEach(e => {
  e.style.color += `purple`;
});

// Parnim paragrafima pozadina zelena, svim neparnim pozadina crvena
for (let i = 0; i < sviParagrafi.length; i++) {
  if (i % 2 == 0) {
    sviParagrafi[i].style.backgroundColor += `green`;
  } else {
    sviParagrafi[i].style.backgroundColor += `red`;
  }
}

// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
sviLinkovi.forEach(e => {
  e.setAttribute(
    `style`,
    `padding: 5px; font-size: 18px; text-decoration: none`
  );
});
// e.style.padding = `5px`;
// e.style.fontSize = `18px`;
// e.style.textDecoration = `none`;

// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
for (let i = 0; i < sviLinkovi.length; i++) {
  if (i % 2 == 0) {
    sviLinkovi[i].setAttribute(
      `style`,
      `background-color: green; color: purple;`
    );
  } else {
    sviLinkovi[i].setAttribute(
      `style`,
      `background-color: blue; color: white;`
    );
  }
}
// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju.
sveSlike.forEach(e => {
  if (e.src.includes(`png`)) {
    e.setAttribute(`style`, `border: 2px solid red`);
  }
});

// Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank.
sviLinkovi.forEach(e => {
  if (e.target == `_blank`) {
    e.target = `_top`;
  } else {
    e.target = `_blank`;
  }
});

// Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
let imena = ['Aca', 'Ana', 'Aleksa', 'Sava'];

// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
imena.forEach(e => {
  if (e.startsWith('S')) {
    document.body.innerHTML += `<a href="https://www.google.rs/" target="_blank"> ${e} </a>`;
  } else {
    document.body.innerHTML += `<a href="https://www.google.rs/"> ${e} </a>`;
  }
});

// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
let lista = document.querySelector(`ul`);
for (let i = 0; i < imena.length; i++) {
  if (i % 2 == 0) {
    lista.innerHTML += `<li style="color: red;"> ${imena[i]} </li>`;
  } else {
    lista.innerHTML += `<li style="color: blue;"> ${imena[i]} </li>`;
  }
}

// U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
let tabela = document.querySelector('table');
console.log(tabela);
imena.forEach(e => {
  tabela.innerHTML += `<tr><td style="border: 1px solid black; margin: 5px; padding: 5px;">${e}</td></tr>`;
});

/////////////////////////////////
// 1. Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

sviParagrafi = document.querySelectorAll('p');
for (let i = 0; i < sviParagrafi.length; i++) {
  if (i % 2 == 0) {
    sviParagrafi[i].classList.add('error');
  } else {
    sviParagrafi[i].classList.add('success');
  }
}

// 2. Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
for (let i = 0; i < sviParagrafi.length; i++) {
  if (i % 3 == 0) {
    sviParagrafi[
      i
    ].innerHTML += `<span style="font-size: 15px">Neki tekst</span>`;
  } else if (i % 3 == 1) {
    sviParagrafi[
      i
    ].innerHTML += `<span style="font-size: 20px">Neki tekst</span>`;
  } else if (i % 3 == 2) {
    sviParagrafi[
      i
    ].innerHTML += `<span style="font-size: 25px">Neki tekst</span>`;
  }
}

// 3. Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//  if(p.textContent.includes(’success’))
// noviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi);
for (let i = 0; i < sviParagrafi.length; i++) {
  if (sviParagrafi[i].textContent.includes('error')) {
    sviParagrafi[i].classList.add('error');
  } else if (sviParagrafi[i].textContent.includes('success')) {
    // noviParagrafi[i].classList.remove('error');
    sviParagrafi[i].classList.add('success');
  }
}
console.log(sviParagrafi);

// 4. Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
for (let i = 0; i < sviParagrafi.length; i++) {
  sviParagrafi[i].classList.toggle('error');
}
console.log(sviParagrafi);

////////////////////////////////////////////////

// 1. Dodati novi div tag dokumentu.
let telo = document.querySelector('body');
let noviDiv = document.createElement('div');
noviDiv.id = 'novi_div';
telo.appendChild(noviDiv);

let paragraf = document.createElement('p');
paragraf.textContent = 'Tekst novog paragrafa u novom divu';
noviDiv.appendChild(paragraf);

// 2. Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.
let novaLista = document.createElement('ul');
novaLista.id = 'nova_lista';

for (let i = 0; i < 3; i++) {
  let noviLi = document.createElement('li');
  noviLi.textContent = `Stavka broj ${i + 1}`;
  novaLista.appendChild(noviLi);
}
noviDiv.appendChild(novaLista);

// 3. Iz ul liste izbaciti prvu stavku.
let prvaStavka = document.querySelector('#nova_lista li:first-child');
novaLista.removeChild(prvaStavka);

// 4. U ul listi zameniti drugu stavku liste.
let drugaStavka = document.querySelector('#nova_lista li:nth-child(2)');
let zamenaLi = document.createElement('li');
zamenaLi.textContent = 'Nova stavka liste';
novaLista.replaceChild(zamenaLi, drugaStavka);

// 5. Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.
let novaStavka = document.createElement('li');
let slikaStavka = document.createElement('img');
slikaStavka.src = '1.jpg';
slikaStavka.alt = 'nova slika';
novaStavka.appendChild(slikaStavka);
novaLista.appendChild(novaStavka);

////////////////////////////////////////////////////////

// 1. Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
// Naziv knige,
// Autora knjige,
// Putanja do sličice,
// Polje – indikator da li je knjiga pročitana ili ne.

// 2. Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.

// 3. U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.

// 4. Ukoliko je knjiga pročitana, boja teksta treba da bude plava, a ako nije, boja teksta treba da bude siva.
