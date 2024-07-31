import leia from "readline-sync"

// var a = leia.questionInt("Informe o primeiro número: ");
// var b = leia.questionInt("Informe o segundo número: ");
// var c = leia.questionInt("Informe o terceiro número: ");
//==================================================================================================
// if(a < b && b < c){
//     console.log(a, b, c)
// } else if(a < c && c < b){
//     console.log(a, c, b)
// }else if(b < a && a < c){
//     console.log(b, a, c)
// }else if(b < c && c < a){
//     console.log(b, c, a)
// }else if(c < a && a < b){
//     console.log(c, a, b)
// }else{
//     console.log(c, b, a)
// }
//===================================================================================================
// var a = leia.questionInt("Informe o primeiro número: ");
// var b = leia.questionInt("Informe o segundo número: ");
// var c = leia.questionInt("Informe o terceiro número: ");
// var aux;
// if(a > b){
//     aux = a;
//     a = b;
//     b = aux;
// }
// if(a > c){
//     aux = a;
//     a = c;
//     c = aux;
// }
// if(b > c){
//     aux = b;
//     b = c;
//     c = aux;
// }
//====================================================================================================
var numero = [];
for (var i = 0; i < 3; i++){
    numero[i] = leia.questionInt("Informe o numero " + (i + 1) + ":");
}

var numeroOrdenado = numero.sort();

console.log((numeroOrdenado).sort)