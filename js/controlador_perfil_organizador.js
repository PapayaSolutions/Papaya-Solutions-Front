'use strict';

const nombre_org = document.querySelector('#nombre');
const genero_org = document.querySelector('#genero');
const nacimiento_org = document.querySelector('#nacimiento');
const tbody_org = document.querySelector('#tbl_perfil tbody');
const direccion_org = document.querySelector('#direccion');
const identificacion_org = document.querySelector('#identificacion');
const correo_org = document.querySelector('#correo');

const editar_perfil_org = document.querySelector('#tbl_editar tbody');
const contenedor_org = document.querySelector('#cards');

let _id;
let lista_organizador;
let usuario_org = sessionStorage.getItem('tipo_usuario');

let llenar_tabla_org = async() => {

    tbody.innerHTML = '';

    if (usuario_org === 'Organizador') {
        _id = localStorage.getItem('_id');
        lista_organizador = await obtener_organizador_id(_id);
    } else {
        if (usuario_org === 'Admin')
            _id = localStorage.getItem('_id');
        lista_organizador = await obtener_organizador_id(_id);
    }

    for (let i = 0; i < lista_organizador.length; i++) {

        let fila = tbody.insertRow();
        nombre_org.innerHTML = (lista_organizador[0]['p_nombre'] + ' ' + lista_organizador[0]['s_nombre'] + ' ' + lista_organizador[0]['p_apellido'] + ' ' + lista_organizador[0]['s_apellido']);
        genero_org.innerHTML = lista_organizador[0]['genero'];
        fila.insertCell().innerHTML = (lista_organizador[0]['provincia'] + ', ' + lista_organizador[0]['canton'] + ', ' + lista_organizador[0]['distrito'] + '.');
        direccion_org.innerHTML = lista_organizador[0]['direccion'];
        identificacion_org.innerHTML = lista_organizador[0]['identificacion'];
        correo_cliente_org.innerHTML = lista_organizador[0]['correo'];

        let date = new Date((lista_organizador[0]['nacimiento']));
        nacimiento_org.innerHTML = (date.getDate() + '/ ' + date.getMonth() + '/ ' + date.getFullYear());
    }



};

llenar_tabla_org();