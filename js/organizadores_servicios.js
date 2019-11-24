'use strict';

let listar_organizadores = async() => {
    let lista_organizadores;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_organizador',
            responseType: 'json',
        })
        .then(function(res) {
            lista_organizadores = res.data.organizador;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_organizadores;
};