import leia from 'readline-sync'

var lista = [];
var maior = 0

for(var i = 0; i < 5; i++){
    lista[i] = leia.questionInt("Informe um numero: ");
}
for(var i = 0; i < 5; i++){   
    if (lista[i])
    

        console.log(lista[i]);

}
// os que forem maiores ou igual a 10
// var lista = []
// for(var i = 0; i < 5; i++){
//     lista.push(parseInt(Math.random() * 100));
// }

// for(var i = 0; i <lista.length; i++){
//     if(lista[i] % 2 === 0){
//         pares.push(lista[i]);
//     }
// }