package Herencia;

public class Book {     //si es public todo mundo puede entrar a el
    protected  int numPages;   //protegido quien este en el mismo paquete puede accede a el . si esta fuer a de el no puede . Que podríamos traducirlo que el padre e hijo puede verlo.
      
    //contructor
      public Book(int numPages) {
          this.numPages = numPages;
      }
    //metodo void que imprima el numero de paginas   
    protected  void page(){
        System.out.println("number of pages: "+ numPages);  //manda a imprimir el numero de paginas
    }
  }
