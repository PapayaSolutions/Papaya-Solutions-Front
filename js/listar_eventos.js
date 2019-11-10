'use strict'
const tbody = document.querySelector('#tbl-personas tbody');
const input_filtro = document.querySelector('#txt-filtro');
let lista_evento;

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();
    lista_evento = await listar_evento();

    tbody.innerHTML = '';
    for (let i = 0; i < lista_evento.length; i++) {
        let nombre = lista_evento[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_evento[i]['id'];
            fila.insertCell().innerHTML = lista_evento[i]['nombre'];
            fila.insertCell().innerHTML = lista_evento[i]['tipo'];
            fila.insertCell().innerHTML = lista_evento[i]['asistentes_esperados'];
            fila.insertCell().innerHTML = lista_evento[i]['fecha_disponible'];
            fila.insertCell().innerHTML = lista_evento[i]['pais_evento'];
        }

    };
};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);