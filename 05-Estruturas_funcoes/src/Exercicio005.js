import { preencherVetor } from "./utils/preencherVetor.js";

export function Exercicio005(){
    var jogadas = preencherVetor(1000, 1, 7);
    var qtdLados = [0, 0, 0, 0, 0, 0, 0];
    var porcentLados = [];

    for(var i = 0; i < jogadas.length; i++){
        //if(vetor[i] === 1)
            qtdLados[jogadas[i]]++;
    }

    for(var i = 1; i < qtdLados.length; i++){
        porcentLados[i] = 100 / jogadas.length * qtdLados[i];
    }
    for(var i = 1; i< porcentLados.length; i++){
        if(porcentLados[i] > 22){
            console.log("Dados viciado no numero: " + i + "!!!")
        }
    }
    console.table(porcentLados)
    
}