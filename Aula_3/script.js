//Estruturas de dados criando catálogo de filmes - Arrays 

//ao criar o for, é recomendadocriar uma variável para ser um encremento


var listaFilmes = [
    "https://uauposters.com.br/media/catalog/product/5/1/510520201013-uau-posters-filmes-o-rei-leao-the-lion-king.jpg",
    //Uma vírgula utilizada dentro de um array serve como um separador de 

    'https://static.displate.com/857x1200/displate/2020-02-10/83e4f2c5def20f47a980a60f69626c0c_778c5608c1ef0ddd8177c89f8fc87bdb.jpg',

    'https://www.movieposters.com/cdn/shop/products/teenage_mutant_ninja_turtles_mutant_mayhem_grande.jpg',

    'https://a-static.mlcdn.com.br/470x352/poster-cartaz-avatar-2-o-caminho-da-agua-g-pop-arte-poster/poparteskins2/15983151165/d9c52d7da187f33b6205821c1412e5ef.jpeg',
    "https://img.elo7.com.br/product/zoom/2534209/big-poster-gamer-devil-may-cry-5-lo001-tamanho-90x60-cm-poster-gamer.jpg",
    'https://i.pinimg.com/474x/10/65/6a/10656ab9fabfc9130c2506c75515009c.jpg'
];



//Desafios:
//1 -  transformar o for em while. O laço de repetição mas ele so é ativo perante a uma condição




/*

listaFilmes[0] =
    "https://uauposters.com.br/media/catalog/product/5/1/510520201013-uau-posters-filmes-o-rei-leao-the-lion-king.jpg";
listaFilmes[1] =
    'https://static.displate.com/857x1200/displate/2020-02-10/83e4f2c5def20f47a980a60f69626c0c_778c5608c1ef0ddd8177c89f8fc87bdb.jpg';
listaFilmes[2] =
    'https://www.movieposters.com/cdn/shop/products/teenage_mutant_ninja_turtles_mutant_mayhem_grande.jpg'

*/

//    explicação: var i = 0 (criamos uma variável e demos o valor de 0 pra ela). i < 3 (informamos uma condição de enquanto o i for menor que três ele irá acionar o for.) i = i + 1 (E a cada vez que o i for lido ele irá atribuir mais um índice, indo ao 1, 2, 3, 4 e por aí vai)

//explicação:  document.write('<img src=' + listaFilmes[i] (o "i" é atribuído como índice, decladado no início do laço for. Serve apenas para uma base de contagem, pois o array foi declado acima com a listagem dos filmes) + '>')
for (var i = 0; i < listaFilmes.length; i = i + 1) {
    document.write('<img src=' + listaFilmes[i] + '>')
}
//o for constrói esse laço de repetição

