let tarea = document.getElementById("tarea");
let resultado = document.getElementById("resultado");

tarea.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        if (tarea.value.trim() !== "") {

            let nuevaTarea = document.createElement("p");

            nuevaTarea.textContent = "Nueva Tarea: " + tarea.value;

            resultado.appendChild(nuevaTarea);

            tarea.value = "";


        }
    }
})