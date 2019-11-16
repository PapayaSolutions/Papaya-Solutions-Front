'use strict';

const input_tarjeta = document.querySelector('#tarjeta');
const input_nombre = document.querySelector('#nombre');
const input_codigo = document.querySelector('#codigo');
const btn_registro = document.querySelector('#btn_registro');

// Validación de datos
let validar = () => {
    let error = false;

    if (input_tarjeta.value == '') {
        error = true;
        input_tarjeta.classList.add('error');
        console.log('falta numero')
    } else {
        input_tarjeta.classList.remove('error');
    }

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
    } else {
        input_nombre.classList.remove('error');
    }

    if (input_codigo.value == '') {
        error = true;
        input_codigo.classList.add('error');
    } else {
        input_codigo.classList.remove('error');
    }

    return error;
};

// function obtener_datos(){}
let obtener_datos = () => {
    let tarjeta = input_tarjeta.value;
    let nombre = input_nombre.value;
    let codigo = input_codigo.value;

    btn_registro.addEventListener('click', obtener_datos);

    //si hay error, entra al if. Si no hay error entra al else
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

        console.log('tarjeta', codigo);
        console.log('nombre', nombre);
        console.log('codigo', codigo);

        Swal.fire({
            type: 'success',
            title: 'Registrado',
            animation: true,
            text: 'Se han guardado los datos de la tarjeta con éxito.',
            confirmButtonText: 'Endentido',
            customClass: {
                popup: 'animated tada'
            }
        })

    }

};

// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);