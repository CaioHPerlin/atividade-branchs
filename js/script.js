const btn1 = document.getElementById('btn1');

const rainbow = [
    "#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000",
];

btn1.innerText = 'Colorizar';
let currentColor = 0;
btn1.addEventListener('click', () => setInterval(() => {
    btn1.style.color = `${rainbow[currentColor]}`;
    btn1.style.borderColor = `${rainbow[currentColor]}`;
    currentColor++; 
    if (currentColor == rainbow.length-1) {
        currentColor = 0;
    }
}, 350));

  