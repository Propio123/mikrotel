import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient | undefined;

  constructor() {
    // 1. Prioridad: Variables inyectadas por Vercel al navegador (window._env_)
    // 2. Reserva: Archivo environment.ts
    const url = (window as any)._env_?.SUPABASE_URL || environment.supabaseUrl;
    const key = (window as any)._env_?.SUPABASE_KEY || environment.supabaseKey;

    // Validación estricta
    if (!url || url.includes('placeholder') || url === 'undefined') {
      console.error('Supabase no se pudo inicializar: URL inválida.');
      return; 
    }

    this.supabase = createClient(url, key);
  }

  async guardarEncuesta(datos: any) {
    if (!this.supabase) throw new Error('Supabase no está inicializado');
    return await this.supabase.from('respuestas_encuestas').insert([datos]);
  }
}