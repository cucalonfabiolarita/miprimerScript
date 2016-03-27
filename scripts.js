/*console.log("Inicio de programa");
alert("Hola JavaScript");
document.write("<h1>Hola JavaScript</h1>");
alert("Gracias por visitarnos");
*/

/*console.log("Inicio de programa");
alert("Hola JavaScript");																																																							
document.write("<h1>Hola JavaScript!</h1>");
alert("Gracias por visitar");
console.log("Fin de programa");

var equipo = prompt("Cual es tu equipo de futbol favorito?");
console.log("El equipo es: " + equipo);

/**var clave = prompt("Hola Usuario, Ingrese su clave!");
console.log("La longitud de la clave es: " + clave.length);**/

/*var clave = prompt("Hola Usuario, Ingrese su clave en minusculas!");
console.log("La longitud de la clave es: " + clave.length);
console.log("TA-DA!!! Su clave es: " + clave.toUpperCase());
console.log("El valor original de la clave es: " +  clave);   */


/*console.log("Inicio del PROGRAMA");
var equipo = prompt("Ingrese un numero");
var dado= Math.floor(Math.random() *equipo);
alert("Dado dice:"+ dado);
console.log("Programa completado");
*/

/*document.write("<h1>ADIVINA EL NUMERO!</h1>");
var adivinoCorrectamente=false;
var numeroAdivinable= Math.floor(Math.random()*10)+1;
var numeroUsuario= prompt("CUAL PIENSAS QUE ES EL NUMERO SECRETO(del 1 al 10)?");
if(parseInt(numeroUsuario)===numeroAdivinable)
{
adivinoCorrectamente=true;
} else if(parseInt(numeroUsuario)>numeroAdivinable)
{ 
alert("numero menor que el que pusiste!"); 
}
 var nuevoIntento = prompt("Intentalo de nuevo"); 
if(parseInt(nuevoIntento)===numeroAdivinable) 
{
	adivinoCorrectamen=true;

}
else if(parseInt(numeroUsuario)<numeroAdivinable) 
{ 
alert("El numero es mayor al que dijiste!"); 
var nuevoIntento = prompt("Intentalo de nuevo");
}
if(parseInt(nuevoIntento)===numeroAdivinable) 
{
adivinoCorrectamente=true;
}
if(adivinoCorrectamente)
{
	document.write("<p>ganastes</p>");
}
else {
	document.write("<p>Perdistes. El numero correcto era" +numeroAdivinable+"</p>");
}

console.log("programa Terminado");
*/

console.log("Inicio del PROGRAMA");
var equipo = prompt("Ingrese un numero");
var dado= Math.floor(Math.random() *equipo);
alert("Dado dice:"+ dado);
console.log("Programa completado");