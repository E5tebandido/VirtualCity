
function cargarTematica(contenedor,script)
{
        setTimeout(function()
        {
                $("#"+contenedor).load(script)
        }, 
        3000
        ) 
       
}
