/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var prod1;
    var prod2;
    var prod3;
    
    prod1=document.getElementById("PrecioUno").value;
    prod2=document.getElementById("PrecioDos").value;
    prod3=document.getElementById("PrecioTres").value;
    
    prod1=parseInt(prod1);
    prod2=parseInt(prod2);
    prod3=parseInt(prod3);

            alert(prod1+prod2+prod3);

}
function Promedio () 
{
	var promedio;
    var prod1;
    var prod2;
    var prod3;
    
    prod1=document.getElementById("PrecioUno").value;
    prod2=document.getElementById("PrecioDos").value;
    prod3=document.getElementById("PrecioTres").value;
    
    prod1=parseInt(prod1);
    prod2=parseInt(prod2);
    prod3=parseInt(prod3);
    promedio=(prod1+prod2+prod3)/3;
        alert(promedio);
}
function PrecioFinal () 
{
	var promedio;
    var prod1;
    var prod2;
    var prod3;
    var PrecioFinal;
    
    prod1=document.getElementById("PrecioUno").value;
    prod2=document.getElementById("PrecioDos").value;
    prod3=document.getElementById("PrecioTres").value;
    
    prod1=parseInt(prod1);
    prod2=parseInt(prod2);
    prod3=parseInt(prod3);
    PrecioFinal=(prod1+prod2+prod3)*1.21;
        alert(PrecioFinal);
}