var bg;
var spacecraft, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var spaceship, spaceshipImg1;
var hasDocked;

function preload(){
  bg = loadImage("spacebg.jpg");
  spaceshipImg = loadImage("iss.png");
  spacecraftImg1 = loadImage("spacecraft1.png");
  spacecraftImg2 = loadImage("spacecraft2.png");
  spacecraftImg3 = loadImage("spacecraft3.png");
  spacecraftImg4 = loadImage("spacecraft4.png");

}


function setup() {
  createCanvas(1000,500);
  spaceship = createSprite(400, 200, 50, 50);
  spaceship.addImage(spaceshipImg);

  spacecraft = createSprite(400, 400, 50, 50);
 // spacecraft.x = Math.round(random(100, 700));
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.2; 

  if(spacecraft.x === 334 && spacecraft.y === 300){
    fill("white");
    textSize(30);
    text("Docking Successful!",400,400);
  }

}

function draw() {
  background(bg);
  
  if(!hasDocked){

    if(keyCode === UP_ARROW){
      spacecraft.y = spacecraft.y - 2;
      spacecraft.addImage(spacecraftImg2);
    }
  
    if(keyCode === DOWN_ARROW){
      spacecraft.y = spacecraft.y + 2;
      spacecraft.addImage(spacecraftImg1);
    }
   
    if(keyCode === RIGHT_ARROW){
      spacecraft.x = spacecraft.x + 2;
      spacecraft.addImage(spacecraftImg4);
    }
  
    if(keyCode === LEFT_ARROW){
      spacecraft.x = spacecraft.x - 2;
      spacecraft.addImage(spacecraftImg3);
    }
  
    
    //spacecraft.position.x = 400;  spacecraft.position.y = 400;

  }


  
  drawSprites();
}

