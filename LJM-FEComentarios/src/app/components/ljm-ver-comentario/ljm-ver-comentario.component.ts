import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LjmComentarioService } from 'src/app/services/ljm-comentario.service';
import { ljmComentario } from '../../interfaces/ljmComentario';

@Component({
  selector: 'app-ljm-ver-comentario',
  templateUrl: './ljm-ver-comentario.component.html',
  styleUrls: ['./ljm-ver-comentario.component.css']
})
export class LjmVerComentarioComponent implements OnInit {
  id:number;
  LJMComentario:ljmComentario | undefined;
  constructor(private aRoute: ActivatedRoute,
    private _ljmcomentarioService: LjmComentarioService) {
    this.aRoute.snapshot.paramMap.get('id')
    this.id=+this.aRoute.snapshot.paramMap.get('id')!;
    console.log(this.aRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.getLJMComentario();
  }

  getLJMComentario(){
    this._ljmcomentarioService.getLJMComentario(this.id).subscribe(data =>
      this.LJMComentario = data)
  }
}
