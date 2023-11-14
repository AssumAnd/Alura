/*Aula 1*/

//Síntaxe é a forma em que o computador compreende o código

//alert('Olá mundo!')

//var valorEmDolar = 30;

//alert(valorEmDolar); - Quando informado as aspas simples ou duplas, o conteúdo da variável se transforma em STRING.
function dolar(){ 
var valorEmDolar = prompt("Quantos reais você tem? ");
var cotacaoDoDolar = 5.32; //a vírgula é para separar os parâmetros

var resultado = valorEmDolar * cotacaoDoDolar;
alert("O seu dinheiro em dólar é: U$" + resultado.toFixed(2));
}

//toFixed é responsável para LIMITAR um número em até quantas casas decimais ele devia resultar



/*Aula 1*/