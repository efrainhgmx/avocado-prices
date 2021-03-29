const urlAPI = "https://platzi-avo.vercel.app/api/avo";
const avocadoGallery = document.getElementById('avocadoGallery');
const galleryTitle = document.createElement('h2');

function currencyFormat(price) {
    const newPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        .format(price);

    return newPrice + " USD";
}

function showData(apiData) {
    const avocados = [];

    apiData.data.forEach(element => {
        const card = document.createElement('div');
        card.className = "card";
        const imageContainer = document.createElement('figure');

        const image = document.createElement('img');
        image.src = `https://platzi-avo.vercel.app${element.image}`;
        image.title = element.name;
        image.alt = element.name;

        const title = document.createElement('h3');
        title.textContent = element.name;

        const description = document.createElement('p');
        description.textContent = element.attributes.description;

        const price = document.createElement('span');
        price.textContent = currencyFormat(element.price);

        const serialNumber = document.createElement('p');
        serialNumber.textContent = `CODE: ${element.sku}`;
        serialNumber.className = "serialNumber";

        imageContainer.appendChild(image);
        card.append(title, imageContainer, description, price, serialNumber);
        avocados.push(card);
    });
    galleryTitle.textContent = 'The favorites this month.';
    document.querySelector('.main-content').appendChild(galleryTitle);
    avocadoGallery.append(...avocados);
}

function errorData(error) {
    const errorImageContainer = document.createElement('figure');
    const errorImage = document.createElement('img');
    errorImage.src = "./assets/dancingAvocado.webp";
    errorImage.title = "Something went wrong, Please refresh the website or try it later.";
    errorImage.alt = "Something went wrong, Please refresh the website or try it later.";

    errorImageContainer.style.inlineSize = "50%";
    errorImageContainer.appendChild(errorImage);
    avocadoGallery.style.display = "block";
    avocadoGallery.style.textAlign = "center";

    galleryTitle.textContent = "Something went wrong, Please refresh the website or try it later.";
    avocadoGallery.append(galleryTitle,errorImageContainer);

    console.error(error);
}

fetch(urlAPI)
    .then(response => response.json())
    .then(datos => showData(datos))
    .catch(error => errorData(error));