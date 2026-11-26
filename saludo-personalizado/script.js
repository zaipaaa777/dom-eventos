let inputNombre = document.getElementById("nombre");
let boton = document.getElementById("btnsaludar");
let resultado = document.getElementById("resultado");


boton.addEventListener("click", function(){
    
    let nombre = inputNombre.value;

    if (nombre.trim() === "") {
        resultado.textContent = "Porfavor, escribe tu nombre primero.";
    } else {
        resultado.textContent = "hola " + nombre + ", Bienvenido.";
    }
});