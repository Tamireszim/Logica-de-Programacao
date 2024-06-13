import leia from "readline-sync";

var nomeFuncionario = leia.question("Informe o seu nome: \n");
var salario = leia.questionFloat("Informe o valor do Salario:  \n");
var qtdDependentes = leia.questionInt("Quantos dependentes: \n");

var qtsDepend0 = (salario * 1.20);
var qtsDepend1 = (salario * 1.50);
var qtsDepend2 = (salario * 1.70);
var qtsDepend3 = (salario * 1.10);
var qtsDepend4 = (salario * 1.15);


if(qtdDependentes = qtsDepend0){
    console.log("Funcionario: " + nomeFuncionario + "\nSalario Final: R$" + (salario + qtdDependentes));
}
else if(qtdDependentes = qtsDepend1){
    console.log("Funcionario: " + nomeFuncionario + "\nSalario Final: R$" + (salario + qtdDependentes));
}
else if(qtdDependentes = qtsDepend2){
    console.log("Funcionario: " + nomeFuncionario + "\nSalario Final: R$" + (salario + qtdDependentes));
}
else if(qtdDependentes = qtsDepend3){
    console.log("Funcionario: " + nomeFuncionario + "\nSalario Final: R$" + (salario + qtdDependentes));
}
else if(qtdDependentes = qtsDepend4){
    console.log("Funcionario: " + nomeFuncionario + "\nSalario Final: R$" + (salario + qtdDependentes));
}

//---------------------------------------------------------------------------------------------------------
//var total = 0;
//if(qtdDependentes === 0){
//  total = salario * 1.02;
//}else if(qtdDependentes === 1){
//  total = salario * 1.05;
//}else if(qtdDependentes === 2){
//  total = salario * 1.07;
//}else if(qtdDependentes === 3){
//  total = salario * 1.10;
//}else if(qtdDependentes === 4){
//  total = salario * 1.15;
//}