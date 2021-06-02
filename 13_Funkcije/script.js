// 1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.
function pozdrav(ime, prezime) {
  console.log(`Zdravo ${ime} ${prezime}.`);
}
pozdrav('Jelena', 'Matejic');

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
let zbir = function (a, b) {
  return a + b;
};

console.log(zbir(2, 3));

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = n => (n / 2 ? true : false);

console.log(neparan(4));

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (a, b) => (a > b ? a : b);
console.log(maks2(4, 16));

let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));
console.log(maks4(4, 12, 3, 67));

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = slika => {
  document.body.innerHTML += `<img src="${slika}" style="width: 200px";>`;
};
slika('slika.jpg');

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let paragraf = boja => {
  document.body.innerHTML += `<p style="color:${boja};">Lorem ipsum dolor sit amet.</p>`;
};
paragraf('red');

// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
let sedmiDan = n => {
  let ostatak = n % 7;
  switch (ostatak) {
    case 0:
      console.log('Nedelja');
      break;
    case 1:
      console.log('Ponedeljak');
      break;
    case 2:
      console.log('Utorak');
      break;
    case 3:
      console.log('Sreda');
      break;
    case 4:
      console.log('Cetvrtak');
      break;
    case 5:
      console.log('Petak');
      break;
    case 6:
      console.log('Subota');
      break;
  }
};
sedmiDan(14);

// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
let deljivSaTri = (n, m) => {
  let broj = 0;
  for (let i = n; i <= m; i++) {
    if (i % 3 == 0) {
      console.log(i);
      broj++;
    }
  }
  console.log(broj);
};
deljivSaTri(1, 10);

// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
let sumiraj = (n, m) => {
  let suma = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
  }
  return suma;
};
console.log(sumiraj(2, 5));

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
let mnozi = (n, m) => {
  let pro = 1;
  for (let i = n; i <= m; i++) {
    pro *= i;
  }
  return pro;
};
console.log(mnozi(2, 5));

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
let arsr = (n, m) => {
  let suma = 0;
  let broj = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
    broj++;
  }
  return suma / broj;
};
console.log(arsr(2, 5));

// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
let arsrTri = (n, m) => {
  let suma = 0;
  let broj = 0;
  for (let i = n; i <= m; i++) {
    if (i % 10 == 3) {
      suma += i;
      broj++;
    }
  }
  return suma / broj;
};
console.log(arsrTri(2, 20));

// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
let velicinaFonta = n => {
  document.body.innerHTML += `<p style="font-size:${n}px;">Lorem ipsum dolor sit amet.</p>`;
};
velicinaFonta(32);

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
let ispisRecenice = () => {
  for (let i = 1; i <= 5; i++) {
    document.body.innerHTML += `<p style="font-size:${i}rem;">Lorem ipsum dolor sit amet.</p>`;
  }
};
ispisRecenice();

// 15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
let placenaPraksa = (n, a) => {
  let plata = a;
  let d = 500;
  for (let i = 2; i <= n; i++) {
    plata += a + d;
  }
  return plata;
};
console.log(placenaPraksa(3, 2000));

// 16. Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s
let igraBezGranica = (t, p, n) => {
  if (t < p) {
    return 0;
  } else {
    return p + n - t;
  }
};
console.log(igraBezGranica(15, 20, 25));
console.log(igraBezGranica(15, 10, 12));

// 17. Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.
let trajanjeLeta = (
  satPoletanja,
  minutPoletanja,
  satSletanja,
  minutSletanja
) => {
  let minutiPoletanja = satPoletanja * 60 + minutPoletanja;
  let minutiSletanja = satSletanja * 60 + minutSletanja;
  let trajanjaLetaMinuti = minutiSletanja - minutiPoletanja;
  let satiLeta = Math.floor(trajanjaLetaMinuti / 60);
  let minutiLeta = trajanjaLetaMinuti % 60;
  console.log(`Let je trajao ${satiLeta} sata i ${minutiLeta} minuta.`);
};
trajanjeLeta(12, 20, 14, 30);

// 18. Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.
let jaban = (jabuke, banane) => {
  let osteceneJabuke = Math.round(jabuke * 0.2);
  let ostaloJabuka = jabuke - osteceneJabuke;
  if (Math.floor(ostaloJabuka / 2) <= Math.floor(banane / 3)) {
    return Math.floor(ostaloJabuka / 2);
  } else if (Math.floor(ostaloJabuka / 2) >= Math.floor(banane / 3)) {
    return Math.floor(banane / 3);
  }
};
console.log(jaban(12, 12));
