console.log("Display Page");

const getData = async () =>{
    let data = await fetch(`/getFoodData`);
    let pardedData = await data.json();
    console.log(pardedData);

    //map trg data and get it on html
    pardedData.forEach(object => {
        let pTag = document.createElement("p");
        //if not ready red text
        if(object.readytoeat == false){
            pTag.style.color="red";
        }else{
            pTag.style.color="green";
        }
        pTag.textContent = object.name;
        let containerelem = document.getElementById('container');
        containerelem.appendChild(pTag);
    });
}

getData();