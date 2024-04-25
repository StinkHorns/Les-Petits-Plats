function dataForCard(data) {
const {id, image, name, servings, ingredients, time, description, appliance, ustensils} = data;

const pictureRecette = "/photos-plats/" + image;


const cardContainer = document.getElementById('card-container');

function createCard() {

    const card = document.createElement('div');
    card.classList.add('card');


    const imgRecette= document.createElement( 'img' );
    imgRecette.className= "imgRecette";
    imgRecette.setAttribute("src", pictureRecette);



    const cardTitle = document.createElement('h2');
    cardTitle.textContent = name;

    const wordRecette = document.createElement('h4');
    wordRecette.textContent = "--RECETTE--";

    const cardContent = document.createElement('p');
    cardContent.textContent = description;

    const wordIngredients = document.createElement('h5');
    wordIngredients.textContent = "--INGREDIENTS --";

    const cardSubDiv = document.createElement('div');
    cardSubDiv.classList.add('cardSubDiv');

    ingredients.forEach((ingredientSolo)=>{

        const ingredientName = document.createElement("div");
        ingredientName.classList.add('ingredientName');
        ingredientName.innerHTML=ingredientSolo.ingredient;

        const ingredientUnits = document.createElement("div");
        ingredientUnits.classList.add('ingredientUnits');
        ingredientUnits.innerHTML=""+((ingredientSolo.quantity)?ingredientSolo.quantity:"") + ((ingredientSolo.unit)?" "+ingredientSolo.unit:"");
                
        ingredientName.appendChild(ingredientUnits);

        cardSubDiv.appendChild(ingredientName);

       
        
        }
        );


   /** 
    const cardSubDivL = document.createElement('div');
    cardSubDivL.classList.add('cardSubDivL');
    cardSubDivL.textContent = "Content LEFT";

    const cardSubDivR = document.createElement('div');
    cardSubDivR.classList.add('cardSubDivR');
    cardSubDivR.textContent = "Content RIGHT";
    */ 

    card.appendChild(imgRecette);
    card.appendChild(cardTitle);
    card.appendChild(wordRecette);
    card.appendChild(cardContent);
    card.appendChild(wordIngredients);
    card.appendChild(cardSubDiv);

    

    /** 
    cardSubDiv.appendChild(cardSubDivL);
    cardSubDiv.appendChild(cardSubDivR);
    */

    return card;
}

return {id, pictureRecette, name, servings, ingredients, time, description, appliance, ustensils, createCard};


}
// const card = createCard();

// cardContainer.appendChild(card);

