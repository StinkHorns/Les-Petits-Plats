// retreive Json Data Recettes

const recetteTotales = document.createElement('div');

const inputValue= document.getElementById('search-focus');

const inputIngredient= document.getElementById('dPSearch1');
const inputAppareils= document.getElementById('dPSearch2');
const inputUstensiles= document.getElementById('dPSearch3');



let ingredientsTags=[]
let appareilsTags=[]
let ustensilesTags=[]

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


    // Add event listener dropdown


    

    const ingredientsDropDown=document.querySelectorAll(".myDropdown3Data");
    ingredientsDropDown.forEach(dropDown => {
    }   );

    const appareilsDropDown=document.querySelectorAll(".myDropdown3Data");
    appareilsDropDown.forEach(dropDown => {
    }   );

    const ustensilesDropDown=document.querySelectorAll(".myDropdown3Data");
    ustensilesDropDown.forEach(dropDown => {
    }   );

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

        })
}
 //dataForFiltres(recetteSolo);

inputValue.addEventListener('input', ()=>{
    search(inputValue.value, dataFromRecettes)
})


inputIngredient.addEventListener('input', ()=>{
filtreIngredient(inputIngredient.value);
})

inputAppareils.addEventListener('input', ()=>{
filtreAppareils(inputAppareils.value)
})

inputUstensiles.addEventListener('input', ()=>{
filtreUstensiles(inputUstensiles.value)
})

function filtreIngredient (searchInput){
    let result = []
    for (let index = 0; index < uniqueIngredientsList.length; index++) {
    const element = uniqueIngredientsList[index];

    //console.log(element);
    
    if (element.toLowerCase().includes(searchInput.toLowerCase())){
            
        let index=result.indexOf(element);
        if (index==-1){
            result.push(element)  
        }  
    }
    }
    

    displayDropFiltres(result, uniqueAppareilsList, uniqueUstensilesList)
}
////////////////////////////////////
function filtreAppareils (searchInput){
    let result = []
    for (let index = 0; index < uniqueAppareilsList.length; index++) {
    const element = uniqueAppareilsList[index];

    //console.log(element);
    
    if (element.toLowerCase().includes(searchInput.toLowerCase())){
            
        let index=result.indexOf(element);
        if (index==-1){
            result.push(element)  
        }  
    }
    }
    

    displayDropFiltres(uniqueIngredientsList, result, uniqueUstensilesList)
}

////////////////////////////////////
function filtreUstensiles (searchInput){
    let result = []
    for (let index = 0; index < uniqueUstensilesList.length; index++) {
    const element = uniqueUstensilesList[index];

    //console.log(element);
    
    if (element.toLowerCase().includes(searchInput.toLowerCase())){
            
        let index=result.indexOf(element);
        if (index==-1){
            result.push(element)  
        }  
    }
    }
    

    displayDropFiltres(uniqueIngredientsList, uniqueAppareilsList, result)
}



function search(searchInput, datas){
    // verifier la taile de la chaine 

     let dataResult = [];
     searchInput = inputValue.value;
     //console.log("datas = " + datas.length)
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
                                     
        }
    }

    //console.log("dataResult = " + dataResult.length)
    
    
    
    if(ingredientsTags.length > 0 ){
        console.log("dataResult = " + dataResult.length)
        if(dataResult.length == 0){
            dataResult = dataFromRecettes
        }
        const finalResult= []
        for(let i = 0; i<= ingredientsTags.length -1; i++){
            const ingredientTag = ingredientsTags[i]
            for(let y = 0; y<=dataResult.length -1; y++ ){
                for(let k =0; k<= dataResult[y].ingredients.length -1; k++){
                    console.log(ingredientTag)
                    if(dataResult[y].ingredients[k].ingredient.toLowerCase().includes(ingredientTag.toLowerCase())){
                        let index  = finalResult.indexOf(dataResult[y])
                        if(index ==-1){
                            finalResult.push(dataResult[y])
                        }
                    }
                }
            }
        }

        dataResult = finalResult
    }
    
    //////////////////////////////

    if(appareilsTags.length > 0 ){
        console.log("dataResult = " + dataResult.length)
        if(dataResult.length == 0){
            dataResult = dataFromRecettes
        }
        const finalResult= []
        for(let i = 0; i<= appareilsTags.length -1; i++){
            const appareilTag = appareilsTags[i]
            for(let y = 0; y<=dataResult.length -1; y++ ){
              
                    if(dataResult[y].appliance.toLowerCase().includes(appareilTag.toLowerCase())){
                        let index  = finalResult.indexOf(dataResult[y])
                        if(index ==-1){
                            finalResult.push(dataResult[y])
                        }
                   
                }
            }
        }

        dataResult = finalResult
    }
    
    ////////////////////////////
    
    if(ustensilesTags.length > 0 ){
        console.log("dataResult = " + dataResult.length)
        if(dataResult.length == 0){
            dataResult = dataFromRecettes
        }
        const finalResult= []
        for(let i = 0; i<= ustensilesTags.length -1; i++){
            const ustensilTag = ustensilesTags[i]
            for(let y = 0; y<=dataResult.length -1; y++ ){
                for(let k =0; k<= dataResult[y].ustensils.length -1; k++){
                    if(dataResult[y].ustensils[k].toLowerCase().includes(ustensilTag.toLowerCase())){
                        let index  = finalResult.indexOf(dataResult[y])
                        if(index ==-1){
                            finalResult.push(dataResult[y])
                        }
                    }
                }
            }
        }

        dataResult = finalResult
    }
           
        recetteTotales.innerHTML=dataResult.length+ " Recettes";
        uniqueIngredientsList=[]
        uniqueAppareilsList=[]
        uniqueUstensilesList=[]

addElementsFiltreList(dataResult, uniqueIngredientsList, uniqueAppareilsList, uniqueUstensilesList);
displayDropFiltres(uniqueIngredientsList, uniqueAppareilsList, uniqueUstensilesList)
              
       

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
    



    displayRecipes(dataResult);

    }











init();

