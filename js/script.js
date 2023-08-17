const btn1 = document.getElementById('btn1');

const rainbow = [
    "#FFD3A3",
    "#A084E8",
    "#D0BFFF",
    "#BEADFA",
    "#FF55BB",
    "#DFCCFB",
    "#DD58D6",
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

  