'use strict';

let registrar_bitacora = async(tipo, descripcion, fecha, hora, rol) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_bitacora',
            responseType: 'json',

            data: {
                tipo,
                descripcion,
                fecha,
                hora,
                rol
            }
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
};

let listar_bitacoras = async() => {
    let lista_bitacora;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_bitacora',

            responseType: 'json',

        }).then(function(res) {
            lista_bitacora = res.data.bitacoras;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_bitacora;
};

let crear_bitacora = async(tipo, descripcion) => {
    var date = new Date();
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var dayName = dias[date.getDay()];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var mesName = meses[date.getMonth()];

    let today = String(dayName + '  ' + date.getDate() + ' de ' + mesName + ' del ' + date.getFullYear());

    let curHour = date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
        curMinute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        curSeconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
        curMeridiem = date.getHours() > 12 ? " PM" : " AM";
    var ahora = String(curHour + ":" + curMinute + "." + curSeconds + curMeridiem);
    console.log(today, ahora);
    let rol = sessionStorage.getItem('tipo_usuario');
    await registrar_bitacora(tipo, descripcion, today, ahora, rol);
}