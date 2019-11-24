'use strict';

const nombre = document.querySelector('#nombre_perfil');

let lista_perfil;
let id = localStorage.getItem('id_cliente');

let llenar_perfil = async() => {

    lista_perfil = await obtener_cliente_id(id);

    nombre.innerHTML = lista_perfil[0]['nombre'];

    localStorage.setItem('nombre', nombre.value);

}
llenar_perfil();

localStorage.getItem(llenar_perfil);