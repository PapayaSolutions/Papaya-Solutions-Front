'use strict';

let registrar_avatar = async(nombre, URL, estado) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-avatar',
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
            url: 'http://localhost:3000/api/listar_avatar',
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
//--------------------------- CLOUDINARY WIDGET --------------------------------------------------------
var myWidget1 = cloudinary.createUploadWidget({
    cloudName: 'pypsolutionscr',
    uploadPreset: 'psolutions'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        document.querySelector('#imagen_preview').src = result.info.secure_url;
        registrar_avatar(result.info.original_filename, result.info.secure_url, 'true');
    }
})

let botn = document.querySelector('#btn_agregar_imagen');

botn.addEventListener('click', function() {
    myWidget1.open();
}, false);