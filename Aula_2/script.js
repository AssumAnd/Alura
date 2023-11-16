//AULA 2 - Condicionais, Laços de repetição e Funções

//While = enquanto

//tech guide 
//if também é considerado comando de fluxo

var numeroSecreto = 581


while (chute != numeroSecreto) {
    var chute = prompt("Digite um número entre 1 e 1000")
    if (chute == numeroSecreto) {
        alert('Você acertou! Parabéns.')
    } else if (chute > numeroSecreto) {
        alert('Errou. O número secreto é menor')
    } else if (chute < numeroSecreto) {
        alert('Errou. O número secreto é maior')
    }

}


/*else {
    alert('Você errou. Tente novamente')
} */