var btnCreate= document.getElementById('enviar');

btnCreate.addEventListener("click",createNewGame);

function createNewGame(){
  var container = document.getElementById('container');
  var background = document.createElement("section");
  var snake = document.createElement("div");

  background.style.width = "50px";
  background.style.height = "50px";
  background.style.backgroundColor = "green";
  background.style.position = "absolute";

  snake.style.width = "9px";
  snake.style.height = "9px";
  snake.style.backgroundColor = "black";
  snake.style.position = "absolute";

  container.appendChild(background);
  container.appendChild(snake);

}
