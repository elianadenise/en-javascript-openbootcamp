// GESTION DE  E R R O R E S
const una_funcion = val => {
    return val * 2;
}

console.log(una_funcion(4)); // 8
console.log(una_funcion("21")); // 42
console.log(una_funcion("43a")); // Nan

const una_funcion_mejorada = val => {
    if(typeof val === "number"){
        return val * 2;
    } else {
        return false
    }
}

console.log(una_funcion_mejorada(4)); // 8
console.log(una_funcion_mejorada("21")); // false
console.log(una_funcion_mejorada("43a")); // false

const una_funcion_re_mejorada = val => {
    if(typeof val === "number"){
        return val * 2;
    } 
    throw new Error("El valor debe de ser de tipo number");
}

console.log(una_funcion_re_mejorada(4)); // 8
console.log(una_funcion_re_mejorada("21")); // "El valor debe de ser de tipo number"
console.log(una_funcion_re_mejorada("43a")); // "El valor debe de ser de tipo number"

const numero = 9;
try {
    // codigo que puede fallar pero que tratamos de ejecutar
    console.log("Se ejecuta de manera correcta");
    const doble = una_funcion_re_mejorada(numero); // si esto no se cumple, error.
    console.log(doble);
} catch(e){
    // en caso de que falle, se ejecuta esto
    console.error("ERROR!")
    console.error(e);
} finally {
    // se ejecuta haya o no error
    console.log("Me ejecuto igual")
}
// tratar de hacer todo con try catch


// InternalError (cuando hay overflow), 
// SyntaxError, 
// TypeError (error en el tipo de dato ingresado), 
// RangeError (error de rango), 
// ReferenceError (no existe esa referencia)
