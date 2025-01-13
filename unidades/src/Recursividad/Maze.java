
package Recursividad;
//Laberinto (MAze)
public class Maze {
    private final int TRIED =3;  //valor de prueba
    private final int PATH = 7;  //valor de solucion
    private int[][] grid={  //matriz bidimensional
                        {1,0,0,0,1,0,0,0},
                        {1,0,0,0,1,0,0,0},
                        {1,1,1,1,1,0,0,0},
                        {1,0,0,0,1,1,1,0},
                        {1,0,0,0,0,1,1,1}
                         };    // los 0 indican pared y 1 camino (los videojuegos por se representan por matriz sobre todo si representan a un mundo )
    public boolean  traverse(int row, int column){   //traverse es va a ser el metodo recursivo quien hara el trabajo para tratar de resolverlo
        
        boolean  done= false;  //se encarga de decir que ya termino
        
        if(valid(row,column)){ //valida si es un camino valido y no me salga de la matriz
            grid[row][column]=TRIED; //que marque el camino como no valido porque ya pase por ahi
            if(row==grid.length-1 && column==grid[0].length-1){ //Estoy verificando si ya llege al final del laberinto lenght da la longitud de algo (valida el largo de la columna y fila (row=4 column =8))
                done=true;   //si llego al final de la matriz (4,8) se termina
            }else{
                 //es recomendable ver los diferentes movimientos que se haran para seguir la matriz y las opciones posibles y a descartar   
                //el orden a establecer sera 1. abajo, 2. a la derecha, 3. hacia arriba y 4 a la izquierda
                    done = traverse(row+1, column); //hacia abajo 
                if(!done){ //no encontro camino
                    done= traverse(row, column+1); //hacia la derecha
                }
                if(!done){ //no enconro camino
                    done= traverse(row-1, column); //hacia arriba
                }
                if(!done){
                    done= traverse(row, column-1);// hacia la izquierda
                }
            }
            if(done){ //encontro camino 
                grid[row][column]= PATH;  //marcalo con 7
            }
        }
        return done;
    }
    
    private boolean  valid(int row, int column){
        
        boolean result = false;  //determina si es un camino no valido
        
        if(row>=0 && row<grid.length && column>=0 && column<grid[row].length){  //valido que no me salga por ningunlado de la matriz
            if(grid[row][column]==1){  //valida que la posicion es 1 
                result=true;  //entonces si puedo pasar por ahi
            }
        }
        return result;
    }
    //Va apintar el recorrido y la va a imprimir
    public String toString(){  //cuando se reccorre una matriz de una dimenscion se ocupa un for pero aqui se requiere recorrer fila y columna x lo que se usan dos for
        String result= "\n";  //inicializa con salto de pagina
        for(int row=0; row<grid.length;row++){  //recorre la fila
            for(int column=0;column<grid[row].length;column++){  //recorre la columna
                result += grid[row][column]+""; //forma abreviada                
            }
             result +="\n"; //se le pone otro salto de linea
        }
        return result;
    }
}
