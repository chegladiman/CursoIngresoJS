function Mostrar()
{

	var flagNegativos = false;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta=true;
	while(respuesta)
	{
		num=prompt("ingrese un numero");
		while(isNaN(num))
		{
			num=prompt("ingrese un número");
		}
		num=parseInt(num);
		
		if(num>=0)
		{
			positivo+=num;
	
		}
		else
		{
			negativo*=num;
			flagNegativos = true;
		}
		respuesta=confirm("Desea continuar?");
	}
document.getElementById('suma').value=positivo;

if(flagNegativos)
	document.getElementById('producto').value=negativo;
else
	document.getElementById('producto').value= 0;

}//FIN DE LA FUNCIÓN