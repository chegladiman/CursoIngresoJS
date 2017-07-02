/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var importe;
   
importe=document.getElementById("importe").value;


importe=parseInt(importe);

var descuento;
descuento=-0.25;
var resultadobaja;
resultadobaja=importe*descuento;
var resultadofinal;
resultadofinal=importe+resultadobaja;
document.getElementById("resultado").value=resultadofinal;	
}
// parseInt= comprueba que el valor que se le paso por parametro (lo que va entre parentesis) sea un numero entero. SI es un numero entero lo devuelve, sino devuelve un error.
