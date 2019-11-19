'use strict';

const nombre = document.querySelector('#bnr_nombre');
const recinto = document.querySelector('#recinto_evento');
const fecha = document.querySelector('#fecha_evento');
const hora = document.querySelector('#hora_evento');
const direccion = document.querySelector('#direccion_evento');
const precio = document.querySelector('#precio_evento');
const categoria = document.querySelector('#categoria_evento');
const descripcion = document.querySelector('#descripcion_evento');
const cantidad = document.querySelector('#cantidad');
const imagen = document.querySelector('#img_evento');

let id = localStorage.getItem('id_evento'); /*"5dcd97235f8dde25b8c02d0c";*/
let datos_evento;


let llenar_perfil = async() => {

    datos_evento = await obtener_evento_id(id);

    nombre.innerHTML = datos_evento[0]['nombre'];
    recinto.value = datos_evento[0]['recinto'];
    precio.value = ('¢' + (datos_evento[0]['precio_entrada']));
    categoria.value = datos_evento[0]['categoria'];
    descripcion.value = datos_evento[0]['descripcion'];
    cantidad.value = datos_evento[0]['cantidad_maxima_usuario'];
    direccion.value = datos_evento[0]['pais_evento'];
    imagen.src = datos_evento[0]['URL_imagen'];


};
llenar_perfil();



/*  implementacion de hora y fecha antigua
fecha.innerHTML = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());
hora.value = tiempo;
let date = new Date(datos_evento[evento_id]['fecha_disponible']);
let tiempo = date.getHours();
if (tiempo > 12) {
    tiempo = ((tiempo - 12) + 'pm').toString();
} else {
    tiempo = (tiempo + 'am')
}
var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
var dayName = dias[date.getDay()];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var mesName = meses[date.getMonth()];
*/