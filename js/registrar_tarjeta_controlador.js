'use strict';

const input_tarjeta = document.querySelector('#tarjeta');
const input_nombre = document.querySelector('#nombre');
const input_codigo = document.querySelector('#codigo');
const input_vencimiento = document.querySelector('#vencimiento');
const input_apellido = document.querySelector('#apellido');
const input_postal = document.querySelector('#postal');
const btn_registro = document.querySelector('#btn_registro');

// Validación de datos
let validar = () => {
    let error = false;

    if (input_tarjeta.value == '') {
        error = true;
        input_tarjeta.classList.add('error');
        console.log('Falta número de tarjeta')
    } else {
        input_tarjeta.classList.remove('error');
    }

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
        console.log('Falta nombre del propietario')
    } else {
        input_nombre.classList.remove('error');
    }

    if (input_codigo.value == '') {
        error = true;
        input_codigo.classList.add('error');
        console.log('Falta código de tarjeta')
    } else {
        input_codigo.classList.remove('error');
    }

    if (input_vencimiento.value == '') {
        error = true;
        input_vencimiento.classList.add('error');
        console.log('Falta fecha de vencimiento')
    } else {
        input_vencimiento.classList.remove('error');
    }

    if (input_apellido.value == '') {
        error = true;
        input_apellido.classList.add('error');
    } else {
        input_apellido.classList.remove('error');
    }

    if (input_postal.value == '') {
        error = true;
        input_postal.classList.add('error');
    } else {
        input_postal.classList.remove('error');
    }

    if (input_postal.value == 'text') {
        error = true;
        input_postal.classList.add('error');
    } else {
        input_postal.classList.remove('error');
    }
    return error;

};

// function obtener_datos(){}
let obtener_datos = () => {

    let tarjeta = input_tarjeta.value;
    let nombre = input_nombre.value;
    let codigo = input_codigo.value;
    let vencimiento = input_vencimiento.value;
    let apellido = input_apellido.value;
    let postal = input_postal.value;

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
        console.log('vencimiento', vencimiento);
        console.log('apellido', apellido);
        console.log('postal', postal);

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