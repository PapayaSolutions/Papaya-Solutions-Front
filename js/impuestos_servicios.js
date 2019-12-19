'use strict';

let registrar_impuesto = async(nombre, porcentaje, descripcion, estado) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/registrar_impuesto',
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
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_impuesto',

            responseType: 'json',

        }).then(function(res) {
            lista_impuesto = res.data.impuestos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_impuesto;
};

let obtener_impuesto_id = async(_id) => {
    try {
        const response = await axios({
            method: 'get',
            params: { _id: _id },
            url: `https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_impuesto_id`,
            responseType: 'json',

        });
        return response.data.impuestos;
    } catch (error) {
        console.log(error);

    }
};
let modificar_impuesto = async(id, nombre, porcentaje, descripcion, estado) => {
    let respuesta = false;
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/modificar_impuesto',
            responseType: 'json',
            //body
            data: {
                _id: id,
                nombre: nombre,
                porcentaje: porcentaje,
                descripcion: descripcion,
                estado: estado
            }
        })
        .then(function(res) {
            console.log(res.data);
            respuesta = res;
        })
        .catch(function(error) {
            console.log(error);
        });
    return respuesta;
};