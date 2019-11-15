'use strict';

let registrar_recinto = async(nombre, direccion, canton, provincia, distrito, capacidad, asientos_tradicionales, asientos_accesibilidad, estado) => {

    await axios({

                method: 'post',
                url: 'http://localhost:3000/api/registrar-recinto',
                responseType: 'json',
                data: {

                    // Validar con route
                    nombre: nombre,
                    direccion: direccion,
                    canton: canton,
                    provincia: provincia,
                    distrito: distrito,
                    capacidad: capacidad,
                    asientos_tradicionales: asientos_tradicionales,
                    asientos_accesibilidad: asientos_accesibilidad,
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