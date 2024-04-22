const cardContainer = document.getElementById('card-container');

function createCard(title, content) {

    const card = document.createElement('div');
    card.classList.add('card');

    const imgRecette= document.createElement( 'img' );
    imgRecette.className= "imgRecette";
    imgRecette.setAttribute("src","/photos-plats/Recette01.jpg");

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const wordRecette = document.createElement('h4');
    wordRecette.textContent = "RECETTE";

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    const wordIngredients = document.createElement('h5');
    wordIngredients.textContent = "INGREDIENTS";

    card.appendChild(imgRecette);
    card.appendChild(cardTitle);
    card.appendChild(wordRecette);
    card.appendChild(cardContent);
    card.appendChild(wordIngredients);

    return card;
}

const card = createCard("Card Title","Content Recette");

cardContainer.appendChild(card);

