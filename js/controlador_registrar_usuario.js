'use strict';

const input_p_nombre = document.querySelector('#p_nombre_cliente');
const input_p_apellido = document.querySelector('#p_apellido_cliente');
const input_correo = document.querySelector('#correo');
const input_s_nombre = document.querySelector('#s_nombre_cliente');
const input_s_apellido = document.querySelector('#s_apellido_cliente');
const input_identificacion = document.querySelector('#n_identif_cliente');
const input_f_nacimiento = document.querySelector('#fecha_nac_cliente');
const input_edad = document.querySelector('#edad_cliente');
const input_provincia = document.querySelector('#provincia_cliente');
const input_canton = document.querySelector('#canton_cliente');
const input_genero = document.querySelector('#genero_cliente');
const input_distrito = document.querySelector('#distrito_cliente');
const input_direccion = document.querySelector('#direccion_cliente');
const input_url_avatar = document.querySelector('#imagen_preview');
const btn_registro = document.querySelector('#btn_registro');


const xbody = document.querySelector('#avatar_cliente');

const tbody = document.querySelector('.categoria_evento');
let lista_avatares;

let llenar_avatares = async() => {

    lista_avatares = await listar_avatares();
    xbody.innerHTML = '';

    let vacio = document.createElement('option');
    vacio.innerText = '-';
    xbody.appendChild(vacio);
    for (let i = 0; i < lista_avatares.length; i++) {
        if (lista_avatares[i]['estado'] != 'false') {
            let selecionar = document.createElement('option');


            selecionar.value = lista_avatares[i]['URL'];
            selecionar.innerText = lista_avatares[i]['nombre'];

            xbody.appendChild(selecionar);
        }
    }
    localStorage.setItem('nombre', input_p_nombre);
};

llenar_avatares();


//listar tipos de evento
let lista_tipo_de_evento;

let llenar_tabla = async() => {

    lista_tipo_de_evento = await listar_tipos_de_evento();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_tipo_de_evento.length; i++) {
        if (lista_tipo_de_evento[i]['estado'] == 'Habilitado') {


            let labe = document.createElement('label');
            let selecionar = document.createElement('input');

            selecionar.type = "checkbox";
            selecionar.name = lista_tipo_de_evento[i]['nombre'];
            selecionar.value = lista_tipo_de_evento[i]['nombre'];

            labe.for = lista_tipo_de_evento[i]['nombre'];
            labe.innerText = lista_tipo_de_evento[i]['nombre'];

            tbody.appendChild(labe);
            tbody.appendChild(selecionar);

        }
    };
};
llenar_tabla();
const contenedor_img = document.querySelector('#poner_avatar');

function myFunction() {

    var x = document.getElementById("avatar_cliente").value;
    document.querySelector('#imagen_preview').src = x;

};

// Validación de datos
let validar = () => {
    let error = false;

    if (input_p_nombre.value == '') {
        error = true;
        input_p_nombre.classList.add('error');
    } else {
        input_p_nombre.classList.remove('error');
    }

    if (input_p_apellido.value == '') {
        error = true;
        input_p_apellido.classList.add('error');
    } else {
        input_p_apellido.classList.remove('error');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error');
    } else {
        input_correo.classList.remove('error');
    }

    if (input_identificacion.value == '') {
        error = true;
        input_identificacion.classList.add('error');
    } else {
        input_identificacion.classList.remove('error');
    }

    if (input_f_nacimiento.value == '') {
        error = true;
        input_f_nacimiento.classList.add('error');
    } else {
        input_f_nacimiento.classList.remove('error');
    }

    if (input_provincia.value == '') {
        error = true;
        input_provincia.classList.add('error');
    } else {
        input_provincia.classList.remove('error');
    }

    if (input_canton.value == '') {
        error = true;
        input_canton.classList.add('error');
    } else {
        input_canton.classList.remove('error');
    }

    if (input_genero.value == '') {
        error = true;
        input_genero.classList.add('error');
    } else {
        input_genero.classList.remove('error');
    }

    if (input_distrito.value == '') {
        error = true;
        input_distrito.classList.add('error');
    } else {
        input_distrito.classList.remove('error');
    }

    if (input_direccion.value == '') {
        error = true;
        input_direccion.classList.add('error');
    } else {
        input_direccion.classList.remove('error');
    }
    if (input_url_avatar.src === 'img/default-avatar.png') {
        error = true;
        input_url_avatar.classList.add('error');
    } else {
        input_url_avatar.classList.remove('error');
    }

    return error;
};

