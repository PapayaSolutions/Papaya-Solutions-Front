'use strict';

const nombre = document.querySelector('#nombre_perfil');
const correo_cliente = document.querySelector('#correo_perfil');
const genero = document.querySelector('#genero_perfil');

let lista_clientes;
let id = localStorage.getItem('id_cliente');

let llenar_perfil = async() => {

    lista_clientes = await obtener_cliente_id(id);
    for (let i = 0; i < lista_clientes.length; i++) {
        nombre.innerHTML = lista_clientes[i]['p_nombre'];
        correo_cliente.value = lista_clientes[i]['correo_cliente'];
        genero.value = lista_clientes[i]['genero'];


    }

};

llenar_perfil();