'use strict';

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const nacimiento = document.querySelector('#nacimiento');
const tbody = document.querySelector('#tbl_perfil tbody');
const direccion = document.querySelector('#direccion');
const identificacion = document.querySelector('#identificacion');
const correo_cliente = document.querySelector('#correo');
const imagen_avatar = document.querySelector('#avat');
const tipo_tarjeta = document.querySelector('#tipo_tarjeta');
const div_i = document.querySelectorAll('#volver a i');
const editar_perfil = document.querySelector('#tbl_editar tbody');
const contenedor = document.querySelector('#cards');
const tarjeta = document.querySelector('#cards_tarjeta');

let id;
let email;
let lista_clientes;
let usuario = sessionStorage.getItem('tipo_usuario');
let lista_tipo_de_evento;

let llenar_tabla = async() => {
    if (usuario === 'Cliente') {
        email = sessionStorage.getItem('correo');
        lista_clientes = await obtener_cliente_mail(email);
    } else {
        if (usuario === 'Admin') {
            id = localStorage.getItem('destino_id');
            lista_clientes = await obtener_cliente_id(id);
        }
    }


    let fila = tbody.insertRow();

    nombre.innerHTML = (lista_clientes[0]['p_nombre'] + ' ' + lista_clientes[0]['s_nombre'] + ' ' + lista_clientes[0]['p_apellido'] + ' ' + lista_clientes[0]['s_apellido']);
    genero.innerHTML = lista_clientes[0]['genero'];
    fila.insertCell().innerHTML = (lista_clientes[0]['provincia'] + ', ' + lista_clientes[0]['canton'] + ', ' + lista_clientes[0]['distrito'] + '.');
    direccion.innerHTML = lista_clientes[0]['direccion'];
    identificacion.innerHTML = lista_clientes[0]['identificacion'];
    correo_cliente.innerHTML = lista_clientes[0]['correo_cliente'];
    imagen_avatar.src = lista_clientes[0]['url_avatar'];

    for (let i = 0; i < lista_clientes[0]['metodos_pago'].length; i++) {

        let tarjeta = lista_clientes[0]['metodos_pago'][i]['tarjeta'];
        tipo_tarjeta.innerHTML = "Master Card";
        p_tarjeta.innerHTML = lista_clientes[0]['metodos_pago'][i]['tarjeta'];

    }


    let date = new Date((lista_clientes[0]['f_nacimiento']));
    nacimiento.innerHTML = (date.getDate() + '/ ' + date.getMonth() + '/ ' + date.getFullYear());

    let editar = editar_perfil.insertRow();
    let perfil = editar.insertCell();

    let boton = document.createElement('button');
    boton.dataset.destino = lista_clientes[0]['_id'];
    boton.innerText = 'Editar';
    boton.classList.add('btn');

    boton.addEventListener('click', function() {
        localStorage.setItem("destino_id", this.dataset.destino);
        localStorage.setItem('previo', window.location.href);
        window.location.href = 'editar_perfil_cliente.html';

    });

    perfil.appendChild(boton);



    localStorage.setItem('id_tarjeta', JSON.stringify(lista_clientes));
    JSON.parse(localStorage.getItem('id_tarjeta'));

};
llenar_tabla();

let ver_tarjeta = async() => {

    lista_clientes = await obtener_cliente_id(id);

    for (let i = 0; i < lista_clientes[0]['metodos_pago'].length; i++) {
        let div_card_tarjeta = document.createElement('div');
        div_card_tarjeta.classList.add('card_tarjeta');

        let numero_tarjeta = document.createElement('span');

        numero_tarjeta.innerHTML = lista_clientes[0]['metodos_pago'][i]['tarjeta'];

        tarjeta.appendChild(div_card_tarjeta);
        div_card_tarjeta.appendChild(numero_tarjeta);

    };
};
ver_tarjeta();

let mostrar_cards = async() => {

    lista_tipo_de_evento = await listar_tipos_de_evento();

    contenedor.innerHTML = '';
    for (let i = 0; i < lista_tipo_de_evento.length; i++) {
        let div_card = document.createElement('div');
        div_card.classList.add('card');

        let header = document.createElement('header');

        let nombre = document.createElement('span');
        nombre.innerText = lista_tipo_de_evento[i]['nombre'];

        let imagen = document.createElement('img');
        imagen.src = lista_tipo_de_evento[i]['URL']
        imagen.id = `img_${lista_tipo_de_evento[i]['_id']}`;

        contenedor.appendChild(div_card);

        div_card.appendChild(header);
        div_card.appendChild(nombre);
        div_card.appendChild(imagen);

    };
};
mostrar_cards();



if (conectado) {
    switch (tipo_usuario) {

        case 'Cliente':
            div_i[0].classList.add('ocultar');
            break;
        case 'Encargado':
            div_i[0].classList.add('ocultar');

            break;
        case 'Organizador':
            div_i[0].classList.add('ocultar');

            break;
        default:

            break;
    }
} else {
    div_i[0].classList.add('ocultar');
}