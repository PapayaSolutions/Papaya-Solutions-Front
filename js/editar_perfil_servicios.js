'use strict';

let editar_cliente = async(
    p_nombre,
    s_nombre,
    p_apellido,
    s_apellido,
    correo_cliente,
    identificacion,
    f_nacimiento,
    genero,
    provincia,
    canton,
    distrito,
    direccion,
    url_avatar,
) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/editar_cliente',
            responseType: 'json',
            //body
            data: {
                p_nombre,
                s_nombre,
                p_apellido,
                s_apellido,
                correo_cliente,
                identificacion,
                f_nacimiento,
                genero,
                provincia,
                canton,
                distrito,
                direccion,
                url_avatar,

            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};