'use strict';

let registrar_usuario = async(pp_nombre, ps_nombre, pp_apellido, ps_apellido, pcorreo, pidentificacion,
    pf_nacimiento, pgenero, pprovincia, pcanton, pdistrito, pdireccion) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-cliente',
            responseType: 'json',
            //body 
            data: {
                p_nombre: pp_nombre,
                s_nombre: ps_nombre,
                p_apellido: pp_apellido,
                s_apellido: ps_apellido,
                correo: pcorreo,
                identificacion: pidentificacion,
                f_nacimiento: pf_nacimiento,
                genero: pgenero,
                provincia: pprovincia,
                canton: pcanton,
                distrito: pdistrito,
                direccion: pdireccion,

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

    let lista_avatares;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar_avatar',
        responseType: 'json'

    })

    .then(function(res) {
            lista_avatares = (res.data.URL)
        })
        .catch(function(error) {
            console.log(error);
        });

    return lista_avatares;
};

/*al que le toque listarlos, acá sería, ya agregué algunas cosas (Andrés)*/

let listar_clientes = async() => {
    let lista_clientes;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_clientes',
            responseType: 'json'

        })
        .then(function(res) {
            lista_clientes = res.data.clientes;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_clientes;
}

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
            location.reload();
        });

    }

});

let botn = document.querySelector('#btn_agregar_imagen');

botn.addEventListener('click', function() {
    myWidget1.open();
}, false);