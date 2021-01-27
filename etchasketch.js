const etchASketchContainer=document.querySelector(".etch-a-sketch-holder")
let numberofPixels=10000

for(let i=0; i<numberofPixels;i++){
const squareDivPixels=document.createElement("div")
squareDivPixels.classList="pixels"
etchASketchContainer.appendChild(squareDivPixels)
}


const pixelsInDOM=Array.from(document.querySelector(".etch-a-sketch-holder").childNodes)
console.log(pixelsInDOM)
pixelsInDOM.forEach(item=>item.addEventListener("mouseover", shadeUp))
pixelsInDOM.forEach(item=>item.addEventListener("mouseover", shadeUp))


function shadeUp(){
    let classOfDom=`${this.classList[1]}`
    let shadeChange=classOfDom.charAt(classOfDom.length-1)
    if (shadeChange==9){return}
    else if(isNaN(shadeChange)){
        shadeChange=-1
    }
    this.classList.add(`shaded-pixel${+shadeChange+1}`)
    this.classList.remove(`shaded-pixel${+shadeChange}`)
}
function colourToBlack(){
    this.classList.add("black-pixel")
}
function resetPixels(){
    this.classList="pixels"
}