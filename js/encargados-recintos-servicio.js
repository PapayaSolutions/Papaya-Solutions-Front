'use strict';

let registrar_encargado_recinto = async(nombre, numero, correo, fecha_nacimiento, genero) => {

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
                    genero: genero

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