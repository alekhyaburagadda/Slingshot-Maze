const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2;
var box1,box2,box3,box4;
var boxes1,boxes2,boxes3,boxes4;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,400,120,20);
  ground2= new Ground(200,500,120,20);

  box1=new Boxes(601,401,70,70);
  box1.shapeColor="green";
  box2=new Boxes(605,405,70,70);
  box2.shapeColor="yellow";
  box3=new Boxes(607,405,70,70);
  box3.shapeColor="red";
  box4=new Boxes(602,404,70,70);
  box4.shapeColor="blue";

  boxes1=new Boxes(201,501,70,70);
  boxes1.shapeColor="green";
  boxes2=new Boxes(205,505,70,70);
  boxes2.shapeColor="yellow";
  boxes3=new Boxes(207,505,70,70);
  boxes3.shapeColor="red";
  boxes4=new Boxes(202,504,70,70);
  boxes4.shapeColor="blue";
}

function draw(){
  background(255);

  Engine.update(engine);

  ground.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  boxes.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  
}

