import java.util.Scanner; // Import necessário para utilizar a classe Scanner
        public class Exercicio6 {
            public static void main ( String [] args ) {
                System.out.println("======= Verificar Senha ========");
                Scanner entrada = new Scanner(System.in);
                System.out.println("Digite sua senha: ");
                String senha = entrada.next();

                if(senha.equals("R10p5")){
                    System.out.println("Acesso Concedido");
                }
                else{
                    System.out.println("Acesso Negado");
                }
                entrada.close();
            }
        }
