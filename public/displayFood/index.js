console.log("Display Page");

const getData = async () =>{
    let fruitdata = await fetch(`/getFoodData`);
    let vegiedata = await fetch(`/veggies`);
    let parsedfruitData = await fruitdata.json();
    let parsedvegieData = await vegiedata.json();
    console.log(parsedfruitData);
    console.log(parsedvegieData);

    //map through fruit data and get it on html
    parsedfruitData.forEach(object => {
        let pfruitTag = document.createElement("p");
        //if not ready red text
        if(object.readytoeat == false){
            pfruitTag.style.color="red";
        }else{
            pfruitTag.style.color="green";
        }
        pfruitTag.textContent = object.name;
        let fruitcontainerelem = document.getElementById('fruits-container');
        fruitcontainerelem.appendChild(pfruitTag);
    });


    //map through veggie data and get it on html
    parsedvegieData.forEach(object => {
        let pTag = document.createElement("p");
        //if not ready red text
        if(object.readytoeat == false){
            pTag.style.color="red";
        }else{
            pTag.style.color="green";
        }
        pTag.textContent = object.name;
        let vegiecontainerelem = document.getElementById('vegies-container');
        vegiecontainerelem.appendChild(pTag);
    });
}

getData();

let homeButton = document.getElementById('home');
homeButton.addEventListener('click',()=>{
    window.location.href = "/";
});

let createFruitButton = document.getElementById('create-fruit-btn');
createFruitButton.addEventListener('click',()=>{
    window.location.href = "/createFruit";
});

let createVeggieButton = document.getElementById('create-veggie-btn');
createVeggieButton.addEventListener('click',()=>{
    window.location.href = "/createVeggie";
});

let displayFoodButton = document.getElementById('dispaly-food-btn');
displayFoodButton.addEventListener('click',()=>{
    window.location.href = "/displayFood";
});
let displayVeggiesButton = document.getElementById('dispaly-veggie-btn');
displayVeggiesButton.addEventListener('click',()=>{
    window.location.href = "/displayVeggie";
});