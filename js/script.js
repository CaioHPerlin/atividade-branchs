const rainbow = [
    "#FFD3A3",
    "#A084E8",
    "#D0BFFF",
    "#BEADFA",
    "#FF55BB",
    "#DFCCFB",
    "#DD58D6",
];
let currentColor = 0;
const colorizeElement = (element) => setInterval(() => {
    element.style.color = `${rainbow[currentColor]}`;
    element.style.borderColor = `${rainbow[currentColor]}`;
    currentColor++; 
    if (currentColor == rainbow.length-1) {
        currentColor = 0;
    }
}, 350);

let darkMode = true;
let newBackgroundColor = "";
let newPrimaryColor = "";
const changeTheme = (output) => {
    newBackgroundColor = darkMode? "rgb(240,240,240)" : "rgb(29, 27, 31)";
    newPrimaryColor = darkMode? "black": "white";
    darkMode = !darkMode;

    document.body.style.backgroundColor = newBackgroundColor;
    document.body.style.color = newPrimaryColor;
    output.innerText = `Modo ${darkMode? "Claro" : "Escuro"}`;
}

const h2 = document.getElementsByTagName('h2')[0];
const greetUser = () => {
    h2.innerText = darkMode? "Boa Noite!" : "Bom Dia!"
    setTimeout(() => h2.innerText = "Botões!", 2000)
}


const JsConfetti = new JSConfetti()
const buttons = document.getElementsByTagName('button');

buttons[0].addEventListener('click', () => colorizeElement(buttons[0]));
buttons[1].addEventListener('click', () => changeTheme(buttons[1]));
buttons[2].addEventListener('click', () => JsConfetti.addConfetti());
buttons[3].addEventListener('click', () => greetUser());