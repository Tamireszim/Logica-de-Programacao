import leia from "readline-sync"

var num = leia.questionInt("Digite um número: ");

function fibonacci(num){
    var a = 1, b = 0, temp;
    temp = a;
    a = a + b;
    b = temp;
    num--;
}
return b;