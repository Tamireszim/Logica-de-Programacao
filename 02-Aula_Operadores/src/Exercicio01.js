import leia from "readline-sync"
{

var senha = leia.questionInt("Digite Senha: ");

if (senha != 1234){
    console.log("Acesso Negado")
}
if (senha == 1234){
    console.log("Acesso Permitido")
}
}


//____________________________________________________________________
//import leia from "readline-sync"
//{

//var senha = leia.question("Digite Senha: ");

//if (senha != '1234'){
    //console.log("Acesso Negado")
//}
//if (senha == 1234){
    //console.log("Acesso Permitido")
//}
//}


//_____________________________________________________________________________
//switch(senha){
//    case "1234":
//       console.log("Permitir acesso!!")
//        break;
//    default:
//        console.log("Acesso Negado");

//}