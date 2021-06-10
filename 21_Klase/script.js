// Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.

class Boja {
  constructor(talasnaDuzina, zasicenje, intenzitet) {
    this.talasnaDuzina = talasnaDuzina;
    this.zasicenje = zasicenje;
    this.intenzitet = intenzitet;
  }

  // Seteri
  set talasnaDuzina(x) {
    this._talasnaDuzina = x;
  }

  set zasicenje(x) {
    this._zasicenje = x;
  }

  set intenzitet(x) {
    this._intenzitet = x;
  }

  // Geteri
  get talasnaDuzina() {
    return this._talasnaDuzina;
  }

  get zasicenje() {
    return this._zasicenje;
  }

  get intenzitet() {
    return this._intenzitet;
  }
}

// Boje
let boja1 = new Boja(560, true, false);
let boja2 = new Boja(490, true, true);
let boja3 = new Boja(560, true, false);

// Niz boja
let boje = [boja1, boja2, boja3];

// Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.

let ispitajSlicnost = (boja1, boja2) =>
  boja1.talasnaDuzina == boja2.talasnaDuzina &&
  boja1.zasicenje == boja2.zasicenje &&
  boja1.intenzitet == boja2.intenzitet;
console.log(ispitajSlicnost(boja1, boja2));
console.log(ispitajSlicnost(boja1, boja3));

// Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.
let srednjaTalasnaDuzina = array => {
  let sum = 0;
  array.forEach(boja => {
    sum += boja.talasnaDuzina;
  });
  return sum / array.length;
};

console.log(srednjaTalasnaDuzina(boje));

//////////////////////////////////////////////////////////////////
// Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godinu.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.

class Datum {
  constructor(dan, mesec, godina) {
    this.dan = dan;
    this.mesec = mesec;
    this.godina = godina;
  }

  // Seteri
  set dan(x) {
    this._dan = x;
  }

  set mesec(x) {
    this._mesec = x;
  }

  set godina(x) {
    this._godina = x;
  }

  // Geteri
  get dan() {
    return this._dan;
  }

  get mesec() {
    return this._mesec;
  }

  get godina() {
    return this._godina;
  }
}

let datum1 = new Datum(21, 06, 2021);
let datum2 = new Datum(21, 05, 2021);

// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.
let ranijiDatum = (datum1, datum2) => {
  let datumprvi = `${datum1.godina}/${datum1.mesec}/${datum1.dan}`;
  let datumdrugi = `${datum2.godina}/${datum2.mesec}/${datum2.dan}`;
  if (datumprvi < datumdrugi) {
    document.body.innerHTML += datumprvi;
  } else if (datumprvi > datumdrugi) {
    document.body.innerHTML += datumdrugi;
  } else if (datumprvi == datumdrugi) {
    document.body.innerHTML += `Datumi su jednaki.`;
  }
};

ranijiDatum(datum1, datum2);

///////////////////////////////////////////////////////////////////////
// Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
// Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.

class Radnik {
  constructor(ime, plata) {
    this.ime = ime;
    this.plata = plata;
  }

  // Seteri
  set ime(x) {
    this._ime = x;
  }

  set plata(x) {
    this._plata = x;
  }

  // Geteri
  get ime() {
    return this._ime;
  }

  get plata() {
    return this._plata;
  }
}

// radnici
let radnik1 = new Radnik('Aca', 1500);
let radnik2 = new Radnik('Ana', 2000);
let radnik3 = new Radnik('Andrej', 2500);

// niz radnika
let radnici = [radnik1, radnik2, radnik3, radnik3];

// Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.

let maksPlata = array => {
  let max = array[0].plata;
  for (let i = 1; i < array.length; i++) {
    if (array[i].plata > max) {
      max = array[i].plata;
    }
  }
  return max;
};

console.log(maksPlata(radnici));

// Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
let maksPlataOsoba = array => {
  let max = maksPlata(array);
  array.forEach(radnik => {
    if (radnik.plata == max) {
      console.log(`${radnik.ime} - ${radnik.plata}`);
    }
  });
};

