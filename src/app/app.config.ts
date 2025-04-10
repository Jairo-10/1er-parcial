import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes'; // Mantén las rutas existentes

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(FormsModule), // Agrega aquí FormsModule
  ],
};
