package Recursividad;

public class Recursiva {
    //Suma de un numero de manera descendente    
    public int sumar(int num){    //1. Recibe el valor de un numero
        int resultado;
        if(num==1){  //2. Compara con un valor base (1) que le dija donde termina la recursividad
            resultado=1;
        }else{
            resultado= num+sumar(num-1);  //se manda nuevamente al metodo sumar 
                                         // y se regresa al sumar (donde recibe ahora num como 4 y repite el proceso comparando con el if y sucesivametne hasta llgaer al 1) 
        }
        return resultado;        
    }

    //2. Factorial de un numero
    public int factorial(int num){  
        int resultado;
        if(num==1){
            resultado=1;
        }else{
            resultado= num*factorial(num-1);           
        }
        return resultado;
    }
}
