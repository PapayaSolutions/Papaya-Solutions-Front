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

let mostrar_cards = async() => {

    lista_admin = await listar_admin();

    contenedor.innerHTML = '';
    for (let i = 0; i < lista_admin.length; i++) {
        let div_card = document.createElement('div');
        div_card.classList.add('card');

        let header = document.createElement('header');

        let titulo = document.createElement('h1');
        titulo.innerText = lista_admin[i]['nombre'];

        let precio = document.createElement('h6');
        precio.innerText = lista_admin[i]['correo'];

        let descripcion = document.createElement('p');
        descripcion.innerText = lista_admin[i]['contrasena'];

        let boton = document.createElement('button');
        boton.classList.add('btn-mas');
        boton.innerText = 'Ver más';
        boton.dataset._id = lista_admin[i]['_id'];

        boton.addEventListener('click', function() {
            localStorage.setItem('id_producto', this.dataset._id);
            window.location.href = 'perfil-producto.html';
        });

        contenedor.appendChild(div_card);
        div_card.appendChild(header);
        div_card.appendChild(titulo);
        div_card.appendChild(precio);
        div_card.appendChild(descripcion);
        div_card.appendChild(boton);



    };
};

mostrar_cards();