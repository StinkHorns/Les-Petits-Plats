// retreive Json Data Recettes

async function getRecettesData (){

    let data = await fetch ("./data/recipes.json");
    let dataRecettes = await data.json();



    return dataRecettes;
}
 
async function init(){        
    
    console.log("hola2");

    let dataFromRecettes = await getRecettesData();
    console.log(dataFromRecettes.length + " hola");
    const cardContainer = document.getElementById('cardContainer');

    dataFromRecettes.forEach((recetteSolo)=>{
        const recetteCard = dataForCard (recetteSolo);
        const cardDOM = recetteCard.createCard();
        cardContainer.appendChild (cardDOM);


    
    dataForFiltres(recetteSolo);


        }
        )
        
// Recettes Total Counter
    const recetteTotales = document.createElement('div');
    recetteTotales.classList.add('countRecettes');
    recetteTotales.textContent = dataFromRecettes.length + " recettes";
    recettesTotal.appendChild(recetteTotales);

}

    
init();

