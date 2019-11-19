'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_porcentaje = document.querySelector('#num_porcentaje');
const input_descripcion = document.querySelector('#txt_descripcion');
const btn_registro = document.querySelector('#btn_registro');

input_nombre.innerHTML = '';
input_porcentaje.innerHTML = '';
input_descripcion.innerHTML = '';

// Validación de datos
let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
        console.log('falta el nombre')
    } else {
        input_nombre.classList.remove('error');
    }
    if (input_porcentaje.value == '') {
        error = true;
        input_porcentaje.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_porcentaje.classList.remove('error');
    }

    return error;

}; //validar datos

// function obtener_datos(){}
let obtener_datos = () => {
    let p_nombre = input_nombre.value;
    let p_porcentaje = input_porcentaje.value;
    let p_descripcion = input_descripcion.value;
    let p_estado = 'Activo';


    //si hay error, entra al if. Si no hay error entra al else
    if (validar()) {
        Swal.fire({
                type: 'warning',
                title: '¡Espera!',
                animation: true,
                text: 'Hay espacios que deben ser revisados',
                confirmButtonText: 'Entendido',
                customClass: {
                    popup: 'animated tada'
                }
            }) //  let registrar_impuesto = async(nombre, porcentaje, descripcion, estado) => {
    } else {

        registrar_impuesto(p_nombre, p_porcentaje, p_descripcion, p_estado);
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'El impuesto ha sido almacenado',
            confirmButtonText: 'Entendido'
        }).then(function() {

            location.reload();
        });

    }
};


// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);