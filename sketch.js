var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var umbrella,maxDrops = 100,drops=[],thunder
function preload(){
  
}

function setup(){
   createCanvas(400,650);
   engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella(200,485,30);
  thunder = new Thunder(200,50,10,20);
  }

function draw(){
    background(0);
    Engine.update(engine);
    umbrella.display();
    thunder.display()
    if(frameCount%2===0){
      drops.push(new Drops(random(0,400),random(0,200),5,5))
     
    }
    for (var i = 0; i < drops.length; i++) {

      drops[i].display();

     
    }

    
}   

