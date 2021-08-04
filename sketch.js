
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1;
var leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

var ball_option = {
	isStatic : false,
	restitution : 0.1,
	density : 1
};

ball = Bodies.circle(250,350,10,ball_option);
World.add(world,ball);

ellipseMode(RADIUS);

ground1 = new Ground(400,500,800,10);
leftSide = new Ground(550,455,10,100);
rightSide = new Ground(650,455,10,100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ground1.show();
  leftSide.show();
  rightSide.show();

 
  
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.2, y:-0.6});
	}
	
}
