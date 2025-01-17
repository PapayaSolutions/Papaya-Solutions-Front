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

            let porcentaje = fila.insertCell();
            porcentaje.innerHTML = (lista_impuestos[i]['porcentaje']) + '%';

            let desc = fila.insertCell();
            desc.innerHTML = lista_impuestos[i]['descripcion'];
            desc.classList = 'descripcion';

            let estado = fila.insertCell();
            estado.innerHTML = lista_impuestos[i]['estado'];

            let boton2 = fila.insertCell();
            boton2.classList = 'boton_imp ';


            let boton = document.createElement('button');
            boton.innerText = 'Editar ';
            boton.classList.add('btn_editar');
            boton.classList.add('btn-mas');

            boton.dataset._id = lista_impuestos[i]['_id'];
            boton.addEventListener('click', function() {
                localStorage.setItem('id_impuesto', this.dataset._id);
                window.location.href = 'editar_impuestos.html'
            });

            boton2.appendChild(boton);

        }
    };

};

llenar_tabla();
input_filtro.addEventListener('keyup', llenar_tabla);