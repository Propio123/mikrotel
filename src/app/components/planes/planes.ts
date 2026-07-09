import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planes',
  imports: [CommonModule, FormsModule],
  templateUrl: './planes.html'
})
export class Planes {
  isContratarOpen = false;
  
  // Datos del cliente
  cliente = {
    nombre: '',
    direccion: '',
    telefono: ''
  };

  enviarContratacion() {
    const numeroEmpresa = '593989268684';
    const mensaje = `Hola, quiero contratar un plan. 
    Nombre: ${this.cliente.nombre}
    Dirección: ${this.cliente.direccion}
    Teléfono: ${this.cliente.telefono}`;
    
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
    this.isContratarOpen = false; // Cerramos el modal
    
    // Limpiar campos después de enviar
    this.cliente = { nombre: '', direccion: '', telefono: '' };
  }
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
