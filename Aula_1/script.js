/*Aula 1*/

//Síntaxe é a forma em que o computador compreende o código

//alert('Olá mundo!')

//var valorEmDolar = 30;

//alert(valorEmDolar); - Quando informado as aspas simples ou duplas, o conteúdo da variável se transforma em STRING.
function dolar() {
    var valorEmDolar = prompt("Quantos reais você tem? ");
    var cotacaoDoDolar = 5.32; //a vírgula é para separar os parâmetros

    var resultado = valorEmDolar / cotacaoDoDolar;
    alert("O seu dinheiro em dólar é: U$" + resultado.toFixed(2)); //toFixed é responsável para LIMITAR um número em até quantas casas decimais ele devia resultar
}


//Desafios:

function bitcoin() {
    var valoremBit = prompt("Quantos bitcoins você tem? ");
    var cotacaoDoBitcoin = 176521.48;
    var resultado = valoremBit * cotacaoDoBitcoin;
    var resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    alert("Seu dinheiro em real é: " + resultadoFormatado);
}

function nomeUsuario() {
    var nomedeUsuario = prompt("Qual o seu nome?")
    var valorEmDolar = prompt('Quantos dólares você tem? ')
    var cotacaoParaReal = 5.32
    var resultado = (valorEmDolar * cotacaoParaReal).toFixed(2)
    alert("Olá " + nomedeUsuario + ". Seu dinheiro em real é: R$" + resultado)
}

//Math.round(algum número) é utilizado para arrendondamento de números com casas decimais. Por exemplo: Math.round(176521.48). O resultado seria : 176521 (pois soma apenas a partir de .50)
/*Aula 1*/
function Interestelar() {

    var anoluz = prompt("Quantos anos Luz você gostaria de calcular em metros? ")

    var anoLuzBase = 9.461e+15

    var resultado = (anoluz * anoLuzBase)

    alert("A quantidade de metros é " + resultado)

    document.body.style.backgroundImage = "url(https://img.freepik.com/free-photo/galaxy-glowing-starfield-illuminates-dark-night-sky-generated-by-ai_188544-15600.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais)";
}