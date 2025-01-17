'use strict';

let registrar_avatar = async(nombre, URL, estado) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/registrar_avatar',
            responseType: 'json',
            //body
            data: {

                nombre: nombre,
                URL: URL,
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

let listar_avatares = async() => {
    let lista_avatar;
    await axios({
            method: 'get',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_avatar',
            /* SETEAR LA RUTA!! */
            responseType: 'json',

        }).then(function(res) {
            lista_avatar = res.data.avatares;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_avatar;
};

let habilitar_avatar = async(_id) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/habilitar_avatar',
            responseType: 'json',
            //body
            data: {
                _id: _id,
                estado: true,

            }
        })
        .then(function(res) {
            console.log(res.data);
            mostrar_cards();
        })
        .catch(function(error) {
            console.log(error);
        });
};

let deshabilitar_avatar = async(_id) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/deshabilitar_avatar',
            responseType: 'json',
            //body
            data: {
                _id: _id,
                estado: false,

            }
        })
        .then(function(res) {
            console.log(res.data);
            mostrar_cards();

        })
        .catch(function(error) {
            console.log(error);
        });
};

//--------------------------- CLOUDINARY WIDGET --------------------------------------------------------
var myWidget1 = cloudinary.createUploadWidget({
    cloudName: 'pypsolutionscr',
    uploadPreset: 'psolutions'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        document.querySelector('#imagen_preview').src = result.info.secure_url;
        registrar_avatar(result.info.original_filename, result.info.secure_url, 'Activo');

        Swal.fire({
            type: 'success',
            title: 'Registro realizado con exito',
            text: 'El Avatar ha sido almacenado',
            confirmButtonText: 'Entendido'
        }).then(function() {
            crear_bitacora('Registro', 'Registro de nuevo avatar');
            location.reload();
        });

    }

});

let botn = document.querySelector('#btn_agregar_imagen');

botn.addEventListener('click', function() {
    myWidget1.open();
}, false);