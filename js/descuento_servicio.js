let registrar_descuento = async(nombre, descipcion, porcentaje) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/descuentos',
            responseType: 'json',
            //body
            data: {
                nombre: nombre,
                descipcion: descipcion,
                porcentaje: porcentaje,
            }
        })
        .then(function(res) {
            console.log(res.data);
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