import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../../services/supabase.services';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './encuesta.html'
})
export class EncuestaComponent implements OnInit {
 
  estaEnviando = false;
  
  private fb = inject(FormBuilder);
  encuestaForm: FormGroup = this.fb.group({});
  private route = inject(ActivatedRoute);
  private supabaseService = inject(SupabaseService);

  ngOnInit() {
    // 1. Inicializar el formulario AQUÍ, no en el constructor
    this.encuestaForm = this.fb.group({
      numAbonado: ['', Validators.required],
      tecnologia: ['', Validators.required],
      trimestre: [3, [Validators.required, Validators.min(1), Validators.max(4)]],
      anio: [2026, [Validators.required, Validators.min(2020)]],
      ciudad: ['', Validators.required],
      tipoPlan: ['', Validators.required],
      velocidad: [3, Validators.required],
      continuidad: [3, Validators.required],
      disponibilidad: [3, Validators.required],
      latencia: [3, Validators.required],
      canales: [3, Validators.required],
      tiempoRespuesta: [3, Validators.required],
      efectividad: [3, Validators.required],
      facturacion: [3, Validators.required],
      relacionPrecioCalidad: ['', Validators.required],
      recomendacion: ['', Validators.required], // Ahora coincidirá con tu HTML
      comentarios: ['']
    });
    this.encuestaForm.updateValueAndValidity();
  this.encuestaForm.markAsTouched();

    const ispParam = this.route.snapshot.paramMap.get('isp');
    console.log('El ISP desde la URL es:', ispParam);
  }

  async enviar() {
    if (this.encuestaForm.invalid) {
      this.getFormValidationErrors();
      return;
    }

    this.estaEnviando = true;
    const ispID = this.route.snapshot.paramMap.get('isp');
    
    const datosFinales = {
      ...this.encuestaForm.value,
      isp_id: ispID
    };
    
    await this.supabaseService.guardarEncuesta(datosFinales);
    
    this.estaEnviando = false;
    this.encuestaForm.reset({
      trimestre: 3,
      anio: 2026,
      velocidad: 3,
      continuidad: 3,
      disponibilidad: 3,
      latencia: 3,
      canales: 3,
      tiempoRespuesta: 3,
      efectividad: 3,
      facturacion: 3
    });
  }

  getFormValidationErrors() {
    Object.keys(this.encuestaForm.controls).forEach(key => {
      const controlErrors = this.encuestaForm.get(key)?.errors;
      if (controlErrors != null) {
        console.warn('Campo con error: ' + key, controlErrors);
      }
    });
  }

  getInvalidControls() {
    return Object.keys(this.encuestaForm.controls).filter(name => this.encuestaForm.controls[name].invalid);
  }
}