// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista_de_compras = ["Arroz", "Pan", "Lentejas", "Pasta", "Tomate"];
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_de_compras.push("Aceite de Girasol");
console.log(lista_de_compras)
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_de_compras.pop();
console.log(lista_de_compras);
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const lista_de_peliculas = [
    {titulo: "El laberinto del fauno", director: "Gillermo del Toro", fecha: new Date("march 25 2010")},
    {titulo: "Encanto", director: "n/s", fecha: new Date("march 25 2009")},
    {titulo: "Clueless", director: "Alicia Silverstone", fecha: new Date("march 25 2020")},
]
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const lista_nueva_peliculas = lista_de_peliculas.filter(valor => valor.fecha > new Date("jan 1 2010"));
console.log(lista_nueva_peliculas);
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const lista_de_directores = lista_de_peliculas.map(valor => valor.director);
console.log(lista_de_directores);
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const lista_de_titulos = lista_de_peliculas.map(valor => valor.titulo);
console.log(lista_de_titulos);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const nueva_lista = lista_de_directores.concat(lista_de_titulos);
console.log(nueva_lista);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const otra_lista = [...lista_de_directores, ...lista_de_titulos];
console.log(otra_lista)