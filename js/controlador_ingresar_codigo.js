'use strict';

const input_correo = document.querySelector('#correo');
const input_codigov = document.querySelector('#codigo');
const input_btn_verificar = document.querySelector('#btn_verificar');

// function obtener_datos
let obtener_datos = () => {
    let correo = input_correo.value;
    let codigov = input_codigov.value;


    let errorBlancos = validar(correo, codigov);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correo, codigov);
        // if (usuarioAceptado) {
        //     window.location.href = 'listar_eventos.html';
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
    if (input_codigov.value == '') {
        error = true;
        input_codigov.classList.add('error');
    } else {
        input_codigov.classList.remove('error');
    }
    return error;
}

// Eventos asociados a los botones o inputs

btn_verificar.addEventListener('click', obtener_datos);