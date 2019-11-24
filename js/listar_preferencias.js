'use strict'
const contenedor = document.querySelector('#segunda_section')

const input_filtro = document.querySelector('#txt_search');

//sessionStorage.setItem("user_type", response.tipo);
//sessionStorage.setItem("preferencias", JSON.stringify(response.preferencias));
sessionStorage.setItem("user_type", "Cliente");
sessionStorage.setItem("preferencias", JSON.stringify(['Concierto', 'Fiesta']));

let user_type = (sessionStorage.getItem("user_type"));

let preferencias = JSON.parse(sessionStorage.getItem("preferencias"));


let lista_evento;


let mostrar_cards = async() => {
    let filtro = input_filtro.value.toLowerCase();
    lista_evento = await listar_evento();
    let filtered = lista_evento.filter((e) => preferencias.includes(e.categoria));
    contenedor.innerHTML = '';
    for (let i = 0; i < filtered.length; i++) {

        let nombre = filtered[i]['nombre'].toLowerCase();
        let categoria = filtered[i]['categoria'].toLowerCase();

        if (nombre.includes(filtro) || (categoria.includes(filtro))) {

            let div_card = document.createElement('div');
            div_card.classList.add('carta');

            let div_img = document.createElement('div');
            div_img.classList.add('img_container');

            let div_fecha = document.createElement('div');

            let fecha = document.createElement('small');

            let date = new Date((filtered[i]['fecha_disponible'][0]['fecha']).replace(/-/g, '\/'));

            var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            var dayName = dias[date.getDay()];
            var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            var mesName = meses[date.getMonth()];

            fecha.innerText = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());

            let fecha_txt = document.createElement('small');


            let contenedor_img = document.createElement('a');

            let imagen = document.createElement('img');
            imagen.src = filtered[i]['URL_imagen'];

            let categoria = document.createElement('h3');
            categoria.innerText = filtered[i]['nombre'];

            let nombre_evento = document.createElement('h4');
            nombre_evento.innerText = filtered[i]['categoria'];

            let div_txt = document.createElement('div');
            div_txt.classList.add('txt_container');

            let div_lugar = document.createElement('div');
            div_lugar.classList.add('lugar_container');

            let lugar = document.createElement('span');
            lugar.innerText = 'Lugar: '

            let recinto = document.createElement('p');
            recinto.innerText = filtered[i]['recinto'];

            let precio_txt = document.createElement('span');
            precio_txt.innerText = 'Precio: ';

            let signo = document.createElement('span');
            signo.innerText = '₡'

            let precio = document.createElement('span');
            precio.innerText = filtered[i]['precio_entrada'];

            let btn_container = document.createElement('div');
            btn_container.classList.add('btn_container');

            let boton = document.createElement('button')
            boton.classList.add('btn-mas')
            boton.innerText = 'Ver más';
            boton.dataset._id = filtered[i]['_id'];

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