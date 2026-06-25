import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planes',
  imports: [CommonModule],
  templateUrl: './planes.html'
})
export class Planes {
  planes = [
    { nombre: 'Básico', velocidad: '50 Mbps', precio: '15' },
    { nombre: 'Avanzado', velocidad: '100 Mbps', precio: '25' },
    { nombre: 'Pro', velocidad: '200 Mbps', precio: '40' }
  ];
}
