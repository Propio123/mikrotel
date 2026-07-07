import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('supabaseUrl', 'supabaseKey');
  }

 async guardarEncuesta(datos: any) {
  // Asegúrate de que 'datos' sea un array: [datos]
  const { data, error } = await this.supabase
    .from('respuestas_encuestas')
    .insert([datos]); // <--- Aquí el cambio: el array [] es obligatorio

  return { data, error };
}
}