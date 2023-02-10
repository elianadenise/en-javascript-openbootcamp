class Persona{
    // Atributos
    // Private - # solo se puede acceder desde dentro de la clase
    #nombre;
    #edad;

    // Protected - _ solo se puede acceder desde dentro de la clase y de clases heredadas
    _isDeveloper = true;
    // Constructor
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    // Metodos
    saludo() {
        console.log("Hola " + this.nombre);
    }

    #getNombre(){// se pueden privar metodos tambien
        return this.#nombre;
    }
    getEdad(){
        return this.#edad;
    }

    setEdad(edad) {
        this.#edad = edad;
    }
}

const eliana = new Persona("Eliana", 24);
console.log(eliana.edad); // undefined porque lo privamos
console.log(eliana.getEdad()); // 24
eliana.saludo();
console.log(eliana._isDeveloper); 
console.log(eliana.setEdad(25));
console.log(eliana.getEdad()); // 25

