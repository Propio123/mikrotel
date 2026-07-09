import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  isModalOpen = false;
  nombre: string = '';
  reporte: string = '';

  enviarWhatsApp() {
    const telefono = '593989268684'; // Tu número
    const mensaje = `Hola, mi nombre es ${this.nombre}. Reporte de daño: ${this.reporte}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
    this.isModalOpen = false; // Cerramos el modal
  }
}
