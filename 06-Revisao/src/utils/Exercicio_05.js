import leia from "readline-sync"

var palavra = leia.question("Digite palavra ou texto: ");
var palavraInvertida = [];

for(var i = palavra.legth - 1; i >= 0; i--){
    //palavraInvertida.push(palavra[i])
    paçavraInvertida = palavraInvertida + palavra[i]
}

if(palavra === palavraInvertida) {
    console.log("É Palindromo")
}else {
    console.log("Não é palindromo")
}



// Questão 02
// Escreva um algoritmo para verificar se palavra é um palíndromo. 
// Uma palavra palíndromo é uma palavra que é igual, lendo ela de trás para frente. 
// Novamente, lembrando que uma string é um vetor de caracteres.
// Opcional, você pode criar uma lógica para verificar se um texto é palíndromo também. Para isso, você deve ignorar espaços. 
// Segue abaixo, uma forma de remover espaços com JavaScript.