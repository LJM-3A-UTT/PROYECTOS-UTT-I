import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ljmComentario } from 'src/app/interfaces/ljmComentario';
import { LjmComentarioService } from '../../services/ljm-comentario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ljm-agregar-editar-comentario',
  templateUrl: './ljm-agregar-editar-comentario.component.html',
  styleUrls: ['./ljm-agregar-editar-comentario.component.css']
})
export class LjmAgregarEditarComentarioComponent implements OnInit {
ljmAgregarComentario: FormGroup;
accion='Agregar';
id=0;
ljmcomentario:ljmComentario | undefined;
  constructor(private fb:FormBuilder,
              private _LjmComentarioService:LjmComentarioService,
              private router:Router,
              private aRoute:ActivatedRoute) {
    this.ljmAgregarComentario = this.fb.group({
      ljmtitulo:['', Validators.required],
      ljmcreador:['', Validators.required],
      ljmtexto:['', Validators.required],
    })
    this.id=+this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }
  esEditar(){
    if(this.id!==0){
      this.accion='Editar';
      this._LjmComentarioService.getLJMComentario(this.id).subscribe(data=>{
        //console.log(data);
        this.ljmcomentario=data;-
        this.ljmAgregarComentario.patchValue({
          ljmtitulo:data.ljmtitulo,
          ljmtexto:data.ljmtexto,
          ljmcreador:data.ljmcreador,
        })
      },error =>{
        console.log(error)
      })
    }
  }
  ljmagregareditar(){
    console.log(this.ljmAgregarComentario);
    if (this.ljmcomentario==undefined) {
      const ljmcomentario: ljmComentario={
      ljmtitulo:this.ljmAgregarComentario.get('ljmtitulo')?.value,
      ljmcreador:this.ljmAgregarComentario.get('ljmcreador')?.value,
      ljmtexto:this.ljmAgregarComentario.get('ljmtexto')?.value,
      ljmfechaCreacion:new Date()
    }
    console.log(ljmcomentario);
    this._LjmComentarioService.saveLJMComentario(ljmcomentario).subscribe(data =>{
      this.router.navigate(['/']);
    }, error =>{
      console.log(error);
    })
    }else{
      const ljmcomentario: ljmComentario={
        id:this.ljmcomentario.id,
        ljmtitulo:this.ljmAgregarComentario.get('ljmtitulo')?.value,
        ljmcreador:this.ljmAgregarComentario.get('ljmcreador')?.value,
        ljmtexto:this.ljmAgregarComentario.get('ljmtexto')?.value,
        ljmfechaCreacion:this.ljmcomentario.ljmfechaCreacion,
    }
    this._LjmComentarioService.updateLJMComentario(this.id, ljmcomentario).subscribe(data =>{
      this.router.navigate(['/']);
    }, error =>{
      console.log(error);
    })
  }
}
}
