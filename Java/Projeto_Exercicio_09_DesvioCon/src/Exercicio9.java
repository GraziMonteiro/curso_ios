import java.util.Scanner; // Import necessário para utilizar a classe
        public class Exercicio9 {
            public static void main (String [] args) {
                Scanner entrada = new Scanner(System.in);
                double salario;
                System.out.println("Informe seu Salário: ");
                salario = entrada.nextInt();

                if(salario <= 600) {
                    System.out.println("Você esta Isento");
                }
                else if(salario > 600 && salario <= 1200) {
                        double desconto = salario * 0.20;
                        System.out.println("O Desconto é: " + desconto);
                    }
                else if(salario > 1200 && salario <= 2000 ) {
                    double desconto = salario * 0.25;
                    System.out.println("O Desconto é: " + desconto);
                }
                else{
                    double desconto = salario * 0.30;
                    System.out.println("O Desconto é: " + desconto);
                }
                entrada.close();
            }
        }
