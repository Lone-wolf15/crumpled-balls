
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new paper(200,400,70)
groundObject = new ground (width/2 ,670,width, 20)
dustbinObject = new dustbin(1200,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display()
  groundObject.display()
  dustbinObject.display()
  drawSprites();
 
}
function keyPressed (){
	 if (keyCode == UP_ARROW ){
		 Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:130,y:-145})
	 }
}



