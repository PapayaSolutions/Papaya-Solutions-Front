'use strict';

let registrar_evento = async(id, nombre, categoria, asistentes_esperados, fecha_disponible, pais_evento, recinto, precio_entrada,
    cantidad_maxima_usuario, duracion, descripcion, estado) => {

    await axios({

                method: 'post',
                url: 'http://localhost:3000/api/registrar-evento',
                responseType: 'json',
                data: {

                    id: id,
                    nombre: nombre,
                    categoria: categoria,
                    asistentes_esperados: asistentes_esperados,
                    fecha_disponible: fecha_disponible,
                    pais_evento: pais_evento,
                    recinto: recinto,
                    precio_entrada: precio_entrada,
                    cantidad_maxima_usuario: cantidad_maxima_usuario,
                    duracion: duracion,
                    descripcion: descripcion,
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

let listar_evento = async() => {
    let lista_evento;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_evento',
            /* SETEAR LA RUTA!! */
            responseType: 'json',

        }).then(function(res) {
            lista_evento = res.data.eventos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_evento;
};