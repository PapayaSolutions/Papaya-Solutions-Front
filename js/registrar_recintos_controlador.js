'use strict';

const input_nombre = document.querySelector('#txt_nombre_recinto');
const input_provincia = document.querySelector('#txt_provincia');
const input_canton = document.querySelector('#txt_canton');
const input_distrito = document.querySelector('#txt_distrito');
const input_direccion = document.querySelector('#txt_direccion');
const input_capacidad = document.querySelector('#txt_capacidad');
const input_asientos_tradicionales = document.querySelector('#txt_asientos_tradicionales');
const input_asientos_accesibilidad = document.querySelector('#txt_asientos_accesibilidad');
const btn_registrar = document.querySelector('#btn_registrar');


// function para validar que hayan datos
const validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
    } else {
        error = false;
        input_nombre.classList.remove('error');
    };

    if (input_provincia.value == '') {
        error = true;
        input_provincia.classList.add('error');
    } else {
        error = false;
        input_provincia.classList.remove('error');
    }

    if (input_canton.value == '') {
        error = true;
        input_canton.classList.add('error');
    } else {
        error = false;
        input_canton.classList.remove('error');
    }

    if (input_distrito.value == '') {
        error = true;
        input_distrito.classList.add('error');
    } else {
        error = false;
        input_distrito.classList.remove('error');
    }

    if (input_direccion.value == '') {
        error = true;
        input_direccion.classList.add('error');
    } else {
        error = false;
        input_direccion.classList.remove('error');
    }

    if (input_capacidad.value == '') {
        error = true;
        input_capacidad.classList.add('error');
    } else {
        error = false;
        input_capacidad.classList.remove('error');
    }

    if (input_asientos_tradicionales.value == '') {
        error = true;
        input_asientos_tradicionales.classList.add('error');
    } else {
        error = false;
        input_asientos_tradicionales.classList.remove('error');
    }

    if (input_asientos_accesibilidad.value == '') {
        error = true;
        input_asientos_accesibilidad.classList.add('error');
    } else {
        error = false;
        input_asientos_accesibilidad.classList.remove('error');
    }


    return error;
};

// function obtener_datos
let obtener_datos = () => {
    let nombre = input_nombre.value;
    let direccion = input_direccion.value;
    let canton = input_canton.value;
    let provincia = input_provincia.value;
    let distrito = input_distrito.value;
    let capacidad = input_capacidad.value;
    let asientos_tradicionales = input_asientos_tradicionales.value;
    let asientos_accesibilidad = input_asientos_accesibilidad;
    let estado = 'Activo';
    // console.log()
    //  console.log()


    //Si hay error entra al if     
    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: 'Faltan datos',
            text: 'Verifique los campos!',
        })

    } else {


        registrar_recinto(nombre, direccion, canton, provincia, distrito, capacidad, asientos_tradicionales, asientos_accesibilidad, estado)

        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'Encargado registrado!',
        })

        document.getElementById("form_rec").reset();
    };
};

// Eventos asociados a los botones o inputs

btn_registrar.addEventListener('click', obtener_datos);