maksPlataOsoba(radnici);

//////////////////////////////////////////////////////////////////
// Kreirati klasu Autobus koja ima podatke o registarskom broju autobusa i o broju sedišta u autobusu.
// Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
// Napraviti odgovarajuće getere i setere.

class Autobus {
  constructor(registarskiBroj, brojSedista) {
    this.registarskiBroj = registarskiBroj;
    this.brojSedista = brojSedista;
  }

  // seteri
  set registarskiBroj(x) {
    this._registarskiBroj = x;
  }

  set brojSedista(x) {
    this._brojSedista = x;
  }

  // geteri
  get registarskiBroj() {
    return this._registarskiBroj;
  }

  get brojSedista() {
    return this._brojSedista;
  }

  // Napraviti metodu koja ispisuje podatke o autobusu.
  ispis() {
    console.log(`${this.registarskiBroj} - ${this.brojSedista}`);
  }
}

// Napraviti niz autobusa.

let autobus1 = new Autobus(2345, 34);
let autobus2 = new Autobus(3456, 24);
let autobus3 = new Autobus(6758, 45);

let autobusi = [autobus1, autobus2, autobus3];

// Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.

let ukupnoSedista = array => {
  let sum = 0;
  array.forEach(autobus => {
    sum += autobus.brojSedista;
  });
  return sum;
};

console.log(ukupnoSedista(autobusi));

// Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.

let maksSedista = array => {
  let max = array[0].brojSedista;
  let a = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].brojSedista > max) {
      max = array[i].brojSedista;
      a = array[i];
    }
  }
  console.log(`${a.registarskiBroj} - ${a.brojSedista}`);
};

maksSedista(autobusi);

// Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.
let ljudi = (array, number) => {
  let sum = ukupnoSedista(array);
  if (sum >= number) {
    return true;
  } else {
    return false;
  }
};

console.log(ljudi(autobusi, 120));

/////////////////////////////////////////////////////////////
// Kreirati klasu FMRadio koja sadrđi atribute o stanici, frekvenciji i  jačini tona.
// Klasa treba da sedrži odgovarajući konstruktor, getere i setere koji zadovoljavaju uslov da se frekvencija nalazi u opsegu od 87.5MHz do 108MHz. Jačina zvuka treba da se nalazi u opsegu od 0 do 20.
class FMRadio {
  constructor(frekvencija, jacina) {
    this.frekvencija = frekvencija;
    this.jacina = jacina;
  }

  // seteri
  set frekvencija(x) {
    if (x >= 87.5 && x <= 108) {
      this._frekvencija = x;
    } else {
      this._frekvencija = 87.5;
    }
  }

  set jacina(x) {
    if (x >= 0 && x <= 20) {
      this._jacina = x;
    } else {
      this._jacina = 0;
    }
  }

  // Geteri

  get frekvencija() {
    return this._frekvencija;
  }

  get jacina() {
    return this._jacina;
  }

  // Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja  po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1. Voditi računa o tome da jačina zvuka ne sme biti manja od 0 i veća od 20 (Ova metoda ništa ne vraća, samo promeni vrednost zvuka).
  promeniZvuk(x) {
    if (x == '+' && this.jacina < 20) {
      this.jacina++;
    } else if (x == '-' && this.jacina > 0) {
      this.jacina--;
    }
  }

  // Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na najmanju moguću frekvenciju (na 87.5MHz). (I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)
  frekvencijaIskljuci() {
    this.frekvencija = 87.5;
  }
}

// niz radio
let radio1 = new FMRadio(90, 5);
let radio2 = new FMRadio(95, 19);
let radio3 = new FMRadio(100, 2);
let radio4 = new FMRadio(98, 5);
let radio5 = new FMRadio(99, 4);

let arrRadio = [radio1, radio2, radio3, radio4, radio5];

// Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a ona vraća koja je prosečna frekvencija prosleđenih radio stanica.
let srednjaFrekvencija = array => {
  let sum = 0;
  array.forEach(radio => {
    sum += radio.frekvencija;
  });
  return sum / array.length;
};

