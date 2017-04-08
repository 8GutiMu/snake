var btnCreate= document.getElementById('enviar');

btnCreate.addEventListener("click",createNewGame);

function createNewGame(){
  var container = document.getElementById('container');
  var backgroundSnake = document.getElementById("edge");
  var snake = document.getElementById("snake");
  var tamanioGame = tamanioTabla();

  tamanioGame = tamanioGame*10;

  backgroundSnake.style.width = tamanioGame + "px";
  backgroundSnake.style.height = tamanioGame + "px";
  backgroundSnake.style.backgroundColor = "green";
  backgroundSnake.style.position = "absolute";


  snake.style.width = "10px";
  snake.style.height = "10px";
  snake.style.backgroundColor = "black";
  snake.style.position = "absolute";

  container.appendChild(backgroundSnake);
  container.appendChild(snake);

}

function tamanioTabla(){
  var tamanio = document.getElementById('tamanio').value;
  return tamanio;

}
