'use strict';

let validar_credenciales = async(correo, contrasena) => {
    await axios.post('http://localhost:3000/api/validar_credenciales', {
            correo_cliente: correo,
            contrasena: contrasena
        })
        .then(function(res) {
            console.log(res.data);
            sessionStorage.setItem('conectado', res.success);
            sessionStorage.setItem('correo', res.data.clienteBD.correo_cliente);
            sessionStorage.setItem('tipo_usuario', res.data.clienteBD.tipo);
        })
        .catch(function(error) {
            console.log(error);
        });
};

// function validar_credenciales(pcorreo, pcontrasena) {
//     let respuesta = '';
//     let peticion = $.ajax({
//         url: 'http://:localhost:3000/api/validar_credenciales',
//         type: 'post',
//         contentType: 'application/x-www-form-urlencoded; chardet=utf-8',
//         dataType: 'json',
//         asyc: false,
//         //body
//         data: {
//             correo: pcorreo,
//             contrasena: pcontrasena
//         }
//     });

//     peticion.done(function(response) {
//         respuesta = response;
//         sessionStorage.setItem('conectado', response.success);
//         sessionStorage.setItem('correo', response.clienteBD.correo);
//         sessionStorage.setItem('tipo_usuario', response.clienteBD.tipo);
//         console.log('JUEGA!!')
//     });
//     peticion.fail(function(response) {
//         respuesta = response;
//         console.log('meh')
//     });

//     return respuesta;
// };