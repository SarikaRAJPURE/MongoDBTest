console.log("testing");

//veggieavailablity.textContent = 

let containerelem = document.getElementById('item-data');
let searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', async () => {
    let userItem = document.getElementById('search-item').value;
    console.log(userItem);
    if (userItem === "") {
        containerelem.textContent = "Please Enter Fruit/Veggie you are looking for"
    } else {
        try {
            let itemData = await fetch(`http://localhost:5000/search/${userItem}`);
            let parsedData = await itemData.json();
            console.log(parsedData);
            console.log(parsedData[0].name);
            /*  expression = "/" + userItem +"/"+ "i";
             matchStr = regexp(userItem,expression,'match');
             console.log(matchStr); */
            /* if (userItem === parsedData[0].name) { */
            containerelem.innerHTML = `<p>The ${parsedData[0].name} is available.</p>
            <p>Name:${parsedData[0].name}</p>
            <p>Color:${parsedData[0].color}</p>
            <p>Days old:${parsedData[0].age}</p>
            <button>Buy</button>`;
            //} else {
            //containerelem.textContent = "Item you are looking for is not available right now";
            //}
        }
        catch(err){
            containerelem.textContent = "Sorry, Item you are looking for is not available right now";
        }
}
});



let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', async () => {
    let response = await fetch(`http://localhost:5000/deleteNamelessData`, {
        method: "DELETE"
    });
    // console.log(response);
    let parsedData = await response.json();
    console.log(parsedData);
})
let homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    window.location.href = "/";
});

let createFruitButton = document.getElementById('create-fruit-btn');
createFruitButton.addEventListener('click', () => {
    window.location.href = "/createFruit";
});

let createVeggieButton = document.getElementById('create-veggie-btn');
createVeggieButton.addEventListener('click', () => {
    window.location.href = "/createVeggie";
});

let displayFoodButton = document.getElementById('dispaly-food-btn');
displayFoodButton.addEventListener('click', () => {
    window.location.href = "/displayFood";
});
let displayVeggiesButton = document.getElementById('dispaly-veggie-btn');
displayVeggiesButton.addEventListener('click', () => {
    window.location.href = "/displayVeggie";
});