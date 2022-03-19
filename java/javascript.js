const greyScale = document.getElementById('greyScale');
const rainbow = document.getElementById('rainbow');
const erase = document.getElementById('erase');
const mainGridSquare = document.getElementById('grid');
const sizeSlider = document.getElementById('gridSize');
const gridSizeDisplay = document.getElementById('gridSizeText');
const selectSizeButton = document.getElementById('selectGridSize');
const colorSelect = document.getElementById('colorSelectValue');
const mode = [''];
let opacity = 0.1;


//Size Display Default and Varied
gridSizeDisplay.innerHTML = sizeSlider.value + "x" + sizeSlider.value;

function sizeSelectorDisplay() {
    
    gridSizeDisplay.innerHTML = `${sizeSlider.value}x${sizeSlider.value}`;

}


//grid Creation and destruction
function createGrid () {   
    mainGridSquare.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
    mainGridSquare.style.gridTemplateRows = `repeat(${sizeSlider.value}, 1fr)`;
    
    for(let i = 0; i < (sizeSlider.value * sizeSlider.value); i++){
        const miniGrid = document.createElement('div');
        miniGrid.classList.add('colorSquares');
        miniGrid.addEventListener('mouseover', () =>{
                colorGrid(miniGrid, opacity);
            if (opacity < 1){
                opacity += 0.1;
            } else if (opacity = 1){
                opacity -= 0.9;
            }
        });
        mainGridSquare.appendChild(miniGrid);
    }
}

function deleteOldGrid(){   
    
    while(mainGridSquare.firstChild)
      mainGridSquare.removeChild(mainGridSquare.firstChild);

}


//Color Selection and Mode
function changeMode (buttonPress) {

    if (buttonPress === 'color'){
        mode.pop();
        mode.push('color');
    }else if (buttonPress === 'rainbow'){
        mode.pop();
        mode.push('rainbow');
    } else if (buttonPress === 'greyscale'){
        mode.pop();
        mode.push('greyscale');
    }else if (buttonPress === 'erase'){
        mode.pop();
        mode.push('erase');
    }
}

function colorGrid(miniGrid, shade){
    if (mode[0] === 'color'){
        miniGrid.style.backgroundColor = `${colorSelect.value}`;
    }else if (mode[0] === 'rainbow'){
        let randomA = Math.floor(Math.random()*256);
        let randomB = Math.floor(Math.random()*256);
        let randomC = Math.floor(Math.random()*256);
        miniGrid.style.backgroundColor = `rgb(${randomA}, ${randomB}, ${randomC})`;
    } else if (mode[0] === 'greyscale'){
        miniGrid.style.backgroundColor = `rgba(0,0,0, ${shade})`;
    }else if (mode[0] === 'erase'){
        miniGrid.style.backgroundColor = '#ecebff';
    }else if (mode[0] === ''){
        miniGrid.style.backgroundColor = 'black';
    }
}


//buttons / inputs and changes mode/grid size
colorSelect.addEventListener("input", function () {
    changeMode ('color');

});
greyScale.addEventListener("click", function () {
    greyScale.style.backgroundColor = "#aebafc";
    changeMode ('greyscale');
});
rainbow.addEventListener("click", function () {
    rainbow.style.backgroundColor = "#aebafc";
    changeMode ('rainbow');
});
erase.addEventListener("click", function () {
    erase.style.backgroundColor = "#aebafc";
    changeMode ('erase');
});
sizeSlider.addEventListener('input', function(){
    
    sizeSelectorDisplay();

});
selectSizeButton.addEventListener("click", function () {
    selectSizeButton.style.backgroundColor = "#aebafc";
    deleteOldGrid();
    createGrid();
});

//returns buttons to original color
greyScale.addEventListener('click', () => setTimeout(function() {
    greyScale.style.backgroundColor = "#ecebff";
}, 100));
rainbow.addEventListener('click', () => setTimeout(function() {
    rainbow.style.backgroundColor = "#ecebff";
}, 100));
erase.addEventListener('click', () => setTimeout(function() {
    erase.style.backgroundColor = "#ecebff";
}, 100));
selectSizeButton.addEventListener('click', () => setTimeout(function() {
    selectSizeButton.style.backgroundColor = "#ecebff";
}, 100));
   

//create a 16x16 after window load
window.onload = function(){
    createGrid();
}
