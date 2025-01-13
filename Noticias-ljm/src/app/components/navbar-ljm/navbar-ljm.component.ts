import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ljm-app-navbar-ljm',
  templateUrl: './navbar-ljm.component.html',
  styleUrls: ['./navbar-ljm.component.css']
})
export class NavbarLjmComponent implements OnInit {
  @Input() titulo:string;
  constructor() {
    this.titulo=';'
  }

  ngOnInit(): void {
  }

}
