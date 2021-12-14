var iron, iron_run, iron_dead;
var bg, backgroundImg;
var land;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 iron_run = loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  iron = createSprite(200,500,50,50);
 iron.addImage(iron_run)
  iron.scale = 0.3;
  land = createSprite(200,580,400,10)
}

function draw() {
  if (keyDown("up")){
  iron.velocityY  = -10;
  }
if (keyDown("left")){
  iron.x = iron.x  -5;
      }
if (keyDown("right")){
  iron.x = iron.x +5;
      }
 iron.velocityY = iron.velocityY+ 0.5;
 iron.collide(land)   
    drawSprites();
   
}

