package exercicios.pkg29.pkg05.pkg24;

import java.util.Scanner;

public class Exercicio_04 {
    public static void main(String[] args) {
        
        Scanner leia = new Scanner(System.in);
            System.out.println("Total de eleitores");
              //int eleitores = leia.nextInt();
              double eleitores = leia.nextDouble();
              
            System.out.println("Quantos votos em branco");
                double branco = leia.nextDouble();
            System.out.println("Quantos votos nulo");
                double nulo = leia.nextDouble();
            System.out.println("Quantos votos válidos");
                double valido = leia.nextDouble();
          
            
               double brancosPercentual = (branco / eleitores) * 100;
               double nuloPercentual = (nulo / eleitores) * 100;
               double validosPercentual = (valido / eleitores) * 100;
               
               //double brancosPercentual = (branco * 100) / eleitores;
               //double nuloPercentual = (nulo * 100) / eleitores;
               //double validosPercentual = (valido * 100) / eleitores;
               
               
            System.out.println("Voto em Branco: " + brancosPercentual + "%");
            System.out.println("Voto Nulo: " + nuloPercentual + "%");
            System.out.println("Votos Válido: " + validosPercentual + "%");
            
         
              
     
    }
}
