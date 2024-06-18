import leia from "readline-sync";

console.log("Informe o valor da sua doação");
console.log("1 - R$10,00");
console.log("2 - R$25,00");
console.log("3 - R$50,00");
console.log("4 - Outro valor");

var opcao = leia.question("Informe a opção");

switch(opcao){
    case "1":
        console.log("Você doou R$10,00! Muito Obrigada");
            break;
    case "2":
        console.log("Você doou R$25,00! Muito Obrigada");
            break;
    case "3":
         console.log("Você doou R$50,00! Muito Obrigada");
            break
    case "4":
        console.log("Você doou R$ + valor ! Muito Obrigada");
}