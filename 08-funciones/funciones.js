// F U N C I O N E S
// bloques de codigo que se ejecutan con un fin especifico
function saludar(nombre){
    console.log("Hola " + nombre);
}
saludar("Elo");

let persona = {
    nombre: "Eliana",
    apellido: "Navarro"
}
function despedir(objeto){
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}
despedir(persona);


// parametro por defecto
// si no se pasa parametro, se usa el defecto
function imprimeNumero(numero = 1975){
    console.log(numero);
}
imprimeNumero(); // 1975
imprimeNumero(75); // 75


// factor de propagacion como parametro
function imprimir(...parametros){
    console.log("Hola " + parametros);
}
imprimir("eliana", 1, {id: 4});

function suma(...nums){
    return (nums.reduce((a,b) => a + b));
}
const resultado = suma(1, 4, 5, 3);
console.log(resultado);


function multiplicar(a = 0, b = 0){
    return a*b;
}
multiplicar(3, 7)