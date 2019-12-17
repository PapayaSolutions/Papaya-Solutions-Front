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
let comentar_evento = async(_id, cliente_id, comentario, correo) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/comentar',
            responseType: 'json',
            //body
            data: {
                _id,
                cliente_id,
                comentario,
                correo
            }
        })
        .then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};


let restar_entradas = async(_id, num) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/restar_entradas',
            responseType: 'json',
            //body
            data: {
                _id,
                num,

            }
        })
        .then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};

let registrar_compra = async(_id, usuario) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/agregar_compra',
            responseType: 'json',
            //body
            data: {
                _id,
                usuario
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};