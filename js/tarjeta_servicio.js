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
                    codigo: codigo,
                    vencimiento: vencimiento,
                    apellido: apellido,
                    postal: postal,
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