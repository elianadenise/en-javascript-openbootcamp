// F E C H A S
const fecha = new Date();
console.log(fecha);
// los meses empiezan desde 0
const fecha_dos = new Date(1998,5,25,21,17,00);
console.log(fecha_dos); // Thu Jun 25 1998 21:17:00

const fecha_tres = new Date("June 25, 1998 21:33:55");
console.log(fecha_tres);

// comparar fechas
console.log(fecha > fecha_dos) // true

console.log(fecha === fecha_dos) // false - igual está mal comparar asi
console.log(fecha.getTime === fecha_dos.getTime); // asi se comparan las fechas. con gettima te da los segundos desde la fecha 0 (1/1/1970 es la 0)

// obtener el dia, mes y año de una fecha
// .getDate() - dia
console.log(fecha_dos.getDate()); // 25
// .getMonth() - mes
console.log(fecha_dos.getMonth()); // 5 + 1
// .getFullYear() - anio
console.log(fecha_dos.getFullYear()); // 1998
// .toLocalDateString() - mostrar fecha de la manera local 
console.log(fecha_dos.toLocaleDateString(/*aca podemos poner el idioma, ver parametros*/)); // 25/6/1998
