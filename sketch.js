var hypnoticBall, database;
var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

// refrence to the database
    var hypnoticBallPosition = database.ref('ball/position');
    // setting virtual listener/watchman 

    hypnoticBallPosition.on("value", readPosition, showError);









}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
//writing to the DB
function writePosition(x,y){
  database.ref('ball/position').set(
      {
    'x': position.x + x ,
    'y': position.y + y
  })
}
//reading the data from the DB
function readPosition(data){
    position = data.val();
   
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
  }
  
  function showError(){
    console.log("Error in writing to the database");
  }