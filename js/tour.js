
function show(id) 
  {
    try
    {
      document.getElementById('sky').setAttribute('src', '#' + id);
    }catch(error)
    {
      console.log(error)
    }
  }

function showtext(id,text)
{
  try
  {
    document.getElementById(id).setAttribute('value',text);
  }catch(error)
  {
    console.log(error)
  }
}

function crearFigura(tipofigura,color,escala,posicion)
{
  try
    {
      var scene = document.querySelector('a-scene');
      var entity = document.createElement('a-entity');
      entity.setAttribute('material','color', color);
      entity.setAttribute('scale', escala);
      entity.setAttribute('geometry', 'primitive',tipofigura);
      entity.setAttribute('position', posicion);
      scene.appendChild(entity);    
  }catch(error)
  {
    console.log(error)
  }
}



