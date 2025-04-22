// Initialize popovers
const popoverTrigger = document.getElementById('device');
const popover = new bootstrap.Popover(popoverTrigger);

// Credit: w3schools
function getRandomInt(oldNum, min, max)
{
    let newNum;

    do
    {
        newNum = Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    while(newNum == oldNum);

    return newNum;
}

// A random cat face emoji shows up inside a popover every time the user hovers over the device emoji on the left corner of the toolbar
let newEmoji = 0;
popoverTrigger.addEventListener('mouseover', function() {
    newEmoji = getRandomInt(newEmoji, 128568, 128576);
    popover.setContent({'.popover-body': String.fromCodePoint(newEmoji)});
});
