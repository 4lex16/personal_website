

let mouseX;
let mouseY;
let clickMe;
let closeMe;
let closableWindows;
let draggableComponent;

let draggingX;
let draggingY;

document.addEventListener("DOMContentLoaded", main)

function main() {
    closableWindows = document.querySelectorAll(".closable-window");

    for (const closableWindow of closableWindows) {
        let draggingInterval;
        clickMe = document.querySelector(`#${closableWindow.id}-open`);
        draggableComponent = document.querySelector(`#${closableWindow.id}-dc`);
        closeMe = document.querySelector(`#${closableWindow.id}-close`);

        clickMe.addEventListener("click", (event) => {
            closableWindow.classList.remove("window-closed");
            closableWindow.classList.add("window-open");
            closableWindow.style.top = "50%";
            closableWindow.style.left = "50%";
        });

        closeMe.addEventListener("click", (event) => {
            closableWindow.classList.remove("window-open");
            closableWindow.classList.add("window-closed");
            closableWindow.classList.remove("dragging");
        });

        draggableComponent.addEventListener("mousedown", (event) => {
            draggingX = event.offsetX;
            draggingY = event.offsetY;
            closableWindow.classList.add("dragging");
            closableWindow.style.zIndex = "1";
            draggingInterval = setInterval(loop, 1);
        });

        closableWindow.addEventListener("mouseup", () => {
            closableWindow.classList.remove("dragging");
            closableWindow.style.zIndex = "0";
            if (draggingInterval) {
                clearInterval(draggingInterval);
                draggingInterval = undefined;
            }
        });

        function loop() {
            if (closableWindow.classList.contains("dragging")) {
                closableWindow.style.top = `${mouseY - draggingY}px`;
                closableWindow.style.left = `${mouseX - draggingX}px`;
            }
        }
    }
}

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
})


console.log("Hello Everyone!")