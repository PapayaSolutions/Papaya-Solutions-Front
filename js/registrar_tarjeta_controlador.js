'use strict';

const input_tarjeta = document.querySelector('#tarjeta');
const input_nombre = document.querySelector('#nombre');

const input_codigo = document.querySelector('#codigo');
const input_vencimiento = document.querySelector('#vencimiento');

const input_apellido = document.querySelector('#apellido');
const input_postal = document.querySelector('#postal');

const tipo_tarjeta = document.querySelector('#type1');
const btn_registro = document.querySelector('#btn_registro');

let email = sessionStorage.getItem('correo');
var tarjeta_invalida = false;

$("#tarjeta").keyup(function(e) {
    var num = $(this).val().toString();
    var charCount = num.length;

    /* VALIDACION DE TIPO */
    if (charCount == 1) {
        if (num == "4") {
            $("#type1").html("Visa");
        }
    }
    if (charCount == 2) {
        if (num == "51" || num == "55" || num == "53") {
            $("#type1").html("Master Card");
        }
    }

    /* !VALIDACION DE TIPO */

    /* ALGORITMO */
    if (charCount == 13 || charCount == 14 || charCount == 15 || charCount == 16) {
        var valid = isValid(num, charCount);
        if (valid) {
            $("#type2").html("Valida");
            $("input").attr("name", "numero_tarjeta").attr("class", "valid-card");
            tarjeta_invalida = true;

        } else {
            $("#type2").html("Invalida");
            $("input").attr("name", "numero_tarjeta").attr("class", "invalid-card");
            tarjeta_invalida = false;
        }
    }
    /* !ALGORITMO */
});

function isValid(input_tarjeta, charCount) {
    var double = true;
    var numArr = [];
    var sumTotal = 0;
    let i = [0];
    for (i = 0; i < charCount; i++) {
        var digito = parseInt(input_tarjeta.charAt(i));

        if (double) {
            digito = digito * 2;
            digito = toSingle(digito);
            double = false;
        } else {
            double = true;
        }
        numArr.push(digito);
    }

    for (i = 0; i < numArr.length; i++) {
        sumTotal += numArr[i];
    }
    var diff = eval(sumTotal % 10);
    console.log(diff);
    console.log(diff == "0");
    return (diff == "0");
}

function toSingle(digito) {
    if (digito > 9) {
        var tmp = digito.toString();
        var d1 = parseInt(tmp.charAt(0));
        var d2 = parseInt(tmp.charAt(1));
        return (d1 + d2);
    } else {
        return digito;
    }
}

// Validación de datos
let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error');
        console.log('Falta nombre del propietario')
    } else {
        input_nombre.classList.remove('error');
    }

    if (input_codigo.value == '') {
        error = true;
        input_codigo.classList.add('error');
        console.log('Falta código de tarjeta')
    } else {
        input_codigo.classList.remove('error');
    }

    if (input_vencimiento.value == '') {
        error = true;
        input_vencimiento.classList.add('error');
        console.log('Falta fecha de vencimiento')
    } else {
        input_vencimiento.classList.remove('error');
    }

    if (input_apellido.value == '') {
        error = true;
        input_apellido.classList.add('error');
    } else {
        input_apellido.classList.remove('error');
    }

    if (input_postal.value == '') {
        error = true;
        input_postal.classList.add('error');
    } else {
        input_postal.classList.remove('error');
    }

    if (input_postal.value == 'text') {
        error = true;
        input_postal.classList.add('error');
    } else {
        input_postal.classList.remove('error');
    }

    return error;

};

// function obtener_datos(){}
let obtener_datos = () => {

    let tarjeta = input_tarjeta.value;
    let nombre = input_nombre.value;
    let codigo = input_codigo.value;
    let vencimiento = input_vencimiento.value;
    let apellido = input_apellido.value;
    let postal = input_postal.value;

    //si hay error, entra al if. Si no hay error entra al else
    if (tarjeta_invalida == false) {
        Swal.fire({
            type: 'warning',
            title: 'Verifique el número de tarjeta',
            animation: true,
            text: '',
            confirmButtonText: 'Entendido',

        })
    } else if (validar()) {
        Swal.fire({
            type: 'warning',
            title: 'Algunos de los campos se encuentran incorrectos.',
            text: 'Por favor revise los campos en rojo.',
            confirmButtonText: 'Entendido',

        })
    } else {

        registrar_tarjeta(email, tarjeta, nombre, codigo, vencimiento, apellido, postal);

        Swal.fire({
            type: 'success',
            title: 'Registrado',
            animation: true,
            text: '¡Se han guardado los datos de la tarjeta con éxito!',
            confirmButtonText: 'Entendido',

        }).then(function() {
            window.location.href = 'visualizar_perfil.html';
        });
    }
};

// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);