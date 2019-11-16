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


let datos_evento;
let ID = '5dcd97235f8dde25b8c02d0c'; //localStorage.getItem('id_evento');

let obtener_evento = async(_id) => {
    try {
        const response = await axios({
            method: 'get',
            params: { _id: _id },
            url: `http://localhost:3000/api/listar_evento2/`,
            responseType: 'json'
        });
        return response.data.evento;
    } catch (error) {
        console.log(error);
    }
};


let llenar_perfil = async(_id) => {

    datos_evento = obtener_evento(ID);

    nombre.innerHTML = datos_evento['nombre'];
    recinto.value = datos_evento['recinto'];
    precio.value = ('¢' + (datos_evento['precio_entrada']));
    categoria.value = datos_evento['categoria'];
    descripcion.value = datos_evento['descripcion'];
    cantidad.value = datos_evento['cantidad_maxima_usuario'];
    direccion.value = datos_evento['pais_evento'];
    imagen.src = datos_evento['URL_imagen'];


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
}

llenar_perfil(ID);