let dan = {
  datum: `2021/05/23`,
  kisa: false,
  sunce: true,
  oblacno: false,
  temperature: [21, 23, 25, 28, 29, 29, 24, 22],
  // 1.
  prosecna: function () {
    let suma = 0;
    this.temperature.forEach(e => {
      suma += e;
    });
    let broj = this.temperature.length;
    let prosek = suma / broj;
    return prosek;
  },
  // 2.
  natprosecna: function () {
    let broj = 0;
    this.temperature.forEach(e => {
      if (e > this.prosecna()) {
        broj++;
      }
    });
    return broj;
  },
  // 3.
  maksimalna: function () {
    let max = this.temperature[0];
    this.temperature.forEach(e => {
      if (e > max) {
        max = e;
      }
    });
    return max;
  },
  brojMaksimalnih: function () {
    let broj = 0;
    let max = this.maksimalna();
    this.temperature.forEach(e => {
      if (e == max) {
        broj++;
      }
    });
    return broj;
  },
  // 4.
  izmedjuDve: function (temp1, temp2) {
    let broj = 0;
    this.temperature.forEach(e => {
      if (e > temp1 && e < temp2) {
        broj++;
      } else if (e > temp2 && e < temp1) {
        broj++;
      }
    });
    return broj;
  },
  // 5.
  iznadProseka: function () {
    let prosek = this.prosecna();
    let broj = 0;
    this.temperature.forEach(e => {
      if (e > prosek) {
        broj++;
      }
    });
    return broj;
  },
  vecinomIznadProseka: function () {
    let iznadProseka = this.iznadProseka();
    let ispodProseka = this.temperature.length - iznadProseka;
    return iznadProseka > ispodProseka;
  },
  // 6.
  leden: function () {
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] > 0) {
        return false;
      }
    }
    return true;
  },
  // 7.
  tropski: function () {
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] < 24) {
        return false;
      }
    }
    return true;
  },
  // 8.
  nepovoljan: function () {
    for (let i = 0; i < this.temperature.length; i++) {
      if (Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
        return true;
      }
    }
    return false;
  },
};
console.log(dan.prosecna());
console.log(dan.natprosecna());
console.log(dan.brojMaksimalnih());
console.log(dan.izmedjuDve(23, 29));
console.log(dan.vecinomIznadProseka());
console.log(dan.leden());
console.log(dan.tropski());
console.log(dan.nepovoljan());

///////////////////////////////////////////////////////

let blog1 = {
  title: 'Musaka od tikvica',
  likes: 105,
  dislikes: 67,
};

let blog2 = {
  title: 'Lazanja!',
  likes: 236,
  dislikes: 13,
};

let blog3 = {
  title: 'Zapecena boranija!',
  likes: 60,
  dislikes: 78,
};

let blogs = [blog1, blog2, blog3];

// Napisati foreach petlju koja ispisuje sve naslove iz niza objekata
blogs.forEach(e => {
  console.log(e.title);
});

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let ukupnoLajkova = niz => {
  let suma = 0;
  blogs.forEach(e => {
    suma += e.likes;
  });
  return suma;
};
console.log(ukupnoLajkova(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosekLajkova = niz => {
  let suma = ukupnoLajkova(blogs);
  let prosek = suma / niz.length;
  return prosek;
};
console.log(prosekLajkova(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let visePozitivnih = niz => {
  blogs.forEach(e => {
    if (e.likes > e.dislikes) {
      console.log(e.title);
    }
  });
};
visePozitivnih(blogs);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploVisePozitivnih = niz => {
  blogs.forEach(e => {
    if (e.likes >= 2 * e.dislikes) {
      console.log(e.title);
    }
  });
};
duploVisePozitivnih(blogs);

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let zavrsavajuUzvicnikom = niz => {
  blogs.forEach(e => {
    if (e.title.endsWith('!')) {
      console.log(e.title);
    }
  });
};
zavrsavajuUzvicnikom(blogs);

////////////////////////////////////////////////////

blog1 = {
  title: 'HTML',
  likes: 50,
  dislikes: 3,
};

blog2 = {
  title: 'CSS',
  likes: 170,
  dislikes: 104,
};

blog3 = {
  title: 'JS',
  likes: 170,
  dislikes: 110,
};

let user1 = {
  userName: 'Stefan',
  age: 31,
  blogs: [blog1, blog2, blog3],
  logBlogs: function () {
    this.blogs.forEach(e => {
      console.log(e.title);
    });
  },
};

// 1. U objektu user, napraviti metod koji ispisuje sve blogove korisnika
user1.logBlogs();

// 2. Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let user2 = {
  userName: 'Jelena',
  age: 26,
  blogs: [blog2, blog3],
};

let user3 = {
  userName: 'Milena',
  age: 14,
  blogs: [blog1, blog2],
};

let users = [user1, user2, user3];

// 3. Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(e => {
  if (e.age < 18) {
    console.log(e.userName);
  }
});

// 4. Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(e => {
  e.blogs.forEach(e2 => {
    if (e2.likes > 50) {
      console.log(e2.title);
    }
  });
});

// 5. Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(e => {
  let username = e.userName;
  let blogs = e.blogs;
  blogs.forEach(e2 => {
    if (username == 'Stefan') {
      console.log(e2.title);
    }
  });
});

// 6. Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
users.forEach(e => {
  let blogs = e.blogs;
  let username = e.userName;
  let suma = 0;
  blogs.forEach(e2 => {
    suma += e2.likes;
  });
  if (suma > 100) {
    console.log(username);
  }
});
// 7. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let avg;
let suma = 0;
let broj = 0;
users.forEach(e => {
  let blogs = e.blogs;
  blogs.forEach(e2 => {
    suma += e2.likes;
    broj++;
  });
});
avg = suma / broj;

users.forEach(e => {
  let blogs = e.blogs;
  blogs.forEach(e2 => {
    if (e2.likes > avg) {
      console.log(e2.title);
    }
  });
});
// 8. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
let avg2;
suma = 0;
broj = 0;
users.forEach(e => {
  let blogs = e.blogs;
  blogs.forEach(e2 => {
    suma += e2.dislikes;
    broj++;
  });
});
avg2 = suma / broj;
console.log(avg2);
users.forEach(e => {
  e.blogs.forEach(e2 => {
    if (e2.likes > avg && e2.dislikes < avg2) {
      console.log(e2.title);
    }
  });
});
