'use strict';
const contenedor = document.querySelector('#avatar_container');

let input_filtro = document.querySelector('#bnr_input');


let mostrar_cards = async() => {
    let lista_avatares = await listar_avatares();
    let filtro = input_filtro.value.toLowerCase();
    contenedor.innerHTML = '';
    for (let i = 0; i < lista_avatares.length; i++) {
        let nombre = lista_avatares[i]['nombre'].toLowerCase();
        if (nombre.includes(filtro)) {
            let div_card = document.createElement('div');
            div_card.classList.add('card');

            let div_figure = document.createElement('figure');
            div_figure.classList.add('img_container');
            div_figure.classList.add('avatar_img');

            let imagen = document.createElement('img');
            imagen.src = lista_avatares[i]['URL'];

            if (lista_avatares[i]['estado'] === 'false') {
                imagen.classList.add('deshabilitada');
            } else {
                imagen.classList.remove('deshabilitada');
            }
            /* botones de control*/
            let botones = document.createElement('div');
            botones.classList.add('botones');

            /*   let edit_btn = document.createElement('button');
               edit_btn.innerText = 'Edit';
               edit_btn.classList.add('edit');*/

            let habit_btn = document.createElement('button');
            habit_btn.classList.add('habit');
            habit_btn.innerText = 'Habilitar';
            habit_btn.dataset.id = lista_avatares[i]['_id'];

            let deshabit_btn = document.createElement('button');
            deshabit_btn.classList.add('deshabit');
            deshabit_btn.innerText = 'Deshabilitar';
            deshabit_btn.dataset.id = lista_avatares[i]['_id'];

            if (lista_avatares[i]['estado'] === 'false') {
                imagen.classList.add('deshabilitada');
                deshabit_btn.classList.add('hidden');
                habit_btn.classList.remove('hidden');
            } else {
                imagen.classList.remove('deshabilitada');
                deshabit_btn.classList.remove('hidden');
                habit_btn.classList.add('hidden');
            }

            /*   edit_btn.addEventListener('click', function() {
                   botones.classList.toggle('hidden');
               });*/
            habit_btn.addEventListener('click', function() {
                habilitar_avatar(habit_btn.dataset.id);
                crear_bitacora('Habilitar', 'Habilitar avatar');
            });
            deshabit_btn.addEventListener('click', function() {
                deshabilitar_avatar(deshabit_btn.dataset.id);
                crear_bitacora('Deshabilitar', 'Deshabilitar avatar');
            });

            /* botones de control*/
            let div_info = document.createElement('div');
            div_info.classList.add('avatar_info');



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
            div_card.appendChild(botones);
            /*  div_card.appendChild(edit_btn);*/

            botones.appendChild(habit_btn);
            botones.appendChild(deshabit_btn);

            div_card.appendChild(div_info);

            div_info.appendChild(division);
            div_info.appendChild(nombre);
            div_info.appendChild(div_estado);
            div_estado.appendChild(lbl_estado);
            div_estado.appendChild(estado);
        }; //if
    }; //for

};



mostrar_cards();
input_filtro.addEventListener('keyup', mostrar_cards);