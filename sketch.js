var tower, towerImage 
var door, doorImage ,  doorGroup

var climberImg, climber, climberGroup;

var ghost, ghostImg;

function preload () {
  
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  doorGroup =new Group();
  
  climberImg=loadImage("climber.png");
  climberGroup =new Group();
  
  ghostImg=loadImage("ghost-standing.png")
  
  
}
function setup () {
  createCanvas(600,600)
  
  tower=createSprite(300,300)
  tower.addImage("tower",towerImage)
  tower.velocityY = 1
  
  ghost = createSprite(200,200,50,50); 
  ghost.scale = 0.3;             
  ghost.addImage("ghost", ghostImg);         

  
}

function draw () {
   background(0);
  if (tower.y>400) {
    tower.y = 300
    
  }
    
  
if(keyDown("left_arrow")){
  ghost.x = ghost.x - 3; 
} 
  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3; 
  } 
  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  ghost.velocityY = ghost.velocityY + 0.8

   
  if (climberGroup.isTouching(ghost)){
    ghost.velocityY=0
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
  }
   spawnDoors();
  
  drawSprites();
}

function spawnDoors(){
  
  if (frameCount%240==0){
    door=createSprite(200,-50)
    door.addImage(doorImage);
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    doorGroup.add(door);
    
     
    var climber = createSprite(200,10);
    climber.x = door.x;
    climber.addImage(climberImg);
    climber.velocityY = 1;
    climberGroup.add(climber);
  }
}
