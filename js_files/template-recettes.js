
const visibleSelectedTag=document.getElementById("visibleSelectedTag");

function createTag(tagName){

  const tag=document.createElement("span");
  tag.innerText=tagName
  visibleSelectedTag.appendChild(tag);

}



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
    //console.log(event.target);
    if (event.target.matches('.dropbtn1') || event.target.matches('.dropdownSearch1') ) {
     // console.log("fffff");
      let openDropdown2 = document.getElementById("myDropdown2");
          if (openDropdown2.classList.contains('show')) {
          openDropdown2.classList.remove('show');
        }         
      let openDropdown3 = document.getElementById("myDropdown3");
        if (openDropdown3.classList.contains('show')) {
        openDropdown3.classList.remove('show');
      } 
    }
    else if (event.target.matches('.dropbtn2') || event.target.matches('.dropdownSearch2') ) {
      console.log("ffff22f");
      let openDropdown1 = document.getElementById("myDropdown1");
          if (openDropdown1.classList.contains('show')) {
          openDropdown1.classList.remove('show');
        }         
      let openDropdown3 = document.getElementById("myDropdown3");
        if (openDropdown3.classList.contains('show')) {
        openDropdown3.classList.remove('show');
      } 
    }
    else if (event.target.matches('.dropbtn3') || event.target.matches('.dropdownSearch3') ) {
      let openDropdown2 = document.getElementById("myDropdown2");
          if (openDropdown2.classList.contains('show')) {
          openDropdown2.classList.remove('show');
        }         
      let openDropdown1 = document.getElementById("myDropdown1");
        if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      } 
    }

    else{
      let openDropdown1 = document.getElementById("myDropdown1");
          if (openDropdown1.classList.contains('show')) {
          openDropdown1.classList.remove('show');
        }         
      let openDropdown3 = document.getElementById("myDropdown3");
        if (openDropdown3.classList.contains('show')) {
        openDropdown3.classList.remove('show');
      } 
      let openDropdown2 = document.getElementById("myDropdown2");
      if (openDropdown2.classList.contains('show')) {
      openDropdown2.classList.remove('show');
    }         
 
  } 


     }

   /**  if (!event.target.matches('.dropbtn1')) {
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
    */
    
    
  
  
  
  


//Data For Cards

function dataForCard(data) {
const {id, image, name, servings, ingredients, time, description, appliance, ustensils} = data;



const pictureRecette = "photos-plats/" + image;


const cardContainer = document.getElementById('cardContainer');


//console.log(ingredients+ "cheking ing data");


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


/** myDropdown1 Ingredient    */

function displayDropFiltres(uniqueIngredientsList, uniqueAppareilsList, uniqueUstensilesList){

//console.log(ingredients + "ingDUPS");

const ingredientContent=document.getElementById("ingredientContent");
ingredientContent.innerHTML="";

uniqueIngredientsList.forEach((ingredientSolo)=>{
  //console.log(ingredientSolo.ingredient + "  Single ing data");
  const myDropdown1Data=document.createElement('a');
  myDropdown1Data.classList.add("myDropdown1Data");
   myDropdown1Data.addEventListener("click", ()=>{
      if(!ingredientsTags.includes(ingredientSolo)){
        ingredientsTags.push(ingredientSolo);
        createTag(ingredientSolo);                                                                                                                                                                                                                                                                                    
        } 
  search("", dataFromRecettes)
    })
  myDropdown1Data.innerHTML=ingredientSolo;
  ingredientContent.appendChild(myDropdown1Data);
  }
  );
  

  const appareilsContent=document.getElementById("appareilsContent");
  appareilsContent.innerHTML="";
  //console.log(appliance + "  applianceSolo ");
  uniqueAppareilsList.forEach((appliance)=>{
    const myDropdown2Data=document.createElement('a');
    myDropdown2Data.classList.add("myDropdown2Data");
    myDropdown2Data.addEventListener("click", ()=>{
      if(!appareilsTags.includes(appliance)){
        appareilsTags.push(appliance);
        } 

    search("", dataFromRecettes)
      
    }  );
    myDropdown2Data.innerHTML=appliance;
    appareilsContent.appendChild(myDropdown2Data);
    }
    );

  const ustensilesContent=document.getElementById("ustensilesContent");
  ustensilesContent.innerHTML="";
  uniqueUstensilesList.forEach((ustensilsSolo)=>{
    //console.log(ustensilsSolo + "   ");
    const myDropdown3Data=document.createElement('a');
    myDropdown3Data.classList.add("myDropdown3Data");
    myDropdown3Data.addEventListener("click", ()=>{
      if(!ustensilesTags.includes(ustensilsSolo)){
        ustensilesTags.push(ustensilsSolo);
        } 

      search("", dataFromRecettes)
    })

    

    myDropdown3Data.innerHTML=ustensilsSolo;
    ustensilesContent.appendChild(myDropdown3Data);
    }
    );

    

};


