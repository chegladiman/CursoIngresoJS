/*var notas;
var sexo;
var alumnos=0;
var contador;
var acumulador;


function Mostrar()
{
notas=prompt("Ingrese las notas");
sexo=prompt("Ingrese f o m");


while(contador<4)
{
    
    notas=prompt("Ingrese las notas");
    sexo=prompt("Ingrese f o m");
    notas=parseInt(notas);
    contador++
    sexo=prompt("Ingrese f o m");
    contador++;
    while(notas>0||notas<101)
        
} */

function Mostrar()
{
    var cant=0
    var notas;
    var sexo;
    var nota;
    var min=11;
    var acum=0;
    var contmas=0;

    while(cant<4)
    {
        cant++;
        nota=prompt("ingresar nota");
        nota=parseInt(nota);
        while(isNaN(nota) || nota<0 || nota>10)
        {
            nota=prompt("ingresar nota");
            nota=parseInt(nota);
        }

        sexo=prompt("ingresar sexo");
        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("ingresar sexo");
        }
        
        acum += nota;

        if(nota<min)
        {   
            min=nota;
        }

        if(nota>6 && sexo=="m")
        {  
            contmas++;
        }
    }
    alert("Promedio total: " + acum/cant);
    alert("Menor nota: " + min);
    alert("Alumnos masculinos con nota mayor o igual a 6:" + contmas);
}