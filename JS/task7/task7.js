let train = document.getElementById("train");
let position = -200;
let interval = null;

function startAnimation() {
    if (interval === null) {
        interval = setInterval(() => {
            if (position < window.innerWidth) {
                position += 5; // Adjust speed here
                train.style.left = position + "px";
            } else {
                position = -200; // Restart train when it moves out of the screen
            }
        }, 50); // Adjust speed timing here
    }
}

function stopAnimation() {
    clearInterval(interval);
    interval = null;
}
