let iframe = document.getElementById('game');
iframe.addEventListener('load', function() {
    let iframeDocument = iframe.contentDocument;

    let graphics = iframeDocument.querySelectorAll('canvas');
    graphics.forEach(function(node) {
        node.getContext('2d', { willReadFrequently: true });
    });

    iframe.style.width = window.screen.availWidth * 0.4 + 'px';
    iframe.style.height = window.screen.availWidth * 0.3 + 'px';
});

document.getElementById('instructions').style.width = window.screen.availWidth * 0.3 + 'px';

let gameTitle = document.getElementsByClassName('game-div')[0].querySelector('h1').querySelector('span');

let hueDeg = 0;
let hueId;
let intervalHue = 1000/30;

hueId = setInterval (function(){
    hueDeg++;
    gameTitle.style.filter = `hue-rotate(${hueDeg}deg)`
}, intervalHue);

gameTitle.addEventListener('click', function() {
    window.open('https://scratch.mit.edu/projects/953529023/');
});


