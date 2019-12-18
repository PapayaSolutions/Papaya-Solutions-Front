'use strict';

const input_correo = document.querySelector('#correo');
const input_contrasena = document.querySelector('#contrasena');
const input_btn_iniciar = document.querySelector('#btn_iniciar');

// function obtener_datos
let obtener_datos = () => {
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;


    let errorBlancos = validar(correo, contrasena);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correo, contrasena);
        // if (usuarioAceptado) {
        //     window.location.href = 'listar_eventos.html';
        // }
    }
    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: 'Algunos de los campos se encuentran incorrectos.',
            text: 'Por favor revise los campos en rojo',
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

btn_iniciar.addEventListener('click', obtener_datos);