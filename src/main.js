const urlAPI = "https://platzi-avo.vercel.app/api/avo";
const avocadoGallery = document.getElementById('avocadoGallery');

function showData(apiData) {
    const avocados = [];

    apiData.data.forEach(element => {
        const card = document.createElement('div');
        const imageContainer = document.createElement('figure');

        const image = document.createElement('img');
        image.src = `https://platzi-avo.vercel.app${element.image}`;

        const title = document.createElement('h3');
        title.textContent = element.name;

        const description = document.createElement('p');
        description.textContent = element.attributes.description;

        const price = document.createElement('span');
        price.textContent = element.price;

        const serialNumber = document.createElement('p');
        serialNumber.textContent = element.sku;

        imageContainer.appendChild(image);
        card.append(imageContainer, title, description, price, serialNumber);
        avocados.push(card);
    });
    avocadoGallery.append(...avocados);
}

fetch(urlAPI)
    .then(response => response.json())
    .then(datos => showData(datos))
    .catch(error => console.error(error + " Data API"));