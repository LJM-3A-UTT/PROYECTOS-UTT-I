import { Component } from '@angular/core';
import { NoticiaLjmService } from './services/noticia-ljm.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listNoticiasljm:any[]=[];
  loadingljm = false;
  constructor(private _noticiaServiceljm: NoticiaLjmService){
  }

  buscarNoticiasljm(parametros: any){
    this.loadingljm = true
    this.listNoticiasljm = [];
    setTimeout(() =>{
      this._noticiaServiceljm.getNoticiasljm(parametros).subscribe(data => {
      this.loadingljm = false;
      this.listNoticiasljm=data.articles;
    },error =>{
      console.log(error);
      this.loadingljm = false;
    })
    },10000)
  }
}
