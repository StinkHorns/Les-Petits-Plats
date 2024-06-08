// retreive Json Data Recettes

const recetteTotales = document.createElement('div');

const inputValue= document.getElementById('search-focus');

const inputIngredient= document.getElementById('dPSearch1');
const inputAppareils= document.getElementById('dPSearch2');
const inputUstensiles= document.getElementById('dPSearch3');


let dataFromRecettes = [];

let uniqueIngredientsList = [];
let uniqueAppareilsList = [];
let uniqueUstensilesList = [];

async function getRecettesData (){

    let data = await fetch ("./data/recipes.json");
    let dataRecettes = await data.json();



    return dataRecettes;
    

}
 

async function init(){        
    
    //console.log("hola2"); 
    
   

     dataFromRecettes = await getRecettesData();
    //console.log(dataFromRecettes.length + " hola");
    
    displayRecipes(dataFromRecettes);
    addElementsFiltreList (dataFromRecettes, uniqueIngredientsList, uniqueAppareilsList, uniqueUstensilesList);
    
    displayDropFiltres(uniqueIngredientsList, uniqueAppareilsList, uniqueUstensilesList);

// Recettes Total Counter
    recetteTotales.classList.add('countRecettes');
    recetteTotales.textContent = dataFromRecettes.length + " recettes";
    recettesTotal.appendChild(recetteTotales);

}


function addElementsFiltreList (datas, uniqueIngredientsList, uniqueAppareilsList, uniqueUstensilesList){

    datas.forEach((recetteSolo)=>{
        //ingredients
       recetteSolo.ingredients.forEach((ingredientUnique)=>{

        let index=uniqueIngredientsList.indexOf(ingredientUnique.ingredient.toLowerCase());
            if (index==-1){
                uniqueIngredientsList.push(ingredientUnique.ingredient.toLowerCase());
                //console.log(ingredientUnique.ingredient.toLowerCase())
            }

            
       })

       //appareils
       
        let index=uniqueAppareilsList.indexOf(recetteSolo.appliance.toLowerCase());
            if (index==-1){
                uniqueAppareilsList.push(recetteSolo.appliance.toLowerCase());
                //console.log(recetteSolo.appliance.toLowerCase())
            }
            
       
        //ustensiles
       recetteSolo.ustensils.forEach((ustensileUnique)=>{

        let index=uniqueUstensilesList.indexOf(ustensileUnique.toLowerCase());
            if (index==-1){
                uniqueUstensilesList.push(ustensileUnique.toLowerCase());
                //console.log(ustensileUnique.toLowerCase())
            }

            
       })

        uniqueIngredientsList.sort();
        uniqueAppareilsList.sort();
        uniqueUstensilesList.sort();

        
    })

}




function displayRecipes(datas){
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML ="";
        datas.forEach((recetteSolo)=>{
            const recetteCard = dataForCard (recetteSolo);
            const cardDOM = recetteCard.createCard();
            cardContainer.appendChild (cardDOM);
            

            


        //dataForFiltres(recetteSolo);

        })
}


inputValue.addEventListener('input', ()=>{
    search(inputValue.value, dataFromRecettes)
})


inputIngredient.addEventListener('input', ()=>{
    search(inputIngredient.value, dataFromRecettes)
})

inputAppareils.addEventListener('input', ()=>{
    search(inputAppareils.value, dataFromRecettes)
})

inputUstensiles.addEventListener('input', ()=>{
    search(inputUstensiles.value, dataFromRecettes)
})


function search(searchInput, datas){
    // verifier la taile de la chaine 
     let dataResult = [];
    if(searchInput.length >=3){
    // on lance la recherche

    for(let i =0; i<= datas.length-1; i++){
        if(datas[i].name.toLowerCase().includes(searchInput.toLowerCase())){
            let index=dataResult.indexOf(datas[i]);
            if (index==-1){
                dataResult.push(datas[i])  
            }
        }
         if(datas[i].description.toLowerCase().includes(searchInput.toLowerCase())){
            let index=dataResult.indexOf(datas[i]);
            if (index==-1){
                dataResult.push(datas[i])  
            }        }

        for(let y =0; y<=datas[i].ingredients.length-1; y++){
           if(datas[i].ingredients[y].ingredient.includes(searchInput)){
            let index=dataResult.indexOf(datas[i]);
            if (index==-1){
                dataResult.push(datas[i])  
            }            }
           }      
           recetteTotales.innerHTML=dataResult.length+ " Recettes";

           
        }


// Remove duplicates CARDS Function

/**
 function removeDuplicatesA(dataResult) {
    let uniqueResult = [];
    data.forEach(element => {
        if (!uniqueResult.includes(element)) {
            uniqueResult.push(element);
            }
            });
    
    //console.log(uniqueResult + "unique");
   
console.log("ingDUPS");

    return uniqueResult;

    }
    */


// Remove duplicates  Filtres  Function

    function removeDropDownDups(ustensilsSolo){
        
        let noDropDups =[];
        data.forEach(element => {
        if (!noDropDups.includes(element)) {
            noDropDups.push(element);

            }
            });
            
        

        return noDropDups;
    
    }



    displayRecipes(dataResult);

    }
}




// Only one dropDown menu open 








init();

