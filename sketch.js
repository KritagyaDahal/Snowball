const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
//create variables for background and snow
var engine, world, bg; 
var snow,snowfall,snowimage;
var fall = []
function preload() {  
  snowfall = loadImage("snow4.webp")
  bg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world
}

function draw() {
  background(bg);
  Engine.update(engine)  
  if(frameCount%5===0){
    fall.push(snowfall=new Snowfall())
 }
 for (var i=0;i<fall.length;i++) {
   fall[i].display()
 }
 console.log("snowfall");
  drawSprites();
}