'use strict';

let registrar_recinto = async(nombre, direccion, canton, provincia, distrito, capacidad, asientos_tradicionales, asientos_accesibilidad, latitud, longitud, estado) => {

    await axios({

                method: 'post',
                url: 'http://localhost:3000/api/registrar-recinto',
                responseType: 'json',
                data: {

                    // Validar con route
                    nombre: nombre,
                    direccion: direccion,
                    canton: canton,
                    provincia: provincia,
                    distrito: distrito,
                    capacidad: capacidad,
                    asientos_tradicionales: asientos_tradicionales,
                    asientos_accesibilidad: asientos_accesibilidad,
                    latitud: latitud,
                    longitud: longitud,
                    estado: estado
                }
            }

        )
        .then(function(res) {

            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
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

let obtener_recinto_nombre = async(nombre) => {
    let lista_recinto;
    await axios({
            method: 'get',
            url: `http://localhost:3000/api/listar_recinto_nombre/${nombre}`,
            responseType: 'json',

        }).then(function(res) {
            lista_recinto = res.data.recintos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_recinto;
};

let obtener_recinto_id = async(_id) => {
    let lista_recinto;
    await axios({
            method: 'get',
            url: `http://localhost:3000/api/listar_recinto_id/${_id}`,
            responseType: 'json',

        }).then(function(res) {
            lista_recinto = res.data.recintos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_recinto;
};