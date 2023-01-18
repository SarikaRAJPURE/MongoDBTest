console.log("testing");
let  submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click',async ()=>{
    //Send a request to server 
    //Result is the response from the server
    let Result = await fetch('http://localhost:5000/getData') //res.json("Response received")  so Result = Response received
    let fetcheddata = await Result.json();
    console.log(fetcheddata);
})