'use strict';

const nombre = document.querySelector('#bnr_nombre');
const recinto = document.querySelector('#recinto_evento');
const fecha = document.querySelector('#fecha_evento');
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



    let date = new Date((datos_evento[0]['fecha_disponible'])[0]['fecha']);

    let tiempo = datos_evento[0]['fecha_disponible'][0]['hora'];

    var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var dayName = dias[date.getDay()];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var mesName = meses[date.getMonth()];

    fecha.innerHTML = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());
    hora.value = tiempo;


};
llenar_perfil();