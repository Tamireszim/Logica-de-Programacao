import leia from "readline-sync";

var nota = leia.questionFloat("Informe nota final: ");

if(nota > 10.0 || nota < 0.0){
    console.log("Nota Invalida!")
}else if(nota >= 9.0) {
        console.log("A");
}else if (nota >= 8.0) {
        console.log("B");
}else if (nota >= 7.0){
    console.log("C");
}else if (nota >= 6.0) {
    console.log("D");
}else {
    console.log("F");
}