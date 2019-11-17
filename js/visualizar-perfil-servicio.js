'use strict';

let visualizar = async(nombre_usuario, edad, genero, correo, direccion, direccion_exacta, identificacion, fnacimiento) => {
    await axios({
                method: 'get',
                url: "http://localhost:3000/api/visualizar-perfil",
                responseType: 'json',
                //body
                data: {
                    nombre_usuario: nombre_usuario,
                    edad_cliente: edad_cliente,
                    genero_cliente: genero_cliente,
                    correo_cliente: correo_cliente,
                    direccion: direccion,
                    direccion_exacta: direccion_exacta,
                    identificacion: identificacion,
                    fnacimiento: fnacimiento
                }

            }

        )
        .then(function(res) {
            console.log(res.data.clientes);
        })
        .catch(function(error) {
            console.log(error);
        });
};