const urlAPI = "https://platzi-avo.vercel.app/api/avo";
let avocadoData = [];

const showData = () => {
    const avocadoContainer = document.createElement('div');
    document.querySelector('.main-content').appendChild("Hola", avocadoContainer);
}
fetch(urlAPI)
    .then(response => response.json())
    .then(datos => avocadoData = datos.data)
    .catch(error => console.error(error + " Data API"));