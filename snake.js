// basic settings
var snakeX = 2;
var snakeY = 2;
var height = 20;
var width = 20;
var interval = 100; // it dictates how often the game updates
var increment = 3; //how much the snake increments after it eats


//game variables
var length = 1;
var tailX = [snakeX];
var tailY = [snakeY];
var fX;
var fY;
var running = false;
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
    document.write("<td class='wall' id='"+x+"-"+y+"'></td>");
  }else{
    document.write("<td class='blank' id='"+x+"-"+y+"'></td>");
  }
}
  document.write("</tr>");
}
document.write("</table>");
}

function get(x,y){
  return document.getElementById(x+'-'+y);
}

function set(x,y,value){
  if(x!==null && y  !==null)
  return get(x,y).setAttribute("class",value);
}

function getAttr(x,y){
  return get(x,y).getAttribute("class");
}

function createFruit(){
var found = false;
while(!found && length<(width-1)*(height)){
  var fruitX = Math.floor(1+Math.random()*width);
  var fruitY = Math.floor(1+Math.random()*height);
  if(getAttr(fruitX,fruitY)=="blank")
  found = true;
  }
  set(fruitX,fruitY,"fruit");
  fX=fruitX;
  fY=fruitY;
}

window.addEventListener("keypress",function key(){
var key = event.keyCode;
if(direction!=-1 && key==119)
direction = 0;
else if(direction!=0 && key==115)
direction = -1;
else if(direction!=2 && key==97)
direction = 1;
else if(direction!=1 && key==100)
direction = 2;
if(!running)
 running=true;
else if(key==32)
 running = false;
});

function gameLoop(){
if(running && !gameOver){
  update();
}
  else if (gameOver){
    clearInterval(int);
  }
}

function update(){
  set(fX,fY,"fruit");
  updateTail();
  set(tailX[length],tailY[length],"blank")
  if(direction==0)
  snakeY--;
  else if (direction==-1)
  snakeY++;
  else if (direction==1)
  snakeX--;
  else if (direction==2)
  snakeX++;
if(getAttr(snakeX,snakeY)=="snake"){
  gameOver=true;
}
set(snakeX,snakeY,"snake");
if(snakeX==0 || snakeX==width-1 || snakeY==0|| snakeY==height-1)
gameOver=true;
if(snakeX==fX && snakeY==fY){
  console.log(length);
  createFruit();
  length+=1;
}
}

function updateTail(){
for(var i = length; i>0;i--){
  tailX[i] = tailX[i-1];
  tailY[i] = tailY[i-1];
}
tailX[0] = snakeX;
tailY[0] = snakeY;

}

function createSnake(){
set(snakeX,snakeY,"snake");
}

run();
