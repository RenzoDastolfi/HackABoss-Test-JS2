const bigBox = document.getElementById('bigbox');
const addButton = document.getElementById('addBox');

addButton.addEventListener('click', () => {
    const newBox = document.createElement("div");
    newBox.className = 'box';
    bigBox.appendChild(newBox);
})

function getRandomColor(){
    hexValues = "0123456789ABCDEF";
    color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];     
    }
    return color;
}

function changeBoxColors(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.background = getRandomColor();        
    });
}

setInterval(() => {
    changeBoxColors()
}, 1000);