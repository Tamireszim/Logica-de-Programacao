import leia from 'readline-sync'
//num usuario inseriu X 5
var lista = [];
var lista2 = [];

//Preenche primeira lista
for(var i = 0; i < 10; i++){
    lista[i] = leia.questionInt("Informe um numero: ");
    //lista[i] = parseInt(Math.random() * 100)
}

//Manipular as lista
for(var i = 0; i < lista.length; i++){
    lista2[i] = lista[i] * 5;
    //lista2.push(lista[i] * 5);
}

console.log(lista2)