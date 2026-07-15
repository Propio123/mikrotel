import { AfterViewInit, Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoberturaService } from '../../services/cobertura.service';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cobertura',
  imports: [CommonModule],
  templateUrl: './cobertura.html',
  styleUrl: './cobertura.css'
})
export class CoberturaComponent implements AfterViewInit {
  private map!: L.Map;
  private http = inject(HttpClient); // Forma moderna de inyectar
  zonas: any[] = [];
  isModalOpen = false;
  constructor(private coberturaService: CoberturaService) {}

  async ngAfterViewInit() {
  this.map = L.map('map').setView([0.34, -78.14], 11); // Zoom inicial más alejado
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

  const allBounds: L.LatLng[] = [];

  // 1. Cargar GeoJSON
  this.http.get('assets/cobertura.geojson').subscribe({
    next: (data: any) => {
      const geoLayer = L.geoJSON(data, {
        style: { color: '#007bff', weight: 3, fillOpacity: 0.3 }
      }).addTo(this.map).bindPopup("Área de cobertura");
      
      // Añadir bounds del geojson
      this.map.fitBounds(geoLayer.getBounds());
    }
  });

  // 2. Obtener puntos
  this.zonas = await this.coberturaService.obtenerZonasActivas();
  this.zonas.forEach(zona => {
    if (zona.latitud && zona.longitud) {
      const marker = L.marker([zona.latitud, zona.longitud]).addTo(this.map);
      
    }
  });

  // 3. Ajustar mapa para ver TODO (GeoJSON + Marcadores)
  if (allBounds.length > 0) {
    this.map.fitBounds(L.latLngBounds(allBounds));
  }
}
}