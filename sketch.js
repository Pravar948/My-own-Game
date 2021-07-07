function setup() {
   createCanvas(800,400);
   wall = createSprite(600, 200, 100, 10);
   wall.shapeColor = "red"
   wall1 = createSprite(200,200,100,10)
   wall1.shapeColor = "blue"
   wall2 = createSprite(380,200,50,10)
   wall2.shapeColor = "green"
   wall3 = createSprite(380,260,350,10)
   wall3.shapeColor = "orange" 
   wall4 = createSprite(380,140,350,10)
   wall4.shapeColor = "Purple"
   wall5 = createSprite(250,100,200,10)
   wall5.shapeColor = "pink"
   wall6 = createSprite(550,100,200,10)
   wall6.shapeColor = "white"
   wall7 = createSprite(400,100,30,10)
   wall7.shapeColor = "cyan"
   wall8 = createSprite(400,300,300,10)
   wall8.shapeColor = "lightblue"
   wall9 = createSprite(450,200,10,50)
   wall9.shapeColor = "maroon"
   wall10 = createSprite(300,200,10,50)
   wall10.shapeColor = "teal"
   wall11 = createSprite(700,100,10,150)
   wall11.shapeColor = "lime"
   wall12 = createSprite(700,300,10,150)
   wall12.shapeColor = "lime"
   wall13 = createSprite(100,300,10,150)
   wall13.shapeColor = "lime"
   wall14 = createSprite(100,100,10,150)
   wall14.shapeColor = "lime"
   wall15 = createSprite(400,50,650,10)
   wall15.shapeColor = "lime"
   wall16 = createSprite(400,350,650,10)
   wall16.shapeColor = "lime"
   wall17 = createSprite(720,200,10,50)
   //wall17.visible = false
   runner = createSprite(380,170,10,10)
   runner.shapeColor = "yellow"
   ghost1 = createSprite(330,200,10,10)
   ghost1.shapeColor = "orange"
   ghost2 = createSprite(380,230,10,10)
   ghost2.shapeColor = "orange"
   ghost3 = createSprite(425,200,10,10)
   ghost3.shapeColor = "orange"

   

   
   
   
  
}

function draw() {
  background(0);  
  drawSprites();
  if(runner.isTouching(wall17)){
     runner = createSprite(200,200,10,10)
  }
  if(keyDown(UP_ARROW)){
    runner.y = runner.y -1 

  }
  if(keyDown(DOWN_ARROW)){
     runner.y = runner.y +1
  }
  if(keyDown(LEFT_ARROW)){
     runner.x = runner.x -1
    }

  if(keyDown(RIGHT_ARROW)){
    runner.x = runner.x +1
  }



}