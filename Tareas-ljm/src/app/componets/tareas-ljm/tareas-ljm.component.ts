import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/Tareas';
@Component({
  selector: 'ljm-app-tareas-ljm',
  templateUrl: './tareas-ljm.component.html',
  styleUrls: ['./tareas-ljm.component.css']
})
export class TareasLjmComponent implements OnInit {
listTareas: Tareas[]=[]

  nombreTarea='';
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    console.log(this.nombreTarea)
    //Crear un objeto tarea
    const tarea:Tareas= {
      nombre: this.nombreTarea,
      estado:false
    }

    //Agregar un objeto al array
    this.listTareas.push(tarea);
    //Resetear la variable

    this.nombreTarea = '';


  }
  eliminarTarea(index:number): void{
      this.listTareas.splice(index, 1);
    }

    actualizarTarea(index: number, tarea: Tareas): void {
      this.listTareas[index].estado = !tarea.estado;
    }
}