// function para generar codigos
function codigoVer(length, chars) {
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

//Calcular edad
const calcular_edad = (fecha) => {

    let error_edad = false;
    let hoy = new Date();
    let cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate() + 1)) {
        edad--;

        if (edad < 18) {
            error_edad = true
        } else {
            error_edad = false
        }
    }
    return error_edad;
}

//años
const mostrar_anos = (fecha) => {
    var Q4A = "";
    var Bdate = document.getElementById('fecha_nac_cliente').value;
    var Bday = +new Date(Bdate);
    Q4A = ~~((Date.now() - Bday) / (31557600000));
    var edad_cliente = document.getElementById('edad_cliente');
    edad_cliente.innerHTML = Q4A;
    return Q4A
}



//Pupular dropdown de cantones
function popular_cantones(pprovincia, pcantones) {
    var pprovincia = document.getElementById(pprovincia);
    var canton = document.getElementById(pcantones);
    canton.innerHTML = "";
    //San José
    if (pprovincia.value == "San José") {
        var optionArray = ["-|-", "San José|San José", "Escazú|Escazú", "Desamparados|Desamparados",
            "Puriscal|Puriscal", "Tarrazú|Tarrazú", "Aserrí|Aserrí", "Mora|Mora",
            "Goicoechea|Goicoechea", "Santa Ana|Santa Ana", "Alajuelita|Alajuelita", "Vázquez de Coronado|Vázquez de Coronado",
            "Acosta|Acosta", "Tibás|Tibás", "Moravia|Moravia", "Montes de Oca|Montes de Oca",
            "Turrubares|Turrubares", "Dota|Dota", "Curridabat|Curridabat", "Pérez Zeledón|Pérez Zeledón", "León Cortés|León Cortés"
        ];
    }
    //Alajuela
    else if (pprovincia.value == "Alajuela") {
        var optionArray = ["-|-", "Alajuela|Alajuela", "San Ramón|San Ramón", "Grecia|Grecia",
            "San Mateo|San Mateo", "Atenas|Atenas", "Naranjo|Naranjo", "Palmares|Palmares",
            "Poás|Poás", "Orotina|Orotina", "San Carlos|San Carlos", "Zarcero|Zarcero",
            "Sarchí|Sarchí", "Upala|Upala", "Los Chiles|Los Chiles", "Guatuso|Guatuso",
            "Río Cuarto|Río Cuarto"
        ];
    }
    //Cartago
    else if (pprovincia.value == "Cartago") {
        var optionArray = ["-|-", "Cartago|Cartago", "Paraíso|Paraíso", "La Unión|La Unión",
            "Jiménez|Jiménez", "Turrialba|Turrialba", "Alvarado|Alvarado", "Oreamuno|Oreamuno",
            "El Guarco|El Guarco"
        ];
    }
    //Heredia
    else if (pprovincia.value == "Heredia") {
        var optionArray = ["-|-", "Heredia|Heredia", "Barva|Barva", "Santo Domingo|Santo Domingo",
            "Santa Bárbara|Santa Bárbara", "San Rafael|San Rafael", "San Isidro|San Isidro", "Belén|Belén",
            "Flores|Flores", "San Pablo|San Pablo", "Sarapiquí|Sarapiquí"
        ];
    }
    //Guanacaste
    else if (pprovincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Liberia|Liberia", "Nicoya|Nicoya", "Santa Cruz|Santa Cruz",
            "Bagaces|Bagaces", "Carrillo|Carrillo", "Cañas|Cañas", "Abangares|Abangares",
            "Tilarán|Tilarán", "Nandayure|Nandayure", "La Cruz|La Cruz", "Hojancha|Hojancha"
        ];
    }
    //Puntarenas
    else if (pprovincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Puntarenas|Puntarenas", "Esparza|Esparza", "Buenos Aires|Buenos Aires",
            "Montes de Oro|Montes de Oro", "Osa|Osa", "Quepos|Quepos", "Golfito|Golfito",
            "Coto Brus|Coto Brus", "Parrita|Parrita", "Corredores|Corredores", "Garabito|Garabito"
        ];
    }
    //Limón
    else if (pprovincia.value == "Limón") {
        var optionArray = ["-|-", "Limón|Limón", "Pococí|Pococí", "Siquirres|Siquirres",
            "Talamanca|Talamanca", "Matina|Matina", "Guácimo|Guácimo"
        ];
    }

    for (var option in optionArray) {
        var pair = optionArray[option].split("|")
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        canton.options.add(newOption);
    }
}

