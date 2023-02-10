// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Eliana",
    apellido: "Navarro",
    edad: 24,
    altura: 1.67,
    eresDesarrollador: true,
}
// - Una variable que obtenga tu edad a partir del objeto anterior
let edad_de_datos = "edad";
console.log(datos[edad_de_datos]); // 24
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigxs = [
    datos,
    {nombre: "amigo",
    apellido: "imaginario",
    edad: 22,
    altura: 2.67,
    eresDesarrollador: false,},
    {nombre: "amiguino",
    apellido: "invisible",
    edad: 25,
    altura: 1.30,
    eresDesarrollador: true,}
]
console.log(amigxs);
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const nueva_lista = [...amigxs];
nueva_lista.sort((a,b) => b.edad - a.edad);
console.log(nueva_lista);

// resolucion
const lista = [
    {
        ...datos
    },{
        nombre: "Pedro",
        apellido: "Angulo",
        edad: 35,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
    }
];
const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);