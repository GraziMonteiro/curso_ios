public class Exercicio4 {
    public static void main(String[] args){
        int cont = 10;
        double num = 2;

        System.out.println("===== Metade do número ====== ");
        while (cont <= 20) {
            double metade = cont / num;
            System.out.println("A metade de " + cont + " é " + metade);
            cont ++;
        }
    }
}
