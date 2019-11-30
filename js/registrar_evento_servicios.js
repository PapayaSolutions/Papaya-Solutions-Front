'use strict';

let registrar_evento = async(
    nombre,
    categoria,
    asistentes_esperados,
    recinto,
    precio_entrada,
    cantidad_maxima_usuario,
    descripcion,
    URL_imagen,
    estado) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-evento',
            responseType: 'json',
            //body
            data: {
                nombre: nombre,
                categoria: categoria,
                asistentes_esperados: asistentes_esperados,
                recinto: recinto,
                precio_entrada: precio_entrada,
                cantidad_maxima_usuario: cantidad_maxima_usuario,
                descripcion: descripcion,
                URL_imagen: URL_imagen,
                estado: estado
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

let listar_tipos_de_evento = async() => {
    let resultado;

    await axios({
            method: 'get',

            url: 'http://localhost:3000/api/listar_tipos_de_evento',
            responseType: 'json'
        })
        .then(function(res) {
            resultado = res.data.tipos;

        })
        .catch(function(error) {
            console.log(error);
        });

    return resultado;
};
let listar_recintos = async() => {

    let lista_recintos;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-recintos',
        responseType: 'json'

    })

    .then(function(res) {
            lista_recintos = (res.data.recintos)
        })
        .catch(function(error) {
            console.log(error);
        });

    return lista_recintos;
};

//--------------------------- CLOUDINARY WIDGET --------------------------------------------------------
var myWidget1 = cloudinary.createUploadWidget({
    cloudName: 'pypsolutionscr',
    uploadPreset: 'psolutions'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        document.querySelector('#imagen_preview').src = result.info.secure_url;

        /**   Swal.fire({
              type: 'success',
              title: 'Registro realizado con exito',
              text: 'La imagen ha sido almacenada',
              confirmButtonText: 'Entendido'
          });
          */
    }

});

let botn = document.querySelector('#btn_agregar_imagen');

botn.addEventListener('click', function() {
    myWidget1.open();
}, false);

let registrar_fecha = async(nombre, fecha, hora, hora_salida) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/agregar-fecha',
            responseType: 'json',
            //body
            data: {
                nombre: nombre,
                fecha: fecha,
                hora: hora,
                hora_salida: hora_salida,

            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};