var monkey, monkeyRunning;
var ground;
var banana, bananaGroup, BananaImage;
var obstacle, obstacleGroup, obstacleImage;
var background, backgroundImage;
var gameover;
var survivalTime = 0;

function preload(){
monkeyRunning = loadAnimation("sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png"); 
  
bananaImage = loadImage("banana.png");
  
obstacleImage = loadImage("obstacle.png");
  
backgroundImage = loadImage("sprite_0.png");
}


function setup(){
 createCanvas(600,400);
  
 background1 = createSprite(0,50, 300, 400);
 background1.velocityX = -4
 background1.addImage(backgroundImage);
 background1.scale = 0.5;
  
 monkey = createSprite(70,300, 20, 50);
 monkey.addAnimation("running",monkeyRunning)
 monkey.scale = 0.15;
 
 ground = createSprite(400,350, 600, 19);
 ground.velocityX = -4
 
 bananaGroup = new Group();
 obstacleGroup = new Group();
}


function draw(){
 background("white") ;
  
 ground.x = ground.width/2
 //console.log(ground.x) 
 background1.x = background1.width/2
  
 if(keyDown("space")){
   monkey.velocityY = -10;
 }
  


 monkey.velocityY= monkey.velocityY+0.5;
  
 monkey.collide(ground); 

 stroke("black");
 fill("black");
 textSize(20);
 survivalTime=Math.ceil(frameCount/frameRate( ))
 text("survival time : "+ survivalTime,250,40)
  
 if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
   survivalTime = survivalTime+2;
   monkey.scale +=0.1;
 }
  
 if(obstacleGroup.isTouching(monkey)){
   monkey.velocity = 0
   obstacleGroup.destroyEach();
   bananaGroup.destroyEach();
   monkey.scale -=0.1;
 }
  
 
  
 
  
 drawSprites();
 spawnBanana();
 spawnObstacle();

}

function spawnBanana(){
 if(frameCount%80===0){
   banana = createSprite(20,20);
   banana.addImage(bananaImage);
   banana.scale = 0.15
   banana.velocityX = -3
   banana.y = Math.round(random(50,200));
   banana.x = 600;
   banana.lifetime = 200;
   bananaGroup.add(banana);
 }
}  
  
function spawnObstacle(){
  if(frameCount%300===0){
    obstacle = createSprite(20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.x=600;
    obstacle.y= 302;
    obstacle.velocityX = -4;
    obstacleGroup.add(obstacle);
  }
}
