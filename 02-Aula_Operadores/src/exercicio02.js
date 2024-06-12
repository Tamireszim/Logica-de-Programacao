import leia from "readline-sync";


var numero = leia.questionInt("Digite Número: " );

if (numero % 2 === 0) {
    console.log(numero + " Número Par!")
}
else{
    console.log(numero + " Número Impar!")
}

