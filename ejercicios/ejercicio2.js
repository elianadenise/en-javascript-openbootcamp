// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const eliana = {
    nombre: "Eliana",
    edad: 24,
    isDesarrollador: true,
    nacimiento: new Date("june 25 1998"),
    libroFavorito: {
        titulo: "Asesinato en el Orient Express",
        autora: "Agatha Christie",
        fecha: new Date(0, 1, 1934),
        url: "https://",
    }
}

const listado = new Array(eliana);


// Resolucion segun Open Bootcamp - no me gusta ni aca.
const lista = [
    "Gorka",
    34,
    true,
    new Date(1987, 10, 20),
    { 
        titulo: "El monje que vendió su Ferrari",
        autor: "Robin S. Sharma",
        fecha: new Date(1996, 0, 1),
        url: "https://www.amazon.es/dp/B0062XBS32/"
    }, 
];