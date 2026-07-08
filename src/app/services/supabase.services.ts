import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

 constructor() {
    // Ponemos los valores reales directamente aquí.
    // Sustituye 'TU_URL_AQUI' y 'TU_KEY_AQUI' con tus datos de Supabase.
    const url = 'https://oadglyrlthxzyadipzar.supabase.co';
    const key = 'sb_publishable_aarULnR-cJarOl0Fbn4bmA_zk4agUma';

    if (!url || url.includes('TU_ID_PROYECTO')) {
      throw new Error('Debes configurar tu URL y Key en el SupabaseService.');
    }

    this.supabase = createClient(url, key);
  }



  async guardarEncuesta(datos: any) {
    if (!this.supabase) throw new Error('Supabase no está inicializado');
    return await this.supabase.from('respuestas_encuestas').insert([datos]);
  }
}