//Distritos
function popular_distritos(pprovincia, pcanton, pdistritos) {
    var pcanton = document.getElementById(pcanton);
    var distrito = document.getElementById(pdistritos);
    var provincia = document.getElementById(pprovincia);
    distrito.innerHTML = "";

    //Distritos de San José
    //san_jose
    if (pcanton.value == "San José" && provincia.value == "San José") {
        var optionArray = ["-|-", "Carmen|Carmen", "Merced|Merced", "Hospital|Hospital", "Catedral|Catedral",
            "Zapote|Zapote", "San Francisco de Dos Ríos|San Francisco de Dos Ríos", "La Uruca|La Uruca", "Mata Redonda|Mata Redonda",
            "Pavas|Pavas", "Hatillo|Hatillo", "San Sebastián|San Sebastián"
        ];
    }
    //Escazú
    else if (pcanton.value == "Escazú" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Miguel|San Miguel", "San Antonio|San Antonio", "San Rafael|San Rafael"];
    }
    //desamparados
    else if (pcanton.value == "Desamparados" && provincia.value == "San José") {
        var optionArray = ["-|-", "Desamparados|Desamparados", "San Miguel|San Miguel", "San Juan de Dios|San Juan de Dios",
            "San Rafael Arriba|San Rafael Arriba", "San Antonio|San Antonio", "Frailes|Frailes", "Patarrá|Patarrá",
            "San Cristóbal|San Cristóbal", "Rosario|Rosario", "Damas|Damas", "San Rafael Abajo|San Rafael Abajo",
            "Gravilias|Gravilias", "Los Guido|Los Guido"
        ];
    }
    //puriscal
    else if (pcanton.value == "Puriscal" && provincia.value == "San José") {
        var optionArray = ["-|-", "Santiago|Santiago", "Barbacoas|Barbacoas", "Grifo Alto|Grifo Alto",
            "San Rafael|San Rafael", "Candelarita|Candelarita", "Desamparaditos|Desamparaditos", "San Antonio|San Antonio",
            "Chires|Chires", "La Cangreja|La Cangreja"
        ];
    }
    //tarrazu
    else if (pcanton.value == "Tarrazú" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Marcos|San Marcos", "San Lorenzo|San Lorenzo", "San Carlos|San Carlos"];
    }
    //aserri
    else if (pcanton.value == "Aserrí" && provincia.value == "San José") {
        var optionArray = ["-|-", "Aserrí|Aserrí", "Tarbaca|Tarbaca", "Vuelta de Jorco|Vuelta de Jorco",
            "San Gabriel|San Gabriel", "Legua|Legua", "Monterrey|Monterrey", "Salitrillos|Salitrillos"
        ];
    }
    //mora
    else if (pcanton.value == "Mora" && provincia.value == "San José") {
        var optionArray = ["-|-", "Ciudad Colón|Ciudad Colón", "Guayabo|Guayabo", "Tabarcia|Tabarcia", "Piedras Negras|Piedras Negras",
            "Picagres|Picagres", "Jaris|Jaris", "Quitirrisí|Quitirrisí"
        ];
    }
    //goicoechea
    else if (pcanton.value == "Goicoechea" && provincia.value == "San José") {
        var optionArray = ["-|-", "Goicoechea|Goicoechea", "San Francisco|San Francisco", "Calle Blancos|Calle Blancos",
            "Mata de Plátano|Mata de Plátano", "Ipís|Ipís", "Rancho Redondo|Rancho Redondo", "Purral|Purral"
        ];
    }
    //santa_ana
    else if (pcanton.value == "Santa Ana" && provincia.value == "San José") {
        var optionArray = ["-|-", "Santa Ana|Santa Ana", "Salitral|Salitral",
            "Pozos|Pozos", "Uruca|Uruca", "Piedades|Piedades", "Brasil|Brasil"
        ];
    }
    //alajuelita
    else if (pcanton.value == "Alajuelita" && provincia.value == "San José") {
        var optionArray = ["-|-", "Alajuelita|Alajuelita", "San Josecito|San Josecito", "San Antonio|San Antonio",
            "concepcion|Concepción", "san_felipe|San Felipe"
        ];
    }
    //Vázquez de Coronado
    else if (pcanton.value == "Vázquez de Coronado" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Isidro|San Isidro", "San Rafael|San Rafael", "Dulce Nombre de Jesús|Dulce Nombre de Jesús",
            "Patalillo|Patalillo", "Cascajal|Cascajal"
        ];
    }
    //acosta
    else if (pcanton.value == "Acosta" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Ignacio|San Ignacio", "Guaitil|Guaitil", "Palmichal|Palmichal",
            "Cangrejal|Cangrejal", "Sabanillas|Sabanillas"
        ];
    }
    //tibas
    else if (pcanton.value == "Tibás" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Juan|San Juan", "Cinco Esquinas|Cinco Esquinas", "Anselmo llorente|Anselmo llorente",
            "León XII|León XIII", "Colima|Colima"
        ];
    }
    //moravia
    else if (pcanton.value == "Moravia" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Vicente|San Vicente", "San Jerónimo|San Jerónimo", "La Trinidad|La Trinidad"];
    }
    //montes_de_oca
    else if (pcanton.value == "Montes de Oca" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Pedro|San Pedro", "Sabanilla|Sabanilla", "Mercedes|Mercedes", "San Rafael|San Rafael"];
    }
    //turrubares
    else if (pcanton.value == "Turrubares" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Pablo|San Pablo", "San Pedro|San Pedro", "San Juan de Mata|San Juan de Mata",
            "San Luis|San Luis", "Carara|Carara"
        ];
    }
    //dota
    else if (pcanton.value == "Dota" && provincia.value == "San José") {
        var optionArray = ["-|-", "Santa María|Santa María", "Jardín|Jardín", "Copey|Copey"];
    }
    //curridabat
    else if (pcanton.value == "Curridabat" && provincia.value == "San José") {
        var optionArray = ["-|-", "Curridabat|Curridabat", "Granadilla|Granadilla", "Sánchez|Sánchez", "Tirrases|Tirrases"];
    }
    //perez_zeledon
    else if (pcanton.value == "Pérez Zeledón" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Isidro de El General|San Isidro de El General", "El General|El General",
            "Daniel Flores|Daniel Flores", "Rivas|Rivas", "San Pedro|San Pedro", "Platanares|Platanares",
            "Pejibaye|Pejibaye", "Cajón|Cajón", "Barú|Barú", "Río Nuevo|Río Nuevo", "Paramo|Paramo", "La Amistad|La Amistad"
        ];
    }
    //León Cortés
    else if (pcanton.value == "León Cortés" && provincia.value == "San José") {
        var optionArray = ["-|-", "San Pablo|San Pablo", "San Andrés|San Andrés", "Llano Bonito|Llano Bonito",
            "San Isidro|San Isidro", "Santa Cruz|Santa Cruz", "San Antonio|San Antonio"
        ];
    }
    //Distritos de Alajuela
    //Alajuela
    else if (pcanton.value == "Alajuela" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Alajuela|Alajuela", "San José|San José", "Carrizal|Carrizal",
            "San Antonio|San Antonio", "Guácima|Guácima", "San Isidro|San Isidro", "Sabanilla|Sabanilla",
            "San Rafael|San Rafael", "Río Segundo|Río Segundo", "Desamparados|Desamparados", "Turrúcares|Turrúcares",
            "Tambor|Tambor", "La Garita|La Garita", "Sarapiquí|Sarapiquí"
        ];
    }
    //San Ramón
    else if (pcanton.value == "San Ramón" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "San Ramón|San Ramón", "santiago|Santiago", "San Juan|San Juan", "Piedades Norte|Piedades Norte",
            "San Rafael|San Rafael", "San Isidro|San Isidro", "Ángeles|Ángeles", "Alfaro|Alfaro", "Volio|Volio",
            "Concepción|Concepción", "Zapotal|Zapotal", "Peñas Blancas|Peñas Blancas", "San Lorenzo|San Lorenzo"
        ];
    }
    //Grecia
    else if (pcanton.value == "Grecia" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Grecia|Grecia", "San Isidro|San Isidro", "San José|San José", "San Roque|San Roque",
            "Tacares|Tacares", "Puente de Piedra|Puente de Piedra", "Bolívar|Bolívar"

        ];
    }
    //San Mateo
    else if (pcanton.value == "San Mateo" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "San Mateo|San Mateo", "Desmonte|Desmonte", "Jesús María|Jesús María", "Labrador|Labrador"];
    }
    //Atenas
    else if (pcanton.value == "Atenas" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Atenas|Atenas", "Jesús|Jesús", "Mercedes|Mercedes", "San Isidro|San Isidro",
            "Concepción|Concepción", "San José|San José", "Santa Eulalia|Santa Eulalia", "Escobal|Escobal"
        ];
    }
    //Naranjo
    else if (pcanton.value == "Naranjo" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Naranjo|Naranjo", "San Miguel|San Miguel", "San José|San José", "Cirrí|Cirrí",
            "San Jerónimo|San Jerónimo", "San Juan|San Juan", "El Rosario|El Rosario", "Palmitos|Palmitos"
        ];
    }
    //Palmares
    else if (pcanton.value == "Palmares" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Palmares|Palmares", "Zaragoza|Zaragoza", "Buenos Aires|Buenos Aires", "Santiago|Santiago",
            "Candelaria|Candelaria", "Esquipulas|Esquipulas", "La Granja|La Granja"
        ];
    }
    //Poás
    else if (pcanton.value == "Poás" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "San Pedro|San Pedro", "San Juan|San Juan", "San Rafael|San Rafael", "Carrillos|Carrillos",
            "Sabana Redonda|Sabana Redonda"
        ];
    }
    //Orotina
    else if (pcanton.value == "Orotina" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Orotina|Orotina", "Mastate|Mastate", "Hacienda Vieja|Hacienda Vieja",
            "Coyolar|Coyolar", "La Ceiba|La Ceiba"
        ];
    }
    //San Carlos
    else if (pcanton.value == "San Carlos" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Quesada|Quesada", "Florencia|Florencia", "Buenavista|Buenavista",
            "Aguas Zarcas|Aguas Zarcas", "Venecia|Venecia", "Pital|Pital", "La Fortuna|La Fortuna",
            "La Tigra|La Tigra", "La Palmera|La Palmera", "Venado|Venado", "Cutris|Cutris", "Monterrey|Monterrey",
            "Pocosol|Pocosol"
        ];
    }
    //Zarcero
    else if (pcanton.value == "Zarcero" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Zarcero|Zarcero", "Laguna|Laguna", "Tapezco|Tapezco", "Guadalupe|Guadalupe",
            "Palmira|Palmira", "Zapote|Zapote", "Brisas|Brisas"
        ];
    }
    //Sarchí
    else if (pcanton.value == "Sarchí" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Sarchí Norte|Sarchí Norte", "Sarchí Sur|Sarchí Sur", "Toro Amarillo|Toro Amarillo",
            "San Pedro|San Pedro", "Rodríguez|Rodríguez"
        ];
    }
    //Upala
    else if (pcanton.value == "Upala" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Upala|Upala", "Aguas Claras|Aguas Claras", "San José|San José", "Bijagua|Bijagua",
            "Delicias|Delicias", "Dos Ríos|Dos Ríos", "Yolillal|Yolillal", "Canalete|Canalete"
        ];
    }
    //Los Chiles
    else if (pcanton.value == "Los Chiles" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Los Chiles|Los Chiles", "Caño Negro|Caño Negro", "El Amparo|El Amparo",
            "San Jorge|San Jorge",
        ];
    }
    //Guatuso
    else if (pcanton.value == "Guatuso" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "San Rafael|San Rafael", "Buenavista|Buenavista", "Cote|Cote", "Katira|Katira"];
    }
    //Río Cuarto
    else if (pcanton.value == "Río Cuarto" && provincia.value == "Alajuela") {
        var optionArray = ["-|-", "Río Cuarto|Río Cuarto", "Santa Isabel|Santa Isabel", "Santa Rita|Santa Rita"];
    }
    //Distritos de Heredia
    //Heredia
    else if (pcanton.value == "Heredia" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "Heredia|Heredia", "Mercedes|Mercedes", "San Francisco|San Francisco",
            "Ulloa|Ulloa", "Vara Blanca|Vara Blanca"
        ];
    }
    //Barva
    else if (pcanton.value == "Barva" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "San Pedro|San Pedro", "San Pablo|San Pablo", "San Roque|San Roque",
            "Santa Lucía|Santa Lucía", "San José de la Montaña|San José de la Montaña"
        ];
    }
    //Santo Domingo
    else if (pcanton.value == "Santo Domingo" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "Santo Domingo|Santo Domingo", "San Vicente|San Vicente", "San Miguel|San Miguel",
            "Paracito|Paracito", "Santo Tomás|Santo Tomás", "Santa Rosa|Santa Rosa", "Tures|Tures", "Pará|Pará"
        ];
    }
    //Santa Bárbara
    else if (pcanton.value == "Santa Bárbara" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "Santa Bárbara|Santa Bárbara", "San Pedro|San Pedro", "San Juan|San Juan",
            "Jesús|Jesús", "Santo Domingo|Santo Domingo", "Purabá|Purabá"
        ];
    }
    //San Rafael
    else if (pcanton.value == "San Rafael" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "San Rafael|San Rafael", "San Josecito|San Josecito", "Santiago|Santiago",
            "Ángeles|Ángeles", "Concepción|Concepción"
        ];
    }
    //San Isidro
    else if (pcanton.value == "San Isidro" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "San Isidro|San Isidro", "San José|San José", "Concepción|Concepción",
            "San Francisco|San Francisco"
        ];
    }
    //Belén
    else if (pcanton.value == "Belén" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "San Antonio|San Antonio", "La Ribera|La Ribera", "La Asunción|La Asunción"];
    }
    //Flores
    else if (pcanton.value == "Flores" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "San Joaquín|San Joaquín", "Barrantes|Barrantes", "Llorente|Llorente"];
    }
    //San Pablo
    else if (pcanton.value == "San Pablo" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "San Pablo|San Pablo", "Rincón de Sabanilla|Rincón de Sabanilla"];
    }
    //Sarapiquí
    else if (pcanton.value == "Sarapiquí" && provincia.value == "Heredia") {
        var optionArray = ["-|-", "Puerto Viejo|Puerto Viejo", "La Virgen|La Virgen", "Horquetas|Horquetas",
            "Llanuras del Gaspar|Llanuras del Gaspar", "Cureña|Cureña"
        ];
    }
    //Distritos de Cartago
    //Cartago
    else if (pcanton.value == "Cartago" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "Oriental|Oriental", "Occidental|Occidental", "Carmen|Carmen",
            "San Nicolás|San Nicolás", "Agua Caliente|Agua Caliente", "Guadalupe|Guadalupe",
            "Corralillo|Corralillo", "Tierra Blanca|Tierra Blanca", "Dulce Nombre|Dulce Nombre",
            "Llano Grande|Llano Grande", "Quebradilla|Quebradilla"
        ];
    }
    //Paraíso
    else if (pcanton.value == "Paraíso" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "Paraíso|Paraíso", "Santiago|Santiago", "Orosi|Orosi", "Cachí|Cachí",
            "Llanos de Santa Lucía|Llanos de Santa Lucía"
        ];
    }
    //La Unión
    else if (pcanton.value == "La Unión" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "Tres Ríos|Tres Ríos", "San Diego|San Diego", "San Juan|San Juan",
            "San Rafael|San Rafael", "Concepción|Concepción", "Dulce Nombre|Dulce Nombre", "San Ramón|San Ramón",
            "Río Azul|Río Azul"
        ];
    }
    //Jiménez
    else if (pcanton.value == "Jiménez" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "Juan Viñas|Juan Viñas", "Tucurrique|Tucurrique", "Pejibaye|Pejibaye"];
    }
    //Turrialba
    else if (pcanton.value == "Turrialba" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "Turrialba|Turrialba", "La Suiza|La Suiza", "Peralta|Peralta", "Santa Cruz|Santa Cruz",
            "Santa Teresita|Santa Teresita", "Pavones|Pavones", "Tuis|Tuis", "Tayutic|Tayutic", "Santa Rosa|Santa Rosa",
            "Tres Equis|Tres Equis", "La Isabel|La Isabel", "Chirripó|Chirripó"
        ];
    }
    //Alvarado
    else if (pcanton.value == "Alvarado" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "Pacayas|Pacayas", "Cervantes|Cervantes", "Capellades|Capellades"];
    }
    //Oreamuno
    else if (pcanton.value == "Oreamuno" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "San Rafael|San Rafael", "Cot|Cot", "Potrero Cerrado|Potrero Cerrado", "Cipreses|Cipreses",
            "Santa Rosa|Santa Rosa"
        ];
    }
    //El Guarco
    else if (pcanton.value == "El Guarco" && provincia.value == "Cartago") {
        var optionArray = ["-|-", "El Tejar|El Tejar", "San Isidro|San Isidro", "Tobosi|Tobosi", "Patio de Agua|Patio de Agua"];
    }
    //Guanacaste
    //Liberia
    else if (pcanton.value == "Liberia" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Liberia|Liberia", "Cañas Dulces|Cañas Dulces", "Mayorga|Mayorga",
            "Nacascolo|Nacascolo", "Curubandé|Curubandé",
        ];
    }
    //Nicoya
    else if (pcanton.value == "Nicoya" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Nicoya|Nicoya", "Mansión|Mansión", "San Antonio|San Antonio",
            "Quebrada Honda|Quebrada Honda", "Sámara|Sámara", "Nosara|Nosara", "Belén de Nosarita|Belén de Nosarita"
        ];
    }
    //Santa Cruz
    else if (pcanton.value == "Santa Cruz" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Santa Cruz|Santa Cruz", "Bolsón|Bolsón", "Veintisiete de Abril|Veintisiete de Abril",
            "Tempate|Tempate", "Cartagena|Cartagena", "Cuajiniquil|Cuajiniquil", "Diriá|Diriá",
            "Cabo Velas|Cabo Velas", "Tamarindo|Tamarindo"
        ];
    }
    //Bagaces
    else if (pcanton.value == "Bagaces" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Bagaces|Bagaces", "La Fortuna|La Fortuna", "Mogote|Mogote", "Río Naranjo|Río Naranjo"];
    }
    //Carrillo
    else if (pcanton.value == "Carrillo" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Filadelfia|Filadelfia", "Palmira|Palmira", "Sardinal|Sardinal", "Belén|Belén"];
    }
    //Cañas
    else if (pcanton.value == "Cañas" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Cañas|Cañas", "Palmira|Palmira", "San Miguel|San Miguel", "Bebedero|Bebedero",
            "Porozal|Porozal"
        ];
    }
    //Abangares
    else if (pcanton.value == "Abangares" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Las Juntas|Las Juntas", "Sierra|Sierra", "San Juan|San Juan", "Colorado|Colorado"];
    }
    //Tilarán
    else if (pcanton.value == "Tilarán" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Tilarán|Tilarán", "Quebrada Grande|Quebrada Grande", "Tronadora|Tronadora",
            "Santa Rosa|Santa Rosa", "Líbano|Líbano", "Tierras Morenas|Tierras Morenas", "Arenal|Arenal"
        ];
    }
    //Nandayure
    else if (pcanton.value == "Nandayure" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Carmona|Carmona", "Santa Rita|Santa Rita", "Zapotal|Zapotal", "San Pablo|San Pablo",
            "Porvenir|Porvenir", "Bejuco|Bejuco"
        ];
    }
    //La Cruz
    else if (pcanton.value == "La Cruz" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "La Cruz|La Cruz", "Santa Cecilia|Santa Cecilia", "La Garita|La Garita",
            "Santa Elena|Santa Elena"
        ];
    }
    //Hojancha
    else if (pcanton.value == "Hojancha" && provincia.value == "Guanacaste") {
        var optionArray = ["-|-", "Hojancha|Hojancha", "Monte Romo|Monte Romo", "Puerto Carrillo|Puerto Carrillo",
            "Huacas|Huacas", "Matambú|Matambú"
        ];
    }
    //Puntarenas
    //Puntarenas
    else if (pcanton.value == "Puntarenas" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Puntarenas|Puntarenas", "Pitahaya|Pitahaya", "Chomes|Chomes", "Lepanto|Lepanto",
            "Paquera|Paquera", "Manzanillo|Manzanillo", "Guacimal|Guacimal", "Barranca|Barranca", "Monteverde|Monteverde",
            "Isla del Coco|Isla del Coco", "Cóbano|Cóbano", "Chacarita|Chacarita", "Chira|Chira", "Acapulco|Acapulco",
            "El Roble|El Roble", "Arancibia|Arancibia"
        ];
    }
    //Esparza
    else if (pcanton.value == "Esparza" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Espíritu Santo|Espíritu Santo", "San Juan Grande|San Juan Grande", "Macacona|Macacona",
            "San Rafael|San Rafael", "San Jerónimo|San Jerónimo", "Caldera|Caldera"
        ];
    }
    //Buenos Aires
    else if (pcanton.value == "Buenos Aires" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Buenos Aires|Buenos Aires", "Volcán|Volcán", "Potrero Grande|Potrero Grande",
            "Boruca|Boruca", "Pilas|Pilas", "Colinas|Colinas", "Chánguena|Chánguena", "Biolley|Biolley", "Brunka|Brunka"
        ];
    }
    //Montes de Oro
    else if (pcanton.value == "Montes de Oro" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Miramar|Miramar", "La Unión|La Unión", "San Isidro|San Isidro"];
    }
    //Osa
    else if (pcanton.value == "Osa" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Ciudad Cortés|Ciudad Cortés", "Palmar|Palmar", "Sierpe|Sierpe", "Bahía Ballena|Bahía Ballena",
            "Piedras Blancas|Piedras Blancas", "Bahía Drake|Bahía Drake",
        ];
    }
    //Quepos
    else if (pcanton.value == "Quepos" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Quepos|Quepos", "Savegre|Savegre", "Naranjito|Naranjito"];
    }
    //Golfito
    else if (pcanton.value == "Golfito" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Golfito|Golfito", "Puerto Jiménez|Puerto Jiménez", "Guaycará|Guaycará", "Pavón|Pavón"];
    }
    //Coto Brus
    else if (pcanton.value == "Coto Brus" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "San Vito|San Vito", "Sabalito|Sabalito", "Aguabuena|Aguabuena", "Limoncito|Limoncito",
            "Pittier|Pittier", "Gutiérrez Brown|Gutiérrez Brown"
        ];
    }
    //Parrita
    else if (pcanton.value == "Parrita" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Parrita|Parrita"];
    }
    //Corredores
    else if (pcanton.value == "Corredores" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Corredores|Corredores", "La Cuesta|La Cuesta", "Paso Canoas|Paso Canoas", "Laurel|Laurel"];
    }
    //Garabito
    else if (pcanton.value == "Garabito" && provincia.value == "Puntarenas") {
        var optionArray = ["-|-", "Jacó|Jacó", "Tárcoles|Tárcoles"];
    }
    //Distritos de Limón
    //Limón
    else if (pcanton.value == "Limón" && provincia.value == "Limón") {
        var optionArray = ["-|-", "Limón|Limón", "Valle La Estrella|Valle La Estrella", "Río Blanco|Río Blanco", "Matama|Matama"];
    }
    //Pococí
    else if (pcanton.value == "Pococí" && provincia.value == "Limón") {
        var optionArray = ["-|-", "Guápiles|Guápiles", "Jiménez|Jiménez", "La Rita|La Rita", "Roxana|Roxana",
            "Cariari|Cariari", "Colorado|Colorado", "La Colonia|La Colonia"
        ];
    }
    //Siquirres
    else if (pcanton.value == "Siquirres" && provincia.value == "Limón") {
        var optionArray = ["-|-", "Siquirres|Siquirres", "Pacuarito|Pacuarito", "Florida|Florida",
            "Germania|Germania", "Cairo|Cairo", "Alegría|Alegría"
        ];
    }
    //Talamanca
    else if (pcanton.value == "Talamanca" && provincia.value == "Limón") {
        var optionArray = ["-|-", "Bratsi|Bratsi", "Sixaola|Sixaola", "Cahuita|Cahuita", "Telire|Telire"];
    }
    //Matina
    else if (pcanton.value == "Matina" && provincia.value == "Limón") {
        var optionArray = ["-|-", "Matina|Matina", "Batán|Batán", "Carrandi|Carrandi"];
    }
    //Guácimo
    else if (pcanton.value == "Guácimo" && provincia.value == "Limón") {
        var optionArray = ["-|-", "Guácimo|Guácimo", "Mercedes|Mercedes", "Pocora|Pocora", "Río Jiménez|Río Jiménez", "Duacarí|Duacarí"];
    }

    for (var option in optionArray) {
        var pair = optionArray[option].split("|")
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        distrito.options.add(newOption);
    }
}

