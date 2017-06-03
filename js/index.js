//Inits
var h = window.innerHeight;
var w = window.innerWidth;

var circleTimer = 0;
var scaleCounter = 1;




function preload() {  
	
}




function setup() {

   createCanvas(window.innerWidth, window.innerHeight);

   ellipse1W = random(100,200);
   ellipse1H = random(100,200);
   ellipse1X = random(w);
   ellipse1Y = random(h);

   ellipse2W = random(100,200);
   ellipse2H = random(100,200);
   ellipse2X = random(w);
   ellipse2Y = random(h);

   ellipse3W = random(100,200);
   ellipse3H = random(100,200);
   ellipse3X = random(w);
   ellipse3Y = random(h);





}


function draw() {
	background(0, 0, 0);


	


    fill(0,0,255);
    ellipse(ellipse1X, ellipse1Y, ellipse1W,ellipse1W);

	fill(0,255,0);
    ellipse(ellipse2X, ellipse2Y, ellipse2W,ellipse2W);

	fill(255,0,0);
	ellipse(ellipse3X, ellipse3Y, ellipse3W,ellipse3W);



    ellipse1W = ellipse1W - 1;
 	ellipse2W = ellipse2W - 1;
 	ellipse3W = ellipse3W - 1;


	if ((ellipse1W < 20 || ellipse1H < 20) || (ellipse2W < 20 || ellipse2H < 20) || (ellipse3W < 20 || ellipse3H < 20)) {

		ellipse1W = random(100,200);
   		ellipse1H = random(100,200);
   		ellipse1X = random(w);
   		ellipse1Y = random(h);

		ellipse2W = random(100,200);
   		ellipse2H = random(100,200);
   		ellipse2X = random(w);
   		ellipse2Y = random(h);

		ellipse3W = random(100,200);
   		ellipse3H = random(100,200);
   		ellipse3X = random(w);
   		ellipse3Y = random(h);

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





