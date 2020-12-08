
var monkey , monkey_running
var banana ,bananaImage, boulder, boulderImage
var bananaGroup, boulderGroup
var score,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  boulderImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);  
  
  bananaGroup = createGroup();
  boulderGroup = createGroup();
  
  monkey = createSprite(50,260);
  monkey.addAnimation('running',monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200,290,400,10);
}


function draw() {
  background('white');
  
  score = Math.ceil(frameCount/frameRate());
  banana();
  boulder();
  if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
  } 

  
  monkey.collide(ground)
  drawSprites();
  console.log(frameCount);
  textSize(22);
  text('Survival Time: '+score,120,30);
}

function banana(){
  
  if (frameCount % 80 === 0) {
    
    var banana = createSprite(400,Math.round(random(120,200)));
    banana.addImage('bananaImage',bananaImage);
    banana.velocityX = -5;
    bananaGroup.add(banana);
    banana.scale = 0.08;
    banana.lifetime = 100;
  }
}

function boulder(){
  if (frameCount % 300 === 0) {
    
    var boulder = createSprite(350,260)
    boulder.addImage('boulder',boulderImage);
    boulder.scale = 0.2
    boulder.velocityX = -5;
    boulder.lifetime = 100;
  }
  
  
}


