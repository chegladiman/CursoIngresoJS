function Mostrar()
{

 var repeticiones=parseInt(prompt("Ingresar número"))

    for(contador=1;contador<=repeticiones;contador++)
    if(repeticiones%contador==0)
    {
            contador++
        if(contador>2)
        console.log("Numero divisor: " +contador +"\n");
        break;
        
    }


}//FIN DE LA FUNCIÓN