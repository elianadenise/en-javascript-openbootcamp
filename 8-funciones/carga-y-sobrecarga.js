// CARGA Y SOBRECARGA DE FUNCIONES
function saludar(){
    hola()
}

function hola() {
    console.log(`Hola, soy la funcion hola()`);
}

saludar();

// stack over flow - sobre carga
function recursivo() {
    recursivo(); // Maximum call stack exceeded
}
recursivo();