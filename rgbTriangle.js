const triangleSpeed = 12;

let triangleIcon = document.getElementById('triangle-icon');

let mousePos = [0,0];
document.addEventListener('mousemove', function(mouse) {
    mousePos[0] = mouse.clientX;
    mousePos[1] = mouse.clientY;
});

let iFrame = document.getElementById('game');
iFrame.addEventListener('load', function() {
    let iFrameDocument = iFrame.contentDocument;
    iFrameDocument.addEventListener('mousemove', function(mouse) {
        mousePos[0] = iFrame.getBoundingClientRect().left + mouse.clientX;
        mousePos[1] = iFrame.getBoundingClientRect().top + mouse.clientY;
    });
});

function triangleBounce(shape, shapeId)
{
    let bounceId = setInterval(function() {
        if(mousePos[0] >= shape.getBoundingClientRect().width &&
        mousePos[0] <= window.innerWidth - shape.getBoundingClientRect().width &&
        mousePos[1] >= shape.getBoundingClientRect().height &&
        mousePos[1] <= window.innerHeight - shape.getBoundingClientRect().height)
        {
            if(shape.getBoundingClientRect().left <= 0 ||
            shape.getBoundingClientRect().right >= window.innerWidth ||
            shape.getBoundingClientRect().top <= navbarBottom ||
            shape.getBoundingClientRect().bottom >= window.innerHeight)
            {
                let triangleCenter = [
                    shape.getBoundingClientRect().left + shape.getBoundingClientRect().width/2,
                    shape.getBoundingClientRect().top + shape.getBoundingClientRect().height/2,
                ];

                let angleBetween = Math.atan2(triangleCenter[1] - mousePos[1], triangleCenter[0] - mousePos[0]) * (180 / Math.PI) + 180;

                shapeAngle[`${shapeId}`][0] = triangleSpeed * Math.cos(angleBetween * (Math.PI / 180));
                shapeAngle[`${shapeId}`][1] = triangleSpeed * Math.sin(angleBetween * (Math.PI / 180));
            }
        }
        else
        {
            if(shape.getBoundingClientRect().left <= 0 || shape.getBoundingClientRect().right >= window.innerWidth)
            {
                shapeAngle[`${shapeId}`][0] *= -1;
            }
            if(shape.getBoundingClientRect().top <= navbarBottom || shape.getBoundingClientRect().bottom >= window.innerHeight)
            {
                shapeAngle[`${shapeId}`][1] *= -1;
            }
        }
    }, interval);

    shapeAngle[`${shapeId}`][3] = bounceId;
}

triangleIcon.addEventListener('click', function() {
    let newtriangle = createShape('tri');

    initialAngle(triangleSpeed);
    moveShape(newtriangle, shapeinstanceCount);
    triangleBounce(newtriangle, shapeinstanceCount);
    removeShape(newtriangle, shapeinstanceCount);
    setColor(newtriangle);

    shapeinstanceCount++;
    document.body.appendChild(newtriangle);
});
