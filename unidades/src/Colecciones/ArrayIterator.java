package Colecciones;

import java.util.Iterator;
import java.util.NoSuchElementException;

public class ArrayIterator<T> implements Iterator<T> {

    private int count;
    private int current;
    private T[] items;

    public ArrayIterator(int size, T[] collection) {
        this.count = size;
        current = 0;
        this.items = collection;
    }

    public boolean hasNext() {
        return (current < count);
    }

    public T next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        current++;
        return items[current - 1];
    }

}
