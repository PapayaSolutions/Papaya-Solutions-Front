'use strict'
const tbody = document.querySelector('#tipos');


let lista_productos;

let llenar_tabla = async() => {

    lista_productos = await listar_productos();
    tbody.innerHTML = '';
    for (let i = 0; i < lista_productos.length; i++) {


        let div_container = document.createElement('div');

        let nombre = document.createElement('span');
        nombre.innerText = lista_productos[i]['nombre'];

        tbody.appendChild(div_container);

        div_container.appendChild(nombre);


    };
};



llenar_tabla();