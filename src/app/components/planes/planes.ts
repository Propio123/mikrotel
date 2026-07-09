import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planes',
  imports: [CommonModule],
  templateUrl: './planes.html'
})
export class Planes {
  planes = [
    { nombre: 'Básico-FO', velocidad: '250 Mbps', precio: '20.54' },
    { nombre: 'Home-FO', velocidad: '350 Mbps', precio: '25.67' },
    { nombre: 'HOME-FO', velocidad: '450 Mbps', precio: '33.37' },
    { nombre: 'Avanzado-FO', velocidad: '700 Mbps', precio: '38.91' }

  ];
   planesantena= [
    
    { nombre: 'Básico-WRL', velocidad: '30 Mbps', precio: '20.54' },
    { nombre: 'Home-WRL', velocidad: '40 Mbps', precio: '24.15' },
    { nombre: 'HOME-WRL', velocidad: '50 Mbps', precio: '25.67' },
    { nombre: 'Avanzado-WRL', velocidad: '60 Mbps', precio: '30.80' },

  ];
}
