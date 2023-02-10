const form = document.getElementById("formulario");
console.log(form);
form.addEventListener("submit", evento => evento.preventDefault());
// con preventDefault() hago que no se actualise la pagina despues de hacer el submit
// prevenir el comportamiento por defecto, o sea, que se actualise la pagina
