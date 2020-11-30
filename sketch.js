var rect1,rect2;





function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(300, 100, 50, 50);
}

function draw() {
  background(155,25,55);  
  rect2.x=mouseX;
  rect2.y=mouseY;
  console.log("rect1 "+rect1.x+","+rect1.y);
  console.log("rect2 "+rect2.x+","+rect2.y);

  //algorithm for isTouching
  if(rect1.x-rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x-rect1.x < rect1.width/2 + rect2.width/2 &&
    rect1.y-rect2.y < rect1.height/2 + rect2.height/2 && 
    rect2.y-rect1.y < rect1.height/2 + rect2.height/2){
      rect1.shapeColor="aqua";
      rect2.shapeColor="aqua";
      
    }
    else{
      rect1.shapeColor="gray";
      rect2.shapeColor="gray";
    }
  drawSprites();
}