function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMacotaJugador)
}

function seleccionarMacotaJugador() {
    if (document.getElementById('hipodogue'),checked) {
        alert('Seleccionaste a Hipodogue')
    }
}

windows.addEventListener('load', iniciarJuego)