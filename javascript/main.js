import {Windows} from "./components/windows.js";
import {LightBtn} from "./components/light-btn.js";
import {ContextMenu} from "./components/context-menu.js";


const root = document.documentElement;
const lightingBtn = document.querySelector("#lightingBtn");

document.addEventListener("DOMContentLoaded", main)

function main() {
    LightBtn();
    Windows();
    ContextMenu();
}