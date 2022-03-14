
const grid = document.querySelector('.grid-container');

function div() {
    const div = document.createElement('div');
    grid.appendChild(div);
    div.classList.add('item');
};

for (i = 0; i < 256; ++i) {
    div();
};


