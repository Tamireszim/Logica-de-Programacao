import leia from "readline-sync"

var texto = leia.question("Informe um texto/palavra: ")
texto = texto.toUpperCase();//para maiusculo
//texto.toLowerCase(); - para minusculo
var contadorVogais = 0;

for(var i = 0; i < texto.length; i++){
    if(texto[i] === 'A' || texto[i] === 'E' || texto[i] === 'I' || texto[i] === 'O' || texto[i] === 'U'){
        contadorVogais++;
    }
}
console.log(`A palavra/texto tem ${contadorVogais} vogais`)

// Questão 01
// Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas vogais esse texto ou palavra tem. 
// Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.