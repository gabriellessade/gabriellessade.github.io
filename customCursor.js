const animationInterval = 1000 / 12;

let cursorNumOfFrames = [
    11,
    1,
    1,
    16,
    21,
    8
]

let currentCursor = 0;
let currentFrame = 0;
const rootStyle = document.documentElement.style;

let cursorAnimationId;
function setCursor(cursorId){
    if(cursorNumOfFrames[cursorId] > 1)
    {
        cursorAnimationId = setInterval(function(){
            rootStyle.cursor = `url(https://gabriellessade.github.io/cursor_${cursorId}/frame_${currentFrame % cursorNumOfFrames[cursorId]}.png), wait`;

            currentFrame++;
        }, animationInterval);
    }
    else
    {
        rootStyle.cursor = `url(https://gabriellessade.github.io/cursor_${cursorId}.png), wait`;
    }
};

document.addEventListener('mousedown', function(event) {
    if (event.button === 1) {
        clearInterval(cursorAnimationId);
        currentCursor++;
        currentFrame = 0;
        setCursor(currentCursor % cursorNumOfFrames.length);
    };
});

let fakeAnchor = document.getElementById('fake-anchor');
fakeAnchor.addEventListener('click', function(){
    event.preventDefault();

    clearInterval(cursorAnimationId);
    currentCursor++;
    currentFrame = 0;
    setCursor(currentCursor % cursorNumOfFrames.length);
});

setCursor(currentCursor);
