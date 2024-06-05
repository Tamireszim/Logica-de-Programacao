package exercicios.pkg29.pkg05.pkg24;

import java.util.Scanner;

public class Exercicio_05 {
    public static void main(String[] args) {
     Scanner leia = new Scanner(System.in);   
     
     System.out.println("Informe a temperatura em ºC: ");
     double celsius = leia.nextDouble();
     
     double farenhait = (1.8 * celsius) + 32;
     double kelvin = celsius + 273.15;
     
     System.out.println("Celcius: " + celsius + "ºC");
     System.out.println("Farenhait: " + farenhait + "ºF");
     System.out.println("Kelvin: " + kelvin + "ºK");
        
    }
}
