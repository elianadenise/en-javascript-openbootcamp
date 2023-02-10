// Estructuras de control
// if - else
let saldo = 50;
let extraccion = 30;
if(saldo > extraccion) {
    console.log("Podes sacar dinero");
} else {
    console.log("Saldo insuficiente");
}

// if else + if else
let nota = 5;
if(nota === 5) {
    console.log("aprobado");
} else if (nota > 5) {
    console.log("re aprobaste");
} else {
    console.log("desaprobaste");
}

// Switch
let notaDos = 7;
switch(notaDos){
    case 1:
    case 2:
    case 3:
        console.log("Desaprobaste");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Aprobaste");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Promocionaste");
        break;
    default: 
        console.log("Numero no valido");
        break;

}