
export function LightBtn() {
    const root = document.documentElement;
    const lightingBtn = document.querySelector("#lightingBtn");

    // Sets dark mode based on client's computer settings
    if (window && window.matchMedia && window.matchMedia('prefer-color-scheme: dark')) {
        root.classList.add("dark");
        lightingBtn.classList.add("moon-btn");
        lightingBtn.classList.remove("sun-btn");
    }

    // Sets dark mode based on localStorage
    if (localStorage && localStorage.getItem("lighting")) {
        if (localStorage.getItem("lighting") === "dark_mode") {
            root.classList.add("dark");
            lightingBtn.classList.add("moon-btn");
            lightingBtn.classList.remove("sun-btn");
        }
        else if (localStorage.getItem("lighting") === "light_mode"){
            root.classList.remove("dark");
            lightingBtn.classList.add("sun-btn");
            lightingBtn.classList.remove("moon-btn");
        }
    }

    // Changes lighting mode
    lightingBtn.addEventListener("click", () => {
        root.classList.toggle("dark");
        if (!root.classList.contains("dark")) {
            lightingBtn.classList.add("sun-btn");
            lightingBtn.classList.remove("moon-btn");
            localStorage.setItem("lighting", "light_mode")
        }
        if (root.classList.contains("dark")) {
            lightingBtn.classList.add("moon-btn");
            lightingBtn.classList.remove("sun-btn");
            localStorage.setItem("lighting", "dark_mode")
        }
    })
}