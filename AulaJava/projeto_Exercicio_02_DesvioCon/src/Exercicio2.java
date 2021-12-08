import java.util.Scanner; // Import necessário para utilizar a classe Scanner
        public class Exercicio2 {
            public static void main ( String [] args ) {

                System.out.println("======= Ler dois números Flutuante ========");
                Scanner entrada = new Scanner(System.in);
                System.out.println("Digite um número:");
                float num1 = entrada.nextFloat(); // Lê a opção digitada
                System.out.println("Digite outro número:");
                float num2 = entrada.nextFloat(); // Lê a opção digitada

                if (num1 > num2) {
                    System.out.println(" Em ordem decrescente : " + num2 + " e " + num1);
                }
                else{
                    System.out.println("Em ordem decrescente : " + num1 + " e " + num2);
                }
                entrada.close();


            }
        }
