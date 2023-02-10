const boton = document.querySelector("#btn");
boton.addEventListener("click", () => {
    alert("hiciste click en el boton");
});
$(document).ready(() => {
// poner esto si o si, porque sino da error,
// agregar a .eslintrc.json -- "jquery": true
});
$(() => {
    $("#btn").click(() => {
        $("ul").prepend("<li>tambien creaste un elemento con jquery</li>");
        $("body").append("<h3> agregaste un titulo tambien jajaj</h3>");
    });
});

// otra resolucion 
// let boton = document.querySelector("button")

// boton.addEventListener("click", () => alert("click en el botón"))

// $("button").click(function() {
//     console.log("Hola, estoy utilizando jQuery")
// })