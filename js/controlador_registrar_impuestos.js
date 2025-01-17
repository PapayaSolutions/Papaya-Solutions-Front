'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_porcentaje = document.querySelector('#num_porcentaje');
const input_descripcion = document.querySelector('#txt_descripcion');
const btn_registro = document.querySelector('#btn_registro');

input_nombre.value = '';
input_porcentaje.value = '';
input_descripcion.value = '';

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
    if ((input_porcentaje.value === '') || (input_porcentaje.value > 100) || (input_porcentaje.value < 1)) {
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
                title: 'Algunos de los campos se encuentran incorrectos.',
                text: 'Por favor revise los campos en rojo.',
                confirmButtonText: 'Entendido',
                customClass: {
                    popup: 'animated tada'
                }
            }) //  let registrar_impuesto = async(nombre, porcentaje, descripcion, estado) => {
    } else {

        registrar_impuesto(p_nombre, p_porcentaje, p_descripcion, p_estado);
        crear_bitacora('Registrar', 'Registro de nuevo impuesto');
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'El impuesto ha sido almacenado',
            confirmButtonText: 'Entendido'
        }).then(function() {
            input_nombre.value = '';
            input_porcentaje.value = '';
            input_descripcion.value = '';
            location.reload();
        });

    }
};


// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);