package Coin;

public class App {
    public static void main(String[] args) throws Exception {
        // System.out.println("Hello, World!");

        // Coin
        /*
         * Coin coin = new Coin();
         * System.out.println(coin);
         */

        // Variables Primitivas
        int num1 = 5;
        int num2 = 12;

        num2 = num1;
        num1 = 10;
        System.out.println("***Variables Primitivas***");
        System.out.println(num1);
        System.out.println(num2);

        // Variables de Objeto
        Numero n1 = new Numero();
        n1.numero = 5;

        Numero n2 = new Numero();
        n2.numero = 12;

        n2 = n1;
        n1.numero = 10;

        System.out.println("**Variables Objeto**");
        System.out.println(n1.numero);
        System.out.println(n2.numero);

    }

}
