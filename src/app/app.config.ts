import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),// Detección de cambios está desactivado, está en true
    provideRouter(
      routes, 
      withViewTransitions({ skipInitialTransition: true })
    ),
    provideHttpClient(withInterceptors([])), provideAnimationsAsync(),
  ],
};
