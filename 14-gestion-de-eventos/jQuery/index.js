// entrar a la pagina de jquery
// download compresed
// copiar el link y ponerlo como scr en el html en el head
// el index.js pornelo al final de body

// Sintexis de JQuery
// $(selector).accion()
console.log("hola")
//$("li").hide();
$(document).ready(() => {

});

$(() => {
    // Selectores:
    // id="li-1" -> "#el-1"
    // class="el-1" -> ".el-1"
    // $("#el-1").hide()

    $(".hide").click(() => {
        // $("h1").hide();
        $("h1").fadeOut();
    })
    $(".show").click(() => {
        // $("h1").show();
        $("h1").fadeIn();
    })
    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })
    $(".add").click(() => {
        //$("ul").append("<li>new element</li>")
        $("ul").prepend("<li>new element</li>")
    })
    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })
    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})