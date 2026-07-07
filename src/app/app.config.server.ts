import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

// ESTA LÍNEA ES LA QUE TE FALTA Y CAUSA EL ERROR
export const config = mergeApplicationConfig(appConfig, serverConfig);