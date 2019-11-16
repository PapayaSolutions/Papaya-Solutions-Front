'use strict';

let registrar_tarjeta = async(tarjeta, nombre, codigo) => {
    await axios({
                method: 'post',
                url: "http://localhost:3000/api/registrar-tarjeta",
                responseType: 'json',
                //body
                data: {
                    tarjeta: tarjeta,
                    nombre: nombre,
                    codigo: codigo
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