import { Component } from '@angular/core';

@Component({
  selector: 'ljm-app-ruleta-ljm',
  templateUrl: './ruleta-ljm.component.html',
  styleUrls: ['./ruleta-ljm.component.css']
})
export class RuletaLjmComponent {
  numeros = [
    '0', '28', '9', '26', '30', '11', '7', '20', '32', '17', '5', '22',
    '34', '15', '3', '24', '36', '13', '1', '00', '2', '27', '10', '25',
    '29', '12', '8', '19', '31', '18', '6', '21', '33', '16', '4', '23',
    '35', '14'
  ];

  spinning = false;
  buttonDisabled = false;

  spinWheel() {
    if (!this.spinning) {
      this.spinning = true;
      this.buttonDisabled = true;
      const rotations = 15;
      const randomIndex = Math.floor(Math.random() * this.numeros.length);
      const anglePerNumber = 360 / this.numeros.length;
      const targetAngle = anglePerNumber * randomIndex + Math.floor(Math.random() * anglePerNumber);

      const bolaElement = document.querySelector('.bola') as HTMLDivElement;

      if (bolaElement) {
        bolaElement.style.transition = 'none';
        bolaElement.offsetHeight;
        bolaElement.style.transform = 'rotate(0deg)';
        bolaElement.offsetHeight;
        bolaElement.style.transition = `transform 5s cubic-bezier(0.5, 0, 0.5, 1)`;
        bolaElement.style.transform = `rotate(${rotations * 360 + targetAngle}deg)`;

        setTimeout(() => {
          this.spinning = false;
          this.buttonDisabled = false;
        }, 5000);
      }
    }
  }
}
