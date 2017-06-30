/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var resultado;
sueldo=document.getElementById("sueldo").value;


sueldo=parseInt(sueldo);
resultado=parseInt(resultado);

var aumento;
aumento=0.10;
var resultadoaumento;
resultadoaumento=sueldo*aumento;
var resultadofinal;
resultadofinal=sueldo+resultadoaumento;
document.getElementById("resultado").value=resultadofinal;
}
