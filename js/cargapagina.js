$(document).ready(function()
{
    $("#ejerciciouno").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","animalesmarinos.html")
    })
    $("#ejerciciodos").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","vecindario.html")
    })
    $("#ejerciciotres").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","baila.html")
    })
    $("#ejerciciocuatro").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","preposiciones.html")
    })
    
    
})