public class ForWhile2 {
    public static void main(String[] args) {

        int contadorFor, contadorWhile;

        //for(inicialização; condição; decremento)
        for(contadorFor = 10; contadorFor > 0; contadorFor--)
            System.out.print("*");

        System.out.println("");
        contadorWhile = 10; // Inicialização do while

        //while(condição)
        while(contadorWhile > 0) {
            System.out.print("*");
            contadorWhile--;  // Decremento do while
        }
    }
}
