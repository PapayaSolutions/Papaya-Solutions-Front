'use strict';

let validar_credenciales = async(pcorreo, pcontrasena) => {
    await axios({
            method: 'post',
            url: 'http://:localhost:3000/api/validar_credenciales',
            responseType: 'json',
            //body
            data: {
                correo: pcorreo,
                contrasena: pcontrasena,
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });

};