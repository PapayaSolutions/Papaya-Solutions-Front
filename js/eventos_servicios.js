'use strict';

let listar_evento = async() => {
    let lista_evento;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_evento',
            responseType: 'json',

        }).then(function(res) {
            lista_evento = res.data.eventos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_evento;
};

let obtener_evento_id = async(_id) => {
    let lista_evento;
    await axios({
            method: 'get',
            url: `http://localhost:3000/api/listar_evento_id/${_id}`,
            responseType: 'json',

        }).then(function(res) {
            lista_evento = res.data.eventos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_evento;
};

let calificar_evento = async(_id, cliente_id, num) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/calificar',
            responseType: 'json',
            //body
            data: {
                _id,
                cliente_id,
                num
            }
        })
        .then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};
let comentar_evento = async(_id, cliente_id, comentario) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/comentar',
            responseType: 'json',
            //body
            data: {
                _id,
                cliente_id,
                comentario
            }
        })
        .then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};

let buscar_cliente_id = async(_id) => {
    let lista_cliente;
    await axios({
            method: 'get',
            url: `http://localhost:3000/api/listar_cliente_id/${_id}`,
            responseType: 'json',

        }).then(function(res) {
            lista_cliente = res.data.clientes;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_cliente;
};