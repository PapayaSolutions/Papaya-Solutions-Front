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

            /*  btn.onclick = (function(entry) { return function() { chooseUser(entry); } })(entry);*/

            fila.insertCell().innerHTML = lista_clientes[i]['p_nombre'];
            fila.insertCell().innerHTML = lista_clientes[i]['p_apellido'];
            fila.insertCell().innerHTML = lista_clientes[i]['s_apellido'];
            fila.insertCell().innerHTML = lista_clientes[i]['correo_cliente'];
            fila.insertCell().innerHTML = lista_clientes[i]['estado'];

            let btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn";
            btn.value = lista_clientes[i]['_id'];
            /* td.appendChild(btn);*/
            fila.insertCell().innerHTML = btn;

            /* '<input type = "button">';*/

        }
    };
};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);