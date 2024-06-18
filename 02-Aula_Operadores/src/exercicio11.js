import leia from "readline-sync";

var timeA = leia.questionInt("Informe qtd gols time A");
var timeB = leia.questionInt("Informe qtd gols time B");


//var diferenca = timeA - timeB;
//if(timeA > timeB){
//    var diferenca = timeA - timeB;
//}else (timeA < timeB){
//    var diferenca = timeB - timeB;
//}

var diferenca = Math.abs(timeA - timeB);

switch(diferenca){
    case 0:
        console.log("Empate")
            break;
    case 1:
    case 2:
    case 3:
        console.log("jogo Normal");
            break;
    default:
        console.log("Goleada")
}