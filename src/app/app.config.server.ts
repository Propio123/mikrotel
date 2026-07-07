// En src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'encuesta/:isp',
    renderMode: RenderMode.Client // Cambia esto de Prerender a Client
  }
];