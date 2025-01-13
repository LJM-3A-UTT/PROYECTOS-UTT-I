package Colas;

public class Main {
    public static void main(String[] args) {

        int[] key = { 5, 12, -3, 8, -9, 10 };

        ArrayQueue<Integer> cola = new ArrayQueue();

        cola.enqueue(5);
        cola.enqueue(2);
        cola.enqueue(8);

        System.out.println(cola);

        cola.dequeue();
        System.out.println(cola);

        System.out.println(cola.first());

        // Decodificar mensaje
        String encoded = "Vmnx zhxxfih jnyy ih Liwylvhih";
        ArrayQueue<Integer> keyQueue2 = new ArrayQueue<>();

        for (int i = 0; i < key.length; i++) {
            keyQueue2.enqueue(-key[i]);
        }

        String decoded = "";

        for (int i = 0; i < encoded.length(); i++) {
            key Value = keyQueue2.dequeue();
            decoded += (char) ((int) encoded.charAt(i) + keyValue);
            keyQueue2.enqueue(keyValue);
        }

        System.out.println("Decoded Message: " + decoded);

    }

}
