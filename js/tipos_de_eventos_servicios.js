'use strct'

let registrar_tipos_de_evento = async(nombre) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_tipos_de_evento',
            responseType: 'json',
            //body
            data: {
                nombre: nombre,
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

let listar_tipos_de_evento = async() => {
    let lista_tipo_de_evento;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_tipos_de_evento',
            responseType: 'json'

        })
        .then(function(res) {
            lista_tipo_de_evento = res.data.productos;
        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_tipo_de_evento;
};