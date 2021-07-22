
var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  //Assign random value to speed and weight : speed=random(223,321) ; weight=random(30,52) 
  
  

//Assign randon value to thickness : thickness=random(22,83)
  


// Write code to create the bullet sprite : bullet=createSprite(50, 200, 50,5);  


  
  // Make the velocityX of the bullet equal to the speed :  bullet.velocityX = speed; 
    

    bullet.shapeColor=color(255);

 
  	
    
   //Create the wall Sprite. Refer Project document: wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  

  //Write code to call hasCollided function in if condition. Refer point 3 under hint section
  


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	//Write code for the function. Refer hint section
}


