'use strict';

const nav = document.querySelectorAll('#nav_principal a');

let conectado = sessionStorage.getItem('conectado');
let tipo_usuario = sessionStorage.getItem('tipo_usuario');

if (conectado) {
    switch (tipo_usuario) {
        case 'Admin':

            break;
        case 'Cliente':
            nav[0].classList.add('ocultar')
            break;
    }
} else {
    window.location.href = 'iniciar_sesion.html';
}