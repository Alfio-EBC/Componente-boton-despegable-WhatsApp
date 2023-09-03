    newFunction();
function newFunction() {
    const miElemento = document.getElementById("miElemento");
    const miBoton = document.getElementById("miBoton");

    miBoton.addEventListener("click", function () {
        if (miElemento.style.display === "none" || miElemento.style.display === "") {
            // Si el elemento está oculto, mostrarlo
            miElemento.style.display = "block";
        } else {
            // Si el elemento está visible, ocultarlo
            miElemento.style.display = "none";
        }
    });
}
