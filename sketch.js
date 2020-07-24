var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dropbox,dropbox2,dropbox3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var res={restitution:0.8}

	

	packageSprite=createSprite(width/2, 80, 10,10,res);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor="white"
 	World.add(world, ground);

	 dropbox = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 dropbox2 = Bodies.rectangle(width/4, 610, width, 10 , {isStatic:true} );
	 dropbox3 = Bodies.rectangle(width/1.3, 610, width, 10 , {isStatic:true} );
	 
 	World.add(world, dropbox);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
  rect(dropbox.position.x,dropbox.position.y,400,20,{isStatic:true});
  rect(dropbox2.position.x,dropbox2.position.y,30,100,{isStatic:true});
  rect(dropbox3.position.x,dropbox3.position.y,30,100,{isStatic:true});
  fill=(255,0)

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  
	 
   }
  }




