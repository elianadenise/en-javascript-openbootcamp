// S T R I N G S
// String estaticos
let cadena = "Hola, soy un texto x";
let cadenaDos = 'Hola, soy un texto';
// String no estaticos - bakcticks
let cadenaTres = `Hola, soy otro texto`;
// permite la introduccion de variables en el String
let nombre = "Eliana";
let edad = 24;
let saludo = `Ella se llama ${nombre} y tiene ${edad}`;
console.log(saludo)
// plantilla HTML - permite salto de linea
let plantilla = `
    <html>
    <h1>¡Hola mundo! mi nombre es ${nombre}</h1>
    </html>
`;

// entre comillas
let entreComillas = "Ella me dijo \"hola\" y se fue";
let entreComillasDis = 'Ella me dijo "hola" y se fue';
console.log(entreComillas);

// Metodos
// LENGTH - longitud de la cadena
let largo = cadena.length;
console.log(largo);

// Cortar cadenas slice(), substring(), substr(estaendesuso)
let slice_str = cadena.slice(6, 10);
console.log(slice_str);

let substring_str = cadena.substring(6,10);
console.log(substring_str);

let substr_str = cadena.substr(6,10);
console.log(substr_str);

// Reemplazar parte del contenido d euna cadena de texto
// solo reemplaza la primera que encuentre
let persona = "Ella se llama Eliana";
let personaDos = persona.replace('Eliana', 'Lara');
console.log(personaDos);

// Reemplazar todas las mismas palabras usar 
// /palabra/g
let texto_extenso = "El turismo accesible es muy importante en el turismo global";
console.log(texto_extenso.replace(/turismo/g, "actividad"));

// a Minuscula
let minuscula = cadena.toLowerCase();
console.log(minuscula);
// a Mayuscula
let mayuscula = cadena.toUpperCase();
console.log(mayuscula);

// Concatenar cadenas
let concatenada = cadena.concat(" " , cadenaDos, " hola holaaa");
console.log(concatenada);

let concatenadaDos = cadena + cadenaDos; //cuidado si son numeros!!
console.log(concatenadaDos);

let concatenadaTres = `${cadena} ${cadenaDos}`;
console.log(concatenadaTres);

// TRIM - Sacar espacios inicio y final
let conEspacios = " Cadena con espacios al inicio y final   ";
console.log(conEspacios.length);
console.log(conEspacios.trim().length);
// al inicio
console.log(conEspacios.trimStart().length);
// al final 
console.log(conEspacios.trimEnd().length);

// charAt - caracter en cierta posicion
console.log(cadena.charAt(3));

// caracter en cierta posicion como si fuera ARRAY/LISTA
console.log(cadena[3]);

// posicion de una palabra en cadena de texto
console.log(cadena.indexOf("texto")); //positivo si lo encuentra
console.log(cadena.indexOf("cuchurrumin")) //negativo si no lo encuentra

// lastIndexOf para encontrar la ultima palabra repetida
console.log(texto_extenso.lastIndexOf("turismo"))


// expresiones regulares https://regexr.com
let turismo = "El turismo y el disfrute del tiempo libre son un derecho de los argentinos y las argentinas. Para poder garantizar las vacaciones y el descanso, el Ministerio de Turismo y Deportes ofrece dos complejos turísticos, uno está en las playas de Chapadmalal, provincia de Buenos Aires, y el otro en las sierras de Embalse en el Valle de Calamuchita, provincia de Córdoba.";
// obtener todas las instandias de la palabra "el"
console.log(turismo.match(/el/g));

// INCLUDES t o f ver si la cadena contiene una palabra especifica
console.log(turismo.includes("turismo")); // true

// saber si un texto comienza con una palabra - case sensitive
console.log(turismo.startsWith("El turismo")); // true
// saber si un texto termina con una palabra - case sensitive
console.log(turismo.endsWith("Córdoba")); // false porque le falta el (.)