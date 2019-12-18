'use strict';

let registrar_organizador = async(p_nombre, s_nombre, p_apellido, s_apellido, correo, genero, identificacion, nacimiento, provincia, canton, distrito, direccion, experiencia, estado, tipo, codigov) => {

    await axios({
                method: 'post',
                url: 'http://localhost:3000/api/registrar_organizador',
                responseType: 'json',
                data: {

                    // Validar con route
                    p_nombre: p_nombre,
                    s_nombre: s_nombre,
                    p_apellido: p_apellido,
                    s_apellido: s_apellido,
                    correo: correo,
                    genero: genero,
                    identificacion: identificacion,
                    nacimiento: nacimiento,
                    provincia: provincia,
                    canton: canton,
                    distrito: distrito,
                    direccion: direccion,
                    experiencia: experiencia,
                    estado: estado,
                    tipo: tipo,
                    codigov: codigov,

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

let listar_organizadores = async() => {
    let lista_organizadores;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_organizador',
            responseType: 'json',
        })
        .then(function(res) {
            lista_organizadores = res.data.organizador;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_organizadores;
};

let obtener_organizador_id = async(_id) => {
    try {
        const response = await axios({
            method: 'get',
            params: { _id: _id },
            url: `http://localhost:3000/api/listar_organizador_id`,
            responseType: 'json',

        });
        return response.data.organizador;
    } catch (error) {
        console.log(error);

    }
};

let registrar_organizador_user = async(correo, codigov) => {

    await axios({
                method: 'post',
                url: 'http://localhost:3000/api/registrar-user-org',
                responseType: 'json',
                data: {

                    // Validar con route
                    correo: correo,
                    codigov: codigov,

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