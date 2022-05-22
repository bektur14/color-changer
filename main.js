const button = document.getElementById('btn');
const color = document.querySelector('.color ')

const colors = [
    '#ff5733', 
    '#f9ff33', 
    '#3371ff', 
    'red', 
    'green', 
    'rgb(85, 255, 51)'
];

button.addEventListener('click', ()=>{
    document.body.style.backgroundColor = colors[getRandomumber()];
    color.textContent = colors[getRandomumber()];
});

function getRandomumber() {
   return Math.floor(Math.random()* colors.length);
};

