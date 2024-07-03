import leia from "readline-sync"

// diferença entre for e while

var num = leia.questionInt("DIGITE UM NUMERO: ")
var mult = 1

while (mult <= 10) {
    console.log(num + " x " + mult + " = " + mult * num)
    mult++
}

var nume = leia.questionInt("DIGITE UM NUMERO: ")

for(var i = 1; i <= 10; i++ ){
console.log(nume + " x " + i + " = " + nume * i )
}
//---------------------------------------------------------------------------------
//DO..WHILE

var j = 0;
do{
    console.log(j);
    j++
}while(j < 0);