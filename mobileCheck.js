// a function that checks if the user's device has touch support and the user agent included in their browser's requests to determine if they are using a desktop or mobile device. Not a comprehensive approach by any means, but reliable enough for this use case
// Credit: Stephanie Zhan on Medium
function isMobile()
{
    return navigator.maxTouchPoints > 0 && /Android|iPhone/i.test(navigator.userAgent);
}

let deviceEmoji = document.getElementById('device');

// A phone emoji will show up on the toolbar if the user is on a mobile device, and a computer emoji if they're on desktop
if(isMobile())
{
    deviceEmoji.innerHTML = "📱";
}
