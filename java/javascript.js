//buttons
const colorSelect = document.querySelector('color-select');
const rainbowColor = document.querySelector('rainbow');
const erase = document.querySelector('erase');

//grid size selection components
const sizeSlider = document.getElementById('gridSize');
const gridSizeDisplay = document.getElementById('gridSizeText');
const selectSizeButton = document.getElementById('selectGridSize');

//functions
function createGrid (gridSize) { 
    for(let i = 0; i < gridSize; i++){
        const miniGrid = document.createElement('div');
        miniGrid.style.border = "2px solid black";
        mainGridSquare.appendChild(miniGrid);
    }
}
function deleteOldGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        miniGrid.remove();
    }
}

function sizeSelectorDisplay() {
    //updates value and returns it
    gridSizeDisplay.innerHTML = this.value + "x" + this.value;
}

//grid itself
const mainGridSquare = document.getElementById('grid');

selectSizeButton.addEventListener("click", function () {
    selectSizeButton.style.backgroundColor = "#5746f0";
    deleteOldGrid();
    createGrid(gridSize);
});

selectSizeButton.addEventListener('click', () => setTimeout(function() {
    selectSizeButton.style.backgroundColor = "#ecebff";
}, 100));
   









//default value of slider
gridSizeDisplay.innerHTML = sizeSlider.value + "x" + sizeSlider.value; 
sizeSlider.addEventListener ('input', function(){
    sizeSelectorDisplay();
});

