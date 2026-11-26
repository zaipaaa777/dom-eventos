let tarea = document.getElementById("tarea");
let resultado = document.getElementById("resultado");

tarea.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        resultado.textContent = "Nueva tarea: " + tarea.value;

        tarea.value = "";
    }
})