import leia from "readline-sync"
//while(condition){
//
//}
//------------------------------------
//do{
//
//}while (condition) {
//    
//}
//-----------------------------------------
//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    
//}
var estaCarregando = true;
var porcentagem = 0;

while (estaCarregando) {
    console.log(porcentagem + "% CARREGANDO...");
    
if(porcentagem < 100){
    porcentagem += 5;
}else {
    estaCarregando = false
}
}

