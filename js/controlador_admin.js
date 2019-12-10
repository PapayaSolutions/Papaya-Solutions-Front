const correo = document.querySelector('#correo');
const contrasena = document.querySelector('#contrasena');

const nombre_emp = document.querySelector('#nombre_emp')
const correo_emp = document.querySelector('#correo_emp');
const contrasena_emp = document.querySelector('#contrasena_emp');

const contenedor = document.querySelector('#contenedor');

let lista_admin;

let llenar_tabla = async() => {


    lista_admin = await listar_admin();
    console.log(lista_admin)
    for (let i = 0; i < lista_admin.length; i++) {

        correo.innerHTML = lista_admin[0]['correo'];
        contrasena.innerHTML = lista_admin[0]['contrasena'];

        nombre_emp.innerHTML = lista_admin[1]['nombre'];
        correo_emp.innerHTML = lista_admin[1]['correo'];
        contrasena_emp.innerHTML = lista_admin[1]['contrasena'];

    };

};

llenar_tabla();