var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(600,500,80,40);
  fixedRect=createSprite(400,500,40,80);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="green";
  movingRect.velocityX=-5;
  fixedRect.velocityX=5;
}

function draw() {
  background(0);
  
 
bounceOff(movingRect,fixedRect);
  drawSprites();
}

