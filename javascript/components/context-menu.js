let lastTarget

/**
 * Adds 2 events
 * => contextmenu: Will open menu options based on button that was clicked
 *
 * => click: Will close when anything but the menu is clicked
 * @constructor
 */
export function ContextMenu() {
    document.addEventListener("contextmenu", (event) => {
        if (event.target.localName !== "body") {
            event.preventDefault();
            const target = event.target;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            if (contextMenu) {
                contextMenu.style.top = `${mouseY}px`;
                contextMenu.style.left = `${mouseX}px`;
                contextMenu.style.display = "block";
            }

            if (target !== lastTarget) {
                lastTarget = target;
                contextMenu.innerHTML = "";
                const element = getParentOf({child: target, cls: "desktop-btn"});
                if (element) {
                    createMenuOption("", "Open", () => {
                        open(element);
                    });
                    createMenuHr();
                }

                if (isChildOf({child: target, cls: "closable-window"})) {
                    createMenuOption("", "Close", () => {
                        close()
                    });
                    createMenuHr();
                }


                lastTarget = "default";

                createMenuOption("", "Inspect", () => {
                    inspect(target)
                });
            }


        }
    });

    document.addEventListener("click", (event) => {
        let closing = isChildOf({class: event.target, id: "contextMenu"});
        if (!closing) {
            contextMenu.style.display = "none";
        }
    });
}

// Different functions from the context menu


// Helper Functions Down Below

/**
 * Checks if the element is a child of a specific id or class
 * @param {EventTarget} child
 * @param {string|undefined} id
 * @param {string|undefined} cls
 * @return {boolean}
 */
function isChildOf({child, id = undefined, cls = undefined}) {
    if (id) {
        if (child && child.id && child.id === id) return true;
        let node = child;
        while (node) {
            if (node.parentElement) {
                if (node && node.id && node.id === id) {
                    return true;
                }
                node = node.parentElement;
            } else {
                break;
            }
        }
    }
    if (cls) {
        //console.log(`current: ${child} class: ${child.classList.value} contains: ${child.classList.value.includes(cls)}`);
        if (child.classList && child.classList.value && child.classList.value.includes(cls)) return true;
        let node = child;
        while (node) {
            if (node.parentElement) {
                //console.log(`parent: ${node.parentElement} class: ${node.parentElement.classList.value} contains: ${node.classList.value.includes(cls)}`);
                if (node.classList && node.classList.value && node.classList.value.includes(cls)) {
                    return true;
                }
                node = node.parentElement;
            } else {
                break;
            }
        }
    }
    return false;


}

/**
 * Returns the element or the parent element that matches the target id or class
 * @param {EventTarget} child
 * @param {string|undefined} id
 * @param {string|undefined} cls
 * @return {HTMLElement|undefined}
 */
function getParentOf({child, id = undefined, cls = undefined}) {
    if (id) {
        if (child && child.id && child.id === id) return child;
        let node = child;
        while (node) {
            if (node.parentElement) {
                if (node && node.id && node.id === id) {
                    return node;
                }
                node = node.parentElement;
            } else {
                break;
            }
        }
    }
    if (cls) {
        //console.log(`current: ${child} class: ${child.classList.value} contains: ${child.classList.value.includes(cls)}`);
        if (child.classList && child.classList.value && child.classList.value.includes(cls)) return child;
        let node = child;
        while (node) {
            if (node.parentElement) {
                //console.log(`parent: ${node.parentElement} class: ${node.parentElement.classList.value} contains: ${node.classList.value.includes(cls)}`);
                if (node.classList && node.classList.value && node.classList.value.includes(cls)) {
                    return node;
                }
                node = node.parentElement;
            } else {
                break;
            }
        }
    }
    return undefined;
}

/**
 * Checks if the element is a child of a specific class
 * @param child
 * @param cls
 */
function isChildOfClass(child, cls) {

}

/**
 *
 * @param {string} img
 * @param {string} label
 * @param {Function} f
 */
function createMenuOption(img, label, f) {
    const tempBtn = document.createElement("button");
    const tempImg = document.createElement("img");
    const tempP = document.createElement("p");

    tempImg.id = `contextOption${label}Img`;
    // tempImg.alt = `${label}Img`;
    tempImg.src = `${img}`;

    tempP.id = `contextOption${label}Label`;
    tempP.innerHTML = label;

    tempBtn.id = `contextOption${label}`;
    tempBtn.append(tempImg);
    tempBtn.append(tempP);
    tempBtn.onclick = () => {
        f();
        closeMenu();
    };

    contextMenu.append(tempBtn);
}

function createMenuHr() {
    const tempHr = document.createElement('hr');
    contextMenu.append(tempHr);
}

// Functions for

function closeMenu() {
    if (contextMenu) contextMenu.style.display = "none";
}

function inspect() {
    console.log("Unfortunatly I cannot open the inspect window");
    // element.dispatchEvent(new Event("click"));
}

/**
 *
 * @param {HTMLElement} element
 */
function open(element) {
    element.click();
}

function close(element) {

}