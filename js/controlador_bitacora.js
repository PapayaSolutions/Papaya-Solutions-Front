'use strict';

const tbody = document.querySelector('#tbl_bitacora tbody');
const input_filtro = document.querySelector('#bnr_input');


let lista_bitacora;



let llenar_bitacora = async() => {

    let filtro = input_filtro.value.toLowerCase();
    lista_bitacora = await listar_bitacoras();

    for (let i = 0; i < lista_bitacora.length; i++) {
        let tipo = lista_bitacora[i]['tipo'].toLowerCase();
        if (tipo.includes(filtro)) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_bitacora[i]['tipo'];

            fila.insertCell().innerHTML = lista_bitacora[i]['descripcion'];

            fila.insertCell().innerHTML = lista_bitacora[i]['fecha'];

            fila.insertCell().innerHTML = lista_bitacora[i]['hora'];
            fila.insertCell().innerHTML = lista_bitacora[i]['rol'];



        }
    }
};

let llenar_tabla = async() => {
    tbody.innerHTML = '';

    llenar_bitacora();

};

llenar_bitacora();
input_filtro.addEventListener('keyup', llenar_tabla);