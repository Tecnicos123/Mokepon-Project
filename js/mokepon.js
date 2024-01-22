function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMacotaJugador)
}

function seleccionarMacotaJugador() {
    let inputHipodogue = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodogue.checked) {
        spanMascotaJugador.innerHTML = 'hipodogue'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMacotaEnemigo()

}

function seleccionarMacotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio ==1) {
        
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

windows.addEventListener('load', iniciarJuego)