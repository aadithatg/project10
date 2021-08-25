var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var leaf
var appleImg
var leafImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


var rand = Math.round(random(1,400));

}



function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  spawnApples(); 
  spawnleaf();
}


function spawnApples() {

  if(frameCount%60 == 0) {
  apple = createSprite(200,0,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 4;
  apple.x = Math.round(random(1,400));

  apple.scale = 0.09;
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  }
}  


function spawnleaf() {

  if(frameCount%30 == 0) {
  leaf = createSprite(200,0,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY = 4;
  leaf.x = Math.round(random(1,400));

  leaf.scale = 0.09;
  leaf.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  }
}  
