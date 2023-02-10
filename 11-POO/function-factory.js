// P O O - Programacion Orientada a Objetos

// Funcion factory - sin POO
const crear_persona = (nombre, edad, isDeveloper) => {
    return {
        nombre /*: nombre*/, // cuando en un objeto el nombre de la propiedad y el del valor es el mismo, se puede hacer esto
        edad /*: edad*/,
        isDeveloper /*: isDeveloper*/,
        saludo: function() {
            console.log("Hola")
        }
    }
}
const nueva_persona = crear_persona("Eliana", 24, true);
