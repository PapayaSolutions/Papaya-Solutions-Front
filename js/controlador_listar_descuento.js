'use strict';

const tbody = document.querySelector('#tbl_descuento tbody');
const input_filtro = document.querySelector('#bnr_input');

let lista_descuentos;

let llenar_tabla = async() => {
    let filtro = input_filtro.value.toLowerCase();

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

            let boton2 = fila.insertCell();

            let boton = document.createElement('button');
            boton.innerText = 'Editar ';
            boton.classList.add('btn_editar');
            boton.classList.add('btn-mas');

            boton.dataset._id = lista_descuentos[i]['_id'];
            boton.addEventListener('click', function() {
                localStorage.setItem('id_descuento', this.dataset._id);
                window.location.href = 'editar_descuento.html'
            });

            boton2.appendChild(boton);
        };

    };


};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla)