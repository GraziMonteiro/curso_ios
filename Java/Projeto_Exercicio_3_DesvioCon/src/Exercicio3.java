import java.util.Scanner; // Import necessário para utilizar a classe Scanner
public class Exercicio3 {
    public static void main ( String [] args ) {
        System.out.println("======= Imprimir números inteiros ========");
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número:");
        int num = entrada.nextInt(); // Lê a opção digitada

        if (num >= 50 || num == 100 ) {
            System.out.println("Pertence ao intervalo");
        }
        else {
            System.out.println("Não pertence ao intervalo");
        }
        entrada.close();
    }
}