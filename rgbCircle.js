// Universal
let shapeinstanceCount = 0;
let shapeAngle = {};
let navbarBottom = parseFloat(window.getComputedStyle(document.getElementById('navbar')).height);
const interval = 1000 / 60;

// Specific
const circleSpeed = 10;

let circleIcon = document.getElementById('circle-icon');

function createShape(filename)
{
    const newShape = document.createElement('img');

    // Attributes
    newShape.src = `https://gabriellessade.github.io/${filename}.svg`
    newShape.draggable = 'false';
    newShape.className = 'unselectable shapes';
    newShape.id = `shape${shapeinstanceCount}`;

    // Properties
    newShape.style.width = window.screen.width * 0.03 + 'px';

    return newShape;
}

function setColor(shape)
{
    shape.style.filter = `hue-rotate(${120 * (Math.floor(Math.random() * 3))}deg)`;
}

function initialAngle(speed)
{
    let randomAng = Math.floor(Math.random() * 361) * (Math.PI / 180);
    shapeAngle[`${shapeinstanceCount}`] = [Math.cos(randomAng) * speed, Math.sin(randomAng) * speed];
}

function moveShape(shape, shapeId)
{
    let moveId = setInterval(function() {
        shape.style.left = parseFloat(window.getComputedStyle(shape).left) + shapeAngle[`${shapeId}`][0] + 'px';
        shape.style.top = parseFloat(window.getComputedStyle(shape).top) + shapeAngle[`${shapeId}`][1] + 'px';
    }, interval)

    shapeAngle[`${shapeId}`][2] = moveId;
}

function circleBounce(shape, shapeId)
{
    let bounceId = setInterval(function() {
        if(shape.getBoundingClientRect().left <= 0 || shape.getBoundingClientRect().right >= window.innerWidth)
        {
            shapeAngle[`${shapeId}`][0] *= -1;
        }
        if(shape.getBoundingClientRect().top <= navbarBottom || shape.getBoundingClientRect().bottom >= window.innerHeight)
        {
            shapeAngle[`${shapeId}`][1] *= -1;
        }
    }, interval);

    shapeAngle[`${shapeId}`][3] = bounceId;
}

function removeShape(shape, shapeId)
{
    shape.addEventListener('mouseover', function(){
        clearInterval(shapeAngle[`${shapeId}`][2]);
        clearInterval(shapeAngle[`${shapeId}`][3]);
        document.body.removeChild(document.getElementById(`shape${shapeId}`));
    });
}

circleIcon.addEventListener('click', function() {
    let newCircle = createShape('cir');

    initialAngle(circleSpeed);
    moveShape(newCircle, shapeinstanceCount);
    circleBounce(newCircle, shapeinstanceCount);
    removeShape(newCircle, shapeinstanceCount);
    setColor(newCircle);

    shapeinstanceCount++;
    document.body.appendChild(newCircle);
});
