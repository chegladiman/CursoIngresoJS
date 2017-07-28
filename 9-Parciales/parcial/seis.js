var importeventas;
var mayorimporte;
var menorimporte;
var dias;
var contador;
var acumulador;

function Mostrar()
{
importeventas=prompt("Ingrese un nùmero");

while(dias<24)
{
        importeventas=prompt("ingrese un numero");
		importeventas=parseInt(importeventas);
		contador++;
		acumulador=contador+importeventas;
        
            alert(Math.max(importeventas + Math.min(importeventas)));
}
}
