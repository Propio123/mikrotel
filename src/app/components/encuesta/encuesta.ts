import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './encuesta.html'
})
export class EncuestaComponent {
  encuestaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.encuestaForm = this.fb.group({
      // I. Información General
      numAbonado: ['', Validators.required],
  provinciaCiudad: ['', Validators.required],
  
  trimestre: [3, [Validators.required, Validators.min(1), Validators.max(4)]],
  anio: [2026, [Validators.required, Validators.min(2020)]],
      ciudad: ['', Validators.required],
  tipoPlan: ['', Validators.required],
  tecnologia: ['', Validators.required],
  
  // Rangos: empezamos en null para que sea obligatorio elegir
  velocidad: [null, Validators.required],
  continuidad: [null, Validators.required],
      disponibilidad: [null, Validators.required],
      latencia: [null, Validators.required],
      
      // III. Atención al Cliente
      canales: [null, Validators.required],
      tiempoRespuesta: [null, Validators.required],
      efectividad: [null, Validators.required],
      facturacion: [null, Validators.required],
      
      // IV. Percepción Global
      relacionPrecioCalidad: ['', Validators.required],
      recomendacion: ['', Validators.required],
      
      // V. Comentarios
      comentarios: ['']
    });
  }

  enviar() {
    console.log('Datos enviados:', this.encuestaForm.value);
  }
}