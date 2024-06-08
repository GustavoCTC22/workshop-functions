/* Se te proporcionará una serie de objetos que representan datos sobre los desarrolladores 
 que se han registrado para asistir a la reunión de programación que estás organizando por primera vez.
 Su tarea es devolver la cantidad de desarrolladores de JavaScript provenientes de Europa.
 Por ejemplo, dada la siguiente lista:*/
const developers = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

const countDevelopers = (list) => {
  let result = 0;
  for (let element of list) {
    if (element.continent == "Europe" && element.language == "JavaScript") {
      result += 1;
    }
  }
  return result;
};

// console.log(countDevelopers(developers));

//========================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of numbers) {
  if (num % 2 == 0) {
    console.log("continua");
    continue;
  }
  console.log(num);
}

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of numbers2) {
  if (num == 5) {
    break;
  }
  console.log(num);
}
