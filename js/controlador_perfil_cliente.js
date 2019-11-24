'use strict';
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

llenar_perfil();