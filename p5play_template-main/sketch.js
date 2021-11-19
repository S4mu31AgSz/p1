
var caixa

function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,15,15);
}

function draw() 
{
  if(keyDown("w")){
    caixa.velocityY = -5
  }
  if(keyDown("a")){
    caixa.velocityX = -5
  }
  if(keyDown("s")){
    caixa.velocityY = +5
  }
  if(keyDown("d")){
    caixa.velocityX = +5
  }
  background(30);

  drawSprites();
}




