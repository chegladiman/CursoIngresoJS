function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

//var formularioIngreso = document.getElementById("FormIngreso");

nota = Math.floor(Math.random() * 10 + 1);

if(nota>=9)
{
	alert('Nota: ' + nota + ' EXCELENTE');
}
else if(nota>=4)
{
	alert('Nota: ' + nota + ' aprobo');
}
else
	alert('Nota: ' + nota + " vamos la proxima se puede");


}//FIN DE LA FUNCIÓN