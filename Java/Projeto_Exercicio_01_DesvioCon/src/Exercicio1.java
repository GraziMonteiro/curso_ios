import java.util.Scanner;
public class Exercicio1 {
    public static void main ( String [] args ) {
        System.out.println("Ler Dois numeros inteiros");

        Scanner entrada = new Scanner(System.in);
        int num1;
        int num2;

        System.out.println ("Digite um número: ");
         num1 = entrada.nextInt();
        System.out.println ("Digite outro número: ");
         num2 = entrada.nextInt();

        if (num2 == num1) {
            System.out.println("Os numeros digitados: " + num2 + " e " + num1 + " são iguais ");
        }
        else {
            System.out.println("Do maoir para o menor : " + num1);
            System.out.println(num2);
        }
        entrada.close();
    }
}
