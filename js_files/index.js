// retreive Json Data Recettes


const inputValue= document.getElementById('search-focus');
let dataFromRecettes = []
async function getRecettesData (){

    let data = await fetch ("./data/recipes.json");
    let dataRecettes = await data.json();



    return dataRecettes;
}
 

async function init(){        
    
    console.log("hola2");

     dataFromRecettes = await getRecettesData();
    console.log(dataFromRecettes.length + " hola");
    
    displayRecipes(dataFromRecettes)



    
   


        
        
        
// Recettes Total Counter
    const recetteTotales = document.createElement('div');
    recetteTotales.classList.add('countRecettes');
    recetteTotales.textContent = dataFromRecettes.length + " recettes";
    recettesTotal.appendChild(recetteTotales);

}

function displayRecipes(datas){
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML ="";
        datas.forEach((recetteSolo)=>{
            const recetteCard = dataForCard (recetteSolo);
            const cardDOM = recetteCard.createCard();
            cardContainer.appendChild (cardDOM);
            
        dataForFiltres(recetteSolo);
        })
}


inputValue.addEventListener('input', ()=>{
    search(inputValue.value, dataFromRecettes)
})


function search(searchInput, datas){
    // verifier la taile de la chaine 
     let dataResult = [];
    if(searchInput.length >=3){
        // on lance la recherche

    for(let i =0; i<= datas.length-1; i++){
        if(datas[i].name.toLowerCase().includes(searchInput.toLowerCase())){
            dataResult.push(datas[i])
        }
         if(datas[i].description.toLowerCase().includes(searchInput.toLowerCase())){
            dataResult.push(datas[i])
        }

        for(let y =0; y<=datas[i].ingredients.length-1; y++){
           if(datas[i].ingredients[y].ingredient.includes(searchInput)){
               dataResult.push(datas[i])
            }
        }

    }

    displayRecipes(dataResult)

    }


}
    
init();

