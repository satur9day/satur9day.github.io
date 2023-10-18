/* */
var satur9day = document.createElement('a');
satur9day.href = '/index.html'
satur9day.innerHTML = 'satur9day';
satur9day.style.color = 'black';
satur9day.id = 'av';
satur9day.style.textDecoration = 'none';
satur9day.style.textShadow = '0 0 20px #fff, 0 0 30px #421CC7, 0 0 40px #421CC7, 0 0 50px #421CC7, 0 0 60px #421CC7, 0 0 70px #421CC7, 0 0 80px #421CC7';
satur9day.style.position = 'absolute';
satur9day.style.zIndex = '1';
satur9day.style.top = '25%';
satur9day.style.left = '50%';
satur9day.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
satur9day.style.transition = 'transform 1s linear';
satur9day.style.fontFamily = 'Visby Round CF';
document.body.appendChild(satur9day);
var angle = 0;
var angleIncrement = 0.1;
var angleIncrementIncrement = 0.001;
var angleIncrementMax = 0.1;
var angleIncrementMin = 0.001;
var angleIncrementDirection = 1;
function rotateSatur9day() {
  angle += angleIncrement;
  satur9day.style.transform = 'translate(-50%, -50%) rotateX(' + angle + 'deg) rotateY(' + angle + 'deg) rotateZ(' + angle + 'deg)';
  angleIncrement += angleIncrementIncrement * angleIncrementDirection;
  if (angleIncrement > angleIncrementMax) {
    angleIncrementDirection = -1;
  } else if (angleIncrement < angleIncrementMin) {
    angleIncrementDirection = 1;
  }
  requestAnimationFrame(rotateSatur9day);
}
rotateSatur9day();
/* Make "satur9day" spin faster */
angleIncrementIncrement = 0.01;
/* Make "satur9day" spin 5 times faster */
angleIncrementIncrement = 0.5;
/* Make "satur9day" bigger */
satur9day.style.fontSize = '100px';


//Particle stuff
var particlesEnabled = true;

function resetParticles() {
    // 	particleCount = W/15;
    // 	if (particleCount > 150) {
    // 		particleCount = 150;

    // }
    currentParticles = defaultParticles;
    // particles = [];
    // for (var i = 0; i < particleCount; i++) {
    // particles.push(new Particle());
    // }
}

function setParticles(scheme) {
    currentParticles = scheme;
}
/*
function toggleParticles () {
    particlesEnabled = !particlesEnabled;
    if (particlesEnabled == false) {
    document.getElementById ("toggle").innerHTML = "Particles Off";
    particleCount = 0;
    resetParticles (false);
    } else {
        resetParticles (true);
        document.getElementById ("toggle").innerHTML = "Particles On";
    }
} 

function addElement(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
*/
document.getElementById("av").onmouseenter = function () {
    state = 1;
};

document.getElementById("av").onmouseleave = function () {
    state = 0;
};

// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var canvas = document.getElementById("canvas");

var offset = 0;
var offsetY = 0;

var state = 0;
var defaultParticles = ["rgba(45,253,255, 1)", "rgba(0,69,255, 1)", "rgba(145,0,255, 1)", "rgba(64,64,255, 1)", "rgba(64,64,255, 1)", "rgba(64,64,255, 1)", "rgba(64,64,255, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)"];
//var goldParticles = ["rgba(248,241,48, 1)", "rgba(248,241,48, 1)", "rgba(248,241,48, 1)", "rgba(255,160,157, 1)", "rgba(255,160,157, 1)", "rgba(255,101,178, 1)", "rgba(255,101,178, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)"];

