'use strict';

const tbody = document.querySelector('#tbl_evento tbody');
const btn_generar = document.querySelector('#btn_generar');

let lista_descuentos;

let llenar_tabla = async() => {
    let filtro = btn_generar.value.toLowerCase();

    lista_descuentos = await listar_descuento();
    console.log(lista_descuentos)
    tbody.innerHTML = '';
    for (let i = 0; i < lista_descuentos.length; i++) {
        let nombre = lista_descuentos[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {
            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = lista_descuentos[i]['nombre'];
            fila.insertCell().innerHTML = lista_descuentos[i]['descripcion'];
            fila.insertCell().innerHTML = lista_descuentos[i]['porcentaje'] + ['%'];
            fila.insertCell().innerHTML = lista_descuentos[i]['estado'];

            let editar = fila.insertCell();
            let boton = document.createElement('button');

            boton.dataset.destino = lista_descuentos[i];
            boton.innerText = 'Editar';
            boton.classList.add('btn');

            boton.addEventListener('click', function() {
                window.location.href = 'editar_descuento.html';

            })

            editar.appendChild(boton);
        };

    };


};

llenar_tabla();
btn_generar.addEventListener('click', llenar_tabla);