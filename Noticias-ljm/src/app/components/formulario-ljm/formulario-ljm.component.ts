import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ljm-app-formulario-ljm',
  templateUrl: './formulario-ljm.component.html',
  styleUrls: ['./formulario-ljm.component.css']
})
export class FormularioLjmComponent implements OnInit {

@Output() parametrosSelecionadosljm=new EventEmitter<any>()

  categoriaSelecionadaljm='general';
  paisSelecionadoljm='mx';

  categorias: any[]=[
    {value:'general', nombre:'General'},
    {value:'business', nombre:'Negocios'},
    {value:'Entertainment', nombre:'Entretenimiento'},
    {value:'health', nombre:'Salud'},
    {value:'science', nombre:'ciencias'},
    {value:'sports', nombre:'Deportes'},
    {value:'tecnology', nombre:'Tecnologia'},
  ];

  paises: any[]=[
    {value:'mx', nombre:'Mexico'},
    {value:'ar', nombre:'Argentina'},
    {value:'br', nombre:'Brasil'},
    {value:'fr', nombre:'Francia'},
    {value:'hu', nombre:'Hungria'},
    {value:'gb', nombre:'Reino Unido'},

    {value:'ae', nombre:'Emiratos Árabes Unidos'},
    {value:'at', nombre:'Austria'},
    {value:'au', nombre:'Australia'},
    {value:'be', nombre:'Bélgica'},
    {value:'bg', nombre:'Bulgaria'},
    {value:'ca', nombre:'Canadá'},
    {value:'ch', nombre:'Suiza'},
    {value:'cn', nombre:'China'},
    {value:'co', nombre:'Colombia'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticialjm(){
    const PARAMETROSLJM={
      categoria: this.categoriaSelecionadaljm,
      pais: this.paisSelecionadoljm
    }
    this.parametrosSelecionadosljm.emit(PARAMETROSLJM)
  }

}
