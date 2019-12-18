'use strict';

const administrador = document.querySelector('#tbl_admin tbody');

let lista_administrador;
const _id = localStorage.getItem('destino_id');

let llenar_administrador = async() => {

    lista_administrador = await obtener_admin_id(_id);

    let fila = administrador.insertRow();

    let correo_admin2 = fila.insertCell();
    let correo = document.createElement('input');
    correo.value = lista_administrador['correo'];
    correo.id = 'correo';

    let pass_admin2 = fila.insertCell();
    let pass = document.createElement('input');
    pass.value = lista_administrador['contrasena'];
    pass.id = 'contrasena';

    let boton2 = fila.insertCell();
    let boton = document.createElement('button');
    boton.innerText = 'Guardar';
    boton.classList.add('btn_guardar');
    boton.classList.add('btn-mas');
    boton.id = ('btn_guardar')

    boton.addEventListener('click', () => { guardar_datos(correo, pass) });


    correo_admin2.appendChild(correo);
    pass_admin2.appendChild(pass);
    boton2.appendChild(boton);
};


// Validación de datos
let validar = (correo, pass) => {
    let error = false;

    if (correo.value == '') {
        error = true;
        correo.classList.add('error');

    } else {
        correo.classList.remove('error');
    }

    if (pass.value == '') {
        error = true;
        pass.classList.add('error');

    } else {
        pass.classList.remove('error');
    }

    return error;

};

function guardar_datos(correo, pass) {
    // strict 5
    // funtion obtener_datos(){}
    /// strict 6

    let p_correo = correo.value;
    let p_contrasena = pass.value;

    if (validar(correo, pass)) {
        Swal.fire({
            type: 'warning',
            title: 'Por favor ingrese todos los datos requeridos.',
            text: 'Los espacios en rojo deben ser llenados.',
            confirmButtonText: 'Entendido',
        })
    } else {

        modificar_admin(_id, p_correo, p_contrasena);

        Swal.fire({
            type: 'success',
            title: 'Modificación realizada con éxito',
            text: 'El impuesto ha sido almacenado',
            confirmButtonText: 'Entendido',
        }).then(function() {
            window.location.href = 'administrador.html';
        });
    }
};

if (_id) {
    llenar_administrador();
} else {
    console.log('Selecione un correo antes de editarlo')
};