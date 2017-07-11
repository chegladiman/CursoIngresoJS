function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;
	var suma
	while(contador<5)
	{
		contador++;
		num=prompt("ingrese un número");
		num=parseInt(num);
		console.log(num);
		while(isNaN(num))
		{
			num=prompt("ingrese un número");
			num=parseInt(num);

		}
		
		acumulador=acumulador+num;
	}
		
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

//contador=contador+constante;
//acumulador=acumulador+variable;
//acumulador+=variable;=acumulador=acumulador+num;
//acumulador/5=acumulador/contador;