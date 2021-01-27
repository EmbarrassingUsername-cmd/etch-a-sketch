const etchASketchContainer=document.querySelector(".etch-a-sketch-holder")
let numberofPixels=4096
let pixelsInDOM =""
const resetButton=document.querySelector("#reset")
resetButton.addEventListener("click", resetPixels)
createGrid(numberofPixels)

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
    while(etchASketchContainer.firstChild)
    etchASketchContainer.removeChild(etchASketchContainer.lastChild)
    resizeGrid()
}

function resizeGrid(){
    let newSize= prompt("Please specify the width of the new grid")
        if(newSize<4||newSize>100||isNaN(newSize)){
            while(newSize<4||newSize>100||isNaN(newSize)){
            newSize=prompt("Only values between 4 and 100 are accepted please specify a value in this range")
            }
        }
    createGrid(newSize*newSize)
}
function createGrid(numberofPixels){
    for(let i=0; i<numberofPixels;i++){
    const squareDivPixels=document.createElement("div")
    squareDivPixels.classList="pixels"
    etchASketchContainer.appendChild(squareDivPixels)
}
pixelsInDOM=Array.from(document.querySelector(".etch-a-sketch-holder").childNodes)
pixelsInDOM.forEach(item=>item.addEventListener("mouseover", shadeUp))
}