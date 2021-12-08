import java.util.Scanner; // Import necessário para utilizar a classe
        public class Exercicio8 {
            public static void main (String [] args) {
                Scanner entrada = new Scanner(System.in);

                System.out.println("Digite o primeiro número: ");
                int num1 = entrada.nextInt();
                System.out.println("Digite o segundo número: ");
                int num2 = entrada.nextInt();
                System.out.println("Digite o terceiro número: ");
                int num3 = entrada.nextInt();

                    if(num1 == num2 || num1 == num3 || num3 == num2 ) {
                    System.out.println("Os Números São Iguais");
                    }
                    else if(num1 > num2 && num1 > num3) {
                        System.out.println("O maior número é: " + num1);
                    }
                    else if(num2 > num1 && num2 > num3) {
                            System.out.println("O maior número é: " + num2);
                    }
                    else {
                            System.out.println("O maior número é: " + num3);
                    }
                entrada.close();
            }
        }





