
/*
function adicionarFilme() {

    var lista = document.getElementById("listaFilmes")

    var filmeFavorito = document.getElementById("filme").value //o value é responsável por trazer o VALOR de dentro do elemento. o conteúdo. 


    lista.innerHTML = lista.innerHTML + "<img src =" + filmeFavorito + ">"



    document.getElementById("filme").value = ''



    //    document.write('<img src = ' + filmeFavorito + '>')
} */





var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];

function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value;
    var trailerFilmeFavorito = document.getElementById('trailer').value;


    if ((filmeFavorito.endsWith('jpg')) || (filmeFavorito.endsWith('jpeg'))) {

        document.getElementById('mensagemDeErro').innerHTML = '';
        listaFilmesFavoritos.push(trailerFilmeFavorito);

        limpaCampos();
        recarregarFilmes();

    } else {
        document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
        limpaCampos()

    }
}

function recarregarFilmes() {
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML = '';
    for (i = 0; i < listaFilmesFavoritos.length; i++) {
        elementoListaFilmes.innerHTML += `<a href = "${listaTrailersFilmesFavoritos[i]} ">
        <img src =" ${listaFilmesFavoritos[i]} "></a>`;
    }
}

function limpaCampos() {
    document.getElementById('filme').value = '';
    document.getElementById('trailer').value = '';
}
