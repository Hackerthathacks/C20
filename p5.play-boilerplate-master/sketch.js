var fixedRect;
var movingRect;

function setup() {
  createCanvas(1500,1500);
  movingRect = createSprite(400, 200, 200, 200);
movingRect.shapeColor = "blue";

fixedRect = createSprite(700,400,200,300)
fixedRect.shapeColor = "blue";


}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;

  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 && 
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2) {


      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    }

    else{
      fixedRect.shapeColor="blue";
      movingRect.shapeColor = "blue";

    }


    

  drawSprites();
}