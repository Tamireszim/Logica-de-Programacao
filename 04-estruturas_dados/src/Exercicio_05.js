import leia from 'readline-sync'

var lista = [];
var lista2 = []

for(var i = 0; i < 5; i++){
    lista[i] = leia.questionInt("Informe um numero: ");
}


for(var i = lista.length-1; i >= 0; i--){   
    lista2.push(lista[i]);
}
console.log(lista)
lista = lista2
console.log(lista2)
//-------------------------------------------------------------

var inicio = 0;
var fim = lista.length - 1;
while(inicio <fim){
    var aux = lista[inicio];
    lista[inicio] = lista[fim];
    lista[fim] = aux;

    inicio++;
    fim--;
}