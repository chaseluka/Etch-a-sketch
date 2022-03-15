
const grid = document.querySelector('.grid-container');
const btnClear = document.getElementById('clear');
const btnEraser = document.getElementById('eraser');
const btnDraw = document.getElementById('draw');
let clickCount = 0;

function div() {
    const div = document.createElement('div');
    grid.appendChild(div);
    div.classList.add('item');
};

for (i = 0; i < 256; ++i) {
    div();
};

function draw(e){
    ++clickCount;
   
    grid.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = '#000';
    }, false);

}; 

function eraser(e){
    grid.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = '#fff';
    }, false);

    if (grid.removeEventListener('click', eraser, false));
};

function utensil(e){

    if (btnDraw.addEventListener('click', function(e) {
        if (grid.addEventListener('click', function(){
            draw();
            
            if (clickCount > 1){
                grid.removeEventListener('click', draw)
            };
            
        }));
    }));

    else if (btnEraser.addEventListener('click', function(e) {
        if (grid.addEventListener('click', function(){
            eraser();
        }));
    }));
};
 
utensil();

function clear(){
    grid.style.backgroundColor = '#fff'
};

btnClear.onclick = clear;