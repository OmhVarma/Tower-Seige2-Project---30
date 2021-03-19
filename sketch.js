
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,ground2,ground3;
var box1;
var polygon;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(500,500,280,10);
  ground2 = new Ground(890,300,200,10); 
  ground3 = new Ground(0,695,2400,10);

  //smaller pyramid
  box1 = new Box(830,275,30,40);
  box2 = new Box(860,275,30,40);
  box3 = new Box(890,275,30,40);
  box4 = new Box(920,275,30,40);
  box5 = new Box(950,275,30,40);
  box6 = new Box(860,235,30,40);
  box7 = new Box(890,235,30,40);
  box8 = new Box(920,235,30,40);
  box9 = new Box(890,195,30,40);

  //larger pyramid
  box10 = new Box(410,475,30,40);
  box11 = new Box(440,475,30,40);
  box12 = new Box(470,475,30,40);
  box13 = new Box(500,475,30,40);
  box14 = new Box(530,475,30,40);
  box15 = new Box(560,475,30,40);
  box16 = new Box(590,475,30,40);
  box17 = new Box(440,435,30,40);
  box18 = new Box(470,435,30,40);
  box19 = new Box(500,435,30,40);
  box20 = new Box(530,435,30,40);
  box21 = new Box(560,435,30,40);
  box22 = new Box(470,395,30,40);
  box23 = new Box(500,395,30,40);
  box24 = new Box(530,395,30,40);
  box25 = new Box(500,355,30,40);

  polygon = new Polygon(230,500,30);

  rope = new Slingshot(polygon.body, {x:100, y:400});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(56,44,44);
  drawSprites();
  textSize(25);
  push()
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",200,100);
  pop()

  ground1.display();
  ground2.display();
  ground3.display();

  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("turquoise");
  box6.display();
  box7.display();
  box8.display();
  fill("pink");
  box9.display();

  fill("skyblue");
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  fill("pink");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("turquoise");
  box22.display();
  box23.display();
  box24.display();
  fill("grey");
  box25.display();

  rope.display();
   
  polygon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly();
}



