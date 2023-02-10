// 1. inspector de google
// 2. application
// 3. localStorage
// localStorage.setItem("nombre", "Eliana");
// localStorage.setItem("nombre", "Lara");

console.log(localStorage.getItem("nombre"));
localStorage.setItem("persona", JSON.stringify({nombre: "Eliana", edad: 24}));
console(JSON.parse(localStorage.getItem("persona")));
// JSON.stringify -> convierte un objeto/array a string
// JSON.parse -> convierte un objeto/array convertido a string en un objeto de js

localStorage.removeItem("nombre");

sessionStorage.setItem("persona-sesion", "Eliana");


// Cookies
document.cookie = "nombre-cookie=EloCookie";
document.cookie = "nombreCaducidad=Nombre";
console.log(document.cookie);
