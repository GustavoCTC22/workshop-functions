//Contador de vocales
//Diana ---> 3
// Includes
function countVowels(nombre) {
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerName = nombre.toLowerCase();

  let total = 0;
  //"jezabel"
  for (let char of lowerName) {
    if (vowels.includes(char)) {
      total += 1;
    }
  }

  return total;
}

const result = countVowels("JEZABEL");
console.log(result);
countVowels("María Elizabeth");

//FOR OF =================================== Version 1

const promedios = [80, 70, 95, 65, 50];

let count = 0;

for (let promedio of promedios) {
  if (promedio >= 70) {
    count += 1;
  }
}

//FOR ======================================= Version 2

const puntajes = [80, 70, 95, 65, 50]; //5 puntajes[0] puntajes[1]
let scoreBetter = 0;
for (let index = 0; index < puntajes.length; index++) {
  if (puntajes[index] >= 70) {
    scoreBetter += 1;
  }
}
