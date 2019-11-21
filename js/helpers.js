// function para validar cantidad de digitos en campo numeros
//Se debe pasar como parametro el numero a validar

const validar_numero = (numero) => {
    let error_num = false
    if (numero.length < 8) {
        error_num = true
    } else {
        error_num = false
    }

    if (input_numero.value.toLowerCase().includes('e')) {
        error_num = true
    }

    return error_num
}

//Se debe limpiar un formulario al finalizar el registro, agregar este codigo, solo se le debe cambiar idFormulario por el respectivo a resetear
document.getElementById("idFormulario").reset();


// function para generar codigos aleatorios, se le pasa dos variables, la cantidad que desean el codigo de verificacion y
// los caracteres que desean que sean escogidos aleatoriamente
//  Ejemplo, el 6 es el tamano del codigo 
// let su_variable = codigoVer(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

function codigoVer(length, chars) {
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}