document.body.addEventListener("click", (move) => {

    const color = getColor(move);
    document.body.style.backgroundColor = color;
})

const getColor = (event) => {

    if( event.clientX % 2 === 0 ){
        if( event.clientY % 2 === 0 )
    return "brown";
    
   } else{
    return "orange";
    }

    if( event.clientY % 2 === 0){
        return "green";
    } else {
        return "blue";
    }
}

//-----------move div -------------***-------------------
//---------------------------------------------------------
//------------------------***--------------------------------

const divItem = document.querySelector("div");

 let sizeX = 40;
 let sizeY = 40;

 divItem.style.left = `${sizeX}%`;
 divItem.style.top = `${sizeY}%`;

 
 
 divItem.addEventListener("mousedown", () => {
    divItem.style.backgroundColor = "gray";
 })

 
 
 divItem.addEventListener("mousemove", () => {

})



divItem.addEventListener("mouseup", () => {
    divItem.style.backgroundColor = "black";
})

 
