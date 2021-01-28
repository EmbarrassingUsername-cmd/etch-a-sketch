const etchASketchContainer=document.querySelector(".etch-a-sketch-holder")
let pixelsInDOM =""
let gridSize=64
let actionOnMouseover=colorToBlack
const style=document.createElement("style")
document.head.appendChild(style)
const colorChangeStyle=document.createElement("style")
document.head.appendChild(colorChangeStyle)
//creates style elements first to allow varying pixel sizes in grid for createGrid function second is for the colorSelector function
const resetButton=document.querySelector("#reset")
const shadingSelector=document.querySelector("#shade")
const blackSelectior=document.querySelector("#black")
const randomSelector=document.querySelector("#random") 
const colorSelector=document.querySelector("#color-selector")
const gridSizeSlider=document.querySelector("#grid-selector")
const gridSizeTextInput=document.querySelector("#grid-selector-value")
gridSizeTextInput.value=gridSizeSlider.value
createGrid(gridSize)
changeAction()
//initial grid creation 
resetButton.addEventListener("click", ()=>{
    resetPixels()
    createGrid(gridSize)
    changeAction()
})
shadingSelector.addEventListener("click", ()=>{
    resetPixels()
    createGrid(gridSize)
    actionOnMouseover=shadeUp
    changeAction()
})
blackSelectior.addEventListener("click", ()=>{
    resetPixels()
    createGrid(gridSize)
    actionOnMouseover=colorToBlack
    changeAction()
})
randomSelector.addEventListener("click", ()=>{
    resetPixels()
    createGrid(gridSize)
    actionOnMouseover=randomColor
    changeAction()
})
colorSelector.addEventListener("change", ()=>{
    colorChangeStyle.innerText=`.colored-pixel{background-color: ${colorSelector.value};`
    resetPixels()
    createGrid(gridSize)
    actionOnMouseover=selectColor
    changeAction()
})
gridSizeSlider.addEventListener("change", ()=>{
    gridSize=gridSizeSlider.value
    resetPixels()
    createGrid(gridSize)
    changeAction()
    gridSizeTextInput.value=gridSizeSlider.value
})
gridSizeTextInput.addEventListener("change",()=>{
    gridSize=gridSizeTextInput.value
    resetPixels()
    createGrid(gridSize)
    changeAction()
    gridSizeSlider.value=gridSizeTextInput.value
})
// all buttons above reset the grid then create a new grid of the same size slider and text inpuut resizes and sets other to same value 
function colorToBlack(){
    this.classList.add("black-pixel")
}
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
function randomColor(){
    this.style.backgroundColor=`rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`
}
function selectColor(){
    this.classList.add("colored-pixel")
}
function resetPixels(){while(etchASketchContainer.firstChild)etchASketchContainer.removeChild(etchASketchContainer.lastChild);}
function resizeGrid(){
    let newSize= prompt("Please specify the width of the new grid")
        if(newSize<4||newSize>100||isNaN(newSize)){
            while(newSize<4||newSize>100||isNaN(newSize)){
            newSize=prompt("Only values between 4 and 100 are accepted please specify a value in this range")
            }
        }
    createGrid(newSize)
    return gridSize=newSize
}
function createGrid(numberofPixels){
    for(let i=0; i<numberofPixels*numberofPixels;i++){
    const squareDivPixels=document.createElement("div")
    squareDivPixels.classList="pixels"
    etchASketchContainer.appendChild(squareDivPixels)
    
}
style.innerText=`.etch-a-sketch-holder{
        grid-template-columns: repeat(${numberofPixels}, ${640/+numberofPixels}px);
        grid-template-rows: repeat(${+numberofPixels}, ${640/+numberofPixels}px);}
        .pixels{height: ${640/numberofPixels}px; width: ${640/numberofPixels}px):)}`
}
function changeAction(){
    pixelsInDOM=Array.from(document.querySelector(".etch-a-sketch-holder").childNodes)
    pixelsInDOM.forEach(item=>item.addEventListener("mouseover", actionOnMouseover))
}