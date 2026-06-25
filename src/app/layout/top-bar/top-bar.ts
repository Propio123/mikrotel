import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  imports: [CommonModule],
  templateUrl: './top-bar.html'
  
})
export class TopBar {
  // Definimos las redes aquí
  socialNetworks = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook', link: 'https://facebook.com/mikrotel' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', link: 'https://instagram.com/mikrotel' },
    { name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', link: 'https://wa.me/593...' }
  ];
}