const urlAPI = "https://platzi-avo.vercel.app/api/avo";
let avocadoData = [];

fetch(urlAPI)
    .then(response => response.json())
    .then(datos => avocadoData = datos.data)
    .catch(error => console.error(error + " Data API"));