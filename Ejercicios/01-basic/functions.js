// //Función Declarativa

saludar();

function saludar() {
  console.log("Hola");
}

// //Función Expresada
const printHello = function hola() {
  console.log("Hello");
};

function prueba() {
  console.log("prueba");
}

let prueba2 = prueba();

// //=============================
function prueba3() {
  return "prueba";
}

let prueba4 = prueba3();
console.log(prueba4);
console.log(saludar("Ana"));
const saludar = function saludarFunc(nombre) {
  return `Hola, ${nombre}`;
};

//Funciones Flecha / Arrow functions

const doble = (n) => n * 2;

console.log(doble(5));
