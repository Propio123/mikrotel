import { AfterViewInit, Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoberturaService } from '../../services/cobertura.service';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cobertura',
  imports: [CommonModule],
  templateUrl: './cobertura.html',
})
export class CoberturaComponent implements AfterViewInit {
  private map!: L.Map;
  private http = inject(HttpClient); // Forma moderna de inyectar
  zonas: any[] = [];

  constructor(private coberturaService: CoberturaService) {}

  async ngAfterViewInit() {
    this.map = L.map('map').setView([0.34, -78.14], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    // 1. Cargar el GeoJSON desde assets
    this.http.get('assets/cobertura.geojson').subscribe({
      next: (data: any) => {
        L.geoJSON(data, {
          style: { color: '#007bff', weight: 3, fillOpacity: 0.3 }
        }).addTo(this.map).bindPopup("Área de cobertura actualizada");
      },
      error: (err) => console.error("Error cargando el GeoJSON:", err)
    });

    // 2. Obtener los puntos individuales de Supabase (si los necesitas)
    this.zonas = await this.coberturaService.obtenerZonasActivas();
    this.zonas.forEach(zona => {
      if (zona.latitud && zona.longitud) {
        L.marker([zona.latitud, zona.longitud]).addTo(this.map);
      }
    });
  }
}