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

		{document.write(contpos);
		}
		promediopositivo=acumpos/contpos;
		document.write(promediopositivo);

		promedioneg=acumneg/contneg;
		document.write(promedioneg);

		diferencias=contpos-contneg
		document.write(diferencias);
		


		//

	
	



}//FIN DE LA FUNCIÓN