//buttons
const colorSelect = document.getElementById('colorselect');
const rainbowColor = document.getElementById('rainbow');
const erase = document.getElementById('erase');
//grid
const mainGridSquare = document.getElementById('grid');
//grid size selection components
const sizeSlider = document.getElementById('gridSize');
const gridSizeDisplay = document.getElementById('gridSizeText');
const selectSizeButton = document.getElementById('selectGridSize');

function colorEffect(item){
    item.style.backgroundColor = "black";
}
//creates a new grid based on slider
function createGrid () { 
mainGridSquare.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
mainGridSquare.style.gridTemplateRows = `repeat(${sizeSlider.value}, 1fr)`;
    for(let i = 0; i < (sizeSlider.value * sizeSlider.value); i++){
        const miniGrid = document.createElement('div');
        miniGrid.classList.add('colorSquares');
        miniGrid.style.border = "0.2px solid black";
        mainGridSquare.appendChild(miniGrid);
    }
document.querySelectorAll('.colorSquares').forEach(item => {
    item.addEventListener('mouseover', function() {
        colorEffect(item);
    });
    })
}
//removes old grid if it exists
function deleteOldGrid(){   
    while(mainGridSquare.firstChild)
        mainGridSquare.removeChild(mainGridSquare.firstChild);
}

//default value of slider
gridSizeDisplay.innerHTML = sizeSlider.value + "x" + sizeSlider.value;
function sizeSelectorDisplay() {
    //updates value and returns it
    gridSizeDisplay.innerHTML = `${sizeSlider.value}x${sizeSlider.value}`;
}

//changes the grid size
sizeSlider.addEventListener('input', function(){
    sizeSelectorDisplay();
});

//Hover Effects 











//button color and function
colorSelect.addEventListener("click", function () {
    colorSelect.style.backgroundColor = "#5746f0";
});
rainbowColor.addEventListener("click", function () {
    rainbowColor.style.backgroundColor = "#5746f0";
});
erase.addEventListener("click", function () {
    erase.style.backgroundColor = "#5746f0";
});
selectSizeButton.addEventListener("click", function () {
    selectSizeButton.style.backgroundColor = "#5746f0";
    deleteOldGrid();
    createGrid();
});

//returns buttons to original color
colorSelect.addEventListener('click', () => setTimeout(function() {
    colorSelect.style.backgroundColor = "#ecebff";
}, 100));
rainbowColor.addEventListener('click', () => setTimeout(function() {
    rainbowColor.style.backgroundColor = "#ecebff";
}, 100));
erase.addEventListener('click', () => setTimeout(function() {
    erase.style.backgroundColor = "#ecebff";
}, 100));
selectSizeButton.addEventListener('click', () => setTimeout(function() {
    selectSizeButton.style.backgroundColor = "#ecebff";
}, 100));
   








