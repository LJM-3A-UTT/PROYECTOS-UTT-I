import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ljm-app-convertidor-ljm',
  templateUrl: './convertidor-ljm.component.html',
  styleUrls: ['./convertidor-ljm.component.css']
})
export class ConvertidorLjmComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero ='EUR';
  total = 0;

monedas: string[] = ['MXN','USD','CAD','LIBRA','EUR','AUD','RUB','WON','YEN','INR'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir():void{

    //console.log('Llamada al metodo convertir');
    switch(this.tengo){
      case 'MXN':
        if(this.quiero === 'MXN'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.060;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.081;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.047;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.055;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 0.091;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 5.47;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 79.12;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 8.87;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 4.97;
        }
        break;
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='MXN'){
          this.total = this.cantidad * 16.68;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 1.35;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.78;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.92;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 1.52;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 91.37;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 1322.60;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 148.12;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 82.93;
        }
        break;

      case 'CAD':
        if(this.quiero === 'CAD'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.74;
        }
        if(this.quiero === 'MXN'){
          this.total = this.cantidad * 12.36;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.58;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.68;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 1.12;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 67.60;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 978.45;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 109.59;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 61.35;
        }
        break;

      case 'LIBRA':
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 1.27;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 1.72;
        }
        if(this.quiero === 'MXN'){
          this.total = this.cantidad * 21.29;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.17;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 1.94;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 116.44;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 1684.90;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 188.80;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 105.69;
        }
        break;
      case 'EUR':
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 1.09;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 1.47;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.85;
        }
        if(this.quiero === 'MXN'){
          this.total = this.cantidad * 18.20;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 1.66;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 99.86;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 1440.30;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 161.43;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 90.31;
        }
        break;
      case 'AUD':
        if(this.quiero === 'AUD'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.66;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.89;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.52;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.60;
        }
        if(this.quiero === 'MXN'){
          this.total = this.cantidad * 11.00;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 60.08;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 870.13;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 97.52;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 54.54;
        }
        break;

      case 'RUB':
        if(this.quiero === 'RUB'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.011;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.015;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.0086;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.010;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 0.017;
        }
        if(this.quiero === 'MXN'){
          this.total = this.cantidad * 0.18;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 14.50;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 1.62;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 0.91;
        }
        break;
      case 'WON':
        if(this.quiero === 'WON'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.00075;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.0010;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad *0.00059;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.00069;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 0.0011;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 0.069;
        }
        if(this.quiero === 'MXN'){
          this.total = this.cantidad * 0.013;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 0.11;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 0.063;
        }
        break;
      case 'YEN':
        if(this.quiero === 'YEN'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.0067;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.0091;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.0053;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.0062;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 0.010;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 0.62;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 8.93;
        }
         if(this.quiero === 'MXN'){
          this.total = this.cantidad * 0.11;
        }
         if(this.quiero === 'INR'){
          this.total = this.cantidad * 0.56;
        }
        break;
      case 'INR':
        if(this.quiero === 'INR'){
          this.total = this.cantidad;
        }
         if(this.quiero ==='USD'){
          this.total = this.cantidad * 0.012;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.016;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.0095;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.011;
        }
        if(this.quiero === 'AUD'){
          this.total = this.cantidad * 0.018;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 1.10;
        }
        if(this.quiero === 'WON'){
          this.total = this.cantidad * 15.96;
        }
         if(this.quiero === 'YEN'){
          this.total = this.cantidad * 1.79;
        }
         if(this.quiero === 'MXN'){
          this.total = this.cantidad * 0.20;
        }
        break;
    }

  }

}
