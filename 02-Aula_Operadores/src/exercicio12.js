import leia from "readline-sync";

var idade = leia.questionInt("Informe sua idade");
if(idade < 18){
    var permissao = leia.question("Seus pais permitiram a viagem\n 1 - Sim\n 2 - Não");
    if (permissao === "1"){
            var nome = leia.question("Informe o seu nome: ");
            console.log("Você pode viajar tranquilo " + nome);
    }else if(permissao === "2"){
            console.log("Não tem permissao para viajar");
    }else {
        console.log("Opção invalida");
    }
}else{
    var nome = leia.question("Informe seu nome: ");
console.log("Você pode viajar tranquilo " + nome)
}