// function obtener_datos(){}
let obtener_datos = async() => {
    let p_nombre = input_p_nombre.value;
    let s_nombre = input_s_nombre.value;
    let p_apellido = input_p_apellido.value;
    let s_apellido = input_s_apellido.value;
    let correo = input_correo.value;
    let identificacion = input_identificacion.value;
    let f_nacimiento = input_f_nacimiento.value;
    let edad_cliente = input_edad.value
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let genero = input_genero.value;
    let distrito = input_distrito.value;
    let direccion = input_direccion.value;
    let url_avatar = input_url_avatar.src;
    let codigov = codigoVer(3, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


    //si hay error, entra al if. Si no hay error entra al else
    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: '¡Atención!',
            animation: true,
            text: 'Hay datos que deben ser ingresados',
            confirmButtonText: 'Entendido',
            customClass: {
                popup: 'animated tada'
            }
        })
    } else if (calcular_edad(f_nacimiento)) {
        Swal.fire({
            type: 'warning',
            title: 'Verifique la edad',
            text: 'Debes de ser mayor de edad para crear una cuenta',
            confirmButtonText: 'Entendido',
        })

    } else {
        await registrar_cliente(p_nombre, s_nombre, p_apellido, s_apellido, correo, identificacion,
            f_nacimiento, edad_cliente, genero, provincia, canton, distrito, direccion, url_avatar, codigov);
        await registrar_usuario(correo, codigov);

        Swal.fire({
            type: 'success',
            title: '¡Usuario registrado!',
            animation: true,
            text: 'Te enviaremos un correo electrónico con tus datos de acceso',
            confirmButtonText: 'Entendido',
            customClass: {
                popup: 'animated tada'
            }
        }).then(function(res) {
            document.getElementById("formulario_principal").reset();
            window.location.href = 'ingresar_codigo.html';
        })


    }
};

//--------------------------- CLOUDINARY WIDGET --------------------------------------------------------
var myWidget1 = cloudinary.createUploadWidget({
    cloudName: 'pypsolutionscr',
    uploadPreset: 'psolutions'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        document.querySelector('#imagen_preview').src = result.info.secure_url;

    }

});

let botn = document.querySelector('#btn_agregar_imagen');

botn.addEventListener('click', function() {
    myWidget1.open();
}, false);

// Eventos asociados a los botones o inputs

btn_registro.addEventListener('click', obtener_datos);