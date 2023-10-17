/*
Formato de bd = YYYY-MM-DD
Formato en español = DD-MM-YYYY
4 -> 04
*/
import dayjs from "dayjs";

const fechaActual = dayjs()
/* const fechaActual = new Date()
const año = fechaActual.getFullYear()
const mes = (fechaActual.getMonth() +1).toString().padStart(2,'0')
const dia = fechaActual.getDate().toString().padStart(2,'0')


//Formato YYYY-MM-DD
const formatoBD = `${año}-${mes}-${dia}`


//Formato DD-MM-YYYY
const formatoES = `${dia}-${mes}-${año}`

console.log(formatoBD)
console.log(formatoES) */


const formatoBD = fechaActual.format('YYYY-MM-DD')
const formatoES = fechaActual.format('DD-MM-YYYY')

console.log(formatoBD)
console.log(formatoES)