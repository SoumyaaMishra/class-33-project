var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var ground;
var divisions = [];
var particles = [];
var plinkos = [];
var score = 0;
var particle = null;
var turn = 0;
var gamestate = "START";
var count = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  console.log(score);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 0,10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("500", 25, 600);
   text("500", 100, 600);
   text("500", 180, 600);
   text("500", 265, 600);
   text("100", 345, 600);
   text("100", 425, 600);
   text("100", 500, 600);
   text("200", 580, 600);
   text("200", 665, 600);
   text("200", 745, 600);
   
   ground.display();

   if(particle !== null){
   
      particle.display();
     // console.log(particle.body.position.x, particle.body.position.y)
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 330){
        score = score + 500;
        console.log("step1");
        particle=null;
        if(count>=5){
          gamestate = "end";
        }
      }
      else
      if(particle.body.position.x > 330 && particle.body.position.x < 560){
        score = score + 100;
        console.log("step2");
        particle=null;
        if(count>=5){
          gamestate = "end";
        }
        }
        else
        if(particle.body.position.x > 560){
          score = score + 200;
          console.log("step2");
          particle=null;
          if(count>=5){
            gamestate = "end";
          }
          }

          
        
      } }

      console.log(mouseX);
}
function mousePressed(){
  if(gamestate !== "end"){
    count = count + 1;
    particle=new Particle(mouseX, 10,10,10);
   
  }

  
}