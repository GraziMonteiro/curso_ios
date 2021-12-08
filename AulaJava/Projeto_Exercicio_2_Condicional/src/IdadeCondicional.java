import java.util.Scanner; // Import necessário para utilizar a classe
    public class IdadeCondicional {
        public static void main (String [] args) {
            // Intância do objeto (buffer) utilizando a classe Scanner
            Scanner entrada = new Scanner(System.in);
            int numero;
            System.out.println("Digite um sua idade: ");
            numero = entrada.nextInt();    // Recebe o número

            // Verifica se Idade
            if(numero >= 18){
                System.out.println ("É maior de idade");
            }
            else {
                System.out.println ("É menor de idade");
            }
            entrada.close();

        }
    }
