
export function LightBtn() {
    const root = document.documentElement;
    const lightingBtn = document.querySelector("#lightingBtn");

    // Sets dark mode based on client's computer settings
    if (window && window.matchMedia && window.matchMedia('prefer-color-scheme: dark')) {
        root.classList.add("dark");
        lightingBtn.innerHTML = `<img src="../../assets/pngs/moon.png" alt="moon jpg"/>`;
    }

    // Sets dark mode based on localStorage
    if (localStorage && localStorage.getItem("lighting")) {
        if (localStorage.getItem("lighting") === "dark_mode") {
            root.classList.add("dark");
            lightingBtn.innerHTML = `<img src="../../assets/pngs/moon.png" alt="moon jpg"/>`;
        }
        else if (localStorage.getItem("lighting") === "light_mode"){
            root.classList.remove("dark");
            lightingBtn.innerHTML = `<img src="../../assets/pngs/sun.png" alt="sun jpg"/>`;
        }
    }

    // Changes lighting mode
    lightingBtn.addEventListener("click", () => {
        root.classList.toggle("dark");
        if (!root.classList.contains("dark")) {
            lightingBtn.innerHTML = `<img src="../../assets/pngs/sun.png" alt="sun jpg"/>`;
            localStorage.setItem("lighting", "light_mode")
        }
        if (root.classList.contains("dark")) {
            lightingBtn.innerHTML = `<img src="../../assets/pngs/moon.png" alt="moon jpg"/>`;
            localStorage.setItem("lighting", "dark_mode")
        }
    })
}