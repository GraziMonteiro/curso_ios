import java.util.Scanner; // Import necessário para utilizar a classe Scanner
         public class Exercicio7 {
             public static void main ( String [] args ) {

                 System.out.println("=======Linha de Crédito========");

                 Scanner entrada = new Scanner(System.in);
                 System.out.println("Informe o Salário");
                 double salario = entrada.nextDouble(); // Lê a opção digitada
                 System.out.println("Informe a Prestação");
                 double prestacao = entrada.nextDouble(); // Lê a opção digitada
                 double calsal = salario * 0.30;

                 if (prestacao <= calsal){
                     System.out.println("Empréstimo pode ser concedido!");
                 }
                 else{
                     System.out.println("Empréstimo não pode ser concedido!");
                 }
                 entrada.close();
             }
         }
