'use strict';

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const nacimiento = document.querySelector('#nacimiento');
const tbody = document.querySelector('#tbl_perfil tbody');
const direccion = document.querySelector('#direccion');
const identificacion = document.querySelector('#identificacion');
const correo_cliente = document.querySelector('#correo');

let lista_clientes;
let id = localStorage.getItem('id_cliente');

let llenar_tabla = async() => {

    lista_clientes = await listar_clientes(id);
    console.log(lista_clientes);

    let fila = tbody.insertRow();

    nombre.innerHTML = (lista_clientes[0]['p_nombre'] + ' ' + lista_clientes[0]['s_nombre'] + ' ' + lista_clientes[0]['p_apellido'] + ' ' + lista_clientes[0]['s_apellido']);
    genero.innerHTML = lista_clientes[0]['genero'];
    fila.insertCell().innerHTML = (lista_clientes[0]['provincia'] + ', ' + lista_clientes[0]['canton'] + ', ' + lista_clientes[0]['distrito'] + '.');
    direccion.innerHTML = lista_clientes[0]['direccion'];
    identificacion.innerHTML = lista_clientes[0]['identificacion'];
    correo_cliente.innerHTML = lista_clientes[0]['correo'];
    nacimiento.innerHTML = lista_clientes[0]['f_nacimiento'];

    localStorage.setItem('id_cliente', JSON.stringify(lista_clientes));

    JSON.parse(localStorage.getItem('id_cliente'));

};
llenar_tabla();



/*
const nombre = document.querySelector('nombre');
const tbody = document.querySelector('#tbl_perfil tbody');

let id = localStorage.getItem('id_perfil');
let lista_clientes;


let llenar_perfil = async() => {

    lista_clientes = await obtener_cliente_id(id);

    console.log(lista_clientes);

    nombre.innerHTML = lista_clientes[0]['p_nombre'];

    localStorage.setItem('id_usuario', nombre);


};

llenar_perfil();*/