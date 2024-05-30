package exercicios.pkg29.pkg05.pkg24;

import java.util.Scanner;

public class Exercicios_03 {
     public static void main(String[] args) {
         Scanner leia = new Scanner(System.in);
         
         System.out.println("Quantos anos");
         int anos = leia.nextInt();
         System.out.println("Quantos meses");
         int meses = leia.nextInt();
         System.out.println("Quantos dias");
         int dias = leia.nextInt();
         
         int result = anos * 365;
         int result2 = meses * 30;
         
         System.out.println("Idade em dias: " + (result + result2 + dias));
                 
               
         
         
     }
}
