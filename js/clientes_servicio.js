'use strict';

let registrar_usuario = async(pp_nombre, ps_nombre, pp_apellido, ps_apellido, pcorreo_cliente, pidentificacion,
    pf_nacimiento, pgenero, pprovincia, pcanton, pdistrito, pdireccion) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-cliente',
            responseType: 'json',
            //body
            data: {
                p_nombre: pp_nombre,
                s_nombre: ps_nombre,
                p_apellido: pp_apellido,
                s_apellido: ps_apellido,
                correo_cliente: pcorreo_cliente,
                identificacion: pidentificacion,
                f_nacimiento: pf_nacimiento,
                genero: pgenero,
                provincia: pprovincia,
                canton: pcanton,
                distrito: pdistrito,
                direccion: pdireccion,
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

/*al que le toque listarlos, acá sería, ya agregué algunas cosas (Andrés)*/

let listar_clientes = async() => {
    let lista_clientes;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_clientes',
            responseType: 'json'
        })
        .then(function(res) {
            lista_clientes = res.data.clientes;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_clientes;
}