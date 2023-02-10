// Comparaciones
// != diferentes en valor
// !== diferentes en valor y tipo


// Igualdad
// = asignacion
// == igualdad en valor
let valor1 = 5;
let valor2 = "5";
if (valor1 == valor2){
    console.log("true") // toma este
}
// === igual en valor y tipo
let valor3 = 5;
let valor4 = "5";
let valor5 = Number(valor4);
if (valor3 === valor4){
    console.log("true")
} else {
    console.log("false") // toma este
}

if (valor3 === valor5){
    console.log("true") // toma este
} else {
    console.log("false")
}