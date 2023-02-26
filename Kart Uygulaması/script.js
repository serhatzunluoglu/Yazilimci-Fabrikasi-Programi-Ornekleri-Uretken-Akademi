var divs = document.getElementsByClassName("col-auto"); 

for (let i = 0; i < divs.length; i++) {
    
    const element = document.createElement("img");
    divs[i].appendChild(element);
}

const images = document.getElementsByTagName("img");

async function addImage(j){
    
    images[j].src = `https://source.unsplash.com/random/300x300?${j}`;
    images[j].alt = `${j+1}${".resim"}`;
    images[j].title = `${j+1}${".resim"}`;
}

for(let j=0 ; j<images.length ; j++){
    
    addImage(j);
}

