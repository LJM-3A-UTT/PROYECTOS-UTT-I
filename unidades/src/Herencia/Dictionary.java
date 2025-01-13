package Herencia;

public class Dictionary extends Book{    //El diccionary va a extender loque tiene book 
    //1. va a tener sus propias variables
    private int numDefs;

    //3. como dictionary hereda lo de book pues esta obligado a implemetar el contructor de book.
    public Dictionary(int numDefs, int numPages) {   //Diccionary incialize su propio atributo pero tambien reciba el numero de paginas de ese diccionario y se lo pase al contructor de book como lo hago con la palabra super
        
        super(numPages);  //con super le dijo que le pase el numero de paginas
        this.numDefs = numDefs;
        
    }
     
    //2. Va a tener un metodo void 
    public void info(){
        
        //2.1.va a imprimir el numero de definiciones
        System.out.println("Number of definitions: "+ numDefs);
        //2.2 pero como viene heredando lo que book tambien vamos a definer la impression del numero de paginas (se puede juntar las dos)
        System.out.println("Definition per page: " + numDefs/numPages);   
    }
    
}