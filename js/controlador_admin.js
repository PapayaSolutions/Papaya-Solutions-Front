'use strict';

const admin = document.querySelector('#tbl_admin tbody');

let lista_admin;

let llenar_admin = async() => {

    lista_admin = await listar_admin();

    for (let i = 0; i < lista_admin.length; i++) {

        let fila = admin.insertRow();

        fila.insertCell().innerHTML = lista_admin[i]['correo'];
        fila.insertCell().innerHTML = lista_admin[i]['contrasena'];

        let perfil = fila.insertCell();

        let boton = document.createElement('button');
        boton.dataset.admin = lista_admin[i]['_id'];
        boton.innerText = 'Editar';
        boton.classList.add('btn_edit');

        boton.addEventListener('click', function() {
            localStorage.setItem("destino_id", this.dataset.admin);
            window.location.href = 'editar_admi.html';

        })

        perfil.appendChild(boton);
    }
};
llenar_admin();