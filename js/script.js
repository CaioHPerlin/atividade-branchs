const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let darkMode = true;

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

let newBackgroundColor = "";
let newPrimaryColor = "";
btn2.addEventListener('click', () => {
    newBackgroundColor = darkMode? "rgb(240,240,240)" : "rgb(29, 27, 31)";
    darkMode = !darkMode;

    document.body.style.backgroundColor = newBackgroundColor;
    
    btn2.innerText = `Modo ${darkMode? "Claro" : "Escuro"}`;
});