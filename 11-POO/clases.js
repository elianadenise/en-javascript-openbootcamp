// P O O - Clases
class Persona{
    // Atributos
    nombre;
    edad;
    isDeveloper;

    // Constructor
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    // Metodos
    // siempre poner this, porque sino la toma como undefined
    saludo() {
        console.log("Hola " + this.nombre);
    }
}

const nueva = new Persona("Eliana", 24, true);
console.log(nueva);
nueva.saludo();

// instanceof - similar a typeof pero para clases
console.log(typeof nueva); // object
console.log(nueva instanceof Persona); // true