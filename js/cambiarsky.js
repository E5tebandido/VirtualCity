var scene = null;
var newentity = null;


function show(skyid) 
  {
    try
    {
      setTimeout(function()
      {
          document.getElementById('sky').setAttribute('src', '#' + skyid);
          if(document.getElementById('sky').getAttribute('src')=='#artic'){
            try
            {
              if(scene == null || newentity == null)
              {
                $.getJSON("json/articdata.json",function(json)
                {

                  console.log("json");
                    let articobjects = json.artic;
                    for(i in articobjects)
                    {
                      console.log(articobjects[i].gltfmodel);
                      scene = document.querySelector('a-scene');
                      newentity = document.createElement('a-entity');
                      newentity.setAttribute('gltf-model',articobjects[i].gltfmodel);
                      newentity.setAttribute('scale', '0.01 0.01 0.01');
                      newentity.setAttribute('position','-2 2 1.5');
                      newentity.setAttribute('rotation', '0 -90 0');
                      scene.appendChild(newentity);
                      console.log(scene.appendChild(newentity));
                    }
                });
                
                
              }else
              {
                scene.removeChild(newentity);
                scene = document.querySelector('a-scene');
                newentity = document.createElement('a-entity');
                newentity.setAttribute('gltf-model','#fish');
                newentity.setAttribute('scale', '0.01 0.01 0.01');
                newentity.setAttribute('position','-2 2 1.5');
                newentity.setAttribute('rotation', '0 -90 0');
                scene.appendChild(newentity);
                console.log(scene.appendChild(newentity));
              }
              
            }catch(error)
          {
            console.log(error)
          }
          }else{
            try
            {
              if(scene == null || newentity == null)
              {
                scene = document.querySelector('a-scene');
                newentity = document.createElement('a-entity');
                newentity.setAttribute('gltf-model','#octopus');
                newentity.setAttribute('scale', '0.1 0.1 0.1');
                newentity.setAttribute('position','-2 2 1.5');
                newentity.setAttribute('rotation', '0 -90 0');
                scene.appendChild(newentity);
                console.log(scene.appendChild(newentity));
              }else
              {
                scene.removeChild(newentity);
                scene = document.querySelector('a-scene');
                newentity = document.createElement('a-entity');
                newentity.setAttribute('gltf-model','#octopus');
                newentity.setAttribute('scale', '0.1 0.1 0.1');
                newentity.setAttribute('position','-2 2 1.5');
                newentity.setAttribute('rotation', '0 -90 0');
                scene.appendChild(newentity);
                console.log(scene.appendChild(newentity));
              }  
            }catch(error)
          {
            console.log(error)
          }
          }
      }, 
      3000
      )
    }catch(error)
    {
      console.log(error)
    }
  }





