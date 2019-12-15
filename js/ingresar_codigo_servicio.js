'use strict';

let validar_codigo = async(correo, codigov) => {
    await axios.post('http://localhost:3000/api/validar_codigo', {
            correo: correo,
            codigov: codigov
        })
        .then(function(res) {
            console.log(res.data);
            console.log('verificado!');
            window.location.href = 'nueva_contrasena.html';
        })
        .catch(function(error) {
            console.log(error);
        });
};