'use strict';

const nav = document.querySelectorAll('#nav_principal a');
const no_li = document.querySelectorAll('#nav_principal li')
const btn_cerrar_sesion = document.querySelector('#btn_cerrar_sesion')

let conectado = sessionStorage.getItem('conectado');
let tipo_usuario = sessionStorage.getItem('tipo_usuario');


if (conectado) {
    switch (tipo_usuario) {
        case 'Admin':

            break;
        case 'Cliente':
            nav[2].classList.add('ocultar');
            no_li[1].classList.add('ocultar')
            nav[3].classList.add('ocultar');
            nav[4].classList.add('ocultar');
            nav[5].classList.add('ocultar');
            nav[9].classList.add('ocultar');
            no_li[9].classList.add('ocultar')
            nav[10].classList.add('ocultar');

            break;
        case 'Encargado':

            break;
        case 'Organizador':

            break;
        default:

            break;
    }
} else {
    nav[5].classList.add('ocultar');
    nav[6].classList.add('ocultar');
    nav[8].classList.add('ocultar');
    nav[9].classList.add('ocultar');
    nav[11].classList.add('ocultar');
}

function cerrar_sesion() {
    sessionStorage.clear();
    window.location.href = 'landing_page.html';
}

btn_cerrar_sesion.addEventListener('click', cerrar_sesion);