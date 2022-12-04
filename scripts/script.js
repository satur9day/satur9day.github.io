/* Make the text "satur9day" in black, with a green glow. Have it spin around the screen in 3d. */
var satur9day = document.createElement('div');
satur9day.innerHTML = 'satur9day';
satur9day.style.color = 'black';
satur9day.style.textShadow = '0 0 20px #fff, 0 0 30px #45ff33, 0 0 40px #45ff33, 0 0 50px #45ff33, 0 0 60px #45ff33, 0 0 70px #45ff33, 0 0 80px #45ff33';
satur9day.style.position = 'absolute';
satur9day.style.top = '50%';
satur9day.style.left = '50%';
satur9day.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
satur9day.style.transition = 'transform 1s linear';
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
/* make the background black */
document.body.style.backgroundColor = 'black';
/* make the glow more bright */
/* add many stars made from "*" at random positions in the background. the stars will shine every few seconds */
var stars = [];
var starCount = 100;
var starSize = '10px';
var starColor = 'white';
var starShineInterval = 1000;
var starShineDuration = 100;
var starShineOpacity = 0.5;
var starShineOpacityIncrement = 0.1;
var starShineOpacityIncrementDirection = 1;
function createStar() {
  var star = document.createElement('div');
  star.innerHTML = '*';
  star.style.position = 'absolute';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.fontSize = starSize;
  star.style.color = starColor;
  star.style.opacity = 0;
  document.body.appendChild(star);
  stars.push(star);
}
function shineStar(star) {
  star.style.opacity = starShineOpacity;
  starShineOpacity += starShineOpacityIncrement * starShineOpacityIncrementDirection;
  if (starShineOpacity > 1) {
    starShineOpacityIncrementDirection = -1;
  } else if (starShineOpacity < 0) {
    starShineOpacityIncrementDirection = 1;
  }
}
function shineStars() {
  stars.forEach(shineStar);
  setTimeout(shineStars, starShineInterval);
}
for (var i = 0; i < starCount; i++) {
  createStar();
}
shineStars();
/* make the text "satur9day" always be in the foreground above the stars */
satur9day.style.zIndex = 1;

var comingSoon = document.createElement('div');
comingSoon.innerHTML = 'coming soon';
comingSoon.style.position = 'fixed';
comingSoon.style.bottom = '50px';
comingSoon.style.left = '0';
comingSoon.style.right = '0';
comingSoon.style.textAlign = 'center';
comingSoon.style.fontSize = '40px';
comingSoon.style.color = 'white';
document.body.appendChild(comingSoon);

comingSoon.style.textShadow = '0 0 20px #fff, 0 0 30px #FFFFFF, 0 0 40px #FFFFFF';
comingSoon.style.transition = 'text-shadow 1s linear';
function glowComingSoon() {
  comingSoon.style.textShadow = '0 0 20px #fff, 0 0 30px #FFFFFF, 0 0 40px #FFFFFF';
  setTimeout(function() {
    comingSoon.style.textShadow = '0 0 0px white';
  }, 1000);
  setTimeout(glowComingSoon, 2000);
}
glowComingSoon();