
export function LightBtn() {
    const root = document.documentElement;
    const lightingBtn = document.querySelector("#lightingBtn");

    if (window && window.matchMedia && window.matchMedia('prefer-color-scheme: dark')) {
        root.classList.add("dark");
        lightingBtn.innerHTML = `<img src="/assets/pngs/moon.png" alt="moon jpg"/>`;
    }

    if (localStorage && localStorage.getItem("lighting")) {
        if (localStorage.getItem("lighting") === "dark_mode") {
            root.classList.add("dark");
            lightingBtn.innerHTML = `<img src="/assets/pngs/moon.png" alt="moon jpg"/>`;
        } else {
            root.classList.add("light");
            lightingBtn.innerHTML = `<img src="/assets/pngs/sun.png" alt="sun jpg"/>`;
        }
    }

    lightingBtn.addEventListener("click", () => {
        root.classList.toggle("dark");
        if (lightingBtn.classList.toggle("sun-btn")) {
            lightingBtn.innerHTML = `<img src="/assets/pngs/moon.png" alt="sun jpg"/>`;
            localStorage.setItem("lighting", "light_mode")
        }
        if (lightingBtn.classList.toggle("moon-btn")) {
            lightingBtn.innerHTML = `<img src="/assets/pngs/sun.png" alt="moon jpg"/>`;
            localStorage.setItem("lighting", "dark_mode")
        }
    })
}