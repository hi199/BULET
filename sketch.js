var wall,thickness
  var bullet,speed , weight
  function setup() {
  speed=random(30,52)
  thickness=random(22,83)
  weight=random(223,321)
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness, height/2);
  hasCollided() 
}

function draw() {
  car.velocityX=speed
   if (wall.x-car.x<(car.width/2+wall.width/2)){
   car.velocityX=0
   var defomation=0.5 * bulletweight * bulletspeed * speed/22509
function hasColided (lbullet,lwall){
  bulletRightEdge=lbullet=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
return false
}
if (hasColided(bullet,wall)){
var damage=0.5*weight*speed*speed/(thickness,thickness,thickness)
if (damage>10)
wall.shapeColor=color(255,0,0)
}
if (damage<10){
  wall.shapeColor=color(0,255,0)
}
  }
  background(255,255,255);  
  drawSprites()
   }