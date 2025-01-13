import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ljm-app-listado-noticias-ljm',
  templateUrl: './listado-noticias-ljm.component.html',
  styleUrls: ['./listado-noticias-ljm.component.css']
})
export class ListadoNoticiasLjmComponent implements OnInit {

  @Input() listNoticiasljm: any;

  constructor() { }

  ngOnInit(): void {
  }

}
