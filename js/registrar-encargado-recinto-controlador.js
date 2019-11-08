'use strict';

const input_nombre = document.querySelector('#txt_nombre_encargado_recinto');
const input_numero = document.querySelector('#txt_numero_encargado');
const input_correo = document.querySelector('#txt_correo');
const input_fecha_nacimiento = document.querySelector('#txt_fecha_nacimiento');
const input_genero = document.querySelector('#txt_genero')
const btn_registrar = document.querySelector('#btn_registrar');


// function para validar que hayan datos
const validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        //   input_codigo.classList.add('error');
    } else {
        error = false;
    };

    if (input_numero.value == '') {
        error = true;
        //   input_nombre.classList.add('error');

    } else {
        error = false;
    }

    if (input_correo.value == '') {
        error = true;
        //   input_precio.classList.add('error');
    } else {
        error = false;
    }

    if (input_fecha_nacimiento.value == '') {
        error = true;
        //  input_descripcion.classList.add('error');
    } else {
        error = false;
    }

    if (input_genero.value == '') {
        error = true;
        //  input_descripcion.classList.add('error');
    } else {
        error = false;
    }

    return error;
};

// function para generar codigos
var fecha1 = moment('2016-07-12');
var fecha2 = moment('2016-08-01');

console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');

// function para generar codigos
function codigoVer(length, chars) {
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

// function obtener_datos
let obtener_datos = () => {
    let nombre = input_nombre.value;
    let numero = input_numero.value;
    let correo = input_correo.value;
    let fecha_nacimiento = input_fecha_nacimiento.value;
    let genero = input_genero;
    let codigov = codigoVer(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    // console.log(codigov)
    let contrasena = codigoVer(20, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    //  console.log(contrasena)

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
            text: 'Encargado registrado!',
        })
    };
};


// Eventos asociados a los botones o inputs

btn_registrar.addEventListener('click', obtener_datos);