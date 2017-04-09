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
  backgroundSnake.style.left = "10px";
  backgroundSnake.style.top ="119px"


  snake.style.width = "10px";
  snake.style.height = "10px";
  snake.style.backgroundColor = "black";
  snake.style.position = "absolute";
  snake.style.left = "10px";
  snake.style.top ="119px"


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
    var limiteY = 119+ limite-10;




    var situacionX = document.getElementById("snake").offsetLeft;
    var situacionY = document.getElementById("snake").offsetTop;

    switch (e.keyCode){
           case  37: //tecla izquierda
             if (situacionX > 10) {
               snake.style.left = situacionX-10+"px" ;
             }else {
               youLost();
             }

               break;
           case 38: //tecla arriba
           if (situacionY > 119 ) {
               snake.style.top = situacionY-10+"px" ;
           }else {
             youLost();
           }
               break;

           case 39 : //tecla derecha
           if (situacionX < limite) {
               snake.style.left = situacionX+10+"px" ;
           }else{
               youLost();
           }

               break;
           case 40 : //tecla abajo
           if(situacionY < limiteY){
             snake.style.top = situacionY+10+"px" ;
           }else{
             youLost()
           }
           break;
}
}

function youLost(){
  alert("PERDISTE");
}
