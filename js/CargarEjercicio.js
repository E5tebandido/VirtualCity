$(document).ready(function()
{
    $("#ejerciciouno").on("click",function(event)
    {
        cargarTematica("contenedorejercicio","animalesmarinos.html")
    })
    $("#ejerciciodos").on("click",function(event)
    {
        cargarTematica("contenedorejercicio","estaciones.html")
    })
    $("#ejerciciotres").on("click",function(event)
    {
        cargarTematica("contenedorejercicio","cuerpo.html")
    })
    $("#ejerciciocuatro").on("click",function(event)
    {
        cargarTematica("contenedorejercicio","preposiciones.html")
    })
    
    
})