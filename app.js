const rangeValue = document.getElementById('myRange');
const grid = document.getElementById('grid-container')
const defaultColor = 'CYAN'
const defaultMode = 'color'
let currentMode = 'color'
let currentColor = '#000000' 

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

rangeValue.addEventListener('change', function (e) {
    document.getElementById('gridSize').textContent = `${rangeValue.value} x ${rangeValue.value}`
    setupGrid(rangeValue.value)
    clearGrid()
})


function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement)
    }
  }
  
function changeColor(e) {
if (e.type === 'mouseover' && !mouseDown) return
if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
} else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
} else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe'
}}

colorPicker = document.getElementById('colorpicker')
colorPicker.onchange = (event) => {
     currentColor = colorPicker.value
}


colorButton = document.getElementById('color-mode')
colorButton.onclick = (event) => {
    console.log('color')
    currentMode = 'color'
}

rainbowButton = document.getElementById('rainbow-mode')
rainbowButton.onclick = (event) => {
    console.log('rainbow')
    currentMode = 'rainbow'
}

eraserButton = document.getElementById('eraser-mode')
eraserButton.onclick = (event) => {
    console.log('eraser')
    currentMode = 'eraser'
}

function clearGrid() {
   document.querySelectorAll('.grid-element').forEach(element => {
    element.style.backgroundColor = ''
   });
}

// ties clear button to erase function
document.getElementById('clear-button').onclick = clearGrid


window.onload = () => {
    setupGrid(16)
}