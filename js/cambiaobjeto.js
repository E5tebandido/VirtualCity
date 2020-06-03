function cambiarObjeto(data)
{
    scene = document.querySelector('a-scene');
    newentity = document.createElement('a-entity');
    newentity.setAttribute('gltf-model',data.gltfmodel);
    newentity.setAttribute('scale', data.scale);
    newentity.setAttribute('position',data.position);
    newentity.setAttribute('rotation', data.rotation);
    scene.appendChild(newentity);
}