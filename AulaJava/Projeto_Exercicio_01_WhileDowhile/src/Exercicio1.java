public class Exercicio1 {
    public static void main(String[] args) {
        int contador = 100; // Declara e inicializa o contador

        while (contador <= 200) {
            System.out.print(contador + " ");
            if(contador%20 == 0) System.out.println(""); // Quebra de linha para ver todos os números
            contador++; // mesma coisa que utilizar contador = contador - 1

        }
    }
}
