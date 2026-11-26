let texto = document.getElementById("texto");
let vistaPrevia = document.getElementById("vistaPrevia");


texto.addEventListener("input", function() {

    vistaPrevia.textContent = texto.value;
})