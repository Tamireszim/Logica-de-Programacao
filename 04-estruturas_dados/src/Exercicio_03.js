import leia from 'readline-sync'

var lista = [];
var lista2 = []

for(var i = 0; i < 10; i++){
    lista[i] = leia.questionInt("Informe um numero: ");
}
for(var i = 0; i < 10; i++){   
    if (lista2 = lista[i] % 2 === 0)

        console.log(lista[i]);

}
//---------------------------------------------------------------------------
var lista = []
for(var i = 0; i < 5; i++){
    lista.push(parseInt(Math.random() * 100));
}

for(var i = 0; i <lista.length; i++){
    if(lista[i] % 2 === 0){
        pares.push(lista[i]);
    }
}