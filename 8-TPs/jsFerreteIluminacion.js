/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 
 */

    


   var marca, cantidad, precio, total, totalBrutos, ingresosBrutos;
precio = 35;

function ImprimirPrecio()
{
    
    if(total >= 120)
    {
        ingresosBrutos = total * 0.10;
        totalBrutos = total + ingresosBrutos;
        document.getElementById("precioDescuento").value = "$" + totalBrutos;
        alert("Usted pago $" + ingresosBrutos + " de IIBB");
    }
         
    else
    {
        document.getElementById("precioDescuento").value = "$" + total;
    }
}

function CalcularPrecio () 
{
 	 marca = document.getElementById("Marca").value;
     cantidad = document.getElementById("Cantidad").value;
     
     if (cantidad >= 6)
     {
         total = precio * cantidad * 0.5;
         ImprimirPrecio()
     }

     else
     {
         switch(marca)
         {
             case "ArgentinaLuz":
                if(cantidad == 5)
                {
                    total = precio * cantidad * 0.6;
                    ImprimirPrecio()
                }
                
                else if(cantidad == 4)
                {
                    total = precio * cantidad * 0.75;
                    ImprimirPrecio()
                }
                
                else if(cantidad == 3)
                {
                    total = precio * cantidad * 0.9;
                    ImprimirPrecio()
                }

                else
                {
                    total = precio * cantidad;
                    ImprimirPrecio()
                }
                break;

            case "FelipeLamparas":
                if(cantidad == 5)
                {
                    total = precio * cantidad * 0.7;
                    ImprimirPrecio()
                }
                
                else if(cantidad == 4)
                {
                    total = precio * cantidad * 0.75;
                    ImprimirPrecio()
                }
                
                else if(cantidad == 3)
                {
                    total = precio * cantidad * 0.85;
                    ImprimirPrecio()
                }
                
                else
                {
                    total = precio * cantidad;
                    ImprimirPrecio()
                }
                break;
            
            case "JeLuz":
            case "AzIluminacion":
            case "Osram":
                if(cantidad == 5)
                {
                    total = precio * cantidad * 0.70;
                    ImprimirPrecio()
                }
                
                else if(cantidad == 4)
                {
                    total = precio * cantidad * 0.80;
                    ImprimirPrecio()
                }
                
                else if (cantidad == 3)
                {
                    total = precio * cantidad * 0.95;
                    ImprimirPrecio()
                }
                
                else
                {
                    total = precio * cantidad;
                    ImprimirPrecio()
                }
                break;
        }
     }
}
            

