const display = document.getElementById("display");
const colorCode = document.getElementById("color-code");
const changeBtn = document.getElementById("change-btn");
const resetBtn = document.getElementById("reset-btn");

const DEFAULT_COLOR = "#f5f5f5";
const hexCode = "0123456789ABCDEF";

let color = localStorage.getItem("color") || DEFAULT_COLOR;
display.style.backgroundColor = color;
colorCode.textContent = color !== DEFAULT_COLOR ? color : "";

function generateHexColor() {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
        hex += hexCode[Math.floor(Math.random() * 16)];
    }

    return hex;
}

// Change Btn
changeBtn.addEventListener("click", () => {
    const hexColor = generateHexColor();
    localStorage.setItem("color", hexColor);
    display.style.backgroundColor = hexColor;
    colorCode.textContent = hexColor;
});

// Reset Btn
resetBtn.addEventListener("click", () => {
    localStorage.setItem("color", DEFAULT_COLOR);
    display.style.backgroundColor = DEFAULT_COLOR;
    colorCode.textContent = "";
});


