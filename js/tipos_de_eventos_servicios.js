'use strct'

let registrar_tipos_de_evento = async(nombre, URL, estado) => {
    let respuesta = false;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_tipos_de_evento',
            responseType: 'json',
            //body
            data: {
                nombre: nombre,
                URL: URL,
                estado: estado
            }
        })
        .then(function(res) {
            console.log(res.data);
            respuesta = res;
        })
        .catch(function(error) {
            console.log(error);
        });
    return respuesta;
};

let listar_tipos_de_evento = async() => {
    let resultado;

    await axios({
            method: 'get',

            url: 'http://localhost:3000/api/listar_tipos_de_evento',
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

let modificar_tipos_de_evento = async(id, nombre, URL, estado) => {
    let respuesta = false;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/modificar_tipo_de_evento',
            responseType: 'json',
            //body
            data: {
                _id: id,
                nombre: nombre,
                URL: URL,
                estado: estado
            }
        })
        .then(function(res) {
            console.log(res.data);
            respuesta = res;
        })
        .catch(function(error) {
            console.log(error);
        });
    return respuesta;
};