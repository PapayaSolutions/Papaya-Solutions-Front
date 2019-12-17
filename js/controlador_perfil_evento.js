'use strict';

const nombre = document.querySelector('#bnr_nombre');
const recinto = document.querySelector('#recinto_evento');
const tabla_fechas = document.querySelector('#fecha_evento tbody');
const tabla_descuentos = document.querySelector('#descuentos_evento tbody');
const contenedor = document.querySelector('#comentarios');
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
const calificacion = document.querySelector('#estrellas');
const input_coment = document.querySelector('#txt_coment');
const btn_registro = document.querySelector('#btn_coment');
const item5 = document.querySelector('#item5');
const item7 = document.querySelector('#item7');
const editar = document.querySelector('#editar');
const comentarios = document.querySelector('#calificar');
const finalizado = document.querySelector('#item8');
const btn_carrito = document.querySelector('#btn_carrito');
let estado;
let usuario = sessionStorage.getItem('tipo_usuario');
let id = localStorage.getItem('id_evento');
let datos_evento;
let datos_mapa;
let lugar;
let usuario_id;
let latitud;
let longitud;
let marker;
let clientes;
let cliente_id = sessionStorage.getItem('usuario_id');


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

    if (datos_evento[0]['calificaciones'].length >= 1) {
        for (let i = 0; i < datos_evento[0]['calificaciones'].length; i++) {
            if (datos_evento[0]['calificaciones'][i]['usuario'] === cliente_id) {
                if ((datos_evento[0]['calificaciones'][i]['calificacion']) === '') {
                    calificacion.setAttribute('data-rating', 1)
                } else {
                    calificacion.setAttribute('data-rating', parseInt(datos_evento[0]['calificaciones'][i]['calificacion']));
                }
            }
        }
    } else {

        calificacion.setAttribute('data-rating', 1);

    }
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
    for (let i = 0; i < datos_evento[0]['calificaciones'].length; i++) {

        let usuario_id = datos_evento[0]['calificaciones'][i]['usuario'];
        let comentario = datos_evento[0]['calificaciones'][i]['comentario'];
        let cliente = await obtener_cliente_mail(datos_evento[0]['calificaciones'][i]['correo']);



        let div_contenedor = document.createElement('div');
        div_contenedor.classList.add('contenedor');

        let foto_contenedor = document.createElement('div');
        foto_contenedor.classList.add('contenedor_img');

        let comentario_contenedor = document.createElement('div');
        comentario_contenedor.classList.add('contenedor_coment');

        let contenedor_coment = document.createElement('p');
        contenedor_coment.innerText = comentario;

        let contenedor_link = document.createElement('a');
        contenedor_link.href = '#';
        contenedor_link.innerText = cliente[0]['p_nombre'];

        let contenedor_user = document.createElement('span');

        let imagen_cont = document.createElement('img');
        imagen_cont.src = cliente[0]['url_avatar'];


        contenedor_link.dataset.destino = cliente[0]['_id'];
        contenedor_link.addEventListener('click', function() {
            localStorage.setItem("destino_id", this.dataset.destino);
            localStorage.setItem('previo', window.location.href);
            window.location.href = 'visualizar_perfil.html';

        });
        contenedor.appendChild(div_contenedor);
        div_contenedor.appendChild(foto_contenedor);
        div_contenedor.appendChild(comentario_contenedor);
        foto_contenedor.appendChild(imagen_cont);
        comentario_contenedor.appendChild(contenedor_user);
        contenedor_user.appendChild(contenedor_link);
        comentario_contenedor.appendChild(contenedor_coment);

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

    comentarios.classList.add('hidden');

    comentarios.style.position = 'absolute';

    finalizado.classList.add('hidden');
};


