import leia from "readline-sync";

var valorProduto = leia.questionFloat("Informe o valor do Produto")

var umReal = leia.questionInt("Qtd moedas R$1,00 ");
var cinquentaCent = leia.questionInt("Qtd moedas R$0,50 ");
var vinteCincoCent = leia.questionInt("Qtd moedas R$0,25 ");
var dezCent = leia.questionInt("Qtd moedas R$0,10 ");
var cincoCent = leia.questionInt("Qtd moedas R$0,05 ");

var total = (umReal * 1) + (cinquentaCent * 0.50) + (vinteCincoCent * 0.25) + (dezCent * 0.10) + (cincoCent * 0.05)
//----------------------------------------------------------------------------------------------
//ternario
//var mensagem = total>= valorProduto ? "Da para comprar o produto!" : "Não da para comprar!";
//console.log(mensagem);

console.log("Valor do produto: " + valorProduto);
console.log("Total no porquinho: " + total)

if(total >= valorProduto){
    console.log("Da para comprar o produto!")
}else{
    console.log("Não da para comprar!")
}