import leia from "readline-sync";

var nomeC1 = leia.question("Digite o nome \n");
var valorC1 = leia.questionFloat("Digite o valor \n");

var nomeC2 = leia.question("Digite o nome \n");
var valorC2 = leia.questionFloat("Digite o valor \n");

var total = valorC1 + valorC2;
    console.log("Valor Total: " + total);

var media = total / 2;
    console.log("valor Medio: " + media);
//Operador ternario
//var valor = (valorC1 > 20) ? nomeC1 + "\n":"";
//clientes += (valorC2 >20) ? nomeC2 : "";
//console.log(clientes);

if(valorC1 > 20){
    console.log(nomeC1);
}
if(valorC2 > 20){
    console.log(nomeC2)

}