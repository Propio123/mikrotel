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
      provincia_ciudad: ['', Validators.required],
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
envioExitoso = false; // Nueva variable
 async enviar() {
  if (this.encuestaForm.invalid) {
    this.getFormValidationErrors();
    return;
  }

  this.estaEnviando = true;
  const ispID = this.route.snapshot.paramMap.get('isp');
  
  // 1. Preparamos los datos con el mapeo correcto
  const datosFinales = {
    numAbonado: this.encuestaForm.value.numAbonado,
    tecnologia: this.encuestaForm.value.tecnologia,
    trimestre: Number(this.encuestaForm.value.trimestre),
    anio: Number(this.encuestaForm.value.anio),
    provincia_ciudad: this.encuestaForm.value.ciudad, // Mapeo correcto
    tipoPlan: this.encuestaForm.value.tipoPlan,
    velocidad: Number(this.encuestaForm.value.velocidad),
    continuidad: Number(this.encuestaForm.value.continuidad),
    disponibilidad: Number(this.encuestaForm.value.disponibilidad),
    latencia: Number(this.encuestaForm.value.latencia),
    canales: Number(this.encuestaForm.value.canales),
    tiempoRespuesta: Number(this.encuestaForm.value.tiempoRespuesta),
    efectividad: Number(this.encuestaForm.value.efectividad),
    facturacion: Number(this.encuestaForm.value.facturacion),
    relacionPrecioCalidad: this.encuestaForm.value.relacionPrecioCalidad,
    recomendacion: this.encuestaForm.value.recomendacion,
    comentarios: this.encuestaForm.value.comentarios,
    isp_id: ispID
  };
    
  // 2. Intentamos guardar y capturamos el resultado
  const { error } = await this.supabaseService.guardarEncuesta(datosFinales);
  
  this.estaEnviando = false;

  // 3. Solo mostramos el éxito si NO hubo error
  if (!error) {
    this.envioExitoso = true;
    this.encuestaForm.reset({
      trimestre: 3, anio: 2026, velocidad: 3, continuidad: 3,
      disponibilidad: 3, latencia: 3, canales: 3, tiempoRespuesta: 3,
      efectividad: 3, facturacion: 3
    });
  } else {
    console.error('Error al guardar en Supabase:', error);
    alert('Hubo un problema al enviar la encuesta. Por favor, intenta de nuevo.');
  }
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