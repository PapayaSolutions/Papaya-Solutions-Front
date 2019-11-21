'use strct'

let registrar_evento = async(nombre, categoria, asistentes_esperados, fecha_disponible, hora, pais_evento, recinto, precio_entrada, cantidad_maxima_usuario, descripcion, URL_imagen, estado) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-evento',
            responseType: 'json',
            //body
            data: {
                nombre: nombre,
                categoria: categoria,
                asistentes_esperados: asistentes_esperados,
                fecha_disponible: fecha_disponible,
                hora: hora,
                pais_evento: pais_evento,
                recinto: recinto,
                precio_entrada: precio_entrada,
                cantidad_maxima_usuario: cantidad_maxima_usuario,
                descripcion: descripcion,
                URL_imagen: URL_imagen,
                estado: estado
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

let listar_recintos = async() => {

    let lista_recintos;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-recintos',
        responseType: 'json'

    })

    .then(function(res) {
            lista_recintos = (res.data.recintos)
        })
        .catch(function(error) {
            console.log(error);
        });

    return lista_recintos;
};