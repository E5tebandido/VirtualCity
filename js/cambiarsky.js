function show(skyid) 
  {
    let url;
    document.getElementById('sky').setAttribute('src', '#' + skyid);
    if(document.getElementById('sky').getAttribute('src')=='#artic')
    {
      url = "js/json/articdata.json"; 
    }else
    {
      url = "js/json/pacificdata.json";
    }
    $.getJSON(url,function(data)
    {
        let scene = document.querySelector('a-scene');
        let modeldata = data.models;
        let entities = document.getElementsByClassName('removable');
        Array.from(entities).forEach(function(item)
        {
          item.remove();
        })
        for(i in modeldata)
        {
          createModel(modeldata[i], scene);
        }
    });
  }

  function createModel(data, scene)
  {
    console.log(data.gltfmodel);
    entity = document.createElement('a-entity');
    entity.setAttribute('class','removable');
    entity.setAttribute('gltf-model',data.gltfmodel);
    entity.setAttribute('scale', data.scale);
    entity.setAttribute('position',data.position);
    entity.setAttribute('rotation', data.rotation);
    scene.appendChild(entity);
  }


  

