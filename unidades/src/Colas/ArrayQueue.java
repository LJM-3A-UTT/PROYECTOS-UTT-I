package Colas;

import java.util.EmptyStackException;

public class ArrayQueue<T> implements QueueADT<T> {

    private T[] queue;
    private int rear;
    private final int DEFAULT_CAPACITY = 5;

    public ArrayQueue() {
        this.queue = (T[]) (new Object[DEFAULT_CAPACITY]);
        this.rear = 0;
    }

    public void enqueue(T element) {
        if (size() == queue.length) {
            expandCapacity();
        }
        queue[rear] = element;
        rear++;
    }

    // Metodo ExpandCapacity
    private void expandCapacity() {

        T[] nuevo = (T[]) (new Object[queue.length * 2]);

        for (int i = 0; i < queue.length; i++) {
            nuevo[i] = queue[i];
        }
        queue = nuevo;
    }

    public T dequeue() throws EmptyStackException {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        T result = queue[0];
        rear--;
        for (int scan = 0; scan < rear; scan++) {
            queue[scan] = queue[scan + 1];
        }
        queue[rear] = null;
        return result;
    }

    public T first() {
        return queue[0];
    }

    public boolean isEmpty() {
        return rear == 0;
    }

    public int size() {
        return rear;
    }

    public String toString() {
        String cola = "";
        for (int i = rear - 1; i >= 0; i--) {
            cola = cola + queue[i] + "*";
        }
        return cola;
    }
}
