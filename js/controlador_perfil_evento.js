'use strict';

const nombre = document.querySelector('.nombre_evento');
const recinto = document.querySelector('.recinto_evento');
const fecha = document.querySelector('.fecha_evento');
const hora = document.querySelector('.hora_evento');
const direccion = document.querySelector('.direccion_evento');
const precio = document.querySelector('.precio_evento');
const categoria = document.querySelector('.categoria_evento');
const descripcion = document.querySelector('.descripcion_evento');
const estado;
const organizador;

let datos_evento;

let llenar_perfil = async() => {
    datos_evento = await listar_evento(); /*en servicios del evento*/

}

llenar_perfil();

/*evento_id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    dia: { type: Date, required: true, unique: false },
    hora: { type: Date, required: true, unique: false },
    hora2: { type: Date, required: true, unique: false },
    recinto: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false },
    precio: { type: Number, required: true, unique: false },
    categoria: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false },
    organizador: { type: String, required: true, unique: false }*/