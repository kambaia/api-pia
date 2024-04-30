import logger from "pino";
import pinoPretty from 'pino-pretty';

   
// Configuração do logger utilizando pino-pretty
const log = logger({
  level: 'info', // Nível de log
}, pinoPretty()); // Usa pino-pretty como transporte para formatação bonita de log



export default log;