// - La fecha de hoy
let hoy = new Date();
console.log(hoy);
// - La fecha de tu nacimiento
let mi_nacimiento = new Date(1998,5,25);
console.log(mi_nacimiento);
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let es_mayor = hoy > mi_nacimiento;
console.log(es_mayor); // true
// - Una variable que contenga el día de tu nacimiento
let dia = mi_nacimiento.getDate();
console.log(dia); // 25
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mes = mi_nacimiento.getMonth() + 1;
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anio = mi_nacimiento.getFullYear();