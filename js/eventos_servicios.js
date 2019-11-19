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