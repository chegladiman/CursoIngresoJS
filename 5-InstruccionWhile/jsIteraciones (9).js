	
function Mostrar()
	// declarar variables
{
	var num;
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var maximo;
	var minimo;
	var bandera=true;
	while(respuesta!="no")
	{

		num=prompt("ingrese un numero");
		while(isNaN(num))
		{
			num=prompt("ingrese un número");
			num=parseInt(num);

		}
		contador++;
		respuesta=prompt("desea continuar?")

		if(bandera)
		{
				maximo=num;
				minimo=num;
				bandera=false;
		}
		else
		{
			if(num>maximo)
			{
				maximo=num;
			}
			if(num<minimo)
				{
					minimo=num;
				}
		}	
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;
	}




}//FIN DE LA FUNCIÓN