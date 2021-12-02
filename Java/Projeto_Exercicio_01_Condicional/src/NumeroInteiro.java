import java.util.Scanner; // Import necessário para utilizar a classe
    public class NumeroInteiro {
        public static void main (String [] args) {
            Scanner entrada = new Scanner(System.in);
            int numero;
            System.out.println ("Digite um número inteiro: ");
            numero = entrada.nextInt();    // Recebe o número

            // Verifica se o número é inteiro
            if ((numero > 20)) {
                System.out.println ("A metade do número é = " + numero / 2);
            }
            else{
                System.out.println("Metade do número é =" + numero);
            }

            entrada.close();

        }
    }
