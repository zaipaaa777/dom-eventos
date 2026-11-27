let pesoIngresado = document.getElementById("peso");
let estaturaIngresada = document.getElementById("estatura");
let boton = document.getElementById("calculo");
let resultado = document.getElementById("resultado");


boton.addEventListener("click", function() {

    let pesoNumero = Number(pesoIngresado.value);
    let estaturaNumero = Number(estaturaIngresada.value);

    console.log("Peso:", pesoNumero);
    console.log("Estatura:", estaturaNumero);


    if (pesoIngresado.value === "" || estaturaIngresada.value == "") {

        resultado.textContent = "Por favor, ingrese su peso y si estatura correctamente";
    }

    else if (pesoNumero <= 0 || estaturaNumero <= 0) {

    resultado.textContent = "El peso y la estatura deben ser mayores que cero";

    }

    else {

        let imc = pesoNumero / (estaturaNumero * estaturaNumero);

        resultado.textContent = "Tu IMC es: " + imc.toFixed(2);

        pesoIngresado.value = "";
        estaturaIngresada.value = "";


        if (imc < 18.5) {

            resultado.style.color = "yellow";
        }

        else if (imc < 24.9) {

            resultado.style.color = "green";
        }

        else if (imc < 29.9) {

            resultado.style.color = "orange";
        }

        else {

            resultado.style.color = "red";
        }
    }
 

});



