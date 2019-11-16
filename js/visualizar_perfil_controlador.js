'use strict';

const a_nombre_usuario = document.querySelector('#nombre_usuario');
const p_edad = document.querySelector('#edad');
const p_genero = document.querySelector('#genero');
const p_correo = document.querySelector('#correo');
const p_direccion = document.querySelector('#direccion');
const p_direccion_exacta = document.querySelector('#direccion_exacta');
const p_identificacion = document.querySelector('#identificacion');
const p_fnacimiento = document.querySelector('#fnacimiento');

let validar = () => {
    let error = false;
    if (p_nombre_usuario.value == '') {
        error = true;
        p_nombre_usuario.classList.add('error');
    } else {
        p_nombre_usuario.classList.remove('error');
    }
    if (p_edad.value == '') {
        error = true;
        p_edad.classList.add('error');
    } else {
        p_edad.classList.remove('error');
    }
    if (p_genero.value == '') {
        error = true;
        p_genero.classList.add('error');
    } else {
        p_genero.classList.remove('error');
    }
    if (p_correo.value == '') {
        error = true;
        p_correo.classList.add('error');
    } else {
        p_correo.classList.remove('error');
    }
    if (p_direccion.value == '') {
        error = true;
        p_direccion.classList.add('error');
    } else {
        p_direccion.classList.remove('error');
    }
    if (p_direccion_exacta.value == '') {
        error = true;
        p_direccion_exacta.classList.add('error');
    } else {
        p_direccion_exacta.classList.remove('error');
    }
    if (p_identificacion.value == '') {
        error = true;
        p_identificacion.classList.add('error');
    } else {
        p_identificacion.classList.remove('error');
    }
    if (p_fnacimiento.value == '') {
        error = true;
        p_fnacimiento.classList.add('error');
    } else {
        p_fnacimiento.classList.remove('error');
    }

    return error;

};