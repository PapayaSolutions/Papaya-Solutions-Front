'use strict';

let listar_descuento = async() => {
    let lista_descuento;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_descuentos',
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