'use strict';

let cambiar_contrasena = async(correo, contrasena) => {
    await axios.post('https://proyecto1-mishka-backend-produ.herokuapp.com/api/modificar_contrasena', {
            correo: correo,
            contrasena: contrasena
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};