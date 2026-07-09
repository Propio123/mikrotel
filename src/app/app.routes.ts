import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { EncuestaComponent } from './components/encuesta/encuesta';
import { Home } from './components/home/home';
import { CoberturaComponent } from './components/cobertura/cobertura';

export const routes: Routes = [
    { path: '', component: Home }, // Asegúrate de tener esto
 {
    path: 'encuesta/:isp',
    loadComponent: () => import('./components/encuesta/encuesta').then(m => m.EncuestaComponent),
    // Esto desactiva el prerendering para esta ruta específicamente
    data: { renderMode: 'Client' }
  },
  { path: 'about', component: About },
  { path: 'cobertura', component: CoberturaComponent },
  { path: '**', redirectTo: '' } // Redirección de seguridad
];
