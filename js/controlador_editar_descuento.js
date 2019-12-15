'use strict';
const tbody = document.querySelector('#tbl_descuento tbody');

const id_descuento = localStorage.getItem('id_descuento');



let llenar_tabla = async() => {
    let lista_descuentos = await obtener_descuento_id(id_descuento);

    tbody.innerHTML = '';

    let fila = tbody.insertRow();

    let name2 = fila.insertCell();
    let name = document.createElement('input');
    name.value = lista_descuentos['nombre'];
    name.id = 'nombre';

    let desc2 = fila.insertCell();
    let desc = document.createElement('textarea');
    desc.value = lista_descuentos['descripcion'];
    desc.id = 'descripcion';

    let porcentaje2 = fila.insertCell();
    let porcentaje = document.createElement('input');
    porcentaje.value = (lista_descuentos['porcentaje']);
    porcentaje.id = 'porcentaje';

    let estado = fila.insertCell();

    let opcions = ['Habilitado', 'Deshabilitado'];
    let estado2 = document.createElement('select');
    estado2.placeholder = lista_descuentos['estado'];
    estado2.value = lista_descuentos['estado'];
    estado2.id = 'estado';
    opcions.forEach(element => {
        let opcion = document.createElement('option');
        opcion.value = element;
        opcion.text = element;
        opcion.setAttribute(!(lista_descuentos['estado'] == element) ? 'name' : 'selected', (lista_descuentos['estado'] == element) ? 'selected' : ' ');
        estado2.appendChild(opcion);
    });

    let boton2 = fila.insertCell();
    let boton = document.createElement('button');
    boton.innerText = 'Guardar';
    boton.classList.add('btn_guardar');
    boton.classList.add('btn-mas');
    boton.id = ('btn_guardar')

    boton.addEventListener('click', () => { guardar_datos(name, desc, porcentaje, estado2) });


    name2.appendChild(name);
    desc2.appendChild(desc);
    porcentaje2.appendChild(porcentaje);
    estado.appendChild(estado2);
    boton2.appendChild(boton);

};

//modificar descuentos
let validar = (nombre, descripcion, porcentaje, estado) => {
    let error = false;

    if (nombre.value == '') {
        error = true;
        nombre.classList.add('error')
    } else {
        nombre.classList.remove('error')
    }
    if (porcentaje.value == '') {
        error = true;
        porcentaje.classList.add('error')
    } else {
        porcentaje.classList.remove('error')
    }
    if (descripcion.value == '') {
        error = true;
        descripcion.classList.add('error')
    } else {
        descripcion.classList.remove('error')
    }
    if (estado.value == '') {
        error = true;
        estado.classList.add('error')
    } else {
        estado.classList.remove('error')
    }

    return error;
}

function guardar_datos(nombre, desc, porcentaje, estado2) {
    // strict 5
    // funtion obtener_datos(){}
    /// strict 6

    let p_nombre = nombre.value;
    let p_descripcion = desc.value;
    let p_porcentaje = parseInt(porcentaje.value, 10);
    let p_estado = estado2.value;
    console.log(p_estado);
    if (validar(nombre, descripcion, porcentaje, estado2)) {
        Swal.fire({
            type: 'warning',
            title: 'Algunos de los campos se encuentran incorrectos.',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido',
        })
    } else {

        modificar_descuento(id_descuento, p_nombre, p_descripcion, p_porcentaje, p_estado);

        Swal.fire({
            type: 'success',
            title: 'Modificación realizada con éxito',
            text: 'El impuesto ha sido almacenado',
            confirmButtonText: 'Entendido',
        }).then(function() {
            window.location.href = 'listar_descuento.html';
        });
    }
};




if (id_descuento) {
    llenar_tabla();
} else {
    console.log('Selecione un porducto antes de editarlo')
};