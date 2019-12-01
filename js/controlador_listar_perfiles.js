'use strict';

const tbody = document.querySelector('#tbl_clientes tbody');
const input_filtro = document.querySelector('#bnr_input');


let lista_encargados;
let lista_clientes;
let lista_organizadores;


let llenar_encargados = async() => {

    let filtro = input_filtro.value.toLowerCase();
    lista_encargados = await listar_encargados();

    for (let i = 0; i < lista_encargados.length; i++) {
        let nombre = lista_encargados[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_encargados[i]['nombre'];

            fila.insertCell().innerHTML = lista_encargados[i]['correo'];

            fila.insertCell().innerHTML = lista_encargados[i]['genero'];

            fila.insertCell().innerHTML = lista_encargados[i]['tipo'];
            fila.insertCell().innerHTML = lista_encargados[i]['estado'];

            let perfil = fila.insertCell();

            let boton = document.createElement('button');
            boton.dataset.destino = lista_encargados[i]['_id'];
            boton.innerText = 'Ver perfil';
            boton.classList.add('btn');

            boton.addEventListener('click', function() {
                localStorage.setItem("destino_id", this.dataset.destino);
                window.location.href = 'visualizar_perfil.html';

            })

            perfil.appendChild(boton);

        }
    }
};

let llenar_clientes = async() => {

    let filtro = input_filtro.value.toLowerCase();
    lista_clientes = await listar_clientes();

    for (let i = 0; i < lista_clientes.length; i++) {
        let nombre = (lista_clientes[i]['p_nombre'] + ' ' + lista_clientes[i]['p_apellido'] + ' ' + lista_clientes[i]['s_apellido']).toLowerCase();
        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = (lista_clientes[i]['p_nombre'] + ' ' + lista_clientes[i]['p_apellido'] + ' ' + lista_clientes[i]['s_apellido']);
            fila.insertCell().innerHTML = lista_clientes[i]['correo_cliente'];
            fila.insertCell().innerHTML = lista_clientes[i]['genero'];
            fila.insertCell().innerHTML = lista_clientes[i]['tipo'];
            fila.insertCell().innerHTML = lista_clientes[i]['estado'];

            let perfil = fila.insertCell();

            let boton = document.createElement('button');
            boton.dataset.destino = lista_clientes[i]['_id'];
            boton.innerText = 'Ver perfil';
            boton.classList.add('btn');

            boton.addEventListener('click', function() {
                localStorage.setItem("destino_id", this.dataset.destino);
                window.location.href = 'visualizar_perfil.html';

            });

            perfil.appendChild(boton);

        }
    };

};

let llenar_organizadores = async() => {

    let filtro = input_filtro.value.toLowerCase();
    lista_organizadores = await listar_organizadores();

    for (let i = 0; i < lista_organizadores.length; i++) {
        let nombre = (lista_organizadores[i]['nombre']).toLowerCase();
        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_organizadores[i]['nombre'];
            fila.insertCell().innerHTML = lista_organizadores[i]['correo'];
            fila.insertCell().innerHTML = lista_organizadores[i]['genero'];
            fila.insertCell().innerHTML = 'Organizador de Eventos';
            fila.insertCell().innerHTML = lista_organizadores[i]['estado'];

            let perfil = fila.insertCell();

            let boton = document.createElement('button');
            boton.dataset.destino = lista_organizadores[i]['_id'];
            boton.innerText = 'Ver perfil';
            boton.classList.add('btn');

            boton.addEventListener('click', function() {
                localStorage.setItem("destino_id", this.dataset.destino);
                localStorage.setItem('previo', window.location.href);
                window.location.href = 'visualizar_perfil.html';

            });

            perfil.appendChild(boton);

        }
    };

};

let llenar_tabla = async() => {
    tbody.innerHTML = '';

    llenar_clientes();
    llenar_encargados();
    llenar_organizadores();

};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);