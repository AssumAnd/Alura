//AULA 2 - Condicionais, Laços de repetição e Funções

//While = enquanto

//tech guide 
//if também é considerado controle de fluxo

//oInt de parseInt significa INTEIRO. Em caso de 865,99 o parseInt busca somente o 865


function advinha() {

    var numeroSecreto = parseInt(Math.random() * 1001)
    var numeroSecreto = 1002
    while (chute != numeroSecreto) {
        contador == ++contador
        if (contador > 10) {
            alert('Limite excedido. Tente novamente')
            break
        }
        var chute = prompt("Digite um número entre 1 e 1000")

        if (chute == numeroSecreto) {
            alert('Você acertou! Parabéns. Você precisou de ' + contador + " chances.")
            if (contador < 3) {
                alert("GÊNIO DA BOLA, O PELÉ DOS CHUTES.")
            }
        } else if (chute > numeroSecreto) {
            alert('Errou. O número secreto é menor que ' + chute)
        } else if (chute < numeroSecreto) {
            alert('Errou. O número secreto é maior que ' + chute)
        }
    }
}




/*else {
    alert('Você errou. Tente novamente')
} */