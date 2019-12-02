const correo = document.querySelector('#correo');
const contrasena = document.querySelector('#contrasena');

let lista_admin;

let llenar_tabla = async() => {


    lista_admin = await listar_admin();
    console.log(lista_admin)
    for (let i = 0; i < lista_admin.length; i++) {

        correo.innerHTML = lista_admin[0]['correo'];
        contrasena.innerHTML = lista_admin[0]['contrasena'];

    };

};

llenar_tabla();