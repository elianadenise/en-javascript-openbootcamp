// - Una función sin parámetros que devuelva siempre "true"
function siempre_true(){
    return true;
}
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
// - Una función generadora de índices pares automáticos
function* pares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
console.log(pares().next());
console.log(pares().next());
console.log(pares().next());
console.log(pares().next());
console.log(pares().next());
