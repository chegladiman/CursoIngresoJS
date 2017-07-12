function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta='si';
	while(respuesta=="si")
	{
		num=prompt("ingrese un numero");
		num=parseInt(num);
		while(isNaN(num))
		{
			num=prompt("ingrese un número");
			num=parseInt(num);

		}
		contador++;
		respuesta=prompt("desea continuar?");
		if(num>=0)
		{
			positivo+=num;
	
		}
		else
		{
			negativo*=num;
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN