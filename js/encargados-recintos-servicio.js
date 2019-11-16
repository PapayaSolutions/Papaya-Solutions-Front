'use strict';

let registrar_encrgado_recinto = async(nombre, numero, correo, fecha_nacimiento, genero, contrasena, codigov, tipo, estado) => {

    await axios({

                method: 'post',
                url: 'http://localhost:3000/api/registrar-encargado-recinto',
                responseType: 'json',
                data: {

                    // Validar con route
                    nombre: nombre,
                    numero: numero,
                    correo: correo,
                    fecha_nacimiento: fecha_nacimiento,
                    genero: genero,
                    contrasena: contrasena,
                    codigov: codigov,
                    tipo: tipo,
                    estado: estado

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