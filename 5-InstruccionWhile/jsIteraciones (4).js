function Mostrar()
{
var num;
	num=prompt("ingrese un número entre 0 y 10.");
		while (num<0||num>=9)
		{
	num = prompt("ingrese un número entre 0 y 10.");
			}
	alert(num);
}//FIN DE LA FUNCIÓN
// no hace falta parseint porque no es una operacion matematica lo que estoy haciendo.