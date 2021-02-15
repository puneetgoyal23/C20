var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(700, 200, 50, 80);
  movingRect= createSprite(50, 200, 80, 30);
  movingRect.velocityX=12;
  
}

function draw() {
  background(255,255,255);  
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  movingRect.velocityX=-1*12;
}

else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
