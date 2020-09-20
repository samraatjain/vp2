var dog, happyDog, foodS, foodStock;

var database;
var fedTime, lastFed;
var foodObj;


function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)){
 // writeSock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

}


function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  database.ref('/').update({
    Food: x
  })
}



