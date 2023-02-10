// A R R A Y S
const arr = new Array(5);
const arrDos = [1, 2, false, undefined, "Holita"]; 
// pueden contener cualquier tipo de datos

// Acceder a los valores segun posicion
console.log(arrDos[2]);


// Metodos para introducir nuevos valores al array
// .push() .unshift() - mutan el valor del array
// .push() - agrega valores al final
arrDos.push("valor con push", "otro valor", true);

// .unshift - agrega valores al inicio
arrDos.unshift("Eliana");
console.log(arrDos);


// Metodos para eliminar valores del array
// .pop() y .shift() - mutan el valor del array
// .pop() - elimina al final
arrDos.pop();

// .shift() - elimina al inicio
arrDos.shift();


// Metodo para eliminar, modificar o añadir valores en el array
// .splice(x, y ,z)
// eliminar .splice(indice, numero de valores a eliminar)
const array = [1, 2, 3, 4, 5];
array.splice(2, 1);
// primer valor es la posicion a partir de que la elimina,
// segundo valor es cuantas posiciones elimina
console.log(array); // 1, 2, 4, 5

// añadir .splice(indice, 0, valores)
array.splice(3, 0, "holita", "otro valor");
// posicion a reemplazar, 0 (o sea no elimina nada de paso), valores a agregar
console.log(array); // 1, 2, 4, "holita", 5

// modificar .splice(indice, 1, valores)
array.splice(1, 1, "soy eliana");
console.log(array); // 1, "soy eliana", 4, "holita", 5


// U N I R  L I S T A S

// .concat(lista)
const listaUno =  [false, null, 1, 3, 4];
const listaDos = ["segunda lista jejej", "hola", 7, 19, 99];
//guardarlo en otra variable, porque no modifica las otras
const listaTres = listaUno.concat(listaDos);

// listas con el factor propagacion
// factor de propagacion (...) separa los valores, ver los console. re interesante
// MUY USADO
console.log(...listaTres);
const listaCuatro = [...listaUno, ...listaDos];
console.log(listaCuatro);

// .slice() - no modifica el valor del array original
const otro = ["hola", 2 , 6, 12, 434, null];
const otroConSlice = otro.slice(2,4);
// (incluye, no incluye)
console.log(otroConSlice); //[6,12]



// I T E R A R
const nombres = ["eliana", "lara", "milu", "maxi"];

// FOR - forma antigua
for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

// .forEach - se pasa funcion flecha por parametro
nombres.forEach(valor => {
    console.log(valor);
});

const numeros = [1, 2, 3, 4, 5, 6];
let suma = 0;
numeros.forEach(valor => {
    suma += valor;
    console.log(valor + 1)
});
console.log(suma);

// .find - buscar dentro de un array
const elementoBuscado = nombres.find(valor => {
    if(valor ==="eliana"){
        console.log(valor);
        
    }
});

const lista_de_objetos = [
    {nombre: "Eliana", edad: 24},
    {nombre: "Lara", edad: 15},
    {nombre: "Maxi", edad: 28},
    {nombre: "Guada", edad: 25},
    {nombre: "Milucha", edad: 9},
];

const buscado = lista_de_objetos.find(valor => {
    if(valor.nombre === "Lara"){
        return true;
    }
});
console.log(buscado);
const buscadoDos = lista_de_objetos.find(valor => {
    return valor.nombre === "Lara";
})
console.log(buscadoDos);
const buscadoTres = lista_de_objetos.find(valor => valor.nombre === "Lara");
console.log(buscadoTres);
// para obtener una propiedad del objeto
const {edad} = lista_de_objetos.find(valor => valor.nombre === "Lara");
console.log(edad);


//
const caba = ["almagro", "recoleta", "lugano", "devoto", "san telmo"]
// .map - crea un nuevo array teniendo en cuenta los valores de otro
const nuevo = caba.map((valor, indice) => {
    return (indice + 1) + " - " + valor;
    //return `${indice + 1} - ${valor}`;
})

console.log(nuevo);


// .filter - crea una lista con valores filtrados
const jovenes_adultos = lista_de_objetos.filter(valor => {
    if(valor.edad > 20){
        return true;
    }
})
const otra_forma = lista_de_objetos.filter(valor => valor.edad > 20);
console.log(jovenes_adultos);
console.log(otra_forma);

//todos menos...
const listita = lista_de_objetos.filter(valor => valor.nombre !== "Guada");
console.log(listita);

// .reduce(acumulado, current, indice, arrayoriginal)
const valores = [1, 5, 34, 6, 2, 99];
const sumas = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado); // 1, undefined, undefined, undefined, undefined, undefined
    console.log(cur); // 5, 34, 6, 2, 99
    console.log(i); // 1, 2, 3, 4, 5
    console.log(arrayOriginal);
    return acumulado + cur;
})
console.log(sumas); // 147


// ordenar arrays
// .sort() - metodo que modifica el array
const numerico = [4, 6, 3, 5, 23, 7, 1];
numerico.sort((a, b) => {
    if(a < b){
        return -1
    } else if (a > b) {
        return +1
    } else {
        return 0
    }
    
    //return -1; //esto da vuelta el array tal cual esta.
});
console.log(numerico);

// ordenar unicamente arrays de NUMEROS
const numeritos = [3, 5, 1, 7, 4, 45, 33];
numeritos.sort((a, b) => a - b); //forma rapida
console.log(numeritos);


// ordendar array de objetos 
lista_de_objetos.sort((a, b) => {
    if(a.edad < b.edad){
        return -1
    } else if (a.edad > b.edad){
        return +1
    } else {
        return 0
    }
});
//otra forma
lista_de_objetos.sort((a, b) => a.edad - b.edad);
console.log(lista_de_objetos);


// COMPARAR listas
// .every() - si todos los elementos son...
const valoresdos = numeritos.every(valor => {
    if(valor > 0){
        return true;
    } else {
        return false;
    }
});
const valorcitos = numeritos.every(valor => valor > 0);
console.log(valoresdos);


// comparacion de listas
const arr1 = [1, 3, 2, 5, 6];
const arr2 = [1, 3, 2, 5, 6];
const comparacion = (array1, array2) => {
    if(array1.length !== array2.length) return false
    const resultado= array1.every((valor, i) => {
        if(valor === array2[i]) return true
        return false        
    })
    return resultado
    //const resultado = array1.every((valor, i) => valor === array2[i]);
};
console.log(comparacion(arr1, arr2));


// .some() - par ver si todos los elementos de una lista cumplen una condicion
// devuelve true si alguno de los elementos lo cumple
const num = [1, 3, 5, 7, 23, 54, 2, 10, 44];
const final = num.some(valor => valor > 40);
console.log(final); // true
//uso comun
const lista_de_nombres = [
    {nombre: "Eliana", edad: 24},
    {nombre: "Lara", edad: 15},
    {nombre: "Maxi", edad: 28},
    {nombre: "Guada", edad: 25},
    {nombre: "Milucha", edad: 9},
];
const existeLara = lista_de_nombres.some(valor => valor.nombre === "Lara");
console.log(existeLara); // true


// como obtener una lista a partir de un objeto iterble
// .from()
const eliana = "Hola, soy eliana"
const arrEliana = Array.from(eliana);
console.log(arrEliana);

const set = new Set([2, 5, "hola", null]);
const arr_set = Array.from(set);
console.log(arr_set);


// obtner un iterble del array original
const keys = Array.keys();
const arr_keys = Array.from(keys);
console.log(arr_keys);

