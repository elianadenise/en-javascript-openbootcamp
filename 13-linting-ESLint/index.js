// L I N T I N G - ESLint
// Codigo limpio, codigo estandarizado o constante.
// Reforzar con reglas
// Extension ESLint

// const nombre = "Eliana"
//     var nombrecito = 'elo';
// npm init -y
// npm init @eslint/config y seguir los pasos
const nombre = "Eliana"
var nombrecito = "elo"; // eslint-disable-line semi 

var objeto = {
    apodo: 'elo', // eslint-disable-line 
    //haciendo el comentartio de arriba, en comentario, deshabilita el error
    nombre: "eliana",
}
console.log(nombre)
console.log(nombrecito)
console.log(objeto)

// codigo ya corregido

console.log("hola") 
// npm run lint - para ver los errores por consola

// arreglar errores con --fix
// npm run lint--fix

// en package.json
// "scripts": {
//     "lint": "eslint .",
//     "lint--fix": "eslint --fix ."
//   },