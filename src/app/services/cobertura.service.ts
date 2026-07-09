import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.services';
 // El que ya configuramos

@Injectable({ providedIn: 'root' })
export class CoberturaService {
  constructor(private supabaseService: SupabaseService) {}

  async obtenerZonasActivas() {
    const { data, error } = await this.supabaseService.client
      .from('cobertura')
      .select('*')
      .eq('esta_disponible', true);

    if (error) throw error;
    return data;
  }
}