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
        input_codigo.classList.add('error');
    } else {
        error = false;
    };

    if (input_numero.value == '') {
        error = true;
        input_nombre.classList.add('error');

    } else {
        error = false;
    }

    if (input_correo.value == '') {
        error = true;
        input_precio.classList.add('error');
    } else {
        error = false;
    }

    if (input_fecha_nacimiento.value == '') {
        error = true;
        input_descripcion.classList.add('error');
    } else {
        error = false;
    }

    if (input_genero.value == '') {
        error = true;
        input_descripcion.classList.add('error');
    } else {
        error = false;
    }

    return error;
};

// function para generar codigos
function codigoVer(length, chars) {
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

// function para validar cantidad de digitos en campo numeros
const validar_numero = (numero) => {
    let error_num = false
    if (numero.length < 8) {
        error_num = true
    } else {
        error_num = false
    }
    return error_num
}

// function para validar la mayoria de edad
const validar_edad = (fecha) => {
    let error_edad = false
    let hoy = new Date();
    let fecha_conv = new Date(fecha);
    let dia_actual = hoy.getDate()
    let dia_fecha = fecha_conv.getDate() + 1
    let anos = (hoy.getFullYear() - fecha_conv.getFullYear())
    let mes_actual = hoy.getMonth() + 1
    let mes_fecha = fecha_conv.getMonth() + 1

    console.log('Dia actual: ' + dia_actual)
    console.log('Dia fecha: ' + dia_fecha)
    console.log('Mes actual: ' + mes_actual)
    console.log('Mes fecha: ' + mes_fecha)
    console.log('Year : ' + anos)

    if (dia_actual < dia_fecha || anos < 18 || mes_actual > mes_fecha) {
        error_edad = true
    } else {
        error_edad = false
    }
    return error_edad

}


// function obtener_datos
let obtener_datos = () => {
    let estado = 'Activo';
    let tipo = 'Encargado de recinto';
    let nombre = input_nombre.value;
    let numero = input_numero.value;
    let correo = input_correo.value;
    let fecha_nacimiento = input_fecha_nacimiento.value;
    let genero = input_genero.value;
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

    } else if (validar_numero(numero)) {
        Swal.fire({
            type: 'warning',
            title: 'Verifique el campo numero',
            text: 'Minimo debe de tener 8 digitos!',
        })

    }
    /*else if (validar_edad(fecha_nacimiento)) {
           Swal.fire({
               type: 'warning',
               title: 'Verifique la edad',
               text: 'Debe de ser mayor de edad!',
           })

       

       } */
    else {
        console.log(genero)
        registrar_encargado_recinto(nombre, numero, correo, fecha_nacimiento, genero, contrasena, codigov, tipo, estado)
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'Encargado registrado!',
        })
    };
};


// Eventos asociados a los botones o inputs

btn_registrar.addEventListener('click', obtener_datos);