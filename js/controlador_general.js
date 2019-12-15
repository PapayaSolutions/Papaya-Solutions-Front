'use strict';

const nav = document.querySelectorAll('.navegador_izquierda li');
const no_li = document.querySelectorAll('.navegador_derecha li');


const btn_cerrar_sesion = document.querySelector('#btn_cerrar_sesion');
let conectado = sessionStorage.getItem('conectado');
let tipo_usuario = sessionStorage.getItem('tipo_usuario');


// no li numeros : 0 - perfil, 1 carrito, 2 campana, 3 configurar, 4- confi2, 5 iniciar, - 6 cerrar. 4- confi2
if (conectado) {
    switch (tipo_usuario) {
        case 'Admin':
            no_li[5].classList.add('ocultar')
            no_li[0].classList.add('ocultar')
            no_li[4].classList.add('ocultar')

            break;
        case 'Cliente':
            nav[1].classList.add('ocultar');
            nav[4].classList.add('ocultar');
            no_li[5].classList.add('ocultar')
            no_li[4].classList.add('ocultar')
            no_li[3].classList.add('ocultar')


            break;
        case 'Encargado':
            nav[4].classList.add('ocultar');
            no_li[0].classList.add('ocultar')
            no_li[2].classList.add('ocultar')
            no_li[3].classList.add('ocultar')
            no_li[5].classList.add('ocultar')
            no_li[4].classList.add('ocultar')

            break;
        case 'Organizador':
            nav[1].classList.add('ocultar');
            no_li[5].classList.add('ocultar')
            no_li[0].classList.add('ocultar')
            no_li[3].classList.add('ocultar')
            no_li[1].classList.add('ocultar')
            window.onload = function() {
                $.get("xfooter.html", function(data) {
                    $("#xfooter").html(data);
                })
                $.get("xaside_orga.html", function(data) {
                    $("#xaside").html(data);
                })
            };

            break;
        default:

            break;
    }
} else {

    nav[4].classList.add('ocultar');
    no_li[0].classList.add('ocultar')
    no_li[2].classList.add('ocultar')
    no_li[3].classList.add('ocultar')
    no_li[6].classList.add('ocultar')
    no_li[4].classList.add('ocultar')
}

function cerrar_sesion() {
    sessionStorage.clear();

}


btn_cerrar_sesion.addEventListener('click', cerrar_sesion);