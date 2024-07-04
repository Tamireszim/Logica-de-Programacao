import leia from 'readline-sync'

var lista = [];
var soma = 0;

for(var i = 0; i < 5; i++){
    lista[i] = leia.questionInt("Informe um numero: ");
    soma = soma + lista[i]
}

console.log(soma);

