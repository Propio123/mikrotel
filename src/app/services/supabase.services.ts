import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

 constructor() {
    // Intentamos obtener las variables de window (inyectadas por Vercel)
    // O de process.env si el build las sustituye
    const url = (window as any)._env_?.SUPABASE_URL || process.env['SUPABASE_URL'];
    const key = (window as any)._env_?.SUPABASE_KEY || process.env['SUPABASE_KEY'];

    if (!url || url.includes('placeholder')) {
      throw new Error(`Supabase no se pudo inicializar: URL inválida: ${url}`);
    }

    this.supabase = createClient(url, key);
  }


  async guardarEncuesta(datos: any) {
    if (!this.supabase) throw new Error('Supabase no está inicializado');
    return await this.supabase.from('respuestas_encuestas').insert([datos]);
  }
}