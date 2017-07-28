var largo;
var ancho;
var alambre;

function Mostrar()
{

largo=parseInt(document.getElementById("largo").value);
ancho=parseInt(document.getElementById("ancho").value);


        alambre=((largo+ancho)*2)*3;    
        
        alert("Metros de alambre: "+alambre);


}
