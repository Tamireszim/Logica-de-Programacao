import leia from "readline-sync"

var soma = 0;
var mult = 1;

for(var i = 0; i< 6; i++){
    var num = leia.questionInt("Digite um numero: ")

    if(num % 2 === 0){
        mult = mult * num;
        //mult *= num; (Mesmo que a linha de cima)
    }else{
        soma = soma + num;
    }
}
console.log("Soma: " + soma);
console.log("Mult: " + mult);