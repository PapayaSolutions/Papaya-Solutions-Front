let registrar_descuento = async(nombre, descripcion, porcentaje, estado) => {
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/descuentos',
            responseType: 'json',
            //body
            data: {
                nombre: nombre,
                descripcion: descripcion,
                porcentaje: porcentaje,
                estado: estado
            }
        })
        .then(function(res) {

        })
        .catch(function(error) {
            console.log(error);
        });
};

let listar_descuento = async() => {
    let lista_descuento;
    await axios({
            method: 'get',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_descuentos',
            responseType: 'json'
        })
        .then(function(res) {
            lista_descuento = res.data.descuentos;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_descuento;
}

let obtener_descuento_id = async(_id) => {
    try {
        const response = await axios({
            method: 'get',
            params: { _id: _id },
            url: `https://proyecto1-mishka-backend-produ.herokuapp.com/api/listar_descuento_id`,
            responseType: 'json',

        });
        return response.data.descuentos;
    } catch (error) {
        console.log(error);

    }
};

let modificar_descuento = async(id, nombre, descripcion, porcentaje, estado) => {
    let respuesta = false;
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/modificar_descuento',
            responseType: 'json',
            //body
            data: {
                _id: id,
                nombre: nombre,
                descripcion: descripcion,
                porcentaje: porcentaje,
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