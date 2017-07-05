function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño)
{
    case "Septiembre":
    case "Octubre":
    case "Noviembre":    
    case "Diciembre":
                    alert("ya paso");
                    break;

    case "Julio":
    case "Agosto":
                    alert("abrigate que hace frío!");
                    break;
    
    default:
            alert("<Falta para el invierno");
            break;
}



}//FIN DE LA FUNCIÓN