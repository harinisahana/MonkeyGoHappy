
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananasGroup, obstaclesGroup;
var ground;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  if(monkey.collide(ground)){
       //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  }


  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  

  
  monkey.setCollider("rectangle",0,0,400,monkey.height);
  monkey.debug = false
  
  score = 0;
}


function draw() {
 background("white");
  
   text("Score: "+ score, 450,50);
    
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
        }
     
       //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
     
    
  
  
       spawnBanana();
       spawnObstacles();
  
  drawSprites();
  
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana = createSprite(600,80,70,50);
    banana.y = Math.round(random(10,60));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 160;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
  
   
    }
}

function spawnObstacles(){
 if (frameCount % 80 === 0){
   var obstacle = createSprite(80,315,20,20);
   obstacle.velocityX = -(6+score/100);
   obstacle.addImage(obstacleImage);
 }
}    