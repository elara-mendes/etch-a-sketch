const gridContainer = document.querySelector(".container");

function createGrid(size) {
    const totalSquares = size * size;    

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        const baseRGB = getRandomRGB();
        square.dataset.rgbBase = baseRGB;

        square.addEventListener('mouseover', () => {
            let opacity = Number(square.dataset.opacity) || 0;
            if (opacity < 1) {
                opacity += 0.5;
                square.dataset.opacity = opacity;
                square.style.backgroundColor = toRGBA(square.dataset.rgbBase, opacity);
    }
        });

        gridContainer.append(square);
    }
    
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function toRGBA(rgb, opacity) {
    return rgb.replace("rgb", "rgba").replace(")", `, ${opacity})`);
}

createGrid(32);
