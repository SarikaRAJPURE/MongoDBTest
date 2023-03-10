
//  to create fruit
let fruitButton = document.getElementById('submit-fruit');
fruitButton.addEventListener('click', async () => {
    //Send a request to server 
    //Result is the response from the server
    /*  let Result = await fetch('http://localhost:5000/getData') //res.json("Response received")  so Result = Response received
     let fetcheddata = await Result.json();
     console.log(fetcheddata); */
    //1.Get element
    //2.get value of element
    let nameString = document.getElementById('name-input').value;
    let ageNumber = +document.getElementById('age-input').value;
    let colorString = document.getElementById('color-input').value; //+convert string to number
    let readytoeatBool = document.getElementById('readytoeat-input').value === "true" ? true : false;
    // console.log(nameString,ageNumber,colorString,readytoeatBool);

    const fruit = {
        nameString,
        ageNumber,
        colorString,
        readytoeatBool
    }
    console.log(JSON.stringify(fruit));
    // google for fetch options
    //So to not get empty object ,we have to stringfy our data. 
    //We put it in the body. 
    //We have to set our headers
    //we have to have our express.Json() here, so that we can accept stringified Json 
    //and be able to convert it back into an actual object.
    //And we also need this URL encoded.
    let response =await fetch('http://localhost:5000/createFruit', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fruit)   //stringify js value to json         
     }) 
     let uploadStatusTag = document.getElementById('fruit-upload-status');

     if(response.status == 200){       
        console.log(response);
        uploadStatusTag.textContent = "Fruit upload completed successfully!"
        uploadStatusTag.style.color = "green";
        console.log("Upload complete!");
     }else{
        console.log(response);
        uploadStatusTag.textContent = "Upload failed!"
        uploadStatusTag.style.color = "red";
        console.log("Upload failed!");
     }
})


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