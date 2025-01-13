import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'V. SPOTIFY-LJM UTT ';
  name: string='LJM'
  age: number=22
  phone:null=null
  phone1:undefined=undefined
  datum: any;

  status:string | number | boolean=true

  car:CarModel = {
    brand:'Ford',
    model:'Focus',
    year:2023,
  }

  listCars:Array<CarModel>=[
    {
    brand:'chevrolet',
    model: 'Camaro',
    year:2022
  },
  {
    brand:'BMW',
    model:'AMG 200',
    year:2023,
  }
]

}

interface CarModel{
  brand:string;
  model:string;
  year:number;
}
