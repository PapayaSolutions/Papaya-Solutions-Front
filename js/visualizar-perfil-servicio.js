'use strict';

let visualizar_perfil = async(correo_cliente) => {
    let ver_perfil;
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/ver-perfil?correo_cliente=${correo_cliente}`,
            responseType: 'json'
        });
        return response.data.cliente;
    } catch (error) {
        console.log(error);
    }
    return ver_perfil;
};