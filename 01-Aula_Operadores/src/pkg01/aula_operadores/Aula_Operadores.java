package pkg01.aula_operadores;


public class Aula_Operadores {

    public static void main(String[] args) {
        //ARITMÉTICOS
        int a = 10 + 1;
        int b = a - 10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.5+1.7;
                
        
        
        a += 10;
        b -= 1;
        c *= 5;
        d /=1;
        
        System.out.println("O valor A: " + a);
        System.out.println("O valor B: " + b);
        System.out.println("O valor c: " + c);
        System.out.println("O valor d: " + d);
        System.out.println("O valor e: " + e);
        
        //---------------------------------------
        // LÓGICOS
        
        boolean ehMaior = 10 > 20;
        boolean ehMenor = 10 < 20;
        boolean ehMenorIgual = 10 <= 20;
        boolean ehMaiorIgual = 10 >= 20;
        boolean ehIgual = 10 != 20;
        boolean ehDiferente = 10 != 20;
        
        System.out.println("Maior: " + ehMaior);
        System.out.println("Menor: " + ehMenor);
        System.out.println("Menor ou Igual: " + ehMenorIgual);
        System.out.println("Maior ou Igual: " + ehMaiorIgual);
        System.out.println("Igual: " + ehIgual);
        System.out.println("Diferente: " + ehDiferente);
        
        System.out.println(10 > 20);
        //---------------------------------------
        // LÓGICOS
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = 10 > 9 || 5 > 1;
        boolean valor6 = ((10 > 9) && (5 > 1))||((120 < 1) && (31 > 3));
        
        boolean negacao = !true;
        boolean negacao2 = !valor6;
        
        
        
        
    }
    
}
