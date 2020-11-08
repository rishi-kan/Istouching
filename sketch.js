var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(600,200,80,50);
  fixedRect.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
  movingRect.debug=true;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}
