// - Una clase llamada "Estudiante" que tenga:
class Estudiante {
    // - Una variable llamada nombre
    #nombre;
    // - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    #asignaturas;

    constructor(nombre){
        this.#nombre = nombre;
        this.#asignaturas = ["Javascript", "HTML", "CSS"];
    }

    // - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenerDatos(){
        return {
            /*"Estudiante: " + this.#nombre + "\n Asignaturas: " + this.#asignaturas */
            estudiante: this.#nombre,
            asignaturas: this.#asignaturas,
        }
    }
}

// - Crea una nueva instancia de "Estudiante"
const nuevo = new Estudiante("Eliana")
// - Haz la llamada al método obtenDatos
console.log(nuevo.obtenerDatos())