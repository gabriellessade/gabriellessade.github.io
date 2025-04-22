const squareSpeed = 8;

let squareIcon = document.getElementById('square-icon');

function squareSetColor(shape, shapeId)
{
    let initialColor = Math.floor(Math.random() * 3);
    shape.style.filter = `hue-rotate(${120 * initialColor}deg)`;
    shapeAngle[`${shapeId}`][4] = initialColor;
}

function squareBounce(shape, shapeId)
{
    let bounceId = setInterval(function() {
        if(shape.getBoundingClientRect().left <= 0 || shape.getBoundingClientRect().right >= window.innerWidth)
        {
            shapeAngle[`${shapeId}`][0] *= -1;
            shape.style.filter = `hue-rotate(${120 * ((++shapeAngle[`${shapeId}`][4]) % 3) }deg)`;
        }
        if(shape.getBoundingClientRect().top <= navbarBottom || shape.getBoundingClientRect().bottom >= window.innerHeight)
        {
            shapeAngle[`${shapeId}`][1] *= -1;
            shape.style.filter = `hue-rotate(${120 * ((++shapeAngle[`${shapeId}`][4]) % 3) }deg)`;
        }
    }, interval);

    shapeAngle[`${shapeId}`][3] = bounceId;
}

squareIcon.addEventListener('click', function() {
    let newSquare = createShape('qua');

    initialAngle(squareSpeed);
    moveShape(newSquare, shapeinstanceCount);
    squareBounce(newSquare, shapeinstanceCount);
    removeShape(newSquare, shapeinstanceCount);
    squareSetColor(newSquare, shapeinstanceCount);

    shapeinstanceCount++;
    document.body.appendChild(newSquare);
});
