
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject; 
var rope1,rope2,rope3,rope4,rope5;
bobDiameter = 40; 


function preload( )
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    bobObject1 = new Bob(210,400,40);
	bobObject2 = new Bob(250,400,40);
	bobObject3 = new Bob(290,400,40);
	bobObject4 = new Bob(330,400,40);
	bobObject5 = new Bob(370,400,40);

	roofObject = new Roof(400,100,400,50);

	World.add(world,roofObject);

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
    World.add(world,rope1);

	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
	World.add(world,rope2);

	rope3 = new Rope(bobObject3.body,roofObject.body,0,0);
	World.add(world,rope3)

	rope4 = new Rope(bobObject4.body,roofObject.body,+bobDiameter,0);
    World.add(world,rope4);

	rope5 = new Rope(bobObject5.body,roofObject.body,+bobDiameter*2,0);
	World.add(world,rope5);


 

	Engine.run(engine);
  
}

 
function draw() {
  
 
  background("green");
  Engine.update(engine);
  
  bobObject1.display(); 
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display(); 

  roofObject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode=== UP_ARROW){
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-550,y:0})
}
}

