'use strict';

const nombre = document.querySelector('#nombre');
const razon = document.querySelector('#razon');
const cedula = document.querySelector('#cedula');
const direccion = document.querySelector('#direccion');
const ubicacion = document.querySelector('#ubicacion');
const experiencia = document.querySelector('#experiencia');
const comision = document.querySelector('#comision');
const telefonos = document.querySelector('#telefonos tbody');

const logo = document.querySelector('#logo');
const mapa = document.querySelector('#mapa');
let datos_perfil;
let longitud;
let latitud;
let marker;


let llenar_perfil = async() => {

    datos_perfil = await listar_plataforma();
    nombre.innerHTML = datos_perfil[0]['nombre'];
    razon.innerHTML = datos_perfil[0]['razon'];
    cedula.innerHTML = datos_perfil[0]['cedula'];
    direccion.innerHTML = datos_perfil[0]['direccion'];
    ubicacion.innerHTML = ((datos_perfil[0]['distrito']) + ', ' + (datos_perfil[0]['canton']) + ', ' + (datos_perfil[0]['provincia']));
    experiencia.innerHTML = datos_perfil[0]['experiencia'];
    comision.innerHTML = ('¢' + datos_perfil[0]['comision']);


    localStorage.setItem('latitud', datos_perfil[0]['latitud']);
    localStorage.setItem('longitud', datos_perfil[0]['longitud']);
    logo.src = datos_perfil[0]['logo'];

    for (let i = 0; i < datos_perfil[0]['telefonos'].length; i++) {

        let numero = datos_perfil[0]['telefonos'][i]['numero'];
        let descripcion = datos_perfil[0]['telefonos'][i]['descripcion'];

        let fila = telefonos.insertRow();
        fila.insertCell().innerHTML = numero;
        fila.insertCell().innerHTML = descripcion;

    }




};

llenar_perfil();

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