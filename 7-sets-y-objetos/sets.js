// S E T S o conjuntos
// son una especia de lists, pero se comportn de diferente manera
// es un objeto iterable
const array = [1, 2, 4, 4, 8, 2, 6, "hola", null, {id: 12}];
const set = new Set(array);
console.log(array); // 1, 2, 4, 4, 8, 2, 6
console.log(set); // 1, 2, 4, 8, 6, "hola", null, {id: 12}
// los sets no almacenan datos repetidos
set.add(9); // lo añade al final
set.delete("hola"); // elimina el valor en parametro
set.has(4); // t o f si el valor se encuentra en el set
set.size; // para saber la cantidad de valores en el set
// .forEach
set.forEach(valor => {console.log(valor)})
// iterador
const iterar_set = set.values();
console.log(iterar_set); // {[Iterator]}
// volver a array
const array_set = [...set];
console.log(array_set);

set.clear(); // elimina todos los valores del set
