'use strict';

const tbody = document.querySelector('#tbl_impuestos tbody');
const input_filtro = document.querySelector('#bnr_input');

let lista_impuestos;

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();
    lista_impuestos = await listar_impuestos();

    tbody.innerHTML = '';
    for (let i = 0; i < lista_impuestos.length; i++) {
        let nombre = lista_impuestos[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {

            let fila = tbody.insertRow();

            let name = fila.insertCell();
            name.innerHTML = lista_impuestos[i]['nombre'];
            name.classList = 'nombre';

            fila.insertCell().innerHTML = (lista_impuestos[i]['porcentaje']) + '%';
            let desc = fila.insertCell();
            desc.innerHTML = lista_impuestos[i]['descripcion'];
            desc.classList = 'descripcion';

            fila.insertCell().innerHTML = lista_impuestos[i]['estado'];

        }
    };

};

llenar_tabla();

input_filtro.addEventListener('keyup', llenar_tabla);