// Bucles
// F O R
let acumulador = 0;
for(let i = 0; i < 10; i++){
    console.log(i);
    acumulador += i;
}
console.log(acumulador);

const lista = [1, 2, 3, 4, 5];
for(let i = 0; i < lista.length; i++) {
    console.log(lista[i]*2);
}
// for of
for(let valor of lista){
    console.log(lista[valor]*2);
}

// forEach
lista.forEach(valor => console.log(valor*2)); 

// for in
const eliana = {
    nombre: "Eliana",
    edad: 24,
    isDesarrollador: true,
}
for(let propiedad in eliana){
    console.log(propiedad);
    console.log(eliana[propiedad]) // lo trata como array
}


// W H I L E
let i = 0;
let max = 10;

while(i < max){
    console.log(i);
    i++; //para que no se haga bucle infinito
}

// do while
let j = 0;
let mazmax = 10;
do{
    console.log("hola " + j);
    j++; //para que no se haga bucle infinito
}
while(j < mazmax)