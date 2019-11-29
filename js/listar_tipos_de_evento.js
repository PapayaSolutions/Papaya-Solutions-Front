'use strict'
const tbody = document.querySelector('#tipos');
const input_filtro = document.querySelector('#txt-filtro');

let lista_tipo_de_evento = [];

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();
    let lista_tipo_de_evento = [];
    lista_tipo_de_evento = await listar_tipos_de_evento();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_tipo_de_evento.length; i++) {
        let nombre = lista_tipo_de_evento[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {

            let div_container = document.createElement('div');

            let nombre = document.createElement('span');
            nombre.innerText = lista_tipo_de_evento[i]['nombre'];

            let img_cont = document.createElement('div');
            img_cont.classList.add('img_container2');
            let imagen = document.createElement('img');


            imagen.src = lista_tipo_de_evento[i]['URL']


            tbody.appendChild(div_container);
            div_container.appendChild(nombre);
            div_container.appendChild(img_cont);
            img_cont.appendChild(imagen);

        }
    };
};



llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);