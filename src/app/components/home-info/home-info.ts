import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  imports: [],
  templateUrl: './home-info.html',
  styleUrl: './home-info.css',
})
export class HomeInfo {
  
  esHorarioLaboral(): boolean {
    const horaActual = new Date().getHours();
    const diaActual = new Date().getDay(); // 0 es Domingo, 6 es Sábado
    // Abierto de Lunes a Viernes, de 9 a 17
    return diaActual >= 1 && diaActual <= 5 && horaActual >= 9 && horaActual < 17;
  }
}
