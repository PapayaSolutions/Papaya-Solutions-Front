'use strict';

const tbody = document.querySelector('#datos tbody');

let obtener_cliente_id = async(email) => {
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/buscar-cliente-email/${email}`,
            responseType: 'json'
        });

        return response.data.contacto;
    } catch (error) {
        console.log(error);
    }
};