console.log(srednjaFrekvencija(arrRadio));

// Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.
let maksFrekvencija = array => {
  let max = array[0].frekvencija;
  for (let i = 1; i < array.length; i++) {
    if (array[i].frekvencija > max) {
      max = array[i].frekvencija;
    }
  }
  return max;
};

let najbliziMaks = array => {
  let max = maksFrekvencija(array);
  let newarr = [];
  array.forEach(radio => {
    if (radio.frekvencija < max) {
      newarr.push(radio);
    }
  });
  let newmax = newarr[0].frekvencija;
  let newradio = newarr[0];
  newarr.forEach(radio => {
    if (radio.frekvencija > newmax) {
      newmax = radio.frekvencija;
      newradio = radio;
    }
  });
  return newradio;
};

console.log(najbliziMaks(arrRadio));
// Testirati rad napravljenih metoda.
radio2.promeniZvuk('+');
radio2.promeniZvuk('+');
console.log(radio2.jacina);
radio3.promeniZvuk('-');
radio3.promeniZvuk('-');
radio3.promeniZvuk('-');
console.log(radio3.jacina);

radio3.frekvencijaIskljuci();
console.log(radio3.frekvencija);

////////////////////////////////////////////////////////////////////
// Kreirati klasu Krug koja ima atribut za poluprečnik kruga.
// Napraviti odgovarajući konstruktor, getere i setere.
class Krug {
  constructor(poluprecnik) {
    this.poluprecnik = poluprecnik;
  }
  set poluprecnik(x) {
    this._poluprecnik = x;
  }

  get poluprecnik() {
    return this._poluprecnik;
  }

  // Napraviti metodu obimKruga koja izračunava i vraća obim kruga.
  obimKruga() {
    return 2 * this.poluprecnik * Math.PI;
  }

  // Napraviti metodu povrsinaKruga koja izračunava i vraća površinu kruga.
  povrsinaKruga() {
    return this.poluprecnik ** 2 * Math.PI;
  }
}

let krug1 = new Krug(5);
console.log(krug1.obimKruga());
console.log(krug1.povrsinaKruga());
let krug2 = new Krug(8);
let krug3 = new Krug(5);

let arrkrug = [krug1, krug2, krug3];

// Napraviti funkciju upisaniKrug kojoj se prosleđuju dva objekta tipa krug, a ona vraća true ukoliko je u prvi prosleđeni krug moguće upisati drugi prosleđeni krug. U suprotnom funkcija vraća false.
let upisaniKrug = (krug1, krug2) => {
  if (krug1.poluprecnik < krug2.poluprecnik) {
    return true;
  } else {
    return false;
  }
};

console.log(upisaniKrug(krug1, krug2));
console.log(upisaniKrug(krug3, krug1));

// * Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug, vratiti false.
let rastuci = array => {
  let res = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].poluprecnik > array[i + 1].poluprecnik) {
      res = false;
      break;
    }
  }
  return res;
};

console.log(rastuci(arrkrug));

///////////////////////////////////////////////////////////////////////////////////
// Napraviti klasu Cipela koja sadrži atribute: naziv, broj cipele i niz prepravki koje treba obaviti na cipeli.
// Napraviti odgovarajući konstruktor, getere i setere.

class Cipela {
  constructor(naziv, broj, prepravke) {
    this.naziv = naziv;
    this.broj = broj;
    this.prepravke = prepravke;
  }

  // seteri
  set naziv(x) {
    this._naziv = x;
  }

  set broj(x) {
    this._broj = x;
  }

  set prepravke(x) {
    this._prepravke = x;
  }

  // geteri
  get naziv() {
    return this._naziv;
  }

  get broj() {
    return this._broj;
  }

  get prepravke() {
    return this._prepravke;
  }

  // Napraviti metodu zalepi koja po pozivu na ekranu ispisuje “Zalepljena cipela”.
  zalepi() {
    document.body.innerHTML += `<p>Zalepljena cipela.</p>`;
  }

