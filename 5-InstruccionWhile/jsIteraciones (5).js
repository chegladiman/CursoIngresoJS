function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!="femenino"&&sexo!="masculino")
{
    sexo=prompt("ingrese f ó m .");
}
document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN