var player;
var o1,o2,o3,o4,o5;
var wall1,wall2,wall3,wall4;
var end=false;

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  player=createSprite(windowWidth/2,windowHeight/2,windowWidth/15,windowWidth/15);
  player.shapeColor=rgb(0,0,0);

  o1=createSprite(100,100,windowWidth/25,windowWidth/25);
  o1.shapeColor=rgb(200,200,0);
  o2=createSprite(100,100,windowWidth/25,windowWidth/25);
  o2.shapeColor=rgb(200,200,0);
  o3=createSprite(200,200,windowWidth/25,windowWidth/25);
  o3.shapeColor=rgb(200,200,0);
  o4=createSprite(300,300,windowWidth/25,windowWidth/25);
  o4.shapeColor=rgb(200,200,0);
  o5=createSprite(400,400,windowWidth/25,windowWidth/25);
  o5.shapeColor=rgb(200,200,0);

  wall1=createSprite(windowWidth/2,0,windowWidth,50);
  wall2=createSprite(windowWidth/2,windowHeight,windowWidth,50);
  wall3=createSprite(0,windowHeight/2,50,windowHeight);
  wall4=createSprite(windowWidth,windowHeight/2,50,windowHeight);
}

function draw() {
  background(255,0,0);  

  player.x=mouseX;
  player.y=mouseY;

  wall1.x=windowWidth/2;
  wall1.y=0;
  wall2.x=windowWidth/2;
  wall2.y=windowHeight;
  wall3.x=0;
  wall3.y=windowHeight/2;
  wall4.x=windowWidth;
  wall4.y=windowHeight/2;

  o1.bounceOff(o2);
  o1.bounceOff(o3);
  o1.bounceOff(o4);
  o1.bounceOff(o5);
  o2.bounceOff(o3);
  o2.bounceOff(o4);
  o2.bounceOff(o5);
  o3.bounceOff(o4);
  o3.bounceOff(o5);
  o4.bounceOff(o5);

  if(o1.isTouching(wall1) || o1.isTouching(wall2) ||o1.isTouching(wall3) || o1.isTouching(wall4)){
    o1.x=windowWidth/2;
    o1.y=windowHeight/2;
  }
  if(o2.isTouching(wall1) || o2.isTouching(wall2) ||o2.isTouching(wall3) || o2.isTouching(wall4)){
    o2.x=windowWidth/2;
    o2.y=windowHeight/2;
  }
  if(o3.isTouching(wall1) || o3.isTouching(wall2) ||o3.isTouching(wall3) || o3.isTouching(wall4)){
    o3.x=windowWidth/2;
    o3.y=windowHeight/2;
  }
  if(o4.isTouching(wall1) || o4.isTouching(wall2) ||o4.isTouching(wall3) || o4.isTouching(wall4)){
    o4.x=windowWidth/2;
    o4.y=windowHeight/2;
  }
  if(o5.isTouching(wall1) ||o5.isTouching(wall2) ||o5.isTouching(wall3) || o5.isTouching(wall4)){
    o5.x=windowWidth/2;
    o5.y=windowHeight/2;
  }


  o1.velocityX=random(-50,50);
  o1.velocityY=random(-50,50);
  o2.velocityX=random(-50,50);
  o2.velocityY=random(-50,50);
  o3.velocityX=random(-50,50);
  o3.velocityY=random(-50,50);
  o4.velocityX=random(-50,50);
  o4.velocityY=random(-50,50);
  o5.velocityX=random(-50,50);
  o5.velocityY=random(-50,50);

  if(player.isTouching(o1) || player.isTouching(o2) || player.isTouching(o3) || player.isTouching(o4) || player.isTouching(o5)){
    end=true;
  }

  if(end===true){
    background(0,0,0);
    fill(255,255,255);
    textSize(windowWidth/6);
    text("You\nlost",windowWidth/3,windowWidth/5);
  }

  drawSprites();
}
