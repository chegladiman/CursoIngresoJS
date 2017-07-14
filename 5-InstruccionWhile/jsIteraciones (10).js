function Mostrar()
{

	//declarar contadores y variables 
	var contpos=0;
	var contador=0;
	var respuesta="si";
	var acumneg=0;
	var num;
	var acumpos=0;
	var contneg=0;
	contceros=0;
	contpares=0;
	var promediopositivo;
	var promedioneg;
	var diferencias;
	while(respuesta!="no")
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
	if(num<0)
	{
			acumneg+=num;
			contneg++;
	}
	else if(num>0)
	{
			acumpos+=num;
			contpos++;		
	}
	else
	{
		contceros++;
		
	}
	if(num%2==0)
	{
		contpares++;
	}

	}
	if(contpos==0)
	{
		promediopositivo="No ingreso ningun positivo";
	}
	if(isNaN(promedioneg))
	{
		promedioneg="Es correcto";
	}
		document.write("la cantidad de positivos son " + contpos + "<Br>");

		promediopositivo=acumpos/contpos;
		document.write("El promedio de los positivos es " + promediopositivo + "<Br>");

		promedioneg=acumneg/contneg;
		document.write("El promedio negativo es " + promedioneg + "<Br>");

		diferencias=contpos-contneg
		if(diferencias<0)
		{
			diferencias*=-1;
		}		
		document.write("El resultado de la diferencia entre positivos y negativos es "+ diferencias + "<Br>");
		


		//

	
	



}//FIN DE LA FUNCIÓN