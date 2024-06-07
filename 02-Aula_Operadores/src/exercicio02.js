import leia from "readline-sync"
{
var numero = leia.questionInt("Digite Número: " );
var resto = numero % 2;

if (resto == 0) {
    console.log(numero + " Número Par")
}
else{
    console.log(numero + " Número Impar")
}

}