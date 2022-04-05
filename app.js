 let fs = require('fs');
let tareasJASON = fs.readFileSync('./tareas.json', 'utf-8');
let tareasParceadas = JSON.parse(tareasJASON)

console.log(tareasParceadas)
 
let process= require("process")
let listaText=console.log(process.argv[2])


function listaa(){ 
switch(listaText){
case "lista":
    console.log(tareasJASON)
    break;
    case "___":
    console.log("Atención - Tienes que pasar una acción.");
    break;
    default:
        console.log("No entiendo qué quieres hacer.");
}}