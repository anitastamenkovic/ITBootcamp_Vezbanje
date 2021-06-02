// 1. Ispisati brojeve od 1 do 20:
// Svaki u istom redu
// Svaki u novom redu

let i = 1;
let n = 20;
while(i <= n){
 console.log(i);
 i++;
}

let res = " ";
i  = 1;
n = 20;
while(i <= n){
 res += (i + " ");
 i++;
}
console.log(res);

// 2. Ispisati brojeve od 20 do 1.

i = 20;
n = 1;
let res2 = " ";
while(i >= n){
 res2 += (i + " ");
 i--;
}
console.log(res2);

// 3. Ispisati parne brojeve od 1 do 20.

i = 1;
n = 20;
while(i <= 20){
 if(i % 2 == 0){
  console.log(i);
 }
 i++
}

// 4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

i = 1;
n = 6;

while(i <= n){
 if(i % 3 == 1){
  document.body.innerHTML += `<p style="color: red;">Lorem lorem lorem</p>`;
 } if(i % 3 == 2){
  document.body.innerHTML += `<p style="color: blue;">Lorem lorem lorem</p>`;
 } if(i % 3 == 0){
  document.body.innerHTML += `<p style="color: green;">Lorem lorem lorem</p>`;
 }
 i++;
}

// 5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

i = 1;
n = 6;

while (i <= n){
 if(i % 2 == 0){
  document.body.innerHTML += `<img style="border: 1px solid red;" src="1.jpg">`;
 } else {
  document.body.innerHTML += `<img style="border: 1px dashed blue;" src="2.jpg">`;
 }
 i++;
}

// 6. Odrediti sumu brojeva od 1 do 100

i = 1;
n = 100;
let suma = 0;

while(i <= n){
 suma += i;
 i++;
}
console.log(suma);

// 7. Odrediti sumu brojeva od 1 do n

i = 1;
n = 35;
suma = 0;

while(i <= n){
 suma += i;
 i++;
}
console.log(suma);

// 8. Odrediti sumu brojeva od n do m

n = 5;
let m = 25;
suma = 0;

while(n <= m){
 suma += n;
 n++;
}
console.log(suma);

// 9. Odrediti proizvod brojeva od n do m

n = 1;
m = 8;
suma = 1;

while(n <= m){
 suma *= n;
 n++;
}
console.log(suma);

// 10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 1;
m = 13;
let suma1 = 1;
let suma2 = 1;

while(n <= m){
 if(n % 2 == 0){
  suma1 += n**2;
 } if(n % 2 != 0){
  suma2 += n**3;
 }
 n++;
}
console.log(suma1, suma2);

// 11. Odrediti sa koliko brojeva je deljiv uneti broj k

i = 1;
let k = 12;
let brojDeljivih = 0;

while(i <= k){
 if(k % i == 0){
  brojDeljivih++;
 }
 i++;
}
console.log(brojDeljivih);


// 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

i = 1;
n = 13;
brojDeljivih = 0;

while(i <= n){
 if(n % i == 0){
  brojDeljivih++;
 } 
 i++;
}
console.log(brojDeljivih);

if(brojDeljivih == 2){
  console.log(`Broj je prost`);
 } else {
  console.log(`Broj nije prost`);
 }

// Domaci 9

// 13. Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
// Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem 3 i neparni su (to su brojevi 3 i 15)
// Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3 (3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1.

k = 15;
brojDeljivih = 0;
i = 1;

while (i <= k) {
    if ((k % i == 0) && (i % 3 == 0) && (i % 2 != 0)) {
        brojDeljivih++;
    }
    i++;
}
console.log(brojDeljivih);