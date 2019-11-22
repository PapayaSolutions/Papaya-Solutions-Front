'use strict';

const tbody = document.querySelector('#tbl_descuento tbody');
let lista_descuentos;

let llenar_tabla = async() => {
    lista_descuentos = await listar_descuento();
    console.log(lista_descuentos)
    for (let i = 0; i < lista_descuentos.length; i++) {
        let fila = tbody.insertRow();

        fila.insertCell().innerHTML = lista_descuentos[i]['nombre'];
        fila.insertCell().innerHTML = lista_descuentos[i]['descripcion'];
        fila.insertCell().innerHTML = lista_descuentos[i]['porcentaje'] + ['%'];
        fila.insertCell().innerHTML = lista_descuentos[i]['estado'];
    };


};

llenar_tabla();