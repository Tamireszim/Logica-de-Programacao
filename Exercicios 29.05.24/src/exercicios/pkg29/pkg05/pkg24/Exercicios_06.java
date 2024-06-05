package exercicios.pkg29.pkg05.pkg24;

import java.util.Scanner;

public class Exercicios_06 {
     public static void main(String[] args) {
         int A = 10;
         int B = 20;
         
         Scanner leia = new Scanner(System.in);
         
         
         System.out.println("Digite A ou B");
            int aux = A;
            A = B;
            B = aux;
                 
         
         
         System.out.println("Valor de A: " + A);
         System.out.println("Valor de B: " + B);
         
     }
    
}
