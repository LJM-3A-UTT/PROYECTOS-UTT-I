package BusquedaYOrdenamiento;

public class SortAndSearch<T extends Comparable> {

    // Busqueda Binaria
    /*
     * public boolean binarySearch(T[] data, int min, int max, T target) {
     * boolean found = false;
     * int midpoint = (min + max) / 2;
     * 
     * if (data[midpoint].compareTo(target) == 0) {
     * found = true;
     * } else if (data[midpoint].compareTo(target) > 0) {
     * if (min <= midpoint - 1) {
     * found = binarySearch(data, min, midpoint - 1, target);
     * } else if (midpoint + 1 <= max) {
     * found = binarySearch(data, midpoint+1, max, target);
     * }
     * 
     * }
     * return found;
     * }
     * }
     */

    public void selectionSort(T[] data) {
        int min;
        T temp;

        for (int index = 0; index < data.length - 1; index++) {
            min = index;

            for (int scan = index + 1; scan < data.length; scan++) {
                if (data[scan].compareTo(data[min]) < 0) {
                    min = scan;
                }
            }
            temp = data[min];
            data[min] = data[index];
            data[index] = temp;
        }
    }

    public void insertSort(T[] data) {
        for (int index = 1; index < data.length; index++) {
            T key = data[index];
            int position = index;

            while (position > 0 && data[position - 1].compareTo(key) > 0) {
                data[position] = data[position - 1];
                position--;
            }
            data[position] = key;
        }
    }

    public void bubleSort(T[] data) {
        int position, scan;
        T temp;
        for (position = data.length - 1; position >= 0; position--) {
            for (scan = 0; scan <= position - 1; scan++) {
                if (data[scan].compareTo(data[scan + 1]) > 0) {
                    temp = data[scan];
                    data[scan] = data[scan + 1];
                    data[scan + 1] = temp;
                }
            }
        }
    }

    public char[] linealSearch(Integer[] numeros, int i, int j, int k) {
        return null;
    }

    public char[] linealSearch(String[] nombres, int i, int j, String string) {
        return null;
    }

}
