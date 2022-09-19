const rangeValue = document.getElementById('myRange');
const grid = document.getElementById('grid-container')
const defaultColor = 'CYAN'
const defaultMode = 'color'
const currentMode = defaultMode
const currentColor = defaultColor

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

function clearGrid() {
   document.querySelectorAll('.grid-element').forEach(element => {
    element.style.backgroundColor = ''
   });
}

// ties clear button to erase function
document.getElementById('erase-button').onclick = clearGrid

function toggleGridLines() {
    document.querySelectorAll('.grid-element').forEach(element => {
        element.style.border = '0.5px solid rgba(0, 0, 0, 0.1)';
       });
}

// ties toggle lines to toggle button - doesn't really work tho, scales incorrectly
//  scales in correctly after changing grid size
document.getElementById('toggle-grid').onclick = toggleGridLines


window.onload = () => {
    setupGrid(16)
}