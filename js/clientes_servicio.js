'use strict';

let registrar_cliente = async(pp_nombre, ps_nombre, pp_apellido, ps_apellido, pcorreo, pidentificacion,
    pf_nacimiento, pedad_cliente, pgenero, pprovincia, pcanton, pdistrito, pdireccion, url_avatar, codigov) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/registrar-cliente',
            responseType: 'json',
            //body 
            data: {
                p_nombre: pp_nombre,
                s_nombre: ps_nombre,
                p_apellido: pp_apellido,
                s_apellido: ps_apellido,
                correo_cliente: pcorreo,
                identificacion: pidentificacion,
                f_nacimiento: pf_nacimiento,
                edad: pedad_cliente,
                genero: pgenero,
                provincia: pprovincia,
                canton: pcanton,
                distrito: pdistrito,
                direccion: pdireccion,
                url_avatar: url_avatar,
                codigov: codigov,
            }
        }).then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
            Swal.fire({
                type: 'warning',
                title: 'Error!',
                text: 'No se pudo registrar el nuevo cliente',
                confirmButtonText: 'Entendido',
            })
        });
}

let registrar_usuario = async(pcorreo, codigov) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/registrar-user-cli',
            responseType: 'json',
            data: {
                correo: pcorreo,
                codigov: codigov,
            }
        }).then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
            Swal.fire({
                type: 'warning',
                title: 'Error!',
                text: 'No se pudo registrar el nuevo usuario',
                confirmButtonText: 'Entendido',
            })
        });
};
let listar_avatares = async() => {

    let lista_avatares;

    await axios({
        method: 'get',
        url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_avatar',
        responseType: 'json'

    })

    .then(function(res) {
            lista_avatares = (res.data.avatares)
        })
        .catch(function(error) {
            console.log(error);
        });

    return lista_avatares;
};

/*al que le toque listarlos, acá sería, ya agregué algunas cosas (Andrés)*/

let listar_clientes = async() => {
    let lista_clientes;
    await axios({
            method: 'get',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_clientes',
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



let listar_tipos_de_evento = async() => {
    let resultado;

    await axios({
            method: 'get',

            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_tipos_de_evento',
            responseType: 'json'
        })
        .then(function(res) {
            resultado = res.data.tipos;

        })
        .catch(function(error) {
            console.log(error);
        });

    return resultado;
};

let obtener_cliente_id = async(_id) => {
    let lista_cliente;
    await axios({
            method: 'get',
            url: `https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_cliente_id/${_id}`,
            responseType: 'json',

        }).then(function(res) {
            lista_cliente = res.data.clientes;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_cliente;
};

let obtener_cliente_mail = async(mail) => {
    let lista_cliente;
    await axios({
            method: 'get',
            url: `https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_cliente_mail/${mail}`,
            responseType: 'json',

        }).then(function(res) {
            lista_cliente = res.data.clientes;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_cliente;
};

let registrar_tarjeta = async(email, tarjeta, nombre, codigo, vencimiento, apellido, postal) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/registrar_tarjeta',
            responseType: 'json',
            //body 
            data: {
                email,
                tarjeta: tarjeta,
                nombre: nombre,
                codigo: codigo,
                vencimiento: vencimiento,
                apellido: apellido,
                postal: postal,

            }
        })
        .then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};

let habilitar_tarjeta = async(_id, tarjeta_id) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/habilitar_tarjeta',
            responseType: 'json',
            //body
            data: {
                _id,
                tarjeta_id,
                estado: 'Activo'
            }
        })
        .then(function(res) {
            console.log(res.data);
            llenar_tabla();
        })
        .catch(function(error) {
            console.log(error);
        });
};

let deshabilitar_tarjeta = async(_id, tarjeta_id) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/deshabilitar_tarjeta',
            responseType: 'json',
            //body
            data: {
                _id,
                tarjeta_id,
                estado: 'Inactivo'
            }
        })
        .then(function(res) {
            console.log(res.data);
            llenar_tabla();
        })
        .catch(function(error) {
            console.log(error);
        });
};

let enviar_entrada = async(correo, nombre, nombre_evento, imagen, precio, count, total) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/enviar_entrada',
            responseType: 'json',
            //body
            data: {
                correo,
                nombre,
                nombre_evento,
                imagen,
                precio,
                count,
                total
            }
        })
        .then(function(res) {
            console.log(res.data);

        })
        .catch(function(error) {
            console.log(error);
        });
};