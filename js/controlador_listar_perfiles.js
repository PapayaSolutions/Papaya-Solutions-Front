'use strict'
const tbody = document.querySelector('#tbl_clientes tbody');
const input_filtro = document.querySelector('#bnr_input');

let lista_clientes;

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();
    lista_clientes = await listar_clientes();
    tbody.innerHTML = '';
    for (let i = 0; i < lista_clientes.length; i++) {
        let nombre = lista_clientes[i]['p_nombre'].toLowerCase();
        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_clientes[i]['p_nombre'];
            fila.insertCell().innerHTML = lista_clientes[i]['p_apellido'];
            fila.insertCell().innerHTML = lista_clientes[i]['s_apellido'];
            fila.insertCell().innerHTML = lista_clientes[i]['correo_cliente'];
            fila.insertCell().innerHTML = lista_clientes[i]['estado'];

        }
    };
};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);