import { readFile } from 'fs/promises'

const file = await readFile('./data.json', 'utf-8');

const arr = JSON.parse(file)

console.log("Hola mundo!");

let i = 0;

while(i <=5){
    console.log( "=> ", i);
    i++
}

arr.map(e=>{
    if(e.socio){
        console.log(e)
    }
})