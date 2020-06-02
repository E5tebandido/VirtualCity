
function show(id) 
  {
    try
    {
      setTimeout(function()
      {
        document.getElementById('sky').setAttribute('src', '#' + id);
      }, 
      3000
      )
    }catch(error)
    {
      console.log(error)
    }
  }





