import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { EncuestaComponent } from './components/encuesta/encuesta';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home }, // Asegúrate de tener esto
  {
    path: 'encuesta/:isp',
    providers: [
      {
        provide: 'getPrerenderParams',
        useValue: () => [
          { isp: 'mikrotel' },
        ]
      }
    ]
  },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' } // Redirección de seguridad
];
