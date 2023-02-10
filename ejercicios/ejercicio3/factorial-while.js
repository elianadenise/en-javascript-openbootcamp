// Este archivo debe calcular el factorial de 10 utilizando un solo bucle while
let acumulador = 1;
let numeroElegido = 10;
let resultado = 1;
while(acumulador <= numeroElegido){
    resultado *= acumulador;
    acumulador++;
    console.log(resultado);
}