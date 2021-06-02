// 1. Ispisati brojeve od 1 do 20 

let i = 1;
let n = 20;
let res = " ";

for(i = 1; i <= n; i++){
 res += (i + " ");
}
console.log(res);

// 2. Ispisati brojeve od 20 do 1 

i = 20;
n = 1;
res = " ";

for(i = 20; i >= n; i--){
 res += (i + " ");
}
console.log(res);

// 3. Ispisati parne brojeve od 1 do 20 

i = 1;
n = 20;
res = " ";

for(i = 1; i <= n; i++){
 if(i % 2 == 0){
  res += (i + " ");
 }
}
console.log(res);

// 4. Ispisati dvostruku vrednost brojeva od 5 do 15

i = 5; 
n = 15;
res = " ";

for(i = 5; i <= n; i++){
 let dvostruko = i * 2;
 res += (dvostruko + " ");
}
console.log(res);

// 5. Odrediti sumu brojeva od 1 do n

i = 1;
n = 5;
let suma = 0;

for(i = 1; i <= n; i++){
 suma += i;
}
console.log(suma);

// 6. Odrediti sumu brojeva od n do m 

n = 5;
m = 10;
suma = 0;

for(i = n; i <= m; i++){
 suma += i;
}
console.log(suma);

// 7. Odrediti proizvod brojeva od n do m

n = 5;
m = 10;
let pro = 1;

for(i = n; i <= m; i++){
 pro *= i;
}
console.log(pro);

// 8. Odrediti sumu kvadrata brojeva od n do m *

n = 5;
m = 10;
suma = 1;

for(i = n; i <= m; i++){
 suma += i ** 2;
}
console.log(suma);

// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

for(i = 1; i <= 3; i++){
 document.body.innerHTML += `<img src="${i}.jpg">`
}

// 10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *

i = 20;
n = 35;
pro = 1;

for(i = 20; i <= n; i++){
 if(i % 11 == 0){
  pro *= i;
 }
}
console.log(pro);

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

i = 5;
n = 150;
let broj = 0;

for(i = 5; i <= n; i++){
 if(i % 13 == 0){
  broj++;
 }
}
console.log(broj);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.

n = 5;
m = 8;
broj = 0;
suma = 0;

for(i = n; i <= m; i++){
 suma += i;
 broj++;
}
let as = suma / broj
console.log(as);

// 13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

n = -5;
m = 5;
let pozitivniBrojevi = 0;
let negativniBrojevi = 0;
for(i = n; i <= m; i++){
 if(i < 0){
  pozitivniBrojevi++;
 }
 if(i > 0){
  negativniBrojevi++
 }
}
console.log(pozitivniBrojevi, negativniBrojevi);

// 14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *

n = 5;
m = 50;
broj = 0;

for(i = n; i <= m; i++){
 if(i % 3 == 0 || i % 5 == 0){
  broj++;
 }
}
console.log(broj);

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.

n = 5;
m = 45;
suma = 0;

for(i = n; i <= m; i++){
 if(i % 10 == 4){
  suma += i;
 }
}
console.log(suma);

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 5;
m = 10;
let a = 5;
suma = 0;

for(i = n; i <= m; i++){
 if(i % a != 0){
  suma += i;
 }
}
console.log(suma);

// 17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

n = 5;
m = 15;
a = 5;
pro = 1;

for(i = n; i <= m; i++){
 if(i % a == 0){
  pro *= i;
 }
}
console.log(pro);

// 18. Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

let redovi = 6;
let tabela = `<table>`;

for(i = 1; i <= redovi; i++){
 if(i % 2 == 0){
  tabela += `<tr class="obojen">`;
 } else {
  tabela += `<tr>`;
 }
 tabela += 
 `
 <td>Text</td>
 <td>Text</td>
 </tr>
 `;
}

tabela += `</table>`;
document.body.innerHTML += tabela;

// 19. Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let brLi = 10;
let lista = `<ul>`;
for(i = 1; i <= brLi; i++){
 if(i % 3 == 0){
  lista += `<ul><li class="ljubicasti">Element ${i}</li></ul>`;
 } else {
  lista += `<li>Element ${i}</li>`;
 }
 lista += `</ul>`;
}
document.body.innerHTML += lista;

// 20. Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.
document.body.innerHTML += `<br>`
n = 64;

for(i = 1; i <= n; i++){
 document.body.innerHTML += `<span>${i}</span>`
 if(i % 8 == 0){
  document.body.innerHTML += `<br>`
 }
}

// 21. Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
// U realizaciji ovog zadatka koristiti for petlju.


