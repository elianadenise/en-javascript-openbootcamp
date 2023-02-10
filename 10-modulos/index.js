// MODULOS - codigos que se pueden reutilizar en diferentes partes del codigo
// FORMAS DE IMPORTAR MODULOS:
// 1 - CommonJS - require
// 2 - Import ES6 -import

/* 1- CommonJS
const moduloMatematicas = require("./modulos/matematicas.js");
//console.log(moduloMatematicas);
const fact = moduloMatematicas.factorial(5);
console.log(fact);
*/
/* 2- Import ES6 */
const { factorial, sumar, elevar, multiplicar } = require("./modulos/matematicas.js");

const fact = factorial(5);
console.log(fact);

//cd 10-modulos
//node index.js para ejecutar

//console.log(module);