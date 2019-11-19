'use strict';

let registrar_impuesto = async(nombre, porcentaje, descripcion, estado) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_impuesto',
            responseType: 'json',
            //body
            data: {

                nombre: nombre,
                porcentaje: porcentaje,
                descripcion: descripcion,
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

let listar_impuestos = async() => {
    let lista_impuesto;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_impuesto',

            responseType: 'json',

        }).then(function(res) {
            lista_impuesto = res.data.impuestos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_impuesto;
};