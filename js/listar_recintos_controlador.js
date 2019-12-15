'use strict';

const tbody = document.querySelector('#tbl-recintos tbody');
const input_filtro = document.querySelector('#txt-filtro');
const input_filtro_cap = document.querySelector('#txt-filtro-cap');
const btnmas = document.querySelector('#btnmas');

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
            fila.insertCell().innerHTML = lista_recintos[i]['capacidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['estado'];

            let celda_editar = fila.insertCell();
            let boton_editar = document.createElement('button');

            boton_editar.innerText = 'Editar';
            celda_editar.appendChild(boton_editar);

            boton_editar.dataset._id = lista_recintos[i]['_id'];
            boton_editar.addEventListener('click', function() {

                sessionStorage.setItem('_idEvento', this.dataset._id)
                window.location.href = 'editar_recinto.html'
            })






            let perfil = fila.insertCell();

            let boton = document.createElement('button');
            boton.dataset.destino = lista_recintos[i]['_id'];
            boton.innerText = 'Ver perfil';
            boton.classList.add('btn');

            boton.addEventListener('click', function() {
                localStorage.setItem("recinto_id", this.dataset.destino);
                localStorage.setItem('previo', window.location.href);
                window.location.href = 'perfil_recinto.html';

            });

            perfil.appendChild(boton);


        }
    }
};


let llenar_tablac = async() => {

    let filtro_cap = parseInt(input_filtro_cap.value, 10)

    lista_recintos = await listar_recintos();
    tbody.innerHTML = '';

    for (let i = 0; lista_recintos.length; i++) {


        let capacidad = lista_recintos[i]['capacidad']


        if (filtro_cap >= capacidad) {



            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_recintos[i]['nombre'];
            fila.insertCell().innerHTML = lista_recintos[i]['provincia'];
            fila.insertCell().innerHTML = lista_recintos[i]['canton'];
            fila.insertCell().innerHTML = lista_recintos[i]['capacidad'];
            fila.insertCell().innerHTML = lista_recintos[i]['estado'];
        }

        if (isNaN(filtro_cap)) {

            llenar_tabla();
        }
    }
};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);
input_filtro_cap.addEventListener('keyup', llenar_tablac);