import leia from "readline-sync"

var alturaDela = 1.50;
var alturaDele = 1.40;
var tempo = 0;

while(alturaDela >= alturaDele){
   
    alturaDela += 0.02;
    alturaDele += 0.03;
    tempo ++;

}
console.log("valentina: " + alturaDela.toFixed(2));
console.log("João: " + alturaDele.toFixed(2));
console.log("João irá passar a altura de Valentina em: " + tempo + " anos ");