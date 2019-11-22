'use strict';

const input_correo = document.querySelector('#correo');
const input_contrasena = document.querySelector('#contrasena');
const input_btn_iniciar = document.querySelector('#btn_iniciar');

// function obtener_datos
let obtener_datos = () => {
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;

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
    } else {
        validar_credenciales(correo, contrasena);
        console.log('cool')

    }
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

btn_iniciar.addEventListener('click', obtener_datos);