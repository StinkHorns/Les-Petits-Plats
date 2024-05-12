




//Filtre stuff

// When the user clicks on the button,toggle between hiding and showing the dropdown content
function filtreFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    
  }
function filtreFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
function filtreFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      let openDropdown = document.getElementById("myDropdown1");
          if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }      
    }
    if (!event.target.matches('.dropbtn2')) {
        let openDropdown = document.getElementById("myDropdown2");
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }      
      }
    if (!event.target.matches('.dropbtn3')) {
    let openDropdown = document.getElementById("myDropdown3");
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }      
    }
    }
  
  
  
  


//Data For Cards

function dataForCard(data) {
const {id, image, name, servings, ingredients, time, description, appliance, ustensils} = data;

const pictureRecette = "photos-plats/" + image;


const cardContainer = document.getElementById('cardContainer');





function createCard() {


    const card = document.createElement('div');
    card.classList.add('cardCSS');
    card.setAttribute('id', "cardCSS");

   

    const imgRecette= document.createElement( 'img' );
    imgRecette.className= "imgRecette";
    imgRecette.setAttribute("src", pictureRecette);

    const cardTime = document.createElement('div');
    cardTime.classList.add('cookingTime');
    cardTime.textContent = time + "min";

    const cardTitle = document.createElement('section');
    cardTitle.classList.add('titleRecette', 'cardpaddings');
    cardTitle.textContent = name;

    const wordRecette = document.createElement('section');
    wordRecette.classList.add('wordRecette', 'cardpaddings');
    wordRecette.textContent = "RECETTE";

    const cardContent = document.createElement('section');
    cardContent.classList.add('textRecette', 'cardpaddings');
    cardContent.textContent = description;

    const wordIngredients = document.createElement('section');
    wordIngredients.classList.add('wordIngredients', 'cardpaddings');
    wordIngredients.textContent = "INGREDIENTS ";

    const cardSubDiv = document.createElement('div');
    cardSubDiv.classList.add('cardSubDiv', 'cardpaddings');
    cardSubDiv.setAttribute('id', "cardSubDiv");

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
    card.appendChild(cardTime);
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