  // Napraviti metodu prosiri koja po pozivu na ekranu ispisuje “Prosirena cipela”.
  prosiri() {
    document.body.innerHTML += `<p>Prosirena cipela.</p>`;
  }

  // Napraviti metodu usij koja po pozivu na ekranu ispisuje “Usivena cipela”.
  usij() {
    document.body.innerHTML += `<p>Usivena cipela.</p>`;
  }
}

let cipela1 = new Cipela('Salonka', 37, ['zalepi', 'usij']);
let cipela2 = new Cipela('Sandala', 39, ['prosiri']);
let cipela3 = new Cipela('Cizma', 38, ['zalepi', 'prosiri']);

// Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi, proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki) zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u suprotno se na ekranu ispisuje “Nepoznata prepravka”.
let radi = cipela => {
  if (cipela.prepravke.includes('zalepi')) {
    cipela.zalepi();
  } else {
    document.body.innerHTML += `<p>Nepoznata prepravka.</p>`;
  }
  if (cipela.prepravke.includes('prosiri')) {
    cipela.prosiri();
  } else {
    document.body.innerHTML += `<p>Nepoznata prepravka.</p>`;
  }
  if (cipela.prepravke.includes('usij')) {
    cipela.usij();
  } else {
    document.body.innerHTML += `<p>Nepoznata prepravka.</p>`;
  }
};

radi(cipela1);
radi(cipela2);
radi(cipela3);

/////////////////////////////////////////////////////////////////////////////////
// Kreirati klasu Plivac koja sadrži ime, godinu rodjenja i najbolji rezultat ove godine.
// Napraviti odovarajuće konstruktore, getere i setere.
class Plivac {
  constructor(ime, godina, najboljiRezultat) {
    this.ime = ime;
    this.godina = godina;
    this.najboljiRezultat = najboljiRezultat;
  }

  // seteri
  set ime(x) {
    this._ime = x;
  }

  set godina(x) {
    this._godina = x;
  }

  set najboljiRezultat(x) {
    this._najboljiRezultat = x;
  }

  // geteri
  get ime() {
    return this._ime;
  }

  get godina() {
    return this._godina;
  }

  get najboljiRezultat() {
    return this._najboljiRezultat;
  }

  // Napraviti metodu ispisi koja ispisuje sve podatke o plivaču.
  ispis() {
    console.log(`${this.ime} - ${this.godina} - ${this.najboljiRezultat}`);
  }
}

let plivac1 = new Plivac('Aca', 1992, 20);
let plivac2 = new Plivac('Marko', 1986, 50);
let plivac3 = new Plivac('Pera', 2004, 25);

let plivaci = [plivac1, plivac2, plivac3, plivac2, plivac3, plivac1];

// Napraviti funkciju topTen koja kao rezultat vraća niz od 10 najboljih rezultata ove godine.
// Napraviti funkciju norma kojoj se prosleđuje norma i niz plivača, a funkcija vraća niz onih plivača koji ispunjavaju ovu normu.
let norma = (n, array) => {
  let newarr = [];
  array.forEach(plivac => {
    if (plivac.najboljiRezultat >= n) {
      newarr.push(plivac);
    }
  });
  return newarr;
};

console.log(norma(22, plivaci));

// Napisati funkciju normaNajmladji koja treba da na ekranu ispiše sve podatke o najmlađem igraču koji zadovoljava normu koja je zadata prethodnom funkcijom.
let normaNajmladji = (n, array) => {
  let newarr = norma(n, array);
  let min = newarr[0].godina;
  let najmladji = newarr[0];
  for (let i = 1; i < newarr.length; i++) {
    if (newarr[i].godina > min) {
      min = newarr[i].godina;
      najmladji = newarr[i];
    }
  }
  document.body.innerHTML += `${najmladji.ime} - ${najmladji.godina} - ${najmladji.najboljiRezultat}`;
};

normaNajmladji(22, plivaci);

