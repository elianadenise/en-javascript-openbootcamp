// ctrl + } - comenta automaticamente.
// LISTAS - ARRAY - ARREGLO - VECTOR

// definicion 1
const array = ["hola", 1, false, null, undefined];

// definicion 2 - paso por parametro los valores
const arrayDos = new Array("hola", 1, false, null, undefined);

// definicion 3 - paso por parametro la cantidad de valores
const arrayTres = new Array(5);
arrayTres [4] = "agrego un elemento";

// Array de Arrays
const listaFinal = [array, arrayDos, arrayTres];
console.log(listaFinal);


// OBJETOS
const persona = {
    nombre: "Eliana",
    apellido: "Navarro",
    isViva: true,
    hermanos: ["Lara", "Milucha"],
    caracteristicas: {
        altura: 1.63,
        peso: 73,
        edad: 24,
    }
}
console.log(persona.caracteristicas.altura);
//agrego un valor nuevo
movil.caracteristicas.ojos = negro;


// FECHAS
// Librerias de apoyo Moment.js

const ahora = new Date(); //momento en el que se define la variable

const fecha_milisegundos = new Date(10); //ni idea no entendi

const cadena = new Date("march 25 2020")

const valores = new Date(2, 25, 2020);
//los meses empiezan en 0

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();