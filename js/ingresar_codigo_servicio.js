'use strict';

let validar_codigo = async(correo, codigov) => {
    await axios.post('http://localhost:3000/api/validar_codigo', {
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