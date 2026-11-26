let contador = 0;

let numero = document.getElementById("contador");
let botonSumar = document.getElementById("sumar");
let botonReiniciar = document.getElementById("reiniciar");

botonSumar.addEventListener("click", function () {

    contador++;

    numero.textContent = contador;

    if (contador >= 10) {
        numero.style.color = "green";
    }

});

botonReiniciar.addEventListener("click", function() {

    contador = 0;

    numero.textContent = contador;

    numero.style.color = "black";

});

