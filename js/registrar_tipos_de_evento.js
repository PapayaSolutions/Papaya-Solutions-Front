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

let obtener_datos = () => {

    let nombre = input_nombre.value;

    if (validar()) {

        Swal.fire({
            type: 'warning',
            title: 'El campo se encuentran incorrectos.',
            text: 'Por favor recuerde ',
            confirmButtonText: 'Entendido',
        })

    } else {

        registrar_tipos_de_evento(nombre);

        Swal.fire({
            type: 'success',
            title: 'Registro realizado con éxito',
            text: 'El Tipo de evento ha sido almacenado',
            confirmButtonText: 'Entendido',
        }).then(function() {
            location.reload();
        });

    }

};


// Eventos asociados a los botones o inputs//

btn_guardar.addEventListener('click', obtener_datos);