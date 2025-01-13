import { Component } from '@angular/core';

@Component({
  selector: 'ljm-app-apuesta-ljm',
  templateUrl: './apuesta-ljm.component.html',
  styleUrls: ['./apuesta-ljm.component.css']
})
export class ApuestaLjmComponent {
  fichas: number = 10;
  cantidadApostada: number | null = null;
  numeroApostado: number | null = null;
  resultado: string | null = null;
  ruletaEnProceso: boolean = false;
  apuestaRealizada: boolean = false;

  realizarApuesta() {
    if (this.cantidadApostada !== null && this.cantidadApostada > 0 && this.cantidadApostada <= this.fichas && this.numeroApostado !== null) {
      this.fichas -= this.cantidadApostada;
      this.apuestaRealizada = true;
    } else {
      return;
    }
  }

  coincide() {
    if (!this.apuestaRealizada) {
      return;
    }

    if (this.resultado === '¡Has ganado!' && this.cantidadApostada !== null) {
      this.fichas += this.cantidadApostada * 2;
    }

    this.reset();
  }

  noCoincide() {
    if (!this.apuestaRealizada) {
      return;
    }

    if (this.resultado === '¡Has perdido!' && this.cantidadApostada !== null) {
      this.fichas -= this.cantidadApostada;
    }

    this.reset();
  }

  private reset() {
    this.cantidadApostada = null;
    this.numeroApostado = null;
    this.resultado = null;
    this.apuestaRealizada = false;
  }
}
