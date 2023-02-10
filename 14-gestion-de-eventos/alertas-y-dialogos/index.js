const btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click", () => {
    // alert("se ha hecho click");

    // confirm("estas de acuerdo?") // preferible usar ternario
    //     ? console.log("ok") 
    //     : console.log("not ok")

    const confirm = confirm("estas de acuerdo?");
    if(confirm == true){
        console.log("ok") 
    } else {
        console.log("not ok")
    }
})

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
    const nombre = prompt("cual es tu nombre?")
    if(nombre){
        console.log("tu nombre es " + nombre);
    } else {
        console.log("no llenaste tu papeleo anoche")
    }
   
})

const lista = [{
    nombre: "Eliana",
    apellido: "Navarro"
},
{
    nombre: "Lara",
    apellido: "Navarro"
}];

console.table(lista)