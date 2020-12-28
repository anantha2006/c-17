
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var banana
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
   invisibleGround = createSprite(400,360,900,10);
  invisibleGround.visible = false;
  
}


function draw() {
  background("blue");
if(keyDown("space")&&monkey.y>290){
  monkey.velocityY=-12;
}
  console.log(monkey.y)
  monkey.velocityY=monkey.velocityY+1
  if(ground.x<0){
    ground.x=300
  }
  monkey.collide(ground);
  food();
  drawSprites();
}
function food(){
  if(frameCount%80===0){
  banana=createSprite(500,Math.round(random(200,300)),20,20)   
    banana.velocityX=-5;
    banana.addImage(bananaImage);
    banana.scale=0.1;
  }

}



