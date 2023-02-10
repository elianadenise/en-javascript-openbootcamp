// N U M B E R S
// Entero
let entero = 5;

// Float
let decimal = 1.1;
let otroDecimal = 0.3;

// Math.round - redondea >5 hacia arriba, <5 hacia abajo
console.log(decimal + otroDecimal); // 1.400000000000001
console.log(Math.round(decimal + otroDecimal)); // 1
// truco para obtener suma exacta sin redondear.
console.log(Math.round((decimal + otroDecimal) * 100)/100); // 1.4

// Principales operaciones aritméticas
let a = 3.8;
let b = 5.1;

// Suma 
console.log(a + b);

// Resta 
console.log(a - b);

// Multiplicación 
console.log(a * b);

// Division 
console.log(a / b);


// Representación de los numeros en cadenas de texto
console.log(typeof a); //number
let a_s = a.toString();
console.log(typeof a_s); //String


// Redondeo de números decimales
let c = 3.3;
let d = c * 3;
console.log(d);

// toFixed(cantidad de decimales) pero lo convierte a String.
console.log(d.toFixed(4));

// toPrecision(cantidad de numeros incluyendo decimal) - no redondea, tambien agrega decimales
// devuelve string tambien
let e = 12.34234435345;
let f = 101;
console.log(e.toPrecision(4)); // 12.34
console.log(f.toPrecision(7)); // 101.0000

// Operador .valueOf() - obtener calores numericos a partir de literales
let g = new Number(4);
let h = 5;
console.log(g + h); // 9
console.log(g.valueOf()); // 4

// NaN (Not a Number) - Infinity (da cuando dividimos por 0 o null)
let nan = new Number("holita");
console.log(isNaN(nan)); // true


// convertir string a number
let str = "4.67";
let num = 5.102;
console.log(str + num); // concatena y trata num como string
// casteo
console.log(Number(str) + num); // 9.772, o sea esta bien.

// parseInt & parseFloat
let numerito = "5.98"
// parseInt - enteros
console.log(parseInt(numerito)); // 5
// parseFloat - decimales
console.log(parseFloat(numerito)); // 5.98

// Numeros hexadecimales (base16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex)); //239031
console.log(parseInt(numHex, 16)); //239031
console.log(parseInt(numHex, 8)); //0
console.log(parseInt(numHex, 10)); //0

// obtener los valores maximo y minimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;