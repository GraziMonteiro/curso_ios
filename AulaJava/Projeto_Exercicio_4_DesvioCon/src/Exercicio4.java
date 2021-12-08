import java.util.Scanner; // Import necessário para utilizar a classe Scanner
public class Exercicio4 {
    public static void main ( String [] args ) {
        System.out.println("======= Ler Altura e Sexo ========");
        
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite sua altura: ");
        double altura = entrada.nextDouble(); // Lê a opção digitada
        System.out.println("======= Escolha qual seu sexo ========");
        System.out.println(" 1 - Feminino ");
        System.out.println(" 2 - Masculino  ");

        System.out.println("======= Escolha uma opcao ========");
        int sexo = entrada.nextInt(); // Lê a opção digitada

        switch (sexo) {
            case 1:
                System.out.println("Voce escolheu a opção 1");
                double pesoF = (62.1 * altura) - 44.7;
                System.out.println("Seu peso ideal é:  " + pesoF);
                break;

            case 2:
                System.out.println("Voce escolheu a opção 2");
                double pesoM = (72.7 * altura) - 58;
                System.out.println("Seu peso ideal é:  " + pesoM);
                break;

            default:
                System.out.println("Operação não disponível ou inválida!");
        }
        entrada.close();
    }
}