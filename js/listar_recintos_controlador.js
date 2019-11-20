'use strict';

const tbody = document.querySelector('#tbl-recintos tbody');
const input_filtro = document.querySelector('#txt-filtro');
const input_filtro_cap = document.querySelector('#txt-filtro-cap');

let lista_recintos;
let llenar_tabla = async() => {

    let filtro_cap = parseInt(input_filtro_cap.value, 10)
    let filtro = input_filtro.value.toLowerCase();

    lista_recintos = await listar_recintos();
    tbody.innerHTML = '';

    for (let i = 0; lista_recintos.length; i++) {

        let nombre = lista_recintos[i]['nombre'].toLowerCase();
        let capacidad = lista_recintos[i]['capacidad'];

        if (nombre.includes(filtro)) {


            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_recintos[i]['nombre'];
            fila.insertCell().innerHTML = lista_recintos[i]['provincia'];
            fila.insertCell().innerHTML = lista_recintos[i]['canton'];
            fila.insertCell().innerHTML = lista_recintos[i]['distrito'];
            fila.insertCell().innerHTML = lista_recintos[i]['direccion'];
            fila.insertCell().innerHTML = lista_recintos[i]['asientos_tradicionales'];
            fila.insertCell().innerHTML = lista_recintos[i]['asientos_accesibilidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['capacidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['estado'];

        }
    }
};


let llenar_tablac = async() => {

    let filtro_cap = parseInt(input_filtro_cap.value, 10)

    lista_recintos = await listar_recintos();
    tbody.innerHTML = '';

    for (let i = 0; lista_recintos.length; i++) {


        let capacidad = lista_recintos[i]['capacidad']

        console.log(capacidad)
        console.log(filtro_cap)


        if (filtro_cap > capacidad) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_recintos[i]['nombre'];
            fila.insertCell().innerHTML = lista_recintos[i]['provincia'];
            fila.insertCell().innerHTML = lista_recintos[i]['canton'];
            fila.insertCell().innerHTML = lista_recintos[i]['distrito'];
            fila.insertCell().innerHTML = lista_recintos[i]['direccion'];
            fila.insertCell().innerHTML = lista_recintos[i]['asientos_tradicionales'];
            fila.insertCell().innerHTML = lista_recintos[i]['asientos_accesibilidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['capacidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['estado'];

        }
    }
};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);
input_filtro_cap.addEventListener('keyup', llenar_tablac);
llenar_tabla();