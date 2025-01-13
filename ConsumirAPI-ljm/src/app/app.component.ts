import { Component, OnInit } from '@angular/core';
import { DigimonesljmServices } from './digimones-ljm/digimones-ljm.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ConsumirAPI-ljm';

  digimonesljm:any;

  constructor(public digimonljm:DigimonesljmServices){}

  ngOnInit(){
    this.digimonljm.getDigimones().subscribe(
      (r) => { this.digimonesljm = r; console.log(r) },
      (e) => { console.error(e) }
    )
  }
}
