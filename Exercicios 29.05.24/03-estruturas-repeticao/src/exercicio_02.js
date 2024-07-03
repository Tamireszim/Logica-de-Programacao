import leia from "readline-sync"

var inicio = 0
var numero = leia.questionInt("Digite um numero: ");

while(inicio <= numero){
    console.log(numero);
    numero--
}