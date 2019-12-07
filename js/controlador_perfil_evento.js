'use strict';

const nombre = document.querySelector('#bnr_nombre');
const recinto = document.querySelector('#recinto_evento');
const tabla_fechas = document.querySelector('#fecha_evento tbody');
const tabla_descuentos = document.querySelector('#descuentos_evento tbody');
const tabla_desc_head = document.querySelector('#descuentos_evento thead');
const precio = document.querySelector('#precio_evento');
const categoria = document.querySelector('#categoria_evento');
const descripcion = document.querySelector('#descripcion_evento');
const cantidad = document.querySelector('#cantidad');
const imagen = document.querySelector('#img_evento');
const entradas = document.querySelector('#entradas');
const disponibles = document.querySelector('#disponibles');
const descuentos = document.querySelector('#descuentos');
const ticketes = document.querySelector('#cant_ticks');
const link_recinto = document.querySelector('#link_recinto');
const ver_recinto = document.querySelector('#ver_recinto');
const body = document.querySelector('#body');

const item5 = document.querySelector('#item5');
const item7 = document.querySelector('#item7');
const editar = document.querySelector('#editar');
const comentarios = document.querySelector('#calificar');
const finalizado = document.querySelector('#item8');

let estado;
let usuario = sessionStorage.getItem('tipo_usuario');
let id = localStorage.getItem('id_evento');
let datos_evento;
let datos_mapa;
let lugar;
let latitud;
let longitud;
/*const map = document.querySelector('#map');*/
let marker;


let llenar_perfil = async() => {

    datos_evento = await obtener_evento_id(id);
    lugar = datos_evento[0]['recinto'];
    datos_mapa = await obtener_recinto_nombre(lugar);

    localStorage.setItem('recinto_id', datos_mapa[0]['_id']);
    localStorage.setItem('latitud', datos_mapa[0]['latitud']);
    localStorage.setItem('longitud', datos_mapa[0]['longitud']);

    nombre.innerHTML = datos_evento[0]['nombre'];
    recinto.value = datos_evento[0]['recinto'];
    localStorage.setItem('id_recinto', recinto.value);
    precio.value = ('¢' + (datos_evento[0]['precio_entrada']));
    categoria.value = datos_evento[0]['categoria'];
    descripcion.value = datos_evento[0]['descripcion'];
    cantidad.value = datos_evento[0]['cantidad_maxima_usuario'];
    ticketes.max = cantidad.value;
    entradas.value = datos_evento[0]['asistentes_esperados'];
    disponibles.value = datos_evento[0]['cantidad_entradas_restante'];
    estado = datos_evento[0]['estado'];

    if (datos_evento[0]['descuentos'] != '') {

        let cabeza = tabla_desc_head.insertRow();

        let name = cabeza.insertCell();
        let nombre = document.createElement('th');
        nombre.innerHTML = 'Descuento';
        let porc = cabeza.insertCell();
        let porcentaje = document.createElement('th');
        porcentaje.innerHTML = 'Porcentaje';
        name.appendChild(nombre);
        porc.appendChild(porcentaje);


        for (let i = 0; i < datos_evento[0]['descuentos'].length; i++) {

            let nombre = datos_evento[0]['descuentos'][i]['nombre'];
            let porcentaje = datos_evento[0]['descuentos'][i]['porcentaje'];

            if (usuario != "Cliente" && nombre == 'Míshka') {
                let fila = tabla_descuentos.insertRow();

                fila.insertCell().innerHTML = '¡Regístrate para obtener un descuento del ' + porcentaje + '% en todas tus compras con Míshka!'

            } else {

                let fila = tabla_descuentos.insertRow();

                fila.insertCell().innerHTML = nombre;
                fila.insertCell().innerHTML = (porcentaje + '%');
            }
        }

    } else {
        descuentos.value = '¡Regístrate para obtener un descuento del 15% en todas tus compras con Míshka!';

    }


    imagen.src = datos_evento[0]['URL_imagen'];

    for (let i = 0; i < datos_evento[0]['fecha_disponible'].length; i++) {


        let date = new Date((datos_evento[0]['fecha_disponible'])[i]['fecha']);
        let tiempo = datos_evento[0]['fecha_disponible'][i]['hora'];
        let tiempo2 = datos_evento[0]['fecha_disponible'][i]['hora_salida'];

        var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var dayName = dias[date.getDay()];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        var mesName = meses[date.getMonth()];


        let fila = tabla_fechas.insertRow();
        fila.insertCell().innerHTML = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());

        fila.insertCell().innerHTML = tiempo;
        fila.insertCell().innerHTML = tiempo2;

    }



};
llenar_perfil();


let esconder = () => {

    item5.classList.add('hidden');

    item7.classList.remove('hidden');

    comentarios.classList.remove('hidden');

    comentarios.style.position = 'relative';

    finalizado.classList.remove('hidden');
};

let mostrar = () => {
    item5.classList.remove('hidden');
    item7.classList.add('hidden');

    finalizado.classList.add('hidden');

    comentarios.classList.add('hidden');

    comentarios.style.position = 'absolute';
};


let activar = () => {


    if (usuario === 'Organizador') {
        editar.classList.remove('hidden');
        editar.style.position = 'relative';
    } else {
        editar.classList.add('hidden');
        editar.style.position = 'absolute';
    };

    if ('Activo' === estado) {
        mostrar();
    } else {

        if ('Finalizado' === estado) {
            esconder();
        }
    };
};

activar();

latitud = parseFloat(localStorage.getItem('latitud'));
longitud = parseFloat(localStorage.getItem('longitud'));


function initMap() {

    var myLatLng = {
        lat: latitud,
        lng: longitud,
    };
    var map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 16,
        center: myLatLng
    });

    placeMarkerAndPanTo(myLatLng, map);

    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });
}



function placeMarkerAndPanTo(latLng, map) {

    if (marker != undefined) {
        marker.position = latLng;
    } else {
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: true,
        });
    }

    map.panTo(latLng);
}


let qrcode1 = new QRCode("qr_output", {
    text: window.location.href,
    width: 128,
    height: 128,
    colorDark: "#f7882f",
    colorLight: "#ececec",
    correctLevel: QRCode.CorrectLevel.H
});



body.onload = function() {
    activar();
    $.get("xfooter.html", function(data) {
        $("#xfooter").html(data);
    })
}




ver_recinto.addEventListener('click', function() {
    localStorage.setItem('previo', window.location.href);
    window.location.href = 'perfil_recinto.html'
});