'use strict';

let registrar_producto = async(codigo, nombre, precio, descripcion) => {

    await axios({

                method: 'post',
                url: 'http://localhost:3000/api/registrar-producto',
                responseType: 'json',
                data: {

                    // Validar con route
                    codigo: codigo,
                    nombre: nombre,
                    precio: precio,
                    descripcion: descripcion

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