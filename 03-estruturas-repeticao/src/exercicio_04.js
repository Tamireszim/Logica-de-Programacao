import leia from "readline-sync"

//var numero = leia.questionInt("Digite 15 numeros: ");


for(var i = 0; i < 15; i++){
 var num = leia.questionInt("Digite um numero " + (i+1)+ ": ");
    if(i===0);
    menor = num;
    maior=num;

    
 if(num < menor){
    menor = num;
 }
if(num < maior){
    maior = num;
}
}
