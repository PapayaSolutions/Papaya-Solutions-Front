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

let modificar_plataforma = async(
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
            url: 'http://localhost:3000/api/modificar_plataforma',
            responseType: 'json',
            //body
            data: {

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