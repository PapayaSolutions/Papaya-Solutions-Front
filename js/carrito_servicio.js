'use strict';

let crear_carrito = async(_id) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_carrito',
            responseType: 'json',

            data: {
                _id
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

let obtener_carrito_usuario = async(usuario) => {
    let lista_carrito;
    await axios({
            method: 'get',
            url: `http://localhost:3000/api/buscar_carrito_usuario/${usuario}`,
            responseType: 'json',

        }).then(function(res) {
            lista_carrito = res.data.carritos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_carrito;
};

let agregar_evento = async(usuario, evento, cantidad) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/agregar_evento',
            responseType: 'json',
            //body
            data: {
                usuario,
                evento,
                cantidad

            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

let borrar_evento = async(_id, evento_id) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/borrar',
            responseType: 'json',
            //body
            data: {
                _id,
                evento_id

            }
        })
        .then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};