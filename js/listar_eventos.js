'use strict'
const contenedor = document.querySelector('#segunda_section')

const input_filtro = document.querySelector('#txt_search');

let lista_evento;

let mostrar_cards = async() => {
    let filtro = input_filtro.value.toLowerCase();
    lista_evento = await listar_evento();
    contenedor.innerHTML = '';
    for (let i = 0; i < lista_evento.length; i++) {
        let nombre = lista_evento[i]['nombre'].toLowerCase();
        let categoria = lista_evento[i]['categoria'].toLowerCase();
        if (nombre.includes(filtro) || (tipo.includes(filtro))) {

            let div_card = document.createElement('div');
            div_card.classList.add('carta');

            let div_img = document.createElement('div');
            div_img.classList.add('img_container');

            let div_fecha = document.createElement('div');

            let fecha = document.createElement('small');


            let fecha_txt = document.createElement('small');
            fecha_txt.innerText = 'Fecha: '

            let contenedor_img = document.createElement('a');

            let imagen = document.createElement('img');

            let categoria = document.createElement('h2');
            categoria.innerText = lista_evento[i]['categoria'];

            let nombre_evento = document.createElement('h3');
            nombre_evento.innerText = lista_evento[i]['nombre'];

            let div_txt = document.createElement('div');
            div_txt.classList.add('txt_container');

            let div_lugar = document.createElement('div');
            div_lugar.classList.add('lugar_container');

            let lugar = document.createElement('span');
            lugar.innerText = 'Lugar: '

            let recinto = document.createElement('p');
            recinto.innerText = lista_evento[i]['recinto'];

            let precio_txt = document.createElement('span');
            precio_txt.innerText = 'Precio: ';

            let signo = document.createElement('span');
            signo.innerText = '₡'

            let precio = document.createElement('span');
            precio.innerText = lista_evento[i]['precio_entrada'];

            let btn_container = document.createElement('div');
            btn_container.classList.add('btn_container');

            let boton = document.createElement('button')
            boton.classList.add('btn-mas')
            boton.innerText = 'Ver más';
            boton.dataset._id = lista_evento[i]['_id'];

            boton.addEventListener('click', function() {
                localStorage.setItem('id_evento', this.dataset._id);
                window.location.href = 'perfil_evento.html'
            });
            contenedor.appendChild(div_card);
            div_card.appendChild(div_img);
            div_card.appendChild(categoria);
            div_card.appendChild(nombre_evento);
            div_card.appendChild(div_lugar);
            div_card.appendChild(div_txt);
            div_card.appendChild(btn_container);

            div_img.appendChild(div_fecha);
            div_img.appendChild(contenedor_img);

            div_lugar.appendChild(lugar);
            div_lugar.appendChild(recinto);

            div_fecha.appendChild(fecha_txt);
            div_fecha.appendChild(fecha);

            contenedor_img.appendChild(imagen);

            div_txt.appendChild(precio_txt);
            div_txt.appendChild(signo);
            div_txt.appendChild(precio);

            btn_container.appendChild(boton);
        }
    };
};
mostrar_cards();
input_filtro.addEventListener('keyup', mostrar_cards);


//Listar categorias en el dashboard
const tbody = document.querySelector('#txt-categoria');
let lista_tipo_de_evento;

let llenar_tabla = async() => {

    lista_tipo_de_evento = await listar_tipos_de_evento();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_tipo_de_evento.length; i++) {
        let todas = document.createElement('option');
        let selecionar = document.createElement('option');

        todas.innerText = 'Todas';

        selecionar.innerText = lista_tipo_de_evento[i]['nombre'];




        tbody.appendChild(selecionar);


    };
};

llenar_tabla();