'use strict';

let listar_plataforma = async() => {
    let lista_plataforma;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_plataforma',
            responseType: 'json',

        }).then(function(res) {
            lista_plataforma = res.data.plataforma;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_plataforma;
};

let registrar_plataforma = async(
    nombre,
    razon,
    cedula,
    direccion,
    provincia,
    canton,
    distrito,
    experiencia,
    logo,
    longitud,
    latitud,
    comision
) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_plataforma',
            responseType: 'json',
            //body
            data: {

                nombre,
                razon,
                cedula,
                direccion,
                provincia,
                canton,
                distrito,
                experiencia,
                logo,
                longitud,
                latitud,
                comision

            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

var myWidget1 = cloudinary.createUploadWidget({
    cloudName: 'pypsolutionscr',
    uploadPreset: 'psolutions'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        document.querySelector('#logo').src = result.info.secure_url;

    }

});

let botn = document.querySelector('#btn_agregar_imagen');

botn.addEventListener('click', function() {
    myWidget1.open();
}, false);

btn_editar.addEventListener('click', function() {
    localStorage.setItem('previo', window.location.href);
    window.location.href = 'editar_plataforma.html'
});