async function fetchdata() {
  try{
    const response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    const data = await response.json();
    data.forEach(element => {
      const breweriesdata = {
        ...element,
        name: element.codigo,
        address: element.nome,

      }
      breweriesfinaldata(breweriesdata)
    });
  }
  catch (error){
    console.log(error)
    document.body.innerHTML += `<h1>Page Not Found Error 404</h1>`
  }
}
function breweriesfinaldata(element){
  document.body.innerHTML += `
    <div class="container">
    <div class="count"><h1>${element.name}</h1></div>
    <div class="count"><h2>${element.nome}</h2></div>
    </div>
  `
}
fetchdata()
