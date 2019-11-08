'use strict';

const input_p_nombre = document.querySelector('#p_nombre_cliente');
const input_p_apellido = document.querySelector('#p_apellido_cliente');
const input_email = document.querySelector('#email_cliente');
const input_s_nombre = document.querySelector('#s_nombre_cliente');
const input_s_apellido = document.querySelector('#s_apellido_cliente');
const input_identificacion = document.querySelector('#n_identif_cliente');
const input_f_nacimiento = document.querySelector('#fecha_nac_cliente');
const input_provincia = document.querySelector('#provincia_cliente');
const input_edad = document.querySelector('#edad_cliente');
const input_canton = document.querySelector('#canton_cliente');
const input_genero = document.querySelector('#genero_cliente');
const input_distrito = document.querySelector('#distrito_cliente');
const input_direccion = document.querySelector('#direccion_cliente');
const btn_registro = document.querySelector('#btn_registro');


// Validación de datos
let validar = () => {
    let error = false;

    if (input_p_nombre.value == '') {
        error = true;
        input_p_nombre.classList.add('error');
        console.log('falta nombre')
    } else {
        input_p_nombre.classList.remove('error');
    }

    if (input_p_apellido.value == '') {
        error = true;
        input_p_apellido.classList.add('error');
    } else {
        input_p_apellido.classList.remove('error');
    }

    if (input_email.value == '') {
        error = true;
        input_email.classList.add('error');
    } else {
        input_email.classList.remove('error');
    }

    if (input_identificacion.value == '') {
        error = true;
        input_identificacion.classList.add('error');
    } else {
        input_identificacion.classList.remove('error');
    }

    if (input_f_nacimiento.value == '') {
        error = true;
        input_f_nacimiento.classList.add('error');
    } else {
        input_f_nacimiento.classList.remove('error');
    }

    if (input_provincia.value == '') {
        error = true;
        input_provincia.classList.add('error');
    } else {
        input_provincia.classList.remove('error');
    }

    if (input_canton.value == '') {
        error = true;
        input_canton.classList.add('error');
    } else {
        input_canton.classList.remove('error');
    }

    if (input_genero.value == '') {
        error = true;
        input_genero.classList.add('error');
    } else {
        input_genero.classList.remove('error');
    }

    if (input_distrito.value == '') {
        error = true;
        input_distrito.classList.add('error');
    } else {
        input_distrito.classList.remove('error');
    }

    if (input_direccion.value == '') {
        error = true;
        input_direccion.classList.add('error');
    } else {
        input_direccion.classList.remove('error');
    }

    return error;
};

// function obtener_datos(){}
let obtener_datos = () => {
    let p_nombre = input_p_nombre.value;
    let p_apellido = input_p_apellido.value;
    let email = input_email.value;
    let identificacion = input_identificacion.value;
    let f_nacimiento = input_f_nacimiento.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let genero = input_genero.value;
    let distrito = input_distrito.value;
    let direccion = input_direccion.value;

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
        registrar_producto(codigo, nombre, precio, descripcion);

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

btn_registro.addEventListener('click', obtener_datos);