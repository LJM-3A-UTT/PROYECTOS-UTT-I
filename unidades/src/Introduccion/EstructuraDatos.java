
package Introduccion;
import Interfaces.MostrarResultado;
import Interfaces.Suma;
import Interfaces.Sumar;
import estructuradatos.Introduccion.Numero;
import estructuradatos.Introduccion.*;
import Herencia.*;

public class EstructuraDatos {

    
    public static void main(String[] args) {
        //Primera clase y uso toString
        Coin coin = new Coin();
        System.out.println(coin);
        
        //variables Alias
       int num1= 5;
       int num2= 12;
       num2=num1;
       num1=10;
       System.out.println(num2);      
       Numero n1= new Numero();
        
        
        n1.numero=5;
        Numero n2= new Numero();
        n2.numero=12;
        n2= n1;
        n1.numero=10;
        System.out.println(n2.numero);
        
        //variables estaticas
        
        //Estaticas e = new Estaticas();
        Math.sin(4);       
        System.out.println(Estaticas.count2);
        
        Estaticas e = new Estaticas();
        e.incrementarCount(5);
        e.incrementarCount(5);
        Estaticas e2 = new Estaticas();
        e2.incrementarCount(5);
        System.out.println(Estaticas.count2);
        
        Estaticas.incrementarCount2(5);
        System.out.println(Estaticas.count2);
        
        //interfaces
        Sumar s = new Sumar();
        Suma sa= new Suma();
        MostrarResultado mr = new MostrarResultado();
        mr.imprimir(s, 4, 5);
        
        //herencia
        Dictionary d = new Dictionary(100, 30);
        d.info();
       
       
    }
    
}
