'use strict'
//agarra la fecha actual y devuelve de aqui a 15 dias
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

//le doy ficha inicio y fecha final y retorna si la fecha esta dentro de 15 dias true o false
var numDaysBetween = function(d1, d2) {
    var diff = Math.abs(d1.getTime() - d2.getTime());
    return (diff / (1000 * 60 * 60 * 24)) <= 15 && (d1.getTime() <= d2.getTime());
};

//fecha de hoy
var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
var f = new Date();


let date = new Date(f);
var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
var dayName = dias[date.getDay()];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var mesName = meses[date.getMonth()];


//fecha de hoy
const contenedor = document.querySelector('#segunda_section')

let lista_evento;

let mostrar_cards = async() => {

    lista_evento = await listar_evento();

    let filteredEvents = lista_evento.filter((e) => numDaysBetween(date, new Date((e.fecha_disponible[0].fecha).replace(/-/g, '\/'))));
    contenedor.innerHTML = '';
    for (let i = 0; i < filteredEvents.length; i++) {

        let div_card = document.createElement('div');
        div_card.classList.add('carta');

        let div_img = document.createElement('div');
        div_img.classList.add('img_container');

        let div_fecha = document.createElement('div');

        let fecha = document.createElement('small');

        let date = new Date((filteredEvents[i]['fecha_disponible'][0]['fecha']).replace(/-/g, '\/'));

        var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var dayName = dias[date.getDay()];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        var mesName = meses[date.getMonth()];

        fecha.innerText = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());

        let contenedor_img = document.createElement('a');

        let imagen = document.createElement('img');
        imagen.src = filteredEvents[i]['URL_imagen'];

        let categoria = document.createElement('h3');
        categoria.innerText = filteredEvents[i]['nombre'];

        let nombre_evento = document.createElement('h4');
        nombre_evento.innerText = filteredEvents[i]['categoria'];

        let div_txt = document.createElement('div');
        div_txt.classList.add('txt_container');

        let div_lugar = document.createElement('div');
        div_lugar.classList.add('lugar_container');

        let lugar = document.createElement('span');
        lugar.innerText = 'Lugar: '

        let recinto = document.createElement('p');
        recinto.innerText = filteredEvents[i]['recinto'];

        let precio_txt = document.createElement('span');
        precio_txt.innerText = 'Precio: ';

        let signo = document.createElement('span');
        signo.innerText = '₡'

        let precio = document.createElement('span');
        precio.innerText = filteredEvents[i]['precio_entrada'];

        let btn_container = document.createElement('div');
        btn_container.classList.add('btn_container');

        let boton = document.createElement('button')
        boton.classList.add('btn-mas')
        boton.innerText = 'Ver más';
        boton.dataset._id = filteredEvents[i]['_id'];

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


mostrar_cards();