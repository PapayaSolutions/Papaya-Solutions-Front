'use strict';

const input_correo = document.querySelector('#correo');
const input_contrasena = document.querySelector('#contrasena');
const input_btn_iniciar = document.querySelector('#btn_iniciar');


// Validación de datos
let validar = () => {
    let error = false;

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error');
        console.log('falta nombre')
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
};


// function obtener_datos(){}
let obtener_datos = () => {
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;

    //si hay error, entra al if. Si no hay error entra al else
    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: '¡Espera!',
            animation: true,
            text: 'Correo y/o contraseña inválidos',
            confirmButtonText: 'Entendido',
            customClass: {
                popup: 'animated tada'
            }
        })
    } else {
        registrar_usuario(correo, contrasena);

        Swal.fire({
            type: 'success',
            title: 'Registrado',
            animation: true,
            text: 'Te enviaremos un correo electrónico con tus datos de acceso',
            confirmButtonText: 'Endentido',
            customClass: {
                popup: 'animated tada'
            }
        })
    }
};

// Eventos asociados a los botones o inputs

btn_iniciar.addEventListener('click', obtener_datos);