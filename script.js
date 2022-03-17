
const grid = document.querySelector('.grid-container');
const btnClear = document.getElementById('clear');
const btnEraser = document.getElementById('eraser');
const btnDraw = document.getElementById('draw');
const slider = document.querySelector('.slider');
let div = '';

let clickCount = 0;
let n = slider.value;

//Grid creation/adjustment
function gridLayout(){
    grid.style.gridTemplateColumns = `repeat(${n}, auto)`;
    grid.style.gridTemplateRows = `repeat(${n}, auto)`;

};
gridLayout();

function createDiv() {
    let div = document.createElement('div');
    grid.appendChild(div);
    div.classList.add('item');
    
};

function gridItems (){
    for (i = 0; i < (n * n); ++i) {
    
    createDiv();
    };
};
gridItems();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

slider.oninput = function slide() {
    n = this.value;
    removeAllChildNodes(grid);
    gridItems();
    gridLayout();
}
    


btnClear.addEventListener('click', function(){
    div.classList.add('item-clear');
});




//Stylistic changes to the grid: draw, erase, clear.      

function draw(e){
    e.target.style.backgroundColor = '#000';
}; 

function erase(e){
    e.target.style.backgroundColor = '#fff';
}; 

function startDraw (e){
    grid.addEventListener('mouseover', draw, false);
}

function stopDraw(){
    grid.removeEventListener('mouseover', draw, false);
}

function startErase (){
    grid.addEventListener('mouseover', erase, false);
}

function stopErase (){
    grid.removeEventListener('mouseover', erase, false);
}

function utensil(){
    btnDraw.addEventListener('click', function(e){
        grid.removeEventListener('mousedown', startErase, false);
        grid.removeEventListener('mousedown', stopErase, false);

        if (grid.addEventListener('mousedown', startDraw, false));

        else if (grid.addEventListener('mouseup', stopDraw, false)); 
    });

    btnEraser.addEventListener('click', function(e){
        grid.removeEventListener('mousedown', startDraw, false);
        grid.removeEventListener('mousedown', stopDraw, false);

        if (grid.addEventListener('mousedown', startErase, false));

        else if (grid.addEventListener('mouseup', stopErase, false));
        
    });

    
};
utensil()


