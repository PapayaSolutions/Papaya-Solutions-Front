'use strict'
const tbody = document.querySelector('#tipos');


let lista_tipo_de_evento;

let llenar_tabla = async() => {

    lista_tipo_de_evento = await listar_tipos_de_evento();
    tbody.innerHTML = '';
    for (let i = 1; i < lista_tipo_de_evento.length; i++) {


        let div_container = document.createElement('div');

        let nombre = document.createElement('span');
        nombre.innerText = lista_tipo_de_evento[i]['nombre'];

        tbody.appendChild(div_container);

        div_container.appendChild(nombre);


    };
};



llenar_tabla();