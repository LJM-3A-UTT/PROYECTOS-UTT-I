package Interfaz;

public class Sumar implements Interfaz {  
    //Se crea ya que pide la estructura un resultado
   private int resultado;

   public void sumar(int a, int b){
        resultado=a+b;
   }

   public int resultado(){
       return resultado;
    }
//Ya se programo como lo pidio la interfaz
   
}
