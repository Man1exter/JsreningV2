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

 let sizeX = 350;
 let sizeY = 150;

 divItem.style.left = `${sizeX}px`;
 divItem.style.top = `${sizeY}px`;

 let draw = false;
 
 
 divItem.addEventListener("mousedown", () => {
    divItem.style.backgroundColor = "gray";
    draw = !draw;
 })

 
 
 divItem.addEventListener("mousemove", (e) => {
if(draw){
    sizeX = e.clientX;
    sizeY = e.clientY;
    divItem.style.left = `${sizeX - 50}px`;
    divItem.style.top = `${sizeY - 50}px`;
}
})



divItem.addEventListener("mouseup", () => {
    divItem.style.backgroundColor = "black";
    draw = !draw;
})

 
