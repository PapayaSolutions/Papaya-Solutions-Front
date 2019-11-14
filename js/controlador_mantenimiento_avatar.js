'use strict';
const contenedor = document.querySelector('#avatar_container');
contenedor.innerHTML = '';



let mostrar_cards = async() => {
    let lista_avatares = await listar_avatares();
    for (let i = 0; i < lista_avatares.length; i++) {

        let div_card = document.createElement('div');
        div_card.classList.add('card');

        let div_figure = document.createElement('figure');
        div_figure.classList.add('img_container');
        div_figure.classList.add('avatar_img');

        let imagen = document.createElement('img');
        imagen.src = lista_avatares[i]['URL'];

        let chk_box = document.createElement('input');
        chk_box.type = 'checkbox';

        let div_info = document.createElement('div');
        div_info.classList.add('avatar_info');

        let titulo = document.createElement('label');
        titulo.innerHTML = "Avatar";
        titulo.classList.add('titulo');

        let division = document.createElement('hr');

        let nombre = document.createElement('label');
        nombre.innerText = lista_avatares[i]['nombre'];
        nombre.classList.add('card_nombre');

        let div_estado = document.createElement('div');
        div_estado.classList.add('div_state');

        let lbl_estado = document.createElement('label');
        lbl_estado.innerText = 'Estado: ';

        let estado = document.createElement('output');
        estado.innerText = lista_avatares[i]['estado'];

        contenedor.appendChild(div_card);
        div_card.appendChild(div_figure);
        div_figure.appendChild(imagen);
        div_card.appendChild(chk_box);
        div_card.appendChild(div_info);
        div_info.appendChild(titulo);
        div_info.appendChild(division);
        div_info.appendChild(nombre);
        div_info.appendChild(div_estado);
        div_estado.appendChild(lbl_estado);
        div_estado.appendChild(estado);



    };
};

mostrar_cards();