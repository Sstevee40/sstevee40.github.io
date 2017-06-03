//Inits
var h = window.innerHeight;
var w = window.innerWidth;
var playerDist = 10;
var score = 0;




function preload() {  
	
}




function setup() {

   createCanvas(window.innerWidth, window.innerHeight);

   ellipseW = 300;

   ellipse1X = random(100, w-100);
   ellipse1Y = random(100, h-100);

   ellipse2X = random(100, w-100);
   ellipse2Y = random(100, h-100);

   ellipse3X = random(100,w-100);
   ellipse3Y = random(100, h-100);

  playerFill = floor(random(1,4));


}


function draw() {
	background(0, 0, 0);


strokeWeight(4);
noFill();

  	stroke(255,0,0);
    ellipse(ellipse1X, ellipse1Y, ellipseW,ellipseW);

	stroke(0,255,0);
    ellipse(ellipse2X, ellipse2Y, ellipseW,ellipseW);

	stroke(0,0,255);
	ellipse(ellipse3X, ellipse3Y, ellipseW,ellipseW);



	if (playerFill == 1) {
		fill(255,0,0);
		playerDist = dist(ellipse1X,ellipse1Y,mouseX,mouseY);
	}

	if (playerFill == 2) {
		fill(0,255,0);
		playerDist = dist(ellipse2X,ellipse2Y,mouseX,mouseY);
	}

	if (playerFill == 3) {
		fill(0,0,255);
		playerDist = dist(ellipse3X,ellipse3Y,mouseX,mouseY);
	}

	noStroke();

	playerEllipse = ellipse(mouseX,mouseY,30,30);



    ellipseW = ellipseW - 2.5;
 





	if (ellipseW < 32){


		ellipseW = random(200,300);
		
   ellipse1X = random(100, w-100);
   ellipse1Y = random(100, h-100);

   ellipse2X = random(100, w-100);
   ellipse2Y = random(100, h-100);

   ellipse3X = random(100,w-100);
   ellipse3Y = random(100, h-100);

   		playerFill = floor(random(1,4));

		if (playerDist < 12) {
   			score = score + 1;
   		}

   		else {
   			score = 0;
   		}


	}




	drawSprites();
	displayText();

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
 text(score, 10, 30);



}





