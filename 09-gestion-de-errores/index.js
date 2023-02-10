// Gestion de LOGS en NodeJS
// console.log("Hola, salgo en pantalla");
// console.info("Esto es uhn mensaje informativo");
// console.warn("Mensaje de advertencia");
// console.error("Esto es un error");
// console.debug("Esto es un debug");

/* npm init -y
cambiar datos en package
npm start para ver en terminal
npm install winston - crea el nde modules de la carpeta + el lock
*/

// con W I N S T O N https://www.npmjs.com/package/winston
// libreria mas utilizada para gestionar registros
/*const winston = require('winston'); // crea un logger, control de logs

const logger = winston.createLogger({
  level: 'debug', // ver niveles de log
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    // todas las acciones que se ejecutan con cada log
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});*/
// lo de arriba lo exportamos a carpeta logger
const logger = require('./logger'); // aca lo importamos
logger.info("Esto es uhn mensaje informativo");
logger.warn("Mensaje de advertencia");
logger.error("Esto es un error");
logger.debug("Esto es un debug");