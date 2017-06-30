/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var numero1;
var numero2;
numero1=document.getElementById("numeroUno").value;

numero2=document.getElementById("numeroDos").value;

numero1=parseInt(numero1);
numero2=parseInt(numero2);

var sumar;
sumar=numero1+numero2;

alert(sumar);	
}

function restar()
{
var numero1;
var numero2;
numero1=document.getElementById("numeroUno").value;

numero2=document.getElementById("numeroDos").value;

numero1=parseInt(numero1);
numero2=parseInt(numero2);

var restar;
restar=numero1-numero2;

alert(restar);	
}

function multiplicar()
{ 
var numero1;
var numero2;
numero1=document.getElementById("numeroUno").value;

numero2=document.getElementById("numeroDos").value;

numero1=parseInt(numero1);
numero2=parseInt(numero2);

var multiplicar;
multiplicar=numero1*numero2;

alert(multiplicar);	
}

function dividir()
{
var numero1;
var numero2;
numero1=document.getElementById("numeroUno").value;

numero2=document.getElementById("numeroDos").value;

numero1=parseInt(numero1);
numero2=parseInt(numero2);

var dividir;
dividir=numero1/numero2;

alert(dividir);
}

