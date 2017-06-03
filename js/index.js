//Inits
var x, y, ballSize;
var h = window.innerHeight;
var w = window.innerWidth;
var circleTimer = 0;
var scaleCounter = 1;




function preload() {  
	
}




function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
   ellipseW = random(100,200);
   ellipseH = random(100,200);
   ellipseX = random(w);
   ellipseY = random(h);




}


function draw() {
	background(0, 0, 0);


	
	circleTimer = circleTimer + 1;


     
    translate(w/2, h/2);

    scaleCounter = scaleCounter - 0.1;
	scale(scaleCounter,scaleCounter);


   ellipse(ellipseX, ellipseY, ellipseW, ellipseH);


	if (ellipseW < 2 || ellipseH < 2) {

		ellipseW = random(100,200);
   		ellipseH = random(100,200);
   		ellipseX = random(w);
   		ellipseY = random(h);

	}




	drawSprites();


}











/////Functions used in game//////
function brickCollision(ball,brick) {
    corkPop.play();
	brick.remove();
	background(0);
	numberColor = 1;
	score = score + 1;
}

function makeBall() {

	ball = createSprite(width / 2, height / 2, ballSize, ballSize);
	ball.setSpeed(ballSpeed, random(90 - 45, 90 + 45));
	ball.addAnimation("moving","assets/gradient1.png");
	ball.changeAnimation("moving");
	ball.scale = 0.10;

}

function displayText() {

 textSize(32);
 fill(255);
 //Write score in bottom left
 text(score, 10, h-10);
 //Write amount of balls used in bottom right
 text(ballsUsed, w-40,h-10);


}





