import leia from "readline-sync"

// var n1 = leia.questionInt("Informe a nota:")
// var n2 = leia.questionInt("Informe a nota:")
// var n3 = leia.questionInt("Informe a nota:")
// var n4 = leia.questionInt("Informe a nota:")
// var n5 = leia.questionInt("Informe a nota:")
// var n6 = leia.questionInt("Informe a nota:")

// var maior = n1;
// var menor = n1;
// if(n2 > maior){maior = n2;}
// if(n3 > maior){maior = n3;}
// if(n4 > maior){maior = n4;}
// if(n5 > maior){maior = n5;}
// if(n6 > maior){maior = n6;}

// if(n2 < menor){menor = n2;}
// if(n3 < menor){menor = n3;}
// if(n4 < menor){menor = n4;}
// if(n5 < menor){menor = n5;}
// if(n6 < menor){menor = n6;}

// var soma = n1 + n2 + n3 + n4 + n5 + n6;
// soma -= maior + menor;

// var media = soma/4
//----------------------------------------------------------------------------------------------------
// var notas = [];
// for(var i = 0; i < 6; i++){
//     notas.push(leia.questionInt(`Digite a ${i + 1}º nota`));
// }

// var maior = Math.max(...notas);
// var menor = Math.min(...notas);

// var soma = 0;
// for (var i = 0; i < 6; i++){
//     soma += notas [i];
// }
// soma = soma - (maior + menor);
// var media = soma/4

// console.log(`Media ${media}`);

//----------------------------------------------------------------------------------------------------
var notas = [];
for(var i = 0; i < 6; i++){
    notas.push(leia.questionInt(`Digite a ${i + 1}º nota`));
}

var soma = 0;
for (var i = 0; i < 6; i++){
    soma += notas [i];
}
soma = soma - (maior + menor);
var media = soma/4

console.log(`Media ${media}`);