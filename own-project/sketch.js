var ball,ballImg;
var person,personImg;
var line,lineImg;

function preload()
{
	ballImg = loadImage("ball.png");
	personImg = loadImage("person.png")
	lineImg = loadImage("line.png")
}

function setup() {
	createCanvas(400,400);

	ball = createSprite(200,375,45,45);
	ball.addImage("ball",ballImg);
	ball.scale = 0.3

	person = createSprite(200,125,60,90);
	person.addImage("person",personImg);
	person.scale = 0.7;
	
	line = createSprite(200,55,400,1);
	line.addImage("line",lineImg);
	line.scale = 1.5;
}


function draw() {
  rectMode(CENTER);
  background(0);
  
if(keyIsDown(RIGHT_ARROW)){
	person.x = person.x + 7;
  }

if(keyIsDown(LEFT_ARROW)){
	person.x = person.x - 7;
  }

  drawSprites();
}


//This much is done so far