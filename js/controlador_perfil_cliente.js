'use strict';

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const nacimiento = document.querySelector('#nacimiento');
const tbody = document.querySelector('#tbl_perfil tbody');
const direccion = document.querySelector('#direccion');
const identificacion = document.querySelector('#identificacion');
const correo_cliente = document.querySelector('#correo');

let lista_clientes;
let id = localStorage.getItem('id_perfil', tbody);

let llenar_tabla = async() => {

    lista_clientes = await listar_clientes(id);
    console.log(lista_clientes);

    let i = 3;
    let fila = tbody.insertRow();

    nombre.innerHTML = (lista_clientes[i]['p_nombre'] + ' ' + lista_clientes[i]['s_nombre'] + ' ' + lista_clientes[i]['p_apellido'] + ' ' + lista_clientes[i]['s_apellido']);
    genero.innerHTML = lista_clientes[i]['genero'];

    fila.insertCell().innerHTML = ('Dirección 2:' + '              ' + lista_clientes[i]['provincia'] + ' ' + lista_clientes[i]['canton'] + ' ' + lista_clientes[i]['distrito'] + ' ');
    direccion.innerHTML = lista_clientes[i]['direccion'];
    identificacion.innerHTML = lista_clientes[i]['identificacion'];
    correo_cliente.innerHTML = lista_clientes[i]['correo_cliente'];

    const calcular_edad = (f_nacimiento) => {

        let error_edad = false;
        let hoy = new Date();
        let cumpleanos = new Date(f_nacimiento);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        let m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate() + 1)) {
            edad--;

            if (edad < 18) {
                error_edad = true

            } else {
                error_edad = false
            }
        }
        return error_edad;

    }
    calcular_edad();
    nacimiento.innerHTML = lista_clientes[i]['f_nacimiento'];

    let perfil = fila.insertCell();

    let boton = document.createElement('button');
    boton.dataset.destino = lista_clientes[i]['_id'];
    boton.innerText = 'Editar perfil';
    boton.classList.add('btn');

    boton.addEventListener('click', function() {
        localStorage.setItem("destino_id", this.dataset.destino);
        window.location.href = 'visualizar_perfil.html';

    });

    perfil.appendChild(boton);

};

llenar_tabla();



/*
const nombre = document.querySelector('nombre');
const tbody = document.querySelector('#tbl_perfil tbody');

let id = localStorage.getItem('id_perfil');
let lista_clientes;


let llenar_perfil = async() => {

    lista_clientes = await obtener_cliente_id(id);

    console.log(lista_clientes);

    nombre.innerHTML = lista_clientes[0]['p_nombre'];

    localStorage.setItem('id_usuario', nombre);


};

llenar_perfil();*/