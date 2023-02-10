// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 167;
// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 1.67;
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 73.6;
// - Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.ceil(alturaMetros)); // 2
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(peso)); // 73
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let maxValor = Number.MAX_VALUE;
let maxValorMasUno = maxValor + 1;
if(maxValor == maxValorMasUno){
    console.log(verdadero);
} else { 
    console.log(falso)
}
//resolucion del profesor
const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(sonIguales) //true
