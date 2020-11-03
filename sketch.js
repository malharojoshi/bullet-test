var bullet,wall,speed,weight,thickness;
var deformation;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1000, 200, thickness, height/2);
  wall.color=80,80,80;
  bullet.depth = wall.depth + 1;
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet.velocityX=speed;
  deformation = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);
}

function draw() {
  background(255,255,255);  
  if (bullet.isTouching(wall)) {
      bullet.velocityX=0;
      if (deformation > 10) {
        wall.shapeColor = "red"
      }
      if (deformation < 10) {
        wall.shapeColor = "green"
      }
  }
  drawSprites();
}