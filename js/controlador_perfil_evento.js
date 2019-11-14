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


let evento_id = localStorage.getItem('id_evento');

let datos_evento;

let llenar_perfil = async() => {
    datos_evento = await listar_evento(); /*en servicios del evento*/
    /*extrae la info de la bd*/
    let date = new Date(datos_evento[evento_id]['fecha_disponible']);
    /* asigna las horas a tiempo */
    let tiempo = date.getHours();
    /**asigna pm o am */
    if (tiempo > 12) {
        tiempo = ((tiempo - 12) + 'pm').toString();
    } else {
        tiempo = (tiempo + 'am')
    }
    /**arreglo de dias de la semana */
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var dayName = dias[date.getDay()];
    /**arreglo de meses del año */
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var mesName = meses[date.getMonth()];

    nombre.innerHTML = datos_evento[evento_id]['nombre'];
    fecha.innerHTML = (dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());
    hora.value = tiempo;
    recinto.value = datos_evento[evento_id]['recinto'];
    precio.value = ('¢' + (datos_evento[evento_id]['precio_entrada']));
    categoria.value = datos_evento[evento_id]['tipo'];
    descripcion.value = datos_evento[evento_id]['descripcion'];
    cantidad.value = datos_evento[evento_id]['cantidad_maxima_usuario'];
    direccion.value = datos_evento[evento_id]['pais_evento'];


}

llenar_perfil();