var goldParticles = ["rgba(248,241,48, 1)", "rgba(248,241,48, 1)", "rgba(248,241,48, 1)", "rgba(64,64,255, 1)", "rgba(0,0,255, 1)", "rgba(255,0,0, 1)", "rgba(64,64,255, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)"];
var pinkParticles = ["#FF5697", "#FF5697", "#FFA0D8", "#FF5697", "#FFA0D8", "#FFD6DA", "#FF5697", "#FFECA5"];
var planetoneParticles = ["#2FFF4F", "#2B0F72", "#2B0F72", "#B200C9", "#00FF34", "#00FF34", "#8400FF", "#8400FF"];
var rainbowParticles = ["#2FB2FF", "#5A2FFF", "#FF2F7C", "#F8FF2F", "#4EFF2F", "#FFB22F", "#2FFFF2", "#2F3BFF"];
var neutralParticles = ["#360BAA", "#360BAA", "#360BAA", "#360BAA", "#360BAA", "#360BAA", "#360BAA", "#360BAA"];
var aquaParticles = ["#38DB82", "#157DE1", "#157DE1", "#5551D9", "#38DB82", "#56FCF3", "#FF7CA2", "#2D6885"];
var diamondParticles = ["#00FF8B", "#C7FAFF", "#0058FF", "#0058FF", "#3AFFB6", "#37099E", "#37099E", "#37099E"];
var ssParticles = ["#008EFF", "#008EFF", "#008EFF", "#008EFF", "#FF008C", "#FF008C", "#B5CFE2", "#39F27F"];
var greenParticles = ["#68FF21", "#004757", "#5E3394", "#81FF46", "#0EDC6D", "#8E0EDC", "#4A5063", "#018134"];

var currentParticles = ["rgba(45,253,255, 1)", "rgba(0,69,255, 1)", "rgba(145,0,255, 1)", "rgba(64,64,255, 1)", "rgba(64,64,255, 1)", "rgba(64,64,255, 1)", "rgba(64,64,255, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)", "rgba(0,0,0, 1)"];

// Initialize the context of the canvas
var ctx = canvas.getContext("2d");

// Set the canvas width and height to occupy full window
var W = window.innerWidth, H = window.innerHeight;
canvas.width = W;
canvas.height = H;

// Some variables for later use
var particleCount = W / 15,
    particles = [],
    minDist = 1,
    dist;

if (particleCount > 180) {
    particleCount = 180;
}


// Function to paint the canvas 
function paintCanvas() {
    if (state != 3) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

}

function Particle() {

    this.x = Math.random() * W;
    this.y = Math.random() * H;

    // This controls the horizontal velocity of particles; keeping it random for some variation.
    this.vx = (Math.random() - 0.5) * 0.5;

    // Vertical velocity; negative value to move upwards. Adjust this value to control speed.
    this.vy = -1.5;

    this.radius = remap(Math.random(), 0, 1, 1, 4);

    this.draw = function () {

        ctx.fillStyle = currentParticles[getRandomInt(9)];

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

for (var i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}


function draw() {

    if (particlesEnabled) {
        paintCanvas();

        for (var i = 0; i < particles.length; i++) {
            p = particles[i];
            p.draw();
        }

        //Finally call the update function
        update();
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function remap(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


// Give every particle some life
function update() {

    for (var i = 0; i < particles.length; i++) {
        p = particles[i];

        // Update particle's position based on its velocity.
        p.x += p.vx;
        p.y += p.vy;

        // If the particle goes beyond the canvas boundaries, reposition it to the bottom.
        if (p.y < -10) {
            p.y = H + 10;
            p.x = Math.random() * W;
        }
    }
}
/*
// Distance calculator between two particles
function distance(p1, p2) {
    var dist,
        dx = p1.x - p2.y,
        dy = p1.y - p2.x;
	
    dist = Math.sqrt(dx*dx + dy*dy);
        	
    if(dist <= minDist) {

        var ax = dx/10000,
            ay = dy/10000;
    	
        // Apply the acceleration on the particles
        p1.vx -= ax;
        p1.vy -= ay/10000;
        	
        p2.vx += ax/1000;
        p2.vy += ay/1000;
    
    }
}
*/
// Start the main animation loop using requestAnimFrame
function animloop() {
    draw();
    requestAnimFrame(animloop);
}

animloop();

$(document).ready(function () {
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
});
