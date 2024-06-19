import leia from "readline-sync";

var lado1 = leia.questionInt("Informa o lado A: ");
var lado2 = leia.questionInt("Informa o lado B: ");
var lado3 = leia.questionInt("Informa o lado C: ");

if(A < (B + C) && B < (A + C) && C < (A + B)){
}else{
    console.log("Valores Invalidos");

if (lado1 === lado2 && lado2 === lado3){
    console.log("Equilatero");
}else if (lado1 === lado2 || lado1 === lado3 || lado === lado3){
    console.log("Isosceles");
}else {
    console.log("Escaleno");
}
}