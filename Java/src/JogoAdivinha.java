import java.util.Scanner; // Import necessário para utilizar a classe

public class JogoAdivinha {
    public static void main (String [] args) {
        // Intância do objeto (buffer) utilizando a classe Scanner
        Scanner entrada = new Scanner(System.in);
        int palpite;
        System.out.println("Digite seu palpite:");
        palpite = entrada.nextInt();
        if(palpite == 15) {
            System.out.println("Você acertou!!!");
        }
        else {
            if(palpite < 15) {
                System.out.println("Seu palpite está abaixo !!!");
            } else {
                System.out.println("Seu palpite está acima.");
            }
        }
        entrada.close();
    } // fim do método main
} // fim da classe JogoAdivinha


