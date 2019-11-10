'use strict'
const tbody = document.querySelector('#tbl-personas tbody');
const input_filtro = document.querySelector('#txt-filtro');
let lista_personas;

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();
    lista_personas = await listar_personas();

    tbody.innerHTML = '';
    for (let i = 0; i < lista_personas.length; i++) {
        let nombre = lista_personas[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_personas[i]['cedula'];
            fila.insertCell().innerHTML = lista_personas[i]['correo'];
            fila.insertCell().innerHTML = lista_personas[i]['nombre'];
            fila.insertCell().innerHTML = lista_personas[i]['apellido'];
            fila.insertCell().innerHTML = lista_personas[i]['segundo_apellido'];
            fila.insertCell().innerHTML = lista_personas[i]['estado'];
        }

    };
};


llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);