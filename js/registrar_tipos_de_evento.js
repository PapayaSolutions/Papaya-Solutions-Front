"use strict";

const input_nombre = document.querySelector("#categoria");
const img_container = document.querySelector('.img_container').parentElement;
let botn = document.querySelector('#btn_agregar_imagen');
let input_imagen = '';
//--------------------------- CLOUDINARY WIDGET --------------------------------------------------------
var myWidget1 = cloudinary.createUploadWidget({
    cloudName: 'pypsolutionscr',
    uploadPreset: 'psolutions'

}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        document.querySelector('#imagen_preview').src = result.info.secure_url;
        input_imagen = result.info.secure_url;
    }
});
let validar = () => {
    let error = false;
    if (input_imagen == '') {
        error = true;
        img_container.classList.add('error')

    } else {
        img_container.classList.remove('error')

    }
    if (input_nombre.value == '') {
        error = true;
        input_nombre.parentElement.classList.add('error')

    } else {
        input_nombre.parentElement.classList.remove('error')

    }
    return error;
}
let validar3 = async() => {
    let nombre = input_nombre.value;
    let error = false;
    let respuesta = await registrar_tipos_de_evento(nombre, input_imagen, 'Activo');
    error = respuesta.data.resultado;
    if (!error) {
        Swal.fire({
            type: 'warning',
            title: 'La nueva categoría ya existe.',
            text: 'Por favor ingresar otra.',
            confirmButtonText: 'Entendido',
        })
    } else {
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con éxito',
            text: 'El Tipo de evento ha sido almacenado',
            confirmButtonText: 'Entendido',
        }).then(function() {
            llenar_tabla();
        });
    }
};
// Eventos asociados a los botones o inputs//
let obtener_datos = () => {
    let nombre = input_nombre.value;

    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: 'Ingrese todos los datos requeridos',
            text: 'Por favor verificar.',
            confirmButtonText: 'Entendido',
        })
    } else {
        validar3();
    }
};
botn.addEventListener('click', function() {
    myWidget1.open();
}, false);

btn_guardar.addEventListener('click', obtener_datos);