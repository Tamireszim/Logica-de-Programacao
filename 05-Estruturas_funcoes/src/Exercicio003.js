import leia from 'readline-sync';

export function Exercicio003(){
    var vetor = [];
    for(var i = 0; i < 4; i++);{
        var numeroDigitado = leia.questionInt("Digite um numero par: ");
        while(numeroDigitado % 2 !== 0){
            numeroDigitado = leia.questionInt("Voce digitou um numero impar, digite um numero par: ")
    }
vetor[i] = numeroDigitado;
    }
    console.log(vetor);
}