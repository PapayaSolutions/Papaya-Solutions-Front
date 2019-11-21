'use strict'
//Listar categorias en el dashboard

const tbody = document.querySelector('#categoria_evento');
let lista_tipo_de_evento;

let llenar_tabla = async() => {

    lista_tipo_de_evento = await listar_tipos_de_evento();
    tbody.innerHTML = '';

    let vacio = document.createElement('option');
    vacio.innerText = '-';
    tbody.appendChild(vacio);
    for (let i = 0; i < lista_tipo_de_evento.length; i++) {

        let selecionar = document.createElement('option');


        selecionar.value = lista_tipo_de_evento[i]['nombre'];
        selecionar.innerText = lista_tipo_de_evento[i]['nombre'];

        tbody.appendChild(selecionar);

    }
};
llenar_tabla();

//dashboard de recintos
const xbody = document.querySelector('#recinto_evento');
let lista_recintos;

let llenar_tabla_recintos = async() => {

    lista_recintos = await listar_recintos();
    xbody.innerHTML = '';

    let vacio = document.createElement('option');
    vacio.innerText = '-';
    xbody.appendChild(vacio);
    for (let i = 0; i < lista_recintos.length; i++) {

        let selecionar = document.createElement('option');


        selecionar.value = lista_recintos[i]['nombre'];
        selecionar.innerText = lista_recintos[i]['nombre'];

        xbody.appendChild(selecionar);

    }
};

llenar_tabla_recintos();


//registrar eventos

const input_nombre_evento = document.querySelector('#nombre_evento');
const input_categoria_evento = document.querySelector('#categoria_evento');
const input_asistentes_evento = document.querySelector('#asistentes_evento');
const input_fecha_evento = document.querySelector('#fecha_evento');
const input_hora_evento = document.querySelector('#hora_evento');
const input_pais_evento = document.querySelector('#pais_evento');
const input_recinto_evento = document.querySelector('#recinto_evento');
const input_precio_evento = document.querySelector('#precio_evento');
const input_c_maxima_evento = document.querySelector('#c_maxima_evento');
const input_descripcion_evento = document.querySelector('#descripcion_evento');
const input_URL_imagen_evento = document.querySelector('#imagen_preview');


const btn_registro = document.querySelector('#btn_registro');

input_nombre_evento.innerHTML = '';
input_categoria_evento.innerHTML = '';
input_asistentes_evento.innerHTML = '';
input_fecha_evento.innerHTML = '';
input_hora_evento.innerHTML = '';
input_pais_evento.innerHTML = '';
input_recinto_evento.innerHTML = '';
input_precio_evento.innerHTML = '';
input_c_maxima_evento.innerHTML = '';
input_descripcion_evento.innerHTML = '';
input_URL_imagen_evento.innerHTML = '';



// Validación de datos
let validar = () => {
    let error = false;

    if (input_nombre_evento.value == '') {
        error = true;
        input_nombre_evento.classList.add('error');
        console.log('falta el nombre')
    } else {
        input_nombre_evento.classList.remove('error');
    }
    if (input_categoria_evento.value == '') {
        error = true;
        input_categoria_evento.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_categoria_evento.classList.remove('error');
    }
    if (input_asistentes_evento.value == '') {
        error = true;
        input_asistentes_evento.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_asistentes_evento.classList.remove('error');
    }
    if (input_fecha_evento.value == '') {
        error = true;
        input_fecha_evento.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_fecha_evento.classList.remove('error');
    }
    if (input_hora_evento.value == '') {
        error = true;
        input_hora_evento.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_hora_evento.classList.remove('error');
    }

    if (input_recinto_evento.value == '') {
        error = true;
        input_recinto_evento.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_recinto_evento.classList.remove('error');
    }
    if (input_precio_evento.value == '') {
        error = true;
        input_precio_evento.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_precio_evento.classList.remove('error');
    }
    if (input_c_maxima_evento.value == '') {
        error = true;
        input_c_maxima_evento.classList.add('error');
        console.log('revisar el porcentaje')
    } else {
        input_c_maxima_evento.classList.remove('error');
    }

}; //validar datos

// function obtener_datos(){}
let obtener_datos = () => {
    let nombre = input_nombre_evento.value;
    let categoria = input_categoria_evento.value;
    let asistentes_esperados = input_asistentes_evento.value;
    let fecha_disponible = input_fecha_evento.value;
    let hora = input_hora_evento.value.toString();
    let pais_evento = input_pais_evento.value;
    let recinto = input_recinto_evento.value;
    let precio_entrada = input_precio_evento.value;
    let cantidad_maxima_usuario = input_c_maxima_evento.value;
    let descripcion = input_descripcion_evento.value;
    let URL_imagen = input_URL_imagen_evento.src;
    let estado = 'Activo';




    //si hay error, entra al if. Si no hay error entra al else
    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: 'Faltan datos',
            text: 'Verifique los campos!',
        })
    } else {

        registrar_evento(
            nombre,
            categoria,
            asistentes_esperados,
            fecha_disponible,
            hora,
            pais_evento,
            recinto,
            precio_entrada,
            cantidad_maxima_usuario,
            descripcion,
            URL_imagen,
            estado);

        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'El evento a sido registrado',
            confirmButtonText: 'Entendido'
        });
    }
};


// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);