'use strict';

let visualizar_perfil = async(nombre_usuario, edad, genero, correo, direccion, direccion_exacta, identificacion, fnacimiento) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/visualizar-perfil',
            responseType: 'json',
            //body
            data: {
                nombre_usuario: nombre_usuario,
                edad: edad,
                genero: genero,
                correo: correo,
                direccion: direccion,
                direccion_exacta: direccion_exacta,
                identificacion: identificacion,
                fnacimiento: fnacimiento
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

let visualizar = async(nombre_usuario, edad, genero, correo, direccion, direccion_exacta, identificacion, fnacimiento) => {
    await axios({
                method: 'get',
                url: "http://localhost:3000/api/visualizar-perfil",
                responseType: 'json',
                //body
                data: {
                    nombre_usuario: nombre_usuario,
                    edad: edad,
                    genero: genero,
                    correo: correo,
                    direccion: direccion,
                    direccion_exacta: direccion_exacta,
                    identificacion: identificacion,
                    fnacimiento: fnacimiento
                }

            }

        )
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};