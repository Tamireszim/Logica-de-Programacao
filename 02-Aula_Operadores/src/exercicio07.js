import leia from "readline-sync";

var salario = leia.questionFloat("Informe o valor do Salario:  \n");
var credito = leia.questionFloat("Valor do credito: \n");
var numeroPrestacao = leia.questionInt("Em quantas parcelas: \n");

//Para formatar os numeros(R$)
//var formatador = new Intl.NumberFormat('pt-BR', {
//    style: "currency",
//    currency: "BRL" //(Nomenclatura necessaria)
//})

var valor = (credito/numeroPrestacao);
var parcPermitida = (salario * 0.30)
    console.log("Parcela permitida é de: " + parcPermitida)
if(valor >= parcPermitida){
    console.log("Valor não permitido!")
}else{
    console.log("Valor Permitido!")
}



