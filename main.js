window.document.addEventListener("click", function(e){
    
    const x = e.clientX;
    const y = e.clientY;
    const width = innerWidth;
    const height = innerHeight;
    
    const red = x / width;
    const green = y / height;
    const blue = ((x / width + y / height)) / 2;

 document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`

})