// - Un nuevo Set con los nombres de tu familia
const array = ["Lara", "Milu", "Eliana"]
const familia = new Set(array);
console.log(familia);
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Eliana");
console.log(familia);
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("Javascrip");

// resolucion
const familia2 = new Set(["Gorka", "Maria", "Marta", "Gorka"])
familia2.add("Gorka")
familia2.add("Javascript")

console.log(familia2)