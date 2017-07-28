var numero1=parseInt(numero1);
var numero2=parseInt(numero2);
var resultado1;
var resultado2;
var resultado3;



function Mostrar()
{
    numero1=parseInt(prompt("Ingrese número 1"));
    
    numero2=parseInt(prompt("Ingrese número 2"));

    if(numero1==numero2)
{
    
    resultado1=numero1*numero2;
}
    if(numero1>numero2)
{
    resultado2=numero1-numero2;
}
    if(numero1<numero2)
{
    resultado3=numero1+numero2; 
}
document.write(resultado1 + "<br/>");
document.write(resultado2 + "<br/>");
document.write(resultado3 + "<br/>");
}
