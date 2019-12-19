'use strict';

let listar_descuento = async() => {
    let lista_descuento;
    await axios({
            method: 'get',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_descuentos',
            responseType: 'json'
        })
        .then(function(res) {
            lista_descuento = res.data.descuentos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_descuento;
}