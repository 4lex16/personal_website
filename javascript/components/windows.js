
// Handles all the windows functionality
// Opening, Moving, Closing

export function Windows() {
    // Variables
    let mouseX;
    let mouseY;
    let draggingX;
    let draggingY;

    // Elements
    let clickMe;
    let closeMe;
    let draggableComponent;
    let closableWindows = document.querySelectorAll(".closable-window");

    // Loops all windows
    for (const closableWindow of closableWindows) {

        let draggingInterval;

        // Initializing repeated elements
        clickMe = document.querySelector(`#${closableWindow.id}-open`);
        draggableComponent = document.querySelector(`#${closableWindow.id}-dc`);
        closeMe = document.querySelector(`#${closableWindow.id}-close`);

        // Open
        clickMe.addEventListener("click", (event) => {
            closableWindow.classList.remove("window-closed");
            closableWindow.classList.add("window-open");
            clickMe.disabled = true;
        });

        // Close
        closeMe.addEventListener("click", (event) => {
            closableWindow.classList.remove("window-open");
            closableWindow.classList.add("window-closed");
            closableWindow.classList.remove("dragging");
            clickMe.disabled = false;
        });

        // Start Dragging
        draggableComponent.addEventListener("mousedown", (event) => {
            draggingX = event.offsetX;
            draggingY = event.offsetY;
            closableWindow.classList.add("dragging");
            closableWindows.forEach((closableWindow) => {
                closableWindow.style.zIndex = "0"
            });
            closableWindow.style.zIndex = "1";
            draggingInterval = setInterval(loop, 1);
        });

        // Stop Dragging
        closableWindow.addEventListener("mouseup", () => {
            closableWindow.classList.remove("dragging");
            if (draggingInterval) {
                clearInterval(draggingInterval);
                draggingInterval = undefined;
            }
        });

        // Set window position to mouse cursor
        function loop() {
            if (closableWindow.classList.contains("dragging")) {
                closableWindow.style.top = `${mouseY - draggingY}px`;
                closableWindow.style.left = `${mouseX - draggingX}px`;
            }
        }
    }

    // Gets mouse position when it moves
    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    })
}
