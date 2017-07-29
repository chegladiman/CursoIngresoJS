var importeventas;
var mayorimporte;
var menorimporte;
var dias;
var contador=0;
var acumulador=0;
var bandera=true;

function Mostrar()
{

while(contador<5)
{
    importeventas=prompt("Ingrese un nùmero");
    importeventas=parseInt(importeventas);
    contador++;
    acumulador+=importeventas;
    if(bandera)
    {
        mayorimporte=importeventas;
        menorimporte=importeventas;
        bandera=false;
    }
    else
        if(importeventas>mayorimporte){
            mayorimporte=importeventas;
        } else if(importeventas<menorimporte){
                menorimporte=importeventas;
        }
}
        alert("El mayor importe es " + mayorimporte + "el menor importe es " + menorimporte);
}
