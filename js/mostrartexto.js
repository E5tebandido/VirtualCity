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