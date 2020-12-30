var bullet,wall,thickness;
var speed,weight;
var damage;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  

  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  
}

function draw() {
  background(255,255,255);  

  bullet.collide(wall);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight * speed * speed/(thickness *thickness *thickness);
    console.log(damage);
    if(damage>10){
      wall.shapeColor=("red");
    }
    
    if(damage<10){
      wall.shapeColor=("green");
    }
  }
  
  drawSprites();
}

var bulletRightEdge,wallLeftEdge;



function hasCollided(lbullet,lwall){
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    return true
  }else  {
    return false
  }




  /*bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    console.log("true");
    return true
  }
  return false;*/
}
























