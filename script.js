
const grid = document.querySelector('.grid-container');
const btnClear = document.getElementById('clear');
const btnEraser = document.getElementById('eraser');
const btnDraw = document.getElementById('draw');
const slider = document.querySelector('.slider');

let clickCount = 0;
let n = slider.value;

//Grid creation/adjustment
function gridLayout(){
    grid.style.gridTemplateColumns = `repeat(${n}, auto)`;
    grid.style.gridTemplateRows = `repeat(${n}, auto)`;

};
gridLayout();

function createDiv() {
    const div = document.createElement('div');
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
};

//Stylistic changes to the grid: draw, erase, clear.      

function draw(e){
        e.target.style.backgroundColor = '#000';
}; 

function utensilDraw(){

    grid.addEventListener('click', function(){
        clickCount++;

        if (clickCount % 2 != 0){
            grid.addEventListener('mouseover', draw, false);
        }
        
        else if (clickCount % 2 == 0){
            grid.removeEventListener('mouseover', draw, false);
        };
    });
};

function utensil(){
    
    if (btnDraw.addEventListener('click', utensilDraw()));

}

utensil();
