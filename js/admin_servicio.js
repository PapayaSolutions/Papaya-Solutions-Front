let listar_admin = async() => {
    let lista_admin;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-admin',
            responseType: 'json'
        })
        .then(function(res) {
            lista_admin = res.data.admin;

        })
        .catch(function(error) {
            console.log(error);
        });
    return lista_admin;
}