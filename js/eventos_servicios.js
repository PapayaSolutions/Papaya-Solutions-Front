'use strict';

let listar_evento = async() => {
    let lista_evento;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_evento',
            /* SETEAR LA RUTA!! */
            responseType: 'json',

        }).then(function(res) {
            lista_evento = res.data.eventos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_evento;
};

let listar_evento2 = async() => {
    let lista_evento;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_evento2',
            /* SETEAR LA RUTA!! */
            responseType: 'json',

        }).then(function(res) {
            lista_evento = res.data.eventos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_evento;
};