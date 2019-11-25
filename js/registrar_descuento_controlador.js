'use strict';

const input_nombre = document.querySelector('#nombre');
const textarea_descripcion = document.querySelector('#descripcion');
const input_porcentaje = document.querySelector('#porcentaje');
const btn_registro = document.querySelector('#btn_registro');

// Validación de datos
let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
        console.log('falta el nombre')
    } else {
        error = false
        input_nombre.classList.remove('error');
    }

    if (textarea_descripcion.value == '') {
        error = true;
        textarea_descripcion.classList.add('error');
        console.log('revisar la descripcion')
    } else {
        error = false
        textarea_descripcion.classList.remove('error');
    }

    if (input_porcentaje.value == '') {
        error = true;
        input_porcentaje.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        error = false
        input_porcentaje.classList.remove('error');
    }

    return error;

};

//validar datos

// function obtener_datos(){}
let obtener_datos = () => {

    let nombre = input_nombre.value;
    let descripcion = textarea_descripcion.value;
    let porcentaje = input_porcentaje.value;
    let estado = 'Activo';

    //si hay error, entra al if. Si no hay error entra al else
    if (validar()) {

        Swal.fire({
            type: 'warning',
            title: 'Espera',
            text: 'El impuesto no registrado, revisa los campos',
            confirmButtonText: 'Entendido'

        })

    } else {

        registrar_descuento(nombre, descripcion, porcentaje, estado);

        Swal.fire({
            type: 'success',
            title: '¡Registro realizado!',
            animation: true,
            text: 'Impuesto registrado con exito',
            confirmButtonText: 'Entendido',
            customClass: {
                popup: 'animated tada'
            }
        });
    }
};


// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);