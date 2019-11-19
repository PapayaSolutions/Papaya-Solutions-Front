'use strict';

const tbody = document.querySelector('#datos');

let visualizar_perfil = async(correo_cliente) => {
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/ver-perfil/${correo_cliente}`,
            responseType: 'json'
        });

        return response.data.contacto;
    } catch (error) {
        console.log(error);
    }
};

const data = await visualizar_perfil('acanales.w@gmail.com');
const perfilNombre = document.getElementById('perfilNombre');
const perfilCorreo = document.getElementById('perfilCorreo');
const perfilNacimiento = document.getElementById('perfilNacimiento');
const perfilGenero = document.getElementById('perfilGenero');
const perfilDireccion = document.getElementById('perfilDireccion');
perfilNombre.innerText = data.p_nombre;
perfilCorreo.innerText = data.correo_cliente;
perfilNacimiento.innerText = data.f_nacimiento;
perfilGenero.innerText = data.genero;
perfilDireccion.innerText = data.direccion;