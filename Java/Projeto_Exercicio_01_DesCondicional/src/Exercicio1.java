import java.util.Scanner;
    public class Exercicio1 {
        public static void main ( String [] args ) {
            System.out.println("Ler Dois numeros inteiros");

            Scanner entrada = new Scanner(System.in);
            System.out.println ("Digite o primeiro número: ");
            int num1 = entrada.nextInt();
            System.out.println ("Digite o segundo número: ");
            int num2 = entrada.nextInt();

            if (num1 > num2) {
                System.out.println("Os numeros digitados: " + num2 + " e " + num1);
            }
            if (num2 > num1) {
                System.out.println("Os numeros digitados: " + num1 + " e " + num2);
            }
            entrada.close();
        }
    }


