// O B J E T O S
const objeto = {
    id: 75,
    nombre: "Eliana",
    apellido: "Navarro",
    isDeveloper: true,
    artistas_fav : ["Shakira", "Miranda!"],
    "materias-fav": ["Progra basica", "Diseño grafico"]
}

console.log(objeto["materias-fav"]);
console.log(objeto.apellido);

const propiedad_en_variable = "isDeveloper";
console.log(objeto[propiedad_en_variable]); // true

// DUPLICAR OBJETO
// igualando
const otro_objeto = objeto; // copia hasta la referencia en memoria
console.log(otro_objeto);
otro_objeto.nombre = "Lara";
console.log(otro_objeto.nombre); // Lara
console.log(objeto.nombre); // Lara - por copia en memoria
// propagacion
const otro_otro_objeto = {...objeto};
otro_otro_objeto.nombre = "Milu";
console.log(otro_otro_objeto.nombre); // Milu
console.log(objeto.nombre); // Lara


// Ordenar listas de objetos en funcion de una propiedad
const lista_de_peliculas = [
    {titulo: "El laberinto del fauno", anio: 2006},
    {titulo: "Titanic", anio: 1997},
    {titulo: "High School Musical", anio:2006},
    {titulo: "Dirty dancing", anio: 1986}
];

// . sort - muta el valor de la lista original
//ordenar por anio
lista_de_peliculas.sort((a,b) => a.anio - b.anio);
console.log(lista_de_peliculas);
//ordenar por titulo, ver esto porque rari
lista_de_peliculas.sort((a,b) => a.titulo - b.titulo);
console.log(lista_de_peliculas);