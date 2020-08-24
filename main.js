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