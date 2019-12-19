'use strct'

let cambiar_estado = async((input_id, input_estado) => {
    let respuesta = false;
    await axios({
            method: 'post',
            url: 'https://proyecto1-mishka-backend-produ.herokuapp.com/api/modificar-estado',
            responseType: 'json',
            //body
            data: {
                id: input_id,
                estado: input_estado
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
});