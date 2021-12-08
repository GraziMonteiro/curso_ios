import java.util.Scanner;
    public class Exercicio2 {
            public static void main(String[] args) {
                Scanner entrada = new Scanner(System.in);
                int num = 1;
                int P = 0;
                int I = 0;
                int a;

                System.out.println("===== Imprima os números pares e impar =====");


                while (num <= 10){
                    System.out.println("Digite um número: ");
                    a = entrada.nextInt();
                    num ++;

                    if (a % 2 == 0)
                        P = P + 1;
                    else
                        I = I + 1;
                }
                System.out.println("Os números : " + P + "são pares");
                System.out.println("Os números : " + I + "são ímpares");
                entrada.close();
            }
    }
