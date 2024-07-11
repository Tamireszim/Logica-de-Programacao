import leia from 'readline-sync'
import { Exercicio001 } from './Exercicio001.js';
import { Exercicio002 } from './Exercicio002.js';
import { Exercicio003 } from './Exercicio003.js';
import { Exercicio004 } from './Exercicio004.js';
import { Exercicio005 } from './Exercicio005.js';

var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02", "Exercicio 03", "Exercicio 04" , "Exercicio 05"]) + 1;

switch(opcao){
    case 1: 
        Exercicio001();
        break;
    case 2: 
        Exercicio002();
        break;
    case 3: 
        Exercicio003();
        break;
    case 4: 
        Exercicio004();
        break;
    case 5: 
        Exercicio005();
        break;
}