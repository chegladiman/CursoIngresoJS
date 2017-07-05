function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño)
{
        case "Febrero":
                        alert("tiene 28 días");
                        break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
                        alert("tienen 30 días");
                        break;

        default:
                alert("Tienen 31 días");
                break;
            

}	
	



}//FIN DE LA FUNCIÓN