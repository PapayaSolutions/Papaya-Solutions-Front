'use strict';

const nombre = document.querySelector('#bnr_nombre');
const recinto = document.querySelector('#recinto_evento');
const tabla_fechas = document.querySelector('#fecha_evento tbody');
const hora = document.querySelector('#hora_evento');

const precio = document.querySelector('#precio_evento');
const categoria = document.querySelector('#categoria_evento');
const descripcion = document.querySelector('#descripcion_evento');
const cantidad = document.querySelector('#cantidad');
const imagen = document.querySelector('#img_evento');

let id = localStorage.getItem('id_evento');
let datos_evento;

let llenar_perfil = async() => {

    datos_evento = await obtener_evento_id(id);

    nombre.innerHTML = datos_evento[0]['nombre'];
    recinto.value = datos_evento[0]['recinto'];
    precio.value = ('¢' + (datos_evento[0]['precio_entrada']));
    categoria.value = datos_evento[0]['categoria'];
    descripcion.value = datos_evento[0]['descripcion'];
    cantidad.value = datos_evento[0]['cantidad_maxima_usuario'];

    imagen.src = datos_evento[0]['URL_imagen'];

    for (let i = 0; i < datos_evento[0]['fecha_disponible'].length; i++) {


        let date = new Date((datos_evento[0]['fecha_disponible'])[i]['fecha']);
        let tiempo = datos_evento[0]['fecha_disponible'][i]['hora'];

        var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var dayName = dias[date.getDay()];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        var mesName = meses[date.getMonth()];


        let fila = tabla_fechas.insertRow();
        fila.insertCell().innerHTML = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());

        fila.insertCell().innerHTML = tiempo;

    }

};
llenar_perfil();

var map;
var marker;

function initMap() {

    var myLatLng = {
        lat: 9.9323102,
        lng: -84.0311761
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });

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
    actualizar_ubicacion(latLng);

    google.maps.event.addListener(marker, 'drag', function() {
        actualizar_ubicacion(marker.position);
    });

    map.panTo(latLng);
}

const actualizar_ubicacion = position => {
    let txt_latitud = document.querySelector('#txt_latitud');
    let txt_longitud = document.querySelector('#txt_longitud');
    txt_latitud.value = position.lat();
    txt_longitud.value = position.lng();
};