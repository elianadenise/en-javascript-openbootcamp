//  npm init -y
// 1. "type":"module", en el package.json
// 2. eliminamos esto de matematica:
/*
module.exports = {
    sumar,
    multilicar,
    elevar,
    factorial,
} 
*/
// 3. agregamos export a cada una de las funciones de matematica.js

import { sumar, matematicasConst } from './modulos/matematica.js';
import getAutor, {libro} from './modulos/literatura.js';

const suma = sumar(2, 3);
console.log(suma);
console.log(matematicasConst);
console.log(getAutor);
console.log(libro);

/*
import * as moduloMatematicas from './modulo/matematica.js'
const suma = moduloMatematicas.sumar(2, 3);
console.log(suma);
console.log(moduloMatematicas.matematicasConst)
*/