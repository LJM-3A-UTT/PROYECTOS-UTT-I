package Pila;

import Pila.ArrayStack;

public class Main {
    public static void main(String[] args) {
        ArrayStack<Integer> pila = new ArrayStack<>();
        pila.push(5);
        pila.push(2);
        pila.push(8);
        System.out.println(pila);
        System.out.println(pila.peek());
        System.out.println(pila.pop());
    }
}
