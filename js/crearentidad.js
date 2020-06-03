function crearFigura(id,tipofigura,color,escala,posicion)
{
  try
    {
      var scene = document.querySelector('a-scene');
      var newentity = document.createElement('a-entity');
      console.log(scene,newentity);
      newentity.setAttribute('id',id);
      newentity.setAttribute('material','color', color);
      newentity.setAttribute('scale', escala);
      newentity.setAttribute('geometry', 'primitive',tipofigura);
      newentity.setAttribute('position', posicion);
      scene.appendChild(newentity);
      console.log(newentity.id);
      setTimeout(function(){
        if ($("#"+newentity.id).length > 0) {
          $("#"+newentity.id).remove();
        }
      }, 5000)
    }catch(error)
  {
    console.log(error)
  }
}