//////////////////////////////////////////////////////////////////////////////////
// Kreirati klasu Automobil koji ima podatke o maksimalnoj brzini, minimalnoj brzini i trenutnoj brzini.
// Pri stvaranju novog automobila (u konstruktoru) zadajete minimalnu vrednost brzine, maksimalnu vrednost brzine i trenutnu vrednost brzine.
// Napraviti odgovarajuće setere i getere.
class Automobil {
  constructor(maxBrzina, minBrzina, treBrzina) {
    this.maxBrzina = maxBrzina;
    this.minBrzina = minBrzina;
    this.treBrzina = treBrzina;
  }

  // Seteri
  set maxBrzina(x) {
    this._maxBrzina = x;
  }

  set minBrzina(x) {
    this._minBrzina = x;
  }

  set treBrzina(x) {
    this._treBrzina = x;
  }

  // Geteri
  get maxBrzina() {
    return this._maxBrzina;
  }

  get minBrzina() {
    return this._minBrzina;
  }

  get treBrzina() {
    return this._treBrzina;
  }

  // Napraviti metodu  ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu vrednost.
  ubrzaj(x) {
    this.ubrzana = this.treBrzina + x;
    if (this.ubrzana <= this.maxBrzina) {
      return this.ubrzana;
    } else {
      return this.maxBrzina;
    }
  }

  // Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za traženu vrednost.
  uspori(x) {
    this.usporena = this.treBrzina - x;
    if (this.usporena >= this.minBrzina) {
      return this.usporena;
    } else {
      return this.minBrzina;
    }
  }
}

let auto1 = new Automobil(230, 60, 120);
// console.log(auto1.ubrzaj(150));
console.log(auto1.uspori(100));

////////////////////////////////////////////////
// (Malo teži od ostalih zadataka)
// Kreirati klasu Student koja ima atribute: jmbg, ime, prezime, nizOcena i presecna ocena.
// Prilikom kreiranja konstruktora, prosledjuje se jmbg, ime, prezime i nizOcena, a automatski se izračuna prosečna ocena ovog studenta.
// Takođe, voditi računa o tome da svaka od unetih ocena može biti isključivo ceo broj i to 6, 7, 8, 9 ili 10.
// JMBG studenta mora biti string koji sadrži 13 karaktera.
// Izračunata prosečna ocena se dodeli atributu prosecna ocena.
// Napraviti i odgovarajuće getere i setere.
class Student {
  constructor(jmbg, ime, prezime, nizOcena, prosecnaOcena) {
    this.jmbg = jmbg;
    this.ime = ime;
    this.prezime = prezime;
    this.nizOcena = nizOcena;
    this.prosecnaOcena = prosecnaOcena;
  }

  // seteri
  set jmbg(x) {
    if (x.length == 13) {
      this._jbmg = x;
    } else {
      this._jmbg = ' ';
      alert(`JMBG sadrzi 13 karaktera.`);
    }
  }

  set ime(x) {
    this._ime = x;
  }

  set prezime(x) {
    this._prezime = x;
  }

  set nizOcena(x) {
    x.forEach(e => {
      if (e == 6 || e == 7 || e == 8 || e == 9 || e == 10) {
        this._nizOcena = x;
      } else {
        this._nizOcena = '';
        alert(`Mozete uneti samo ocene 6, 7, 8, 9 ili 10.`);
      }
    });
  }

  set prosecnaOcena(array) {
    this.sum = 0;
    array = this.nizOcena;
    array.forEach(ocena => {
      this.sum += ocena;
    });
    this._prosecnaOcena = this.sum / array.length;
  }

  // geteri
  get jmbg() {
    return this._jbmg;
  }

  get ime() {
    return this._ime;
  }

  get prezime() {
    return this._prezime;
  }

  get nizOcena() {
    return this._nizOcena;
  }

  get prosecnaOcena() {
    return this._prosecnaOcena;
  }

  // Napraviti metodu ispis koja ispisuje sve podatke o jednom studentu.
  ispis() {
    console.log(
      `${this.ime} ${this.prezime} - ${this.jmbg} - Ocene: ${this.nizOcena} - Prosecna ocena: ${this.prosecnaOcena}`
    );
  }
}

