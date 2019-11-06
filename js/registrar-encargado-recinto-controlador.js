'use strict';

const input_codigo = document.querySelector('#txt-codigo');
const input_nombre = document.querySelector('#txt-nombre');
const input_precio = document.querySelector('#txt-precio');
const input_descripcion = document.querySelector('#txt-descripcion');
const btn_guardar = document.querySelector('#btn-guardar');


// function para validar los datos
const validar = () => {
    let error = false;

    if (input_codigo.value == '') {
        error = true;
        input_codigo.classList.add('error');
    } else {
        error = false;
    };

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
    } else {
        error = false;
    }

    if (input_precio.value == '') {
        error = true;
        input_precio.classList.add('error');
    } else {
        error = false;
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error');
    } else {
        error = false;
    }

    return error;
};

// function obtener_datos
let obtener_datos = () => {
    let codigo = input_codigo.value;
    let nombre = input_nombre.value;
    let precio = input_precio.value;
    let descripcion = input_descripcion.value;

    //Si hay error entra al if     
    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: 'Faltan datos',
            text: 'Verifique los campos!',
        })
    } else {
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'Producto guardado!',
        })
    };
};

// Eventos asociados a los botones o inputs

btn_guardar.addEventListener('click', obtener_datos);