let activar = async() => {


    if (usuario === 'Organizador') {
        editar.classList.remove('hidden');
        editar.style.position = 'relative';
    } else {
        editar.classList.add('hidden');
        editar.style.position = 'absolute';
    };

    datos_evento = await obtener_evento_id(id);

    if ((datos_evento[0]['calificaciones'].length >= 1) && ('Finalizado' === estado)) {
        for (let i = 0; i < datos_evento[0]['calificaciones'].length; i++) {
            if ((datos_evento[0]['calificaciones'][i]['usuario'] === cliente_id) && ('Finalizado' === estado)) {
                esconder();
            } else {

                finalizado.classList.remove('hidden');
            }
        }
    } else {
        if (('Activo' === estado) && ((usuario === "Admin") || (usuario === "Organizador") || (usuario === "Encargado"))) {
            mostrar();
            item5.classList.add('hidden');
        } else {
            if ('Activo' === estado) {
                mostrar();

            } else {
                if ((datos_evento[0]['calificaciones'].length === 0) && ('Finalizado' === estado)) {
                    item5.classList.add('hidden');
                    item7.classList.add('hidden');
                    comentarios.classList.add('hidden');
                    comentarios.style.position = 'absolute';
                    finalizado.classList.remove('hidden');
                } else {
                    if ('Finalizado' === estado) {
                        esconder();

                    }
                }

            }
        }
    }


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

//initial setup stars
function setStars() {
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star) {
        star.addEventListener('click', setRating);
    });

    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];

    target.dispatchEvent(new MouseEvent('click'));
};


function setRating(ev) {
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index) {
        if (match) {
            star.classList.remove('rated');
        } else {
            star.classList.add('rated');
        }
        //are we currently looking at the span that was clicked
        if (star === span) {
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);
    calificar_evento(id, cliente_id, num);
}

body.onload = function() {
    activar();
    $.get("xfooter.html", function(data) {
        $("#xfooter").html(data);
    })
    setStars();
}




ver_recinto.addEventListener('click', function() {
    localStorage.setItem('previo', window.location.href);
    window.location.href = 'perfil_recinto.html'
});



input_coment.value = '';


// Validación de datos
let validar = () => {
    let error = false;
    if (input_coment.value == '') {
        error = true;
        input_coment.classList.add('error');
        console.log('falta el nombre')
    } else {
        input_coment.classList.remove('error');
    }

    return error;

}; //validar datos


let obtener_datos = () => {
    let comentario = input_coment.value;

    //si hay error, entra al if. Si no hay error entra al else
    if (validar()) {
        Swal.fire({
                type: 'warning',
                title: 'Porfavor ingresar un comentario.',
                animation: true,
                text: 'Llenar el espacio en rojo',
                confirmButtonText: 'Entendido',
                customClass: {
                    popup: 'animated tada'
                }
            }) //  let registrar_impuesto = async(nombre, porcentaje, descripcion, estado) => {
    } else {

        comentar_evento(id, cliente_id, comentario, sessionStorage.getItem('correo'));
        Swal.fire({
            type: 'success',
            title: 'Comentario realizado con exito',
            text: 'El evento ha sido comentado',
            confirmButtonText: 'Entendido'
        })
    }

};


let llenar_carrito = async() => {

    await crear_carrito(cliente_id);
    await agregar_evento(cliente_id, id, ticketes.value);
    localStorage.setItem('previo', window.location.href);
    window.location.href = "carrito.html"

}
let comentarioss = document.querySelectorAll('#comentarios');
let conectado3 = sessionStorage.getItem('conectado');
let tipo_usuario3 = sessionStorage.getItem('tipo_usuario');
// no li numeros : 0 - perfil, 1 carrito, 2 campana, 3 configurar, 4- confi2, 5 iniciar, - 6 cerrar. 4- confi2
if (conectado3) {
    switch (tipo_usuario3) {

        case 'Admin':
            comentarioss[0].classList.remove('ocultar')
            break;
        case 'Cliente':

            break;
        case 'Encargado':


            break;
        case 'Organizador':
            comentarioss[0].classList.remove('ocultar')
        default:
            break;
    }
}
// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);
btn_carrito.addEventListener('click', llenar_carrito);