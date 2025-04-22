// This script is used to randomize the font used by the title in the navigation bar of the page
let title = document.getElementById('navbar-title');

const fonts = [
    "'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif",
    "'Helvetica Neue', Helvetica, sans-serif",
    "'Avant Garde', Avantgarde, sans-serif",
    "Impact, Haettenschweiler, 'Arial Black', sans-serif",
    "Baskerville, 'Baskerville Old Face', 'Times New Roman', serif",
    "'Rockwell Extra Bold', Rockwell, serif",
    "'Goudy Old Style', Garamond, serif",
    "Copperplate, 'Copperplate Gothic Light', fantasy",
    "Papyrus, fantasy",
    "'Comic Sans MS', cursive"
];

const fontsLen = fonts.length;
let newAndPrevFont = [0,0]

// This function prevents the same font from being selected two times in a row
function getRandIndex(newAndPrev, len)
{
    while(newAndPrev[0] == newAndPrev[1])
    {
        newAndPrev[0] = Math.floor(Math.random() * len);
    }

    newAndPrev[1] = newAndPrev[0];

    return newAndPrev[0];
}

const intervalLen = 100;

let IntervalId;

// A new font is selected periodically while the cursor hovers over the text element
title.addEventListener("mouseover", function() {
    IntervalId = setInterval(function() {
        title.style.fontFamily = fonts[getRandIndex(newAndPrevFont, fontsLen)];
    }, intervalLen);
});

// The font stops changing when the mouse is removed
title.addEventListener("mouseout", function() {
    clearInterval(IntervalId);
    title.style.fontFamily = document.body.style.fontFamily
});
