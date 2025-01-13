package Interfaz;

public class MostrarResultado {    

    public void imprimir(Interfaz objeto,int a, int b){  
        objeto.sumar(a, b);  //objeto internamente lleva ciertas operaciones donde requiere de a y b
        System.out.println(objeto.resultado());

        //Quien vaya a programar esta clase objeto debera estar obligador a generar un objeto de tipo interfaz
        //para ser compatible con sumar.

    }
}
