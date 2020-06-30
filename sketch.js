var bullet,wall,weight,speed;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(28,83);
  bullet = createSprite(100, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall = createSprite(1500, 200, 60, height);
  wall.shapeColor=color(80,80,80);
}


function draw() {

  
  background(5,3,7);  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
   bullet.velocityX=0;
    damage=(0.5 * weight * speed * speed)/(thickness*thickness*thickness);
  

  if(damage<10){
    bullet.shapeColor="green";
  }


  if(damage>10){
    bullet.shapeColor="red"
  }
}
  drawSprites();
}