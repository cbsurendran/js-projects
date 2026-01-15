const display = document.getElementById("display");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset");

const MAX_COUNT = 100;

let count = Number(localStorage.getItem("count")) || 0;
display.textContent = count;

function updateButtons() {

    decrementBtn.disabled = count <= 0;
    decrementBtn.classList.toggle("disabled", count <= 0)

    incrementBtn.disabled = count >= MAX_COUNT;
    incrementBtn.classList.toggle("disabled", count >= MAX_COUNT);
}

const sound = new Audio("sound.mp3");
sound.preload = "auto";
sound.volume = 0.5;
sound.playbackRate = 1.5;

function playSound() {
    const s = sound.cloneNode();
    s.play();
}

updateButtons();

// Increment Btn
incrementBtn.addEventListener("click", () => {
    if (count < MAX_COUNT) {
        count++;

        localStorage.setItem("count", count);
        display.textContent = count;
        updateButtons();

        display.classList.add("increment");
        playSound();
        setTimeout(() => { display.classList.remove("increment") }, 300);
    }

    
    if (count === MAX_COUNT) display.classList.add("decrement");


});

// Decrement Btn
decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }

    localStorage.setItem("count", count)
    display.textContent = count;
    updateButtons();

    display.classList.add("decrement");
    playSound();
    setTimeout(() => { display.classList.remove("decrement") }, 300);
});

// Reset Btn
resetBtn.addEventListener("click", () => {
    count = 0;

    localStorage.setItem("count", count);
    display.textContent = count;
    updateButtons();

    display.classList.add("reset");
    playSound();
    setTimeout(() => { display.classList.remove("reset") }, 300);
});



// Keydown
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (["ArrowUp", "ArrowDown"].includes(key)) {
        event.preventDefault();
    }

    switch (key) {
        case "ArrowUp":
            incrementBtn.click();
            break;
        case "ArrowDown":
            decrementBtn.click();
            break;
        case "r":
        case "R":
            resetBtn.click();
            break;
    }
});
