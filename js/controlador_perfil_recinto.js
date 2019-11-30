'use strict';

const nombre = document.querySelector('#nombre');
const direccion = document.querySelector('#direccion_recinto');
const provincia = document.querySelector('#provincia');
const canton = document.querySelector('#canton');
const distrito = document.querySelector('#distrito');
const capacidad = document.querySelector('#capacidad');
const especiales = document.querySelector('#especiales');
const map = document.querySelector('#map');
const imagen = document.querySelector('#img_recinto');
const volver = document.querySelector('#volver');

let id = localStorage.getItem('recinto_id');
let datos_recinto;
let marker;
let latitud;
let longitud;


let llenar_perfil = async() => {

    datos_recinto = await obtener_recinto_id(id);

    nombre.innerHTML = datos_recinto[0]['nombre'];
    direccion.innerHTML = datos_recinto[0]['direccion'];
    distrito.innerHTML = datos_recinto[0]['distrito'];
    canton.innerHTML = datos_recinto[0]['canton'];
    provincia.innerHTML = datos_recinto[0]['provincia'];
    capacidad.innerHTML = datos_recinto[0]['capacidad'];
    especiales.innerHTML = datos_recinto[0]['asientos_accesibilidad'];
    imagen.src = datos_recinto[0]['url_imagen'];

    localStorage.setItem('latitud', datos_recinto[0]['latitud']);
    localStorage.setItem('longitud', datos_recinto[0]['longitud']);


}

llenar_perfil();

function initMap() {
    latitud = parseFloat(localStorage.getItem('latitud'));
    longitud = parseFloat(localStorage.getItem('longitud'));
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

volver.addEventListener('click', function() {
    window.location.href = 'perfil_evento.html'
});