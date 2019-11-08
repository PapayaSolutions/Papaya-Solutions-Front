'use strict'
const tbody = document.querySelector('.carta');
const input_filtro = document.querySelector('#txt_search');
let lista_eventos;

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();
    lista_eventos = await listar_eventos();

    tbody.innerHTML = '';
    for (let i = 0; i < lista_eventos.length; i++) {
        let nombre = lista_eventos[i]['nombre'].toLowerCase();
        let correo = lista_eventos[i]['correo'].toLowerCase();
        if (nombre.includes(search) || (correo.includes(search))) {

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