var btnCreate= document.getElementById('submit');


btnCreate.addEventListener("click",createNewGame);
document.addEventListener("keydown",moveSnake);

function createNewGame(){
  var container = document.getElementById('container');
  var backgroundSnake = document.getElementById("edge");
  var snake = document.getElementById("snake");
  var sizeGame = sizeTable();

  sizeGame = sizeGame*10;

  backgroundSnake.style.width = sizeGame + "px";
  backgroundSnake.style.height = sizeGame + "px";
  backgroundSnake.style.backgroundColor = "green";
  backgroundSnake.style.position = "absolute";


  snake.style.width = "10px";
  snake.style.height = "10px";
  snake.style.backgroundColor = "black";
  snake.style.position = "absolute";


  container.appendChild(backgroundSnake);
  container.appendChild(snake);

}

function sizeTable(){
  var size = document.getElementById('sizeInput').value;
  return size;

}

function moveSnake(e){
    var limite = sizeTable();
    limite = limite*10;
    limite -= 10;


    var situacionY = document.getElementById("snake").offsetLeft;
    var situacionX = document.getElementById("snake").offsetTop;

       switch (e.keyCode){
           case  37:
             if (situacionY >0) {
               snake.style.left = situacionY-10+"px" ;
             }else {
               youLost();
             }

               break;
           case 38:
           if (situacionX >0) {
               snake.style.top = situacionX-10+"px" ;
           }else {
             youLost();
           }
               break;

           case 39 :
           if (situacionY < limite) {
               snake.style.left = situacionY+10+"px" ;
           }else{
               youLost();
           }

               break;
           case 40 :
           if(situacionX < limite){
             snake.style.top = situacionX+10+"px" ;
           }else{
             youLost()
           }
           break;
}
}

function youLost(){
  alert("PERDISTE");
}
