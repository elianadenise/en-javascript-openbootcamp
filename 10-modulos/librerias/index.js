// L I B R E R I A S
// Conjuntos de utilizades creados por otros desarrolladores que podemos usar en proyectos propios
// buscar librerias https://www.npmjs.com/


// libreria AXIOS - llamar servicios externos (pokeapi)
// npm init -y
// cambiar type y start en package
// npm i axios
import axios from "axios";
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("Success!")
    console.log(response);

  })
  .catch(function (error) {
    // handle error
    console.log("Error!")
    console.log(error);
  })

// librerias mas utilizadas
// jQuery
// ReactJS
