package BusquedaYOrdenamiento;

public class Main {
    public static void main(String[] args) {

        // Busqueda Lineal
        Integer[] numeros = { 2, 5, 8, 6, 4, 3, 0, 9, 1, 100 };
        SortAndSearch<Integer> s = new SortAndSearch<>();

        System.out.println(s.linealSearch(numeros, 0, 7, 100));

        String[] nombres = { "Maria", "Juan", "Pedro", "Luis" };
        SortAndSearch<String> sn = new SortAndSearch<>();
        System.out.println(sn.linealSearch(nombres, 0, 3, "Juan"));

        // Busq0ued Binaria
        /*
         * Integer[] numeros2 = { 2, 3, 5, 7, 9, 11, 15, 21, 34, 45, 56 };
         * SortAndSearch<Integer> sb = new SortAndSearch<>();
         * System.out.println("Busqueda Binaria");
         * System.out.println(sb.binarySearch(numeros2, 0, numeros2.length - 1, 34));
         */

        // Ordenación por seleccion
        s.selectionSort(numeros);
        System.out.println("*selecion Sort");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }

        // Ordenación por insercion
        s.insertSort(numeros);
        System.out.println("insert sort");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }

        // Ordenación por metodo burbuja
        s.bubleSort(numeros);
        System.out.println("Buble sort");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }

    }
}
