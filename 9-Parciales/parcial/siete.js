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

    while(cant<100)
    {
        cant++;
        nota=prompt();
        while(nota<0 || nota>10)
        {
            nota=prompt();

        nota=parseint(nota);
        sexo=prompt();
        while(sexo!="f"&&sexo!="m")
        {
            sexo=prompt();
        }
            acum=nota;
        if(nota<min)
        {   min=nota
            
        }
        if(nota>6 && sexo=="m")
            contmas++;
        }
            document.write(acum/cant);
            
            

        }

