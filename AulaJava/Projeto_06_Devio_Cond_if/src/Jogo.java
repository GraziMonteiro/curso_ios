import java.util.Scanner; // Import necessário para utilizar a classe

    public class Jogo {
        public static void main (String [] args) {
            // Intância do objeto (buffer) utilizando a classe Scanner
            Scanner entrada = new Scanner(System.in);
            int pontos = 0;
            System.out.println ("Digite o número de pontos do jogador: ");
            pontos = entrada.nextInt();    // Recebe o número de pontos

            if (pontos >= 1000) {
                System.out.println ("Você passou para a fase 2!!!");
            }

            System.out.println("proxima instrucao");
            entrada.close();
        } // fim do método main
    } // fim da classe Jogo


