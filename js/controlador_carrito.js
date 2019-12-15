'use strict';

const volver = document.querySelector('#volver');
const tbody = document.querySelector('#lista_eventos tbody');
const checkout = document.querySelector('#checkout');

let cart_total;
let usuario = sessionStorage.getItem('usuario_id');
let lista_carrito;
let tarjetas_cliente;
let correo = sessionStorage.getItem('correo');
let total_pago = 0;

let llenar_carrito = async() => {
    tbody.innerHTML = '';
    checkout.innerHTML = '';
    lista_carrito = await obtener_carrito_usuario(usuario);

    for (let i = 0; i < lista_carrito[0]['compras'].length; i++) {
        if (lista_carrito[0]['compras'][i].evento != 'BORRADO') {
            let evento_id = lista_carrito[0]['compras'][i]['evento'];
            let evento = await obtener_evento_id(evento_id);
            let id_destino = lista_carrito[0]['compras'][i]['_id'];
            let id_carrito = lista_carrito[0]['_id'];
            let fila = tbody.insertRow();
            fila.dataset.precio = evento[0].precio_entrada;
            fila.classList.add('evento');
            let imgdiv = document.createElement('div');
            let imagen = document.createElement('img');
            imgdiv.classList.add('img_container');
            imagen.src = evento[0].URL_imagen;

            let lbl_precio = document.createElement('label');
            lbl_precio.innerHTML = ('Precio por entrada: ¢' + evento[0].precio_entrada);
            lbl_precio.classList.add('lbl_precio');

            let tiquetes = document.createElement('span');
            tiquetes.classList.add('contenedor');
            let tiquet_cont = document.createElement('span');
            tiquet_cont.setAttribute('id', 'nmbr_mask')
            let count = document.createElement('input');
            count.classList.add('input_count');
            count.setAttribute('type', 'number');
            count.setAttribute('min', 1);
            count.setAttribute('onkeydown', 'return false');

            count.onchange = function() { update_total(); };

            count.setAttribute('max', evento[0].cantidad_maxima_usuario);
            count.value = parseInt(lista_carrito[0]['compras'][i]['cantidad']);

            let btn_eliminar = document.createElement('button');
            btn_eliminar.dataset.destino = id_destino;
            btn_eliminar.innerText = 'Eliminar';
            btn_eliminar.classList.add('btn');
            btn_eliminar.addEventListener('click', function() { borrar(id_carrito, id_destino) });

            fila.appendChild(imgdiv);
            imgdiv.appendChild(imagen);
            fila.appendChild(lbl_precio);


            fila.insertCell().innerHTML = (evento[0].nombre);
            fila.appendChild(tiquetes);
            tiquetes.appendChild(tiquet_cont);
            tiquet_cont.appendChild(count);
            fila.appendChild(btn_eliminar);

            total_pago = total_pago + (evento[0].precio_entrada * count.value);
        }
    } //items cart for
    // checkout div



    let checkout_btn = document.createElement('button');
    checkout_btn.setAttribute('type', 'button');
    checkout_btn.innerHTML = 'Comprar!';

    let total_lbl = document.createElement('label');
    total_lbl.innerHTML = 'Total: ';

    let total = document.createElement('output');
    total.setAttribute('id', 'precio_total')
    total.value = ('$ ' + total_pago);
    let check_info = document.createElement('div');
    check_info.classList.add('check_info');
    let tarjeta_lbl = document.createElement('label');
    tarjeta_lbl.innerHTML = 'Tarjeta de crédito: ';
    let tarjetas = document.createElement('select');
    let option;
    tarjetas_cliente = await obtener_cliente_mail(correo);

    for (let i = 0; i < tarjetas_cliente[0]['metodos_pago'].length; i++) {
        if (tarjetas_cliente[0]['metodos_pago'][i].estado != 'Inactivo') {
            option = document.createElement('option');
            option.setAttribute('value', tarjetas_cliente[0]['metodos_pago'][i].tarjeta);
            option.appendChild(document.createTextNode(tarjetas_cliente[0]['metodos_pago'][i].tarjeta));
            tarjetas.appendChild(option);
        }
    }
    checkout.appendChild(total_lbl);
    checkout.appendChild(total);
    cart_total = document.querySelector('#precio_total');
    checkout.appendChild(checkout_btn);
    checkout.appendChild(check_info);

    check_info.appendChild(tarjeta_lbl);
    check_info.appendChild(tarjetas);


}

llenar_carrito();

let update_total = async() => {

    total_pago = 0;
    let eventos = document.querySelectorAll('.evento');
    let tiquete_count = document.querySelectorAll('.input_count');
    for (let i = 0; i < eventos.length; i++) {
        total_pago = total_pago + ((parseInt(eventos[i].dataset.precio)) * tiquete_count[i].value);
    }
    cart_total.value = ('$ ' + total_pago);

}
let borrar = async(id_carrito, id_destino) => {
    borrar_evento(id_carrito, id_destino);
    llenar_carrito();
    update_total();
}


volver.addEventListener('click', function() {

    window.location.href = localStorage.getItem('previo');
});