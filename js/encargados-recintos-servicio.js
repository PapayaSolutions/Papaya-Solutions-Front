'use strict';

let registrar_encrgado_recinto = async(nombre, numero, correo, fecha_nacimiento, genero, contrasena, codigov, tipo, estado) => {

    await axios({

                method: 'post',
                url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/registrar-encargado-recinto',
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

let listar_encargados = async() => {
    let lista_encargados;
    await axios({
            method: 'get',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar-encargados-recintos',
            responseType: 'json',
        })
        .then(function(res) {
            lista_encargados = res.data.encargados_recintos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_encargados;
};