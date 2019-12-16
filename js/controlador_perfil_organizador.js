'use strict';

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const nacimiento = document.querySelector('#nacimiento');
const tbody = document.querySelector('#tbl_perfil tbody');
const direccion = document.querySelector('#direccion');
const identificacion = document.querySelector('#identificacion');
const correo_cliente = document.querySelector('#correo');

const div_i = document.querySelectorAll('#volver a i');
const editar_perfil = document.querySelector('#tbl_editar tbody');
const contenedor = document.querySelector('#cards');

let _id;
let lista_organizador;
let usuario = sessionStorage.getItem('tipo_usuario');

let llenar_tabla = async() => {

    tbody.innerHTML = '';

    if (usuario === 'Organizador') {
        _id = localStorage.getItem('destino_id');
        lista_organizador = await obtener_organizador_id(_id);
    } else {
        if (usuario === 'Admin')
            _id = localStorage.getItem('destino_id');
        lista_organizador = await obtener_organizador_id(_id);
    }

    for (let i = 0; i < lista_organizador.length; i++) {

        let fila = tbody.insertRow();
        nombre.innerHTML = (lista_organizador[0]['p_nombre'] + ' ' + lista_organizador[0]['s_nombre'] + ' ' + lista_organizador[0]['p_apellido'] + ' ' + lista_organizador[0]['s_apellido']);
        genero.innerHTML = lista_organizador[0]['genero'];
        fila.insertCell().innerHTML = (lista_organizador[0]['provincia'] + ', ' + lista_organizador[0]['canton'] + ', ' + lista_organizador[0]['distrito'] + '.');
        direccion.innerHTML = lista_organizador[0]['direccion'];
        identificacion.innerHTML = lista_organizador[0]['identificacion'];
        correo_cliente.innerHTML = lista_organizador[0]['correo'];

        let date = new Date((lista_organizador[0]['nacimiento']));
        nacimiento.innerHTML = (date.getDate() + '/ ' + date.getMonth() + '/ ' + date.getFullYear());
    }

    let editar = editar_perfil.insertRow();
    let perfil = editar.insertCell();

    let boton = document.createElement('button');
    boton.dataset.destino = lista_clientes[0]['_id'];
    boton.innerText = 'Editar';
    boton.classList.add('btn');

    boton.addEventListener('click', function() {
        localStorage.setItem("destino_id", this.dataset.destino);
        localStorage.setItem('previo', window.location.href);
        window.location.href = 'editar_perfil.html';

    });

    perfil.appendChild(boton);

};

llenar_tabla();


if (conectado) {
    switch (tipo_usuario) {

        case 'Cliente':
            div_i[0].classList.add('ocultar');
            break;
        case 'Encargado':
            div_i[0].classList.add('ocultar');

            break;
        case 'Organizador':
            div_i[0].classList.add('ocultar');

            break;
        default:

            break;
    }
} else {
    div_i[0].classList.add('ocultar');
}