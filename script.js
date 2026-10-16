//your JS code here. If required.

const buttons = document.getElementById("buttons");

let currentAudio = null;

buttons.addEventListener("click", function (event) {
    const button = event.target.closest("button");

    if (!button) return;

    if (button.classList.contains("stop")) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
        return;
    }

    const sound = button.dataset.sound;

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sound}.mp3`);

    currentAudio.play().catch(error => {
        console.error("Unable to play sound:", error);
    });
});
