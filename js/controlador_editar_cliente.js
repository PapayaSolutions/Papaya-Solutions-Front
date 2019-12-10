'use strict';

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const nacimiento = document.querySelector('#nacimiento');
const tbody = document.querySelector('#tbl_perfil tbody');
const direccion = document.querySelector('#direccion');
const identificacion = document.querySelector('#identificacion');
const correo_cliente = document.querySelector('#correo');
const imagen_avatar = document.querySelector('#avat');
const p_tarjeta = document.querySelector('#tarjeta_informacion');
const tipo_tarjeta = document.querySelector('#tipo_tarjeta');
const contrasena = document.querySelector('#contrasena');
const div_i = document.querySelectorAll('#volver a i');

let lista_clientes;
let usuario = sessionStorage.getItem('tipo_usuario');
let id = localStorage.getItem('destino_id');

let llenar_tabla = async() => {

    lista_clientes = await obtener_cliente_id(id);

    console.log(lista_clientes);
    let fila = tbody.insertRow();

    nombre.innerHTML = (lista_clientes[0]['p_nombre'] + ' ' + lista_clientes[0]['s_nombre'] + ' ' + lista_clientes[0]['p_apellido'] + ' ' + lista_clientes[0]['s_apellido']);
    genero.innerHTML = lista_clientes[0]['genero'];
    fila.insertCell().innerHTML = (lista_clientes[0]['provincia'] + ', ' + lista_clientes[0]['canton'] + ', ' + lista_clientes[0]['distrito'] + '.');
    direccion.innerHTML = lista_clientes[0]['direccion'];
    identificacion.innerHTML = lista_clientes[0]['identificacion'];
    correo_cliente.innerHTML = lista_clientes[0]['correo_cliente'];
    imagen_avatar.src = lista_clientes[0]['url_avatar'];
    contrasena.innerHTML = '********';

    for (let i = 0; i < lista_clientes[0]['metodos_pago'].length; i++) {
        let tarjeta = lista_clientes[0]['metodos_pago'][i]['tarjeta'];
        tipo_tarjeta.innerHTML = "Master Card";
        p_tarjeta.innerHTML = lista_clientes[0]['metodos_pago'][i]['tarjeta'];
    }

    for (let i = 0; i < lista_clientes[0]['f_nacimiento'].length; i++) {
        let date = new Date((lista_clientes[0]['f_nacimiento']));
        nacimiento.innerHTML = (date.getDate() + '/ ' + date.getMonth() + '/ ' + date.getFullYear());
    };

    localStorage.setItem('id_tarjeta', JSON.stringify(lista_clientes));
    JSON.parse(localStorage.getItem('id_tarjeta'));

};
llenar_tabla();



if (conectado) {
    switch (tipo_usuario) {

        case 'Cliente':
            div_i[0].classList.add('ocultar');
            break;
        case 'Encargado':
            div_i[0].classList.add('ocultar');

            break;
        case 'Organizador':
            div_i[0].classList.add('ocultar');

            break;
        default:

            break;
    }
} else {
    div_i[0].classList.add('ocultar');
}