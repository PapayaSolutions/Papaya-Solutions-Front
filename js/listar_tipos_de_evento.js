'use strict'
const tbody = document.querySelector('#tipos');
const input_filtro = document.querySelector('#txt-filtro');
const input_nombre2 = document.querySelector(".input2");

let lista_tipo_de_evento = [];

let _id = localStorage.getItem('id_tipo');


var myWidget2 = cloudinary.createUploadWidget({
    cloudName: 'pypsolutionscr',
    uploadPreset: 'psolutions'

}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        document.getElementById(`img_${localStorage.getItem('id_tipo')}`).src = result.info.secure_url;
        localStorage.setItem('modify_url', result.info.secure_url);

    }
});

let validar_modificar2 = (id, nombre, URL, estado) => {
    let error = false;
    let nombre2 = document.getElementById(`nombre2-${id}`);
    let estado2 = document.getElementById(`estado2-${id}`);
    if (nombre == '') {
        error = true;
        nombre2.parentElement.classList.add('error')
    } else {
        nombre2.parentElement.classList.remove('error')
    }
    if (estado == '') {
        error = true;
        estado2.parentElement.classList.add('error')
    } else {
        estado2.parentElement.classList.remove('error')
    }
    return error;
}
let validar_modificar3 = async(id, nombre, URL, estado) => {
    let respuesta = await modificar_tipos_de_evento(id, nombre, URL, estado);
    console.log(respuesta);
    let error = respuesta.data.resultado;
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
let obtener_datos2 = (id, nombre, URL, estado) => {

    if (validar_modificar2(id, nombre, estado)) {
        Swal.fire({
            type: 'warning',
            title: 'Algunos de los campos se encuentran incorrectos.',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido',
        })
    } else {
        validar_modificar3(id, nombre, URL, estado);
    }
};








let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();
    let lista_tipo_de_evento = [];
    lista_tipo_de_evento = await listar_tipos_de_evento();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_tipo_de_evento.length; i++) {

        let nombre = lista_tipo_de_evento[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {

            let div_container = document.createElement('div');
            let nombre_container = document.createElement('div');
            let estado_container = document.createElement('div');

            let nombre = document.createElement('span');
            nombre.innerText = lista_tipo_de_evento[i]['nombre'];

            let nombre2 = document.createElement('input');
            nombre2.placeholder = lista_tipo_de_evento[i]['nombre'];
            nombre2.value = lista_tipo_de_evento[i]['nombre'];
            nombre2.id = `nombre2-${lista_tipo_de_evento[i]['_id']}`;

            let icono = document.createElement('i')
            icono.classList.add('fas', 'fa-edit', 'icono', 'invi');
            icono.id = `icono-${lista_tipo_de_evento[i]['_id']}`;


            let img_cont = document.createElement('div');
            img_cont.classList.add('img_container2');

            let imagen = document.createElement('img');
            imagen.src = lista_tipo_de_evento[i]['URL']
            imagen.id = `img_${lista_tipo_de_evento[i]['_id']}`;

            let nombre_txt = document.createElement('span');
            nombre_txt.innerText = 'Nombre: ';

            let estado_txt = document.createElement('span');
            estado_txt.innerText = 'Estado: ';

            let estado = document.createElement('span');
            estado.innerText = lista_tipo_de_evento[i]['estado'];


            let opcions = ['Habilitado', 'Desabilitado'];
            let estado2 = document.createElement('select');
            estado2.placeholder = lista_tipo_de_evento[i]['estado'];
            estado2.value = lista_tipo_de_evento[i]['estado'];
            estado2.id = `estado2-${lista_tipo_de_evento[i]['_id']}`;
            opcions.forEach(element => {
                let opcion = document.createElement('option');
                opcion.value = element;
                opcion.text = element;
                opcion.setAttribute(!(lista_tipo_de_evento[i]['estado'] == element) ? 'name' : 'selected', (lista_tipo_de_evento[i]['estado'] == element) ? 'selected' : ' ');
                estado2.appendChild(opcion);
            });


            let boton2 = document.createElement('button');
            boton2.classList.add('btn_guardar2');
            boton2.classList.add('btn-mas');
            boton2.classList.add('invi')
            boton2.innerText = 'Guardar';
            boton2.setAttribute('id', `guardar-${lista_tipo_de_evento[i]['_id']}`);



            let boton = document.createElement('button')
            boton.classList.add('btn-mas')

            boton.innerText = 'Editar';
            boton.setAttribute('id', `editar-${lista_tipo_de_evento[i]['_id']}`);

            boton.addEventListener('click', function() {
                let tmpID = lista_tipo_de_evento[i]['_id'];
                document.getElementById(`editar-${tmpID}`).classList.add("invi");
                document.getElementById(`guardar-${tmpID}`).classList.remove("invi");
                document.getElementById(`icono-${tmpID}`).classList.remove("invi");
                localStorage.setItem('id_tipo', tmpID);
                localStorage.setItem('modify_url', lista_tipo_de_evento[i]['URL']);


                nombre.classList.add('invi');
                estado.classList.add('invi');
                nombre_container.appendChild(nombre2);
                nombre2.classList.add('input2');
                nombre2.classList.remove('invi');
                estado_container.appendChild(estado2);
                estado2.classList.add('input2');
                estado2.classList.remove('invi');
            });
            boton2.addEventListener('click', function() {
                console.log(localStorage.getItem('id_tipo'));
                let tmpID = lista_tipo_de_evento[i]['_id'];
                let tmpNombre = document.getElementById(`nombre2-${tmpID}`).value;
                let tmpEstado = document.getElementById(`estado2-${tmpID}`).value;
                document.getElementById(`editar-${tmpID}`).classList.remove("invi");
                document.getElementById(`guardar-${tmpID}`).classList.add("invi");
                document.getElementById(`icono-${tmpID}`).classList.add("invi");
                nombre.classList.remove('invi');
                estado.classList.remove('invi');
                nombre2.classList.add('invi');
                estado2.classList.add('invi');
                console.log(document.getElementById(`nombre2-${tmpID}`).value);
                obtener_datos2(tmpID, tmpNombre, localStorage.getItem('modify_url'), tmpEstado);
            });
            icono.addEventListener('click', function() {
                myWidget2.open();
            }, false);



            tbody.appendChild(div_container);
            div_container.appendChild(nombre_container);
            nombre_container.appendChild(nombre_txt);
            nombre_container.appendChild(nombre);
            div_container.appendChild(estado_container);

            estado_container.appendChild(estado_txt);
            estado_container.appendChild(estado);
            div_container.appendChild(img_cont);
            img_cont.appendChild(imagen);
            img_cont.appendChild(icono);
            div_container.appendChild(boton);
            div_container.appendChild(boton2);



        }
    };
};



llenar_tabla();

input_filtro.addEventListener('keyup', llenar_tabla);