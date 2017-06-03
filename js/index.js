//Inits
var h = window.innerHeight;
var w = window.innerWidth;





function preload() {  
	
}




function setup() {

   createCanvas(window.innerWidth, window.innerHeight);

   ellipseW = 300;

   ellipse1X = random(w);
   ellipse1Y = random(h);

   ellipse2X = random(w);
   ellipse2Y = random(h);

   ellipse3X = random(w);
   ellipse3Y = random(h);

  playerFill = random(1,4);


}


function draw() {
	background(0, 0, 0);


	


    fill(0,0,255);
    ellipse(ellipse1X, ellipse1Y, ellipseW,ellipseW);

	fill(0,255,0);
    ellipse(ellipse2X, ellipse2Y, ellipseW,ellipseW);

	fill(255,0,0);
	ellipse(ellipse3X, ellipse3Y, ellipseW,ellipseW);



	if (playerFill == 1) {
		fill(255,0,0);
	}

	if (playerFill == 2) {
		fill(0,255,0);
	}

	if (playerFill == 3) {
		fill(0,0,255);
	}

	playerEllipse = ellipse(mouseX,mouseY,30,30);



    ellipseW = ellipseW - 2.5;
 

	if (ellipseW < 50){

		ellipseW = random(150,300);
		
   		ellipse1X = random(w);
   		ellipse1Y = random(h);

   		ellipse2X = random(w);
   		ellipse2Y = random(h);
		
   		ellipse3X = random(w);
   		ellipse3Y = random(h);

   		playerFill = floor(random(1,4));

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





