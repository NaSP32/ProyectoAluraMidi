/*Creo una funcion para ejecutar un sonido*/
function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < 9){
    listaDeTeclas[contador].onclick = function(){
        playSonido('#sonido_tecla_psh');
    }; 
    contador = contador+1;
    console.log('vuelta'+contador)
  
}