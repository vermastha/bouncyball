const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEng, myWorld;
var ground, ball;

function setup(){
  var canvas=createCanvas(400,400);
  myEng=Engine.create();
  myWorld=myEng.world;

  var Option={
    isStatic:true
  }

  ground=Bodies.rectangle(200, 380, 400, 10, Option);
  World.add(myWorld, ground);

  var opt={
    restitution: 2,
  }

  ball=Bodies.rectangle(200, 200, 20, 20, opt);
  World.add(myWorld, ball);

 // console.log(object);

}
function draw()
{
  
  background(0);
  Engine.update(myEng);
  rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 10)
    rect(ball.position.x, ball.position.y, 20, 20)
}