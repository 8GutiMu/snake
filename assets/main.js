    var boton = document.getElementById("enviar");
    var limite = 0;
    var teclas = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGTH: 39
    };

    boton.addEventListener("click",crearTabla);
    boton.addEventListener("click",tamanioTabla);
    document.addEventListener("keydown",desplazar);

    function tamanioTabla(){
      var tamanio = document.getElementById("tamanio").value;
      tamanio = tamanio *10;
      bordes.style.width = tamanio+"px";
      bordes.style.height = tamanio+"px";
      limite = tamanio-10;
      cuadrado.style.left = "0px"
      cuadrado.style.top = "0px"

    }

    function crearTabla(){
      var tamanio = document.getElementById("tamanio").value;
      var nuevoJuego = document.getElementById('contenedor');
      tamanio = tamanio *10;

      var tablaNueva = document.createElement("section");
      var snakeNueva= document.createElement("div")

      tablaNueva.style.background = "green";
      tablaNueva.style.width = tamanio;
      tablaNueva.style.height = tamanio;
      tablaNueva.style.position = "absolute";
      limite = tamanio-10;
      snakeNueva.style.left = "0px"
      snakeNueva.style.background = "s";
      snakeNueva.style.width = "9px";
      snakeNueva.style.height = "9px"
      snakeNueva.style.position = "absolute"

      contenedor.appendChild(tablaNueva);
      snakeNueva.appendChild(contendor);


    }

  function desplazar(e){

        var situacionY = document.getElementById("cuadrado").offsetLeft;
         var situacionX = document.getElementById("cuadrado").offsetTop;
        switch (e.keyCode){
            case  teclas.LEFT :
              if (situacionY >0) {
                cuadrado.style.left = situacionY-10+"px" ;
              }else {
                perdiste();
              }

                break;
            case teclas.UP :
            if (situacionX >0) {
                cuadrado.style.top = situacionX-10+"px" ;
            }else {
              perdiste()
            }
                break;

            case teclas.RIGTH :
            if (situacionY < limite) {
                cuadrado.style.left = situacionY+10+"px" ;
            }else{
                perdiste()
            }

                break;
            case teclas.DOWN :
            if(situacionX < limite){
              cuadrado.style.top = situacionX+10+"px" ;
            }else{
              perdiste()
            }

                break;
         //default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
        }
    }

    function perdiste(){
      alert("Perdiste")
    }
