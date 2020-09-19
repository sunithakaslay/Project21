var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  //assign random values to thickness, speed and weight
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  //console.log(weight);
  //console.log(thickness);

  //create bullet sprite
  bullet = createSprite(10,200,5,20);
  bullet.velocityX = speed;
 // console.log(speed);

  //create wall sprite
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
 
  
}

function draw() {
  background("white");  

  //check for collision
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
      bullet.velocityX = 0;
      var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
      //console.log(damage);
      if(damage < 10){
         wall.shapeColor = "green";
      }
      else {
          wall.shapeColor = "red";
      }

  }
 
  drawSprites();
}