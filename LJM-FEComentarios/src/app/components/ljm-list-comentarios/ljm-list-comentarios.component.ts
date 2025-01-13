import { Component, OnInit } from '@angular/core';
import { ljmComentario } from 'src/app/interfaces/ljmComentario';
import { LjmComentarioService } from 'src/app/services/ljm-comentario.service';

@Component({
  selector: 'app-ljm-list-comentarios',
  templateUrl: './ljm-list-comentarios.component.html',
  styleUrls: ['./ljm-list-comentarios.component.css']
})
export class LjmListComentariosComponent implements OnInit {

  ljmlistComentarios: ljmComentario[]=[
    // {
    //   ljmtitulo:'Angular', ljmcreador: 'Luis Jiménez Maffuz', ljmfechaCreacion:new Date(), ljmtexto:'Framework para crear SPA'
    // },
    // {
    //   ljmtitulo:'React', ljmcreador: 'Luis Jiménez Maffuz', ljmfechaCreacion:new Date(), ljmtexto:'Libreria para crear SPA'
    // },
    // {
    //   ljmtitulo:'VUE', ljmcreador: 'Luis Jiménez Maffuz', ljmfechaCreacion:new Date(), ljmtexto:'Framework progresivo para crear SPA'
    // },
  ]
  constructor(private _ljmcomentarioService: LjmComentarioService) { }

  ngOnInit(): void {
    this.getLJMComentario();
  }

  getLJMComentario(){
    this._ljmcomentarioService.getljmlistComentarios().subscribe(data=>{
      console.log(data);
      this.ljmlistComentarios = data;
    }, error=>{
      console.log(error);
    })
  }

  LJMeliminarComentario(id:any){
    console.log(id);
    this._ljmcomentarioService.deleteLJMComentario(id).subscribe(data=>{

      this.getLJMComentario();
    }, error=>{
      console.log(error);
    })
  }
}
