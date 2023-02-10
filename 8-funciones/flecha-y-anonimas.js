// F U N C I O N E S  DE TIPO  F L E C H A
const array = [1, 3, 5, 3, 6, 7, 2, 9];
const array_duplicado = array.map(valor => valor*2);
console.log(array_duplicado); // 2, 6, 10, 6, 14, 4, 18

const doble_del_valor = valor => {
    return valor*2;
}
const otro_doble = valor => valor*2;
const array_triplicado = array_duplicado.map(doble_del_valor);
console.log(array_triplicado);

// F U N C I O N  A N O N I M A
// son funciones que no son asignadas a ninguna variable
// e.j. en este caso se asigna la funcion como parametro.
//const array_duplicado = array.map(valor => valor*2);