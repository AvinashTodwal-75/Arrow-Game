var bg, bgImg;
var arrow, arrowImg;
var bow, bowImg;
var balloon, balloon1Img, balloon2Img, balloon3Img,
    balloon4Img;
var bGroup;
var score = 0;

function preload(){
  bgImg=loadImage("background0.png");
  arrowImg=loadImage("arrow0.png");
  bowImg=loadImage("bow0.png");
  balloon1Img=loadImage("blue_balloon0.png");
  balloon2Img=loadImage("green_balloon0.png");
  balloon3Img=loadImage("pink_balloon0.png");
  balloon4Img=loadImage("red_balloon0.png");
  }

function setup() {
  createCanvas(400, 400);
  bg=createSprite(200, 200, 100, 100);
  bg.addImage(bgImg);  
  
  bow=createSprite(385, 200, 10, 10);
  bow.addImage(bowImg);
  bow.scale=1;
  
  arrow=createSprite(350, 200, 10, 10);
  arrow.addImage(arrowImg);
  arrow.scale=0.30;
  arrow.debug=false;
  arrow.setCollider("rectangle", 0, -5, 240, 50)
  
  bGroup = new Group();  
  }
  
function draw() {
  background(190);
  
  if(keyDown("space")){
  arrow.velocityX=-6;  
  }   
  if(arrow.x<0){
  arrow.x=350;
  arrow.velocityX=0;
  }  
  bow.y=World.mouseY;
  arrow.y=bow.y;  
  if(bGroup.isTouching(arrow)){
  bGroup.destroyEach();
  score=score+1;
  arrow.velocityX=0;
  arrow.x=345;  
  }
  
  spawnballoon();     
  drawSprites();
  
  stroke("red");
  fill("black");
  textSize(16);
  text("SCORE : "+score, 150, 20);
  } 
    
function spawnballoon(){
  if(frameCount % 130 === 0){
  balloon=createSprite(-30, 200, 20, 20);  
  balloon.velocityX=5;
  bGroup.add(balloon);
  balloon.lifetime=150;  
  balloon.y=Math.round(random(100, 350));
  
  var narayan = Math.round(random(1, 4));
  switch (narayan){
  case 1:balloon.addImage(balloon1Img);
  balloon.scale=0.1;
  break;
  case 2:balloon.addImage(balloon2Img);
  balloon.scale=0.1;
  break;
  case 3:balloon.addImage(balloon3Img);
  balloon.scale=1;
  break;
  case 4:balloon.addImage(balloon4Img);
  balloon.scale=0.1;
  break;
  }   
  }
  }