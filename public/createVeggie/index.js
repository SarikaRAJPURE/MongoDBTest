

//for vegie
let vegieButton = document.getElementById('submit-vegie');
vegieButton.addEventListener('click', async () => {
    let nameString = document.getElementById('vegie-name-input').value;
    let ageNumber = +document.getElementById('vegie-age-input').value;
    let colorString = document.getElementById('vegie-color-input').value; //+convert string to number
    let readytoeatBool = document.getElementById('vegie-readytoeat-input').value === "true" ? true : false;
    // console.log(nameString,ageNumber,colorString,readytoeatBool);

    const vegie = {
        nameString,
        ageNumber,
        colorString,
        readytoeatBool
    }
    console.log(JSON.stringify(vegie));
    let response =await fetch('http://localhost:5000/create_veggie', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vegie)   //stringify js value to json         
     }) 
     let uploadStatusTag = document.getElementById('vegie-upload-status');

     if(response.status == 200){       
        console.log(response);
        uploadStatusTag.textContent = "Veggie upload completed successfully!"
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