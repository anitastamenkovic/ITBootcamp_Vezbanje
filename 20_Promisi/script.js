// U svim predstojećim zadacima uzeti u obzir da je moguće i da je došlo do greške prilikom poziva fajla. Grešku do koje je došlo ispisati u konzoli.

// 1. Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)
// fetch('./JSON/fruits.json')
//   .then(response => {
//     console.log('resolved', response);
//     return response.json();
//   })
//   .then(data => {
//     console.log('resolved2', data);
//   })
//   .catch(err => {
//     console.log('rejected', err);
//   });

let fruitsBerries = async () => {
  let response = await fetch('./JSON/fruits.json');
  if (response.status != 200) {
    throw new Error('Ne mogu da dohvatim podatke!');
  } else {
    let data = await response.json();
    // console.log(data);
    data.forEach(fruit => {
      if (fruit.name.includes('berries')) {
        console.log('berries fruit', fruit.name);
      }
    });
  }
};

fruitsBerries();

// fruitsBerries()
//   .then(data => {
//     console.log('resolved', data);
//   })
//   .catch(err => {
//     console.log('rejected', err);
//   });

// 2. U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)
let fruitsNoBerries = async () => {
  let response = await fetch('./JSON/fruits.json');
  if (response.status != 200) {
    throw new Error('Ne mogu da dohvatim podatke!');
  } else {
    let data = await response.json();
    // console.log(data);
    let counter = 0;
    data.forEach(fruit => {
      if (!fruit.name.includes('berries')) {
        counter++;
      }
    });
    console.log('No berries fruit', counter);
  }
};

fruitsNoBerries();

// 3. Ispisati u konzoli najpre sve nazive voća iz fajla fruits.json, zatim u konzoli ispisati sve nazive povrća iz fajla vegetables.json (koristiti DOM, async i await).
let fruitsVegetables = async () => {
  let response = await fetch('./JSON/fruits.json');
  if (response.status != 200) {
    throw new Error('Ne mogu da dohvatim podatke!');
  } else {
    let data = await response.json();
    // console.log(data);
    data.forEach(fruit => {
      console.log('fruits', fruit.name);
    });
  }

  response = await fetch('./JSON/vegetables.json');
  if (response.status != 200) {
    throw new Error('Ne mogu da dohvatim podatke!');
  } else {
    data = await response.json();
    // console.log(data);
    data.forEach(vegetables => {
      console.log('vegetables', vegetables.name);
    });
  }
};

fruitsVegetables();

// 4. Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u neuređenoj listi ispisati sve nazive voća iz fruits.json fajla. Potom ispisati naslov “Vegetables” iza koga sledi neuređena lista sa nazivima povrća iz vegetables.json fajla. (koristiti DOM, async i await).
// 5. Nadovezati se na prethodni zadatak i nakon ispisane liste voća u paragrafu ispisati ukupnu težina svog voća u kilogramima. Zatim, ispod liste povrća u paragrafu ispisati ukupnu težinu povrća u kilogramima. Postaviti da asinhrona funkcija vraća zbir količina voća i povrća u kilogramima. Pri pozivu asinhrone funkcije, ispisati  ovu vrednost.
// kreiranje elemenata
let createElements = (naslov, id, data, sum) => {
  // create h3
  let h3 = document.createElement('h3');
  h3.textContent = naslov;
  let divParent = document.querySelector(id);
  divParent.appendChild(h3);

  // create list
  let list = document.createElement('ul');
  divParent.appendChild(list);

  data.forEach(niz => {
    let listItem = document.createElement('li');
    listItem.textContent = niz.name;
    list.appendChild(listItem);
  });

  // create p
  let p = document.createElement('p');
  p.textContent = sum;
  divParent.appendChild(p);
};

// suma
let suma = data => {
  // suma Fruits
  let sum = 0;
  data.forEach(niz => {
    sum += Number(niz.weight);
  });
  return sum;
};

let fruitsAndVegetables = async () => {
  // fruits
  let response = await fetch('./JSON/fruits.json');
  if (response.status != 200) {
    throw new Error('Ne mogu da dohvatim podatke!');
  } else {
    let data = await response.json();

    let sumFruits = suma(data);
    createElements('Fruits', '#fruits', data, sumFruits);

    // vegetables
    let response2 = await fetch('./JSON/vegetables.json');
    if (response2.status != 200) {
      throw new Error('Ne mogu da dohvatim podatke!');
    } else {
      let data2 = await response2.json();

      let sumVegetables = suma(data2);
      createElements('Vegetables', '#vegetables', data2, sumVegetables);

      // sum fruits and vegetables
      let sum = sumFruits + sumVegetables;
      return sum;
    }
  }
};

fruitsAndVegetables()
  .then(sum => {
    let parent = document.body;
    let p = document.createElement('p');
    p.style.fontSize = `24px`;
    p.textContent = `Sum of fruits and vegetables: ${sum}`;
    parent.appendChild(p);
  })
  .catch(err => console.log('rejected', err));
