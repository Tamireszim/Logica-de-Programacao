package exercicios.pkg29.pkg05.pkg24;

import java.util.Scanner;

public class Exercicio_02 {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Digite a Largura");
        double largura = leia.nextDouble();
        System.out.println("Digite a Altura");
        double altura = leia.nextDouble();
        
        double result = largura * altura;
        
        System.out.println("Area é igual: " + result);
        
    }
}
