
function mostrarReserva() {
    let guardarNombre = document.getElementById("nombre").value;
    let guardarApellido = document.getElementById("apellido").value;
    let guardarAdultos = document.getElementById("adultos").value;
    let guardarNiños = document.getElementById("niños").value;
    let guardarRadio = "";

    function buscarValor() {
        let radio = document.getElementsByName("comidas");
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                guardarRadio = (radio[i].value);
            }
        }
    }
    buscarValor()
    
    alert(`Datos de la reserva:
    Nombre : ${guardarNombre}
    Apellido : ${guardarApellido}
    Adultos : ${guardarAdultos}
    Niños : ${guardarNiños}
    Regimen de comidas : ${guardarRadio}`)
}






















