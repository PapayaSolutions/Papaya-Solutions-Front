'use strict';

const volver = document.querySelector('#volver');
const tbody = document.querySelector('#lista_eventos tbody');

let usuario = sessionStorage.getItem('usuario_id');
let lista_carrito;

let llenar_carrito = async() => {
    lista_carrito = await obtener_carrito_usuario(usuario);

    for (let i = 0; i < lista_carrito[0]['compras'].length; i++) {

        let evento_id = lista_carrito[0]['compras'][i]['evento'];
        let evento = await obtener_evento_id(evento_id);

        let cantidad = ('X ' + lista_carrito[0]['compras'][i]['cantidad'] + ' Tiquete(s)');
        let fila = tbody.insertRow();

        let imgdiv = document.createElement('div');
        let imagen = document.createElement('img');
        imgdiv.classList.add('img_container');
        imagen.src = evento[0].URL_imagen;

        fila.appendChild(imgdiv);
        imgdiv.appendChild(imagen);


        fila.insertCell().innerHTML = evento[0].nombre;
        fila.insertCell().innerHTML = cantidad;


    }



}

llenar_carrito();




volver.addEventListener('click', function() {

    window.location.href = localStorage.getItem('previo');
});