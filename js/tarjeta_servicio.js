'use strict';
let registrar_tarjeta = async(tarjeta, nombre, codigo, vencimiento, apellido, postal) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_tarjeta',
            responseType: 'json',
            //body 
            data: {
                tarjeta: tarjeta,
                nombre: nombre,
                codigo: codigo,
                vencimiento: vencimiento,
                apellido: apellido,
                postal: postal,

            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};