let blinkingTitle = document.getElementById('under-construction-title').querySelector('h1');

const blinkInterval = 500;
let blinkId = setInterval(function(){
    blinkingTitle.classList.toggle('blink');
}, blinkInterval);
