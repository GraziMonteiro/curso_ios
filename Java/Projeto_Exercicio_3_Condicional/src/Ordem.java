import java.util.Scanner; // Import necessário para utilizar a classe
    public class Ordem {
        public static void main (String [] args) {
            // Intância do objeto (buffer) utilizando a classe Scanner
            Scanner entrada = new Scanner(System.in);
            double num1;
            double num2;

            System.out.println ("Digite o primeiro número: ");
            num1 = entrada.nextDouble();
            System.out.println ("Digite o segundo número: ");
            num2 = entrada.nextDouble();

            if( num1 > num2){
                System.out.println("Em ordem decrescente : " + num1);
                System.out.println(num2);

            }
            else{
                System.out.println("Em ordem decrescente : " + num2);
                System.out.println(num1);
            }

            entrada.close();
        }
    }

