// basic settings
var snakeX = 2;
var snakeY = 2;
var height = 20;
var width = 20;
var interval = 100; // it dictates how often the game updates
var increment = 3; //how much the snake increments after it eats


//game variables
var tailX = [snakeX];
var tailY = [snakeY];
var fX;
var fY;
var running;
var gameOver = false;
var direction =-1; // up = 0
var int;

function run(){
init();
int = setInterval(gameLoop,interval);
}

function init(){
createMap();
createSnake();
createFruit();
}

function createMap(){
document.write("<table>");
for(var y=0; y < height; y++){
  document.write("<tr>");
for(var x=0; x < width; x++){
  if(x==0 || x==width-1 || y==0 || y==height-1){
    document.write("<td class='wall' ></td>");
  }else{
    document.write("<td class='blank'></td>");
  }
}
  document.write("</tr>");
}
document.write("</table>");
}

run();
