function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	var prom
while(respuesta=="si")
{
		num=prompt("ingrese un numero");
		num=parseInt(num);
		contador++;
		acumulador=acumulador+num;
		respuesta=prompt("desea continuar?");

}
		
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN