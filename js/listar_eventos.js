'use strict'
//agarra la fecha actual y devuelve de aqui a 15 dias
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const numDaysBetween = function(d1, d2, days) {
    var diff = Math.abs(d1.getTime() - d2.getTime());
    return days ? (diff / (1000 * 60 * 60 * 24)) <= (days) : (diff / (1000 * 60 * 60 * 24));
};
const date = new Date();


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
        if (nombre.includes(filtro) || (categoria.includes(filtro))) {

            let div_card = document.createElement('div');
            div_card.classList.add('carta');

            let div_img = document.createElement('div');
            div_img.classList.add('img_container');

            let div_fecha = document.createElement('div');

            let fecha = document.createElement('small');

            let date = new Date((lista_evento[i]['fecha_disponible'][0]['fecha']).replace(/-/g, '\/'));

            var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            var dayName = dias[date.getDay()];
            var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            var mesName = meses[date.getMonth()];

            fecha.innerText = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());

            let fecha_txt = document.createElement('small');


            let contenedor_img = document.createElement('a');

            let imagen = document.createElement('img');
            imagen.src = lista_evento[i]['URL_imagen'];

            let categoria = document.createElement('h3');
            categoria.innerText = lista_evento[i]['nombre'];

            let nombre_evento = document.createElement('h4');
            nombre_evento.innerText = lista_evento[i]['categoria'];

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
    let vacio = document.createElement('option');
    vacio.innerText = 'Todos';

    tbody.appendChild(vacio);
    for (let i = 0; i < lista_tipo_de_evento.length; i++) {


        let selecionar = document.createElement('option');
        selecionar.value = lista_tipo_de_evento[i]['nombre'];
        selecionar.innerText = lista_tipo_de_evento[i]['nombre'];

        tbody.appendChild(selecionar);
    }

};

llenar_tabla();

//cambiar el titulo dependiendo de la categoria
//y los cards
function titulo_categoria(evento) {
    let temp_value = event.target.value;
    var x = document.getElementById("txt-categoria").value;
    document.getElementById("titulo_categorias").innerHTML = x;
    let mostrar_cards = async() => {

        lista_evento = await listar_evento();
        lista_tipo_de_evento = await listar_tipos_de_evento();
        let filtered_data = [];
        if (evento) {
            let temp_days = numDaysBetween(date, new Date((evento.target.value).replace(/-/g, '\/')));
            filtered_data = lista_evento.filter((e) =>
                numDaysBetween(date, new Date((e.fecha_disponible[0].fecha).replace(/-/g, '\/')), temp_days) &&
                (new Date((evento.target.value).replace(/-/g, '\/')).getTime() >= new Date((e.fecha_disponible[0].fecha).replace(/-/g, '\/')).getTime())
            );
            console.log(evento.target.value);
            console.log(temp_days);
            console.log(numDaysBetween(date, new Date(("2020-03-23").replace(/-/g, '\/'))), temp_days);
        } else {
            filtered_data = x == "Todos" ? lista_evento : lista_evento.filter((e) => e.categoria == x);
        }
        contenedor.innerHTML = '';

        for (let i = 0; i < filtered_data.length; i++) {

            let div_card = document.createElement('div');
            div_card.classList.add('carta');

            let div_img = document.createElement('div');
            div_img.classList.add('img_container');

            let div_fecha = document.createElement('div');

            let fecha = document.createElement('small');
            let date = new Date((filtered_data[i]['fecha_disponible'][0]['fecha']).replace(/-/g, '\/'));

            var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            var dayName = dias[date.getDay()];
            var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            var mesName = meses[date.getMonth()];

            fecha.innerText = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());

            let fecha_txt = document.createElement('small');

            let contenedor_img = document.createElement('a');

            let imagen = document.createElement('img');
            imagen.src = filtered_data[i]['URL_imagen'];

            let categoria = document.createElement('h3');
            categoria.innerText = filtered_data[i]['nombre'];

            let nombre_evento = document.createElement('h4');
            nombre_evento.innerText = filtered_data[i]['categoria'];

            let div_txt = document.createElement('div');
            div_txt.classList.add('txt_container');

            let div_lugar = document.createElement('div');
            div_lugar.classList.add('lugar_container');

            let lugar = document.createElement('span');
            lugar.innerText = 'Lugar: '

            let recinto = document.createElement('p');
            recinto.innerText = filtered_data[i]['recinto'];

            let precio_txt = document.createElement('small');
            precio_txt.innerText = 'Precio: ';
            let signo = document.createElement('span');
            signo.innerText = '₡'

            let precio = document.createElement('span');
            precio.innerText = filtered_data[i]['precio_entrada'];

            let btn_container = document.createElement('div');
            btn_container.classList.add('btn_container');

            let boton = document.createElement('button')
            boton.classList.add('btn-mas')
            boton.innerText = 'Ver más';
            boton.dataset._id = filtered_data[i]['_id'];

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


            div_fecha.appendChild(fecha);

            contenedor_img.appendChild(imagen);

            div_txt.appendChild(precio_txt);
            div_txt.appendChild(signo);
            div_txt.appendChild(precio);

            btn_container.appendChild(boton);

        };
    };
    mostrar_cards();
}