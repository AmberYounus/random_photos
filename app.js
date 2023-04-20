const imageContainer = document.querySelector(".image-container");
const btn = document.querySelector(".load");

btn.addEventListener("click",()=>{
    addNewImages();
})
let imageNum = 10;
function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        // const element = array[index];
const newImg = document.createElement("img");
newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()* 2000)}` ;
imageContainer.appendChild(newImg);       
    }
}