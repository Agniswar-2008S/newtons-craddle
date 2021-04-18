
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,680,800,20);
	World.add(world,ground);

	roof=new Ground(350,100,500,25);
	 World.add(world,roof);

    bobcentrex=350;
	bobcentrey=400;

	bob1= new Bob(bobcentrex,bobcentrey,30)
	bob2= new Bob(250,370,30)
	bob3= new Bob(290,300,30)
	bob4= new Bob(390,330,30)
	bob5= new Bob(260,250,30)

	rope = new Rope(bob1.body,{x:200,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);
  
  ground.display();
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope.display();

  //drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
} 



