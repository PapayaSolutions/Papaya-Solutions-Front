let registrar_descuento = async(nombre, descripcion, porcentaje, estado) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/descuentos',
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
            url: 'http://localhost:3000/api/listar_descuentos',
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