let student1 = new Student('1205998891236', 'Aca', 'Petrovic', [7, 8, 9, 6]);
student1.ispis();
let student2 = new Student('2505003456234', 'Milica', 'Nikolic', [8, 9, 7, 9]);
student2.ispis();
let student3 = new Student('0404009903278', 'Ana', 'Vujic', [6, 7, 9, 6]);
student3.ispis();

// Napraviti niz studenata i koristiti ga u predstojećim funkcijama.
let studenti = [student1, student2, student3];

// Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija vraća broj studenata sa tim imenom i prezimenom.
let imePrezime = (ime, prezime) => {
  let broj = 0;
  studenti.forEach(student => {
    if (student.ime == ime && student.prezime == prezime) {
      broj++;
    }
  });
  return broj;
};

console.log(imePrezime('Ana', 'Vujic'));

// Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svih ocena studenata.
let srednjaOcena = array => {
  let sum = 0;
  let broj = 0;
  array.forEach(student => {
    student.nizOcena.forEach(ocena => {
      sum += ocena;
      broj++;
    });
  });
  return sum / broj;
};

console.log(srednjaOcena(studenti));

// Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata.
let osrednji = array => {
  let arsrOcena = srednjaOcena(array);
  let min = Math.abs(arsrOcena - array[0].prosecnaOcena);
  let student = array[0];
  for (let i = 1; i < array.length; i++) {
    if (Math.abs(arsrOcena - array[i].prosecnaOcena) < min) {
      min = array[i].prosecnaOcena;
      student = array[i];
    }
  }
  console.log(`${student.ime} ${student.prezime}`);
};

osrednji(studenti);

// Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = array => {
  let najboljiProsek = array[0].prosecnaOcena;
  let najbolji = array[0];
  array.forEach(student => {
    if (student.prosecnaOcena > najboljiProsek) {
      najbolji = student;
    }
  });
  console.log(najbolji);
  let min = najbolji.nizOcena[0];
  najbolji.nizOcena.forEach(ocena => {
    if (ocena < min) {
      min = ocena;
    }
  });

  document.body.innerHTML += `<p>${najbolji.ime} ${najbolji.prezime} - ${min}</p>`;
};
najmanjaOcenaNajboljeg(studenti);

// Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.
let najmanjaOcena = array => {
  let min = array[0].nizOcena[0];
  for (let i = 0; i < array.length; i++) {
    let ocene = array[i].nizOcena;
    for (let j = 0; j < ocene.length; j++) {
      if (ocene[j] < min) {
        min = ocene[j];
      }
    }
  }
  return min;
};

console.log(najmanjaOcena(studenti));

// Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali.
let najcescaOcena = array => {
  let broj6 = 0;
  let broj7 = 0;
  let broj8 = 0;
  let broj9 = 0;
  let broj10 = 0;
  array.forEach(student => {
    student.nizOcena.forEach(ocena => {
      if (ocena == 6) broj6++;
      if (ocena == 7) broj7++;
      if (ocena == 8) broj8++;
      if (ocena == 9) broj9++;
      if (ocena == 10) broj10++;
    });
  });

  let max = broj6;
  let ocena = 6;
  if (broj7 > max) ocena = 7;
  if (broj8 > max) ocena = 8;
  if (broj9 > max) ocena = 9;
  if (broj10 > max) ocena = 10;

  return ocena;
};

console.log(najcescaOcena(studenti));

// Napisati funiciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na ekranu ispisuje sve studente koji su rodjeni te godine. Godinu rođenja preuzeti (odrediti) iz JMBG-a studenta.
let rodjeniGodine = (array, god) => {
  let godina = String(god);
  array.forEach(student => {
    let jmbg = student.jmbg;
    if (godina[1] == jmbg[4] && godina[2] == jmbg[5] && godina[3] == jmbg[6]) {
      document.body.innerHTML += `${student.ime} ${student.prezime}`;
    }
  });
};

rodjeniGodine(studenti, 2009);
