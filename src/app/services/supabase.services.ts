import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient | undefined;

  constructor() {
    let url = (window as any)._env_?.SUPABASE_URL || environment.supabaseUrl;
    const key = (window as any)._env_?.SUPABASE_KEY || environment.supabaseKey;

    // --- CORRECCIÓN CRÍTICA ---
    // Si la URL es solo "mikrotel", la convertimos en la URL válida
    if (url && !url.startsWith('http')) {
       url = `https://${url}.supabase.co`; 
    }
    // --------------------------

    if (!url || url.includes('placeholder')) {
      console.error('Supabase no se pudo inicializar: URL inválida:', url);
      return; 
    }

    this.supabase = createClient(url, key);
  }


  async guardarEncuesta(datos: any) {
    if (!this.supabase) throw new Error('Supabase no está inicializado');
    return await this.supabase.from('respuestas_encuestas').insert([datos]);
  }
}