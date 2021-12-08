import java.util.Scanner; // Import necessário para utilizar a classe

public class ParImpar {
    public static void main (String [] args) {
        // Intância do objeto (buffer) utilizando a classe Scanner
        Scanner entrada = new Scanner(System.in);
        int numero;
        System.out.println ("Digite um número inteiro: ");
        numero = entrada.nextInt();    // Recebe o número

        // Verifica se o número é par
        if ((numero % 2) == 0) {
            System.out.println ("O número " + numero + " é par");
        }
        else {
            System.out.println ("O número " + numero + " é ímpar");
        }
        entrada.close();
    } // fim do método main
} // fim da classe ParImpar

