const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const rgbInput = document.getElementById("rgbInput");
const hexInput = document.getElementById("hexInput");
const colorPicker = document.getElementById("colorPicker");

const colorPreview = document.getElementById("colorPreview");
const hexDisplay = document.getElementById("hexDisplay");

function update(r, g, b) {
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorPreview.style.background = rgb;

    rgbInput.value = `${r}, ${g}, ${b}`;

    const hex = "#" + [r, g, b].map(x =>
        x.toString(16).padStart(2, "0")
    ).join("").toUpperCase();

    hexInput.value = hex;
    colorPicker.value = hex;
    hexDisplay.textContent = hex;
}

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    return [
        parseInt(hex.slice(0,2),16),
        parseInt(hex.slice(2,4),16),
        parseInt(hex.slice(4,6),16)
    ];
}

[red, green, blue].forEach(slider =>
    slider.addEventListener("input", () =>
        update(+red.value, +green.value, +blue.value)
    )
);

colorPicker.addEventListener("input", () => {
    const [r,g,b] = hexToRgb(colorPicker.value);
    red.value = r; green.value = g; blue.value = b;
    update(r,g,b);
});

hexInput.addEventListener("input", () => {
    if (/^#?[0-9A-Fa-f]{6}$/.test(hexInput.value)) {
        const [r,g,b] = hexToRgb(hexInput.value);
        red.value = r; green.value = g; blue.value = b;
        update(r,g,b);
    }
});

update(0,0,0);