'use strict';

const input_nombre = document.querySelector('#nombre');
const textarea_descripcion = document.querySelector('#descripcion');
const input_porcentaje = document.querySelector('#porcentaje');
const btn_registro = document.querySelector('#btn_registro');

const validar_numero = (nombre) => {
    let error_num = false
    if (nombre.length < 8) {
        error_num = true
    } else {
        error_num = false
    }

    if (input_nombre.value.toLowerCase().includes('e')) {
        error_num = true
    }

    return error_num
}

// Validación de datos
let validar = () => {
    let error = true;

    if (input_nombre.value == '') {
        error = false;
        input_nombre.classList.add('error');
        console.log('falta el nombre')
    } else {
        input_nombre.classList.remove('error');
    }

    if (textarea_descripcion.value == '') {
        error = false;
        textarea_descripcion.classList.add('error');
        console.log('revisar la descripcion')
    } else {
        textarea_descripcion.classList.remove('error');
    }

    if (input_porcentaje.value == '') {
        error = false;
        input_porcentaje.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_porcentaje.classList.remove('error');
    }

    return error;

}; //validar datos

// function obtener_datos(){}
let obtener_datos = () => {

    let nombre = input_nombre.value;
    let descripcion = textarea_descripcion.value;
    let porcentaje = input_porcentaje.value;
    let estado = 'activo';

    //si hay error, entra al if. Si no hay error entra al else
    if (validar()) {

        console.log('nombre', nombre);
        console.log('descripcion', descripcion);
        console.log('porcentaje', porcentaje);

        registrar_descuento(nombre, porcentaje, descripcion, estado);
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'El impuesto ha sido almacenado',
            confirmButtonText: 'Entendido'

        })

    } else {
        Swal.fire({
            type: 'warning',
            title: '¡Espera!',
            animation: true,
            text: 'Hay espacios que deben ser revisados',
            confirmButtonText: 'Entendido',
            customClass: {
                popup: 'animated tada'
            }
        });
    }
};


// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);

function newFunction() {
    document.getElementById("#descuento").reset();
}