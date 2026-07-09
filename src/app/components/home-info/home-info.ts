import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor

@Component({
  selector: 'app-home-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-info.html',
  styleUrls: ['./home-info.css']
})
export class HomeInfo {
  rating: number = 0; // Calificación actual del usuario
  hoverRating: number = 0; // Para efecto visual al pasar el mouse
  stars: number[] = [1, 2, 3, 4, 5];

  esHorarioLaboral(): boolean {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
  }

  setRating(r: number) { this.rating = r; }
  setHover(r: number) { this.hoverRating = r; }
}