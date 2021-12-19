var bg, bgImg
var bottomGround
var topGround
var spaceShip,spaceShipImg;
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload(){
bgImg = loadImage("bg.png")

spaceShipImg = loadAnimation("spaceship.png")

obsTop1 = loadImage("ufo.png")
obsTop2 = loadImage("ufo.png")

obsBottom1 = loadImage("ufo.png")
obsBottom2 = loadImage("ufo.png")
obsBottom3 = loadImage("ufo.png")

}

function setup(){

  createCanvas(1400,800)
//background image
bg = createSprite(700,400);
bg.addImage(bgImg);
bg.scale = 0.5


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
spaceShip = createSprite(100,200,20,50);
spaceShip.addAnimation("spaceShip",spaceShipImg);
spaceShip.scale = 0.1;
spaceShip.rotation=90;


}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("w")) {
          spaceShip.velocityY = -6 ;
            
          }
          if(keyDown("s")) {
            spaceShip.velocityY = 6 ;
              
            }
           
   

           
          Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop.lifetime = 100;
    
   spaceShip.depth = spaceShip.depth + 1;
   
      }
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = spaceShip.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}


  