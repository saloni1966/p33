const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,gimg;
var runner,runnerImg;
var ice=[];
var maxSnow=100;

function preload() {
bg=loadImage("snow1.jpg");
gimg = loadImage("ground.PNG");
runnerImg=loadAnimation("sc1.png","sc2.png","sc3.png","sc4.png")
}


function setup() {
  createCanvas(1300,600);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world= engine.world;
  
  //create a ground sprite
ground = createSprite(650,670)
ground.addImage(gimg);
ground.scale=3.2;
ground.velocityX=-10;

runner=createSprite(150,480);
runner.addAnimation("runner",runnerImg)
runner.scale=1.1;
runner.velocityX=2;
runner.setCollider("rectangle",15, -20,100,180) 


  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }


  
}

function draw() {
  background(bg);  
  Engine.update(engine);

  runner.collide(ground);

  if(ground.x < 530){
    ground.x=600;
  }

  if(runner.x > 1200){
    runner.x=150;
  }

  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

//add gravity
runner.velocityY = runner.velocityY + 0.8

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    


ground.display();

  
  drawSprites();

}
