/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var Largo;
var Ancho;
var Radio;
var alambre;
var contrapiso;
var bolsasdecal=2;
var bolsasdecemento=3;
var cantcal;
var cantcemento;
var terreno;

function Rectangulo () 
{
    Largo=parseInt(document.getElementById("Largo").value);
    Ancho=parseInt(document.getElementById("Ancho").value);
    Radio=parseInt(document.getElementById("Radio").value);
         
        alambre=((Largo+Ancho)*2)*3;
        
        alert("Metros de alambre: "+alambre);

}
function Circulo () 
{
	Largo=parseInt(document.getElementById("Largo").value);
    Ancho=parseInt(document.getElementById("Ancho").value);
    Radio=parseInt(document.getElementById("Radio").value);
         
        alambre=(Math.PI*2*Radio)*3;
         alert("Metros de alambre: "+alambre);

}
function Materiales () 
{
	Largo=parseInt(document.getElementById("Largo").value);
    Ancho=parseInt(document.getElementById("Ancho").value);
    Radio=parseInt(document.getElementById("Radio").value);
    
    terreno=Largo*Ancho;
    
    cantcal=terreno*bolsasdecal;
    cantcemento=terreno*bolsasdecemento;

    alert("Se necesitan"+ cantcal + "de cal y"+ cantcemento + "de cemento");

    
    
    
    
}


//