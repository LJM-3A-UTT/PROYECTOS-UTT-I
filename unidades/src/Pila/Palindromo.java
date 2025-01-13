package Pila;

import Pila.ArrayStack;

public class Palindromo {

    public static boolean esPalindromo(String palabra) {

        ArrayStack<Character> pila = new ArrayStack<>();

        for (int i = 0; i < palabra.length(); i++) {
            pila.push(palabra.charAt(i));
        }

        String palabraInversa = "";

        while (!pila.isEmpty()) {
            palabraInversa += pila.pop();
        }

        return palabra.equalsIgnoreCase(palabraInversa);
    }

    public static void main(String[] args) {

        String palabra1 = "ana";
        String palabra2 = "reconocer";

        System.out.println(palabra1 + ": " + esPalindromo(palabra1));
        System.out.println(palabra2 + ": " + esPalindromo(palabra2));
    }

}