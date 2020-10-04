var bullet,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);



  speed=random(55,90);
  weight=random(400,150);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
 // bullet.shapeColor="black";

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
 background(0,0,0);
  
  //colision
  if (wall.x-bullet.x<(wall.width+bullet.width)/2) 
  {
  bullet.velocityX=0;
  
  var deformation=0.5*weight*speed*speed/22509;

  if (deformation>180)
  {
    bullet.shapecolor=color(255,0,0);
  }
 
  if (deformation<180 && deformation>100)
  {
   bullet.shapecolor=color(230,230,0); 
  }
  
  if (deformation<100)
  {
    bullet.shapecolor=color(0,255,0)
  }

 }

}