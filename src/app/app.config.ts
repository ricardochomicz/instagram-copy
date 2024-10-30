import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { provideHttpClient, withFetch } from '@angular/common/http';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWGRCf1JpR2tGfV5ycEVAalxWTndXUj0eQnxTdEFiWX1XcX1VRmVVUUx/Xw==');

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideHttpClient(withFetch()),
  provideClientHydration()]
};


