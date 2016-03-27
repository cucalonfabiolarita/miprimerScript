/*function tiraDados()

{
var dado=Math.floor(Math.random()*6)+1;
return dado;

}

alert("Tiramos 3 dados:");
alert(" El dado dice" + tiraDados());
var multiplo =2 * tiraDados();
alert("multiplo de bonus es:") + multiplo;
*/
/*function numeroAlAzarHastaLimite(limite)
{
	var num= Math.floor(Math.random()*limite)+1;
	return num;

}
var numAzar= numeroAlAzarHastaLimite(100);
alert("Tiramos 3 dados:");*/

/*
function max(num1, num2)
{

 if(num1│>num2)
 {
 	return num1
 }else
 {
 	return num2;
 }

}*/
/*function saludo()
{
	var mensaje="HOLA A A TODOS";
	alert(mensaje);
}
var mensaje="CHAO";
saludo();
alert(mensaje);
saludo();*/
/*var num=9;
if(isNAN(num))
{throw new Error("No es un numero valido");}
else{
	num=num*0.5;
}*/
/*
function limite(num1, num2)
{
var lim1= prompt("ingrese limite inferior");
var lim2= prompt("ingrese limite superior");

var numeroAzar= Math.floor(Math.random()*lim1)+1;
var numeroAzar= Math.floor(Math.random()*lim2)-1;
 if(isNAN(numAzar)<num1)
 {
 	throw new Error("No es un numero valido");
 }

 else
 {
 	return numAZAR;
 }


 if(isNAN(numAzar)>num2)
 {
 	throw new Error("No es un numero valido");
 }else
 {
 	return numAZAR;
 }

}
limite();


*/
/*
function numeroALaZlimites(LimiteInferior, LimiteSuperior)
{
	if( isNaN(LimiteInferior) || isNaN(LimiteSuperior))
	{
		throw new Error("Valor ingresado no corresponde a un numero");
	}
	var num = Math.round((Math.random())* (LimiteSuperior-LimiteInferior))+ LimiteInferior;

return num;
}
 var LimiteSuperior= prompt("Ingrese un limite superior para el numero");
 var LimiteInferior= prompt("Ingrese un limite inferior para el numero");
 alert("su numero al azar es:"+ numeroALaZlimites(parseInt(LimiteInferior),
 	parseInt(LimiteSuperior)));

var contador=0;
while(contador<10)
{
	var randomico= numeroALaZlimites(parseInt(LimiteInferior),
		parseInt(LimiteSuperior));
	document.write(randomico+" ");
	contador++;
}
*/
/*
function numeroALaZlimites(LimiteInferior, LimiteSuperior)
var LimiteInferior=1;
var LimiteSuperior=10;
var numeroAdivinable= Math.floor(Math.random()*10)+1;
while (numeroAzar===numeroAdivinable)
{
	numeroAdivinable=true;
	)
{
	if( isNaN(LimiteInferior) || isNaN(LimiteSuperior))
	{
		throw new Error("Valor ingresado no corresponde a un numero");
	}
	var num = Math.round((Math.random())* (LimiteSuperior-LimiteInferior))+ LimiteInferior;

return num;
}
  alert("su numero al azar es:"+ numeroALaZlimites(parseInt(LimiteInferior),
 	parseInt(LimiteSuperior)));
var contador=0;
while(contador<10)
{
	var randomico= numeroALaZlimites(parseInt(LimiteInferior),
		parseInt(LimiteSuperior));
	document.write(randomico+" ");
	contador++;
}
*/

/*function numeroAzarlimite()
{
var numero=Math.floor(Math.random()*100)+1;
return numero;
}
var numeroAzar =numeroAzarlimite();
var cont=0;
while(true)
{
	cont=cont+1;
	numero2=numeroAzarlimite();
	if (numeroAzar===numero2)
	{
		alert("el numero era:" +numeroAzar);
		alert("el numero adivinado es:" + numero2);
		break;
	}

}
alert("El numero de intentos es" + cont);
*/






function numeroAzarlimite(limitesdados){

	//var limite=Math.floor(Math.random()*100)+1;
//return limite;
	
return Math.floor(Math.random() *limitesdados)+1;
}

var contador=0;

var numAdivinar = numeroAzarlimite(100);

while(true)
{
	var numAdv2 = numeroAzarlimite(100);
	contador++;
	
	if (numAdv2== numAdivinar) {
		break;
	}
}

alert("El numero es: "+numAdivinar);
alert("El numero adivinado"+ numAdv2);
alert("El numero de repeticiones: " + contador);

