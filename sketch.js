var box
function setup() {
  createCanvas(700,400);

box = createSprite(10,34,65,68)
box.shapeColor= "red"
}


function draw() 
{
  background("black");

  drawSprites();

  if (keyDown("right")) 
{box.x = box.x+12}

if (keyDown("left")) 
{box.x = box.x-12}

if (keyDown("up")) 
{box.y = box.y-12}

if (keyDown("down")) 
{box.y = box.y+12}
}




