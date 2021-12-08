import java.util.Scanner; // Import necessário para utilizar a classe Scanner
        public class Exercicio5 {
            public static void main ( String [] args ) {
                System.out.println("======= Bônus ========");
                Scanner entrada = new Scanner(System.in);
                System.out.println("Digite seu salário: ");
                double salario = entrada.nextFloat();

                System.out.println(" 1 - Tempo de casa igual ou superior a cinco anos");
                System.out.println(" 2 - Demais funcionários");
                System.out.println(" ==== Escolha um opção ===== ");
                int tempo = entrada.nextInt();

                switch(tempo){
                    case 1:
                        double salarioVint = salario * 0.20;
                        System.out.println("O valor do seu bônus é: " + salarioVint);
                        break;

                    case 2:
                        double salarioDez = salario * 0.10;
                        System.out.println("O valor do seu bônus é: " + salarioDez);
                        break;

                    default:
                        System.out.println("Item invalido");
                }
                entrada.close();
            }
        }
