import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

 constructor() {
    // Intentamos leer de window._env_ (inyectado por el script en index.html)
    // Usamos el operador de coalescencia ?? para evitar errores
    const url = (window as any)._env_?.SUPABASE_URL ?? '';
    const key = (window as any)._env_?.SUPABASE_KEY ?? '';

    if (!url || url.includes('placeholder')) {
      console.error('Error: Supabase no configurado. Verifica tu index.html o variables de entorno.');
    }

    this.supabase = createClient(url, key);
  }



  async guardarEncuesta(datos: any) {
    if (!this.supabase) throw new Error('Supabase no está inicializado');
    return await this.supabase.from('respuestas_encuestas').insert([datos]);
  }
}