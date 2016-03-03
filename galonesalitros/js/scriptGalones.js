window.onload = function()
{

    //slider
    nom_div("slider").addEventListener('change', function(event)
    {
        
        nom_div("valorslider").innerHTML = "Galones: " + Number(this.value);
        valorslider = Number(this.value);
        console.log(valorslider);

        galonalitros(valorslider);
    });

    //Función que realizará la conversión...
    var galonalitros = function(Valor)
    {
        var respuesta = Number(Valor)*3.7854;
      
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resp").innerHTML = "Litros: "+ respuesta;
    };
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
   