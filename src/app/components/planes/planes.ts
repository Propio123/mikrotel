import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planes',
  imports: [CommonModule, FormsModule],
  templateUrl: './planes.html',
  styleUrl: './planes.css'
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
    { nombre: 'Mikero-Started', velocidad: '250 Mbps', precio: '20.54' },
    { nombre: 'Mikro-Student', velocidad: '350 Mbps', precio: '25.67' },
    { nombre: 'Mikro-Xtreme', velocidad: '450 Mbps', precio: '33.37' },
    { nombre: 'Mikro-Ultra', velocidad: '700 Mbps', precio: '38.91' },
    { nombre: 'Mikro-Top Speed', velocidad: '1Gbps', precio: '54.31' }
  ];
  
}
