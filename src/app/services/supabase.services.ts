import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
   const url = (window as any)._env_?.SUPABASE_URL || environment.supabaseUrl;
    const key = (window as any)._env_?.SUPABASE_KEY || environment.supabaseKey;

    if (!url || url.includes('placeholder')) {
      console.error('ERROR: Supabase URL no configurada correctamente.');
    }

    this.supabase = createClient(url, key);
  }

 async guardarEncuesta(datos: any) {
  // Asegúrate de que 'datos' sea un array: [datos]
  const { data, error } = await this.supabase
    .from('respuestas_encuestas')
    .insert([datos]); // <--- Aquí el cambio: el array [] es obligatorio

  return { data, error };
}
}