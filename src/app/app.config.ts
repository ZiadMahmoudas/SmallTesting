import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { API_URL } from './tokens/token';
import { environment } from './environment/environment.prod';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,withViewTransitions()),
    importProvidersFrom(HttpClientModule),
        {provide:API_URL,useValue:environment.apiBaseUrl},
      FormsModule
  ]
};
