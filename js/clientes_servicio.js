'use strict';

let registrar_cliente = async(pcodigo, pnombre, pprecio, pdescripcion) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-cliente',
            responseType: 'json',
            //body
            data: {
                codigo: pcodigo,
                nombre: pnombre,
                precio: pprecio,
                descripcion: pdescripcion
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
    let listar_clientes;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-clientes',
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