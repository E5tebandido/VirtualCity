function crearFigura(tipofigura,color,escala,posicion)
{
  let scene = document.querySelector('a-scene');
  let newentity = document.createElement('a-entity');
  newentity.setAttribute('material','color', color);
  newentity.setAttribute('scale', escala);
  newentity.setAttribute('geometry', 'primitive',tipofigura);
  newentity.setAttribute('position', posicion);
  scene.appendChild(newentity);
  setTimeout(function(){
    newentity.remove();
  }, 5000)
}