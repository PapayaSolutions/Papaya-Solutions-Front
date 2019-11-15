"use strict";

const input_nombre = document.querySelector("#categoria");

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error')
    } else {
        input_nombre.classList.remove('error')
    }


    return error;
}

// strict 5
// funtion obtener_datos(){}
/// strict 6
let obtener_datos = () => {

    let nombre = input_nombre.value;



    if (validar()) {

        Swal.fire({
            type: 'warning',
            title: 'Algunos de los campos se encuentran incorrectos.',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido',
        })



    } else {

        registrar_tipos_de_evento(nombre);

        Swal.fire({
            type: 'success',
            title: 'Registro realizado con éxito',
            text: 'El producto ha sido almacenado',
            confirmButtonText: 'Entendido',
        });
    }


};


// Eventos asociados a los botones o inputs//

btn_guardar.addEventListener('click', obtener_datos);