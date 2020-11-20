var bullet
var wall
var speed
var weight
var thickness

function setup() {
  createCanvas(1600,400);
  speed=random(20, 30);
  weight=random(400, 1500);
  thickness=random(20, 30)
  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor = "red"
  bullet.velocityX= speed;
  wall=createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = "green"
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet, wall)) {
     bullet.velocityX=0; 
     var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
      if(damage>10) {
         wall.shapeColor=color(255,0,0);
         }
          if(damage<10)
       { wall.shapeColor=color(0,255,0);
       } 
      }
  drawSprites();
}
function hasCollided(lbullet, lwall) { 
  bulletRightEdge=lbullet.x +lbullet.width; 
  wallLeftEdge=lwall.x; 
  if (bulletRightEdge>=wallLeftEdge) {
     return true
     }
      return false; }