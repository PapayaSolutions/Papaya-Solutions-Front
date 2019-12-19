'use strict';

let validar_codigo = async(correo, codigov) => {
    await axios.post('https://proyecto1-mishka-backend-produ.herokuapp.com/api/validar_codigo', {
            correo: correo,
            codigov: codigov
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};