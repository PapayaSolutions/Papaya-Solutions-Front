'use strict';

const input_correo = document.querySelector('#correo');
const input_contrasena = document.querySelector('#contrasena');
const input_btn_verificar = document.querySelector('#btn_verificar');
input_correo.value = '';
// function obtener_datos
let obtener_datos = () => {
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;


    let errorBlancos = validar(correo, contrasena);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = cambiar_contrasena(correo, contrasena);
        if (usuarioAceptado) {
            window.location.href = 'iniciar_sesion.html';
        }
        // else {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'El correo o el código parecen estar incorrectos',
        //         footer: '<a href>Why do I have this issue?</a>'
        //     })
        // }
    }
    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: '¡Espera!',
            animation: true,
            text: 'Hay espacios que deben ser llenados',
            confirmButtonText: 'Entendido',
            customClass: {
                popup: 'animated tada'
            }
        })
    };
};


// validación de datos
let validar = () => {
    let error = false;

    if (input_correo == '') {
        error = true;
        input_correo.classList.add('error')
    } else {
        input_correo.classList.remove('error');
    }
    if (input_contrasena.value == '') {
        error = true;
        input_contrasena.classList.add('error');
    } else {
        input_contrasena.classList.remove('error');
    }
    return error;
}

// Eventos asociados a los botones o inputs

btn_verificar.addEventListener('click', obtener_datos);