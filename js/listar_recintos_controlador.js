'use strict';

const tbody = document.querySelector('#tbl-recintos tbody');
const input_filtro = document.querySelector('#txt-filtro');

let lista_recintos;
let llenar_tabla = async() => {

    let filtro = input_filtro.value.toLowerCase();

    lista_recintos = await listar_recintos();


    tbody.innerHTML = '';

    for (let i = 0; lista_recintos.length; i++) {

        let nombre = lista_recintos[i]['nombre'].toLowerCase();

        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_recintos[i]['nombre'];
            fila.insertCell().innerHTML = lista_recintos[i]['provincia'];
            fila.insertCell().innerHTML = lista_recintos[i]['canton'];
            fila.insertCell().innerHTML = lista_recintos[i]['distrito'];
            fila.insertCell().innerHTML = lista_recintos[i]['direccion'];
            fila.insertCell().innerHTML = lista_recintos[i]['asientosTradicionales'];
            fila.insertCell().innerHTML = lista_recintos[i]['asientosaccesibilidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['capacidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['estado'];
        }
    }
};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);