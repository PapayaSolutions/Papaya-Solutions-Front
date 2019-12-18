'use strict';

let modificar_cliente = async(id, p_nombre, s_nombre, p_apellido, s_apellido, correo_cliente, identificacion, f_nacimiento, genero, provincia, canton, distrito, direccion, url_avatar) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/modificar_cliente',
            responseType: 'json',
            //body
            data: {
                _id: id,
                p_nombre: p_nombre,
                s_nombre: s_nombre,
                p_apellido: p_apellido,
                s_apellido: s_apellido,
                correo_cliente: correo_cliente,
                identificacion: identificacion,
                f_nacimiento: f_nacimiento,
                genero: genero,
                provincia: provincia,
                canton: canton,
                distrito: distrito,
                direccion: direccion,
                url_avatar: url_avatar
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};