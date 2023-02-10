// H E R E N C I A  Y  P O L I M O R F I S M O

// Inheritance - Herencia

class Persona {
    _nombre; //protegidos
    _edad;
    // Constructor
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    // Metodos
    saludo() {
        console.log("Hola " + this._nombre);
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre, edad); // asi llamo al constructor de persona
        this.lenguaje = lenguaje;
    }

    // Polimorfismo - override, sobrecarga de metodos
    saludo(){
        super.saludo();
        console.log("y soy desarrollador de " + this.lenguaje)
    }

}

const nuevo_desarrollador = new Desarrollador("Eliana", 24, "Java");
nuevo_desarrollador.saludo();


// Polimorfismo
// La palabra polimorfismo se refiere al hecho de tener varios métodos con el mismo nombre y la misma implementación.