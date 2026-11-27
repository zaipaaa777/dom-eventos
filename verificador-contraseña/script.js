let mensaje = document.getElementById("mensaje");
let contraseña = document.getElementById("contraseña");

contraseña.addEventListener("input", function() {


    let longitud = contraseña.value.length

    if (longitud < 6) {

        mensaje.style.color = "red";
        mensaje.textContent = "Contraseña muy corta";
    }

    else if (longitud >= 6 && longitud <= 9) {

        mensaje.style.color = "orange";
        mensaje.textContent = "Contraseña aceptable";
    }

    else {

        mensaje.style.color = "green";
        mensaje.textContent = "Contraseña fuerte";
    }

    if (longitud === 0) {

        mensaje.textContent = "";
    }

   
})