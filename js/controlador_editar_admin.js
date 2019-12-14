'use strict';

const ccorreo = document.querySelector('#ccorreo');
const ccontrasena = document.querySelector('#ccontrasena');
const ccorreo1 = document.querySelector('#ccorreo1');
const ccontrasena1 = document.querySelector('#ccontrasena1');

const btn_guardar = document.querySelector('#guardar');


let lista_admin;


let llenar_tabla = async() => {

    lista_admin = await listar_admin();

    ccorreo.value = lista_admin[0]['correo'];
    ccontrasena.value = lista_admin[0]['contrasena'];

    ccorreo1.value = lista_admin[1]['correo'];
    ccontrasena1.value = lista_admin[1]['contrasena'];

};

llenar_tabla();

// Validación de datos
let validar = () => {
    let error = false;

    if (ccorreo.value == '') {
        error = true;
        ccorreo.classList.add('error');
        console.log('Falta nombre del propietario')
    } else {
        ccorreo.classList.remove('error');
    }

    if (ccontrasena.value == '') {
        error = true;
        ccontrasena.classList.add('error');
        console.log('Falta código de tarjeta')
    } else {
        ccontrasena.classList.remove('error');
    }

    if (ccorreo1.value == '') {
        error = true;
        ccorreo1.classList.add('error');
        console.log('Falta fecha de vencimiento')
    } else {
        ccorreo1.classList.remove('error');
    }

    if (ccontrasena1.value == '') {
        error = true;
        ccontrasena1.classList.add('error');
    } else {
        ccontrasena1.classList.remove('error');
    }

    return error;

};


let modificar_datos = async() => {
    // strict 5
    // funtion obtener_datos(){}
    /// strict 6

    let p_correo = ccorreo.value;
    let p_contrasena = ccontrasena.value;
    let p_correo1 = ccorreo1.value;
    let p_contrasena1 = ccontrasena1.value;

    if (validar(ccorreo, ccontrasena, ccorreo1, ccontrasena1)) {
        Swal.fire({
            type: 'warning',
            title: 'Algunos de los campos se encuentran incorrectos.',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido',
        })
    } else {

        modificar_admin(p_correo, p_contrasena, p_correo1, p_contrasena1);

        Swal.fire({
            type: 'success',
            title: 'Modificación realizada con éxito',
            text: 'El impuesto ha sido almacenado',
            confirmButtonText: 'Entendido',
        })
    }
};

btn_guardar.addEventListener('click', modificar_datos);