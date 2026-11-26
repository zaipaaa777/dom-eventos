let colores = document.getElementById("colores");
let tarjeta = document.getElementById("tarjeta");

colores.addEventListener("change", function() {

        tarjeta.style.backgroundColor = colores.value;
});