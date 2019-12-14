let listar_admin = async() => {
    let lista_admin;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-admin',
            responseType: 'json'
        })
        .then(function(res) {
            lista_admin = res.data.admin;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_admin;
}

let obtener_admin_id = async(_id) => {
    try {
        const response = await axios({
            method: 'get',
            params: { _id: _id },
            url: `http://localhost:3000/api/listar_admin_id`,
            responseType: 'json',

        });
        return response.data.admin;
    } catch (error) {
        console.log(error);

    }
};

let modificar_admin = async(id, nombre, correo, contrasena, estado) => {
    let respuesta = false;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/modificar_descuento',
            responseType: 'json',
            //body
            data: {
                _id: id,
                nombre: nombre,
                correo: correo,
                contrasena: contrasena,
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