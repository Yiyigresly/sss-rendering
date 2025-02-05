import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if ( !navigator.geolocation) {
  alert("The browser doesn't soport the geolocation.");
  throw new Error("The browser doesn't soport the geolocation.");
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
