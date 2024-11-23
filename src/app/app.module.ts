import { Smartphone } from './model/smartphone.model';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  SmartphonesComponent } from './smartphones/smartphones.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
function initializeKeycloak(keycloak: KeycloakService) { 
  return () => 
    keycloak.init({ 
      config: { 
        url: 'http://localhost:8090', 
        realm: 'rawend-realm', 
        clientId: 'smar-app' 
      }, 
      initOptions: { 
        /*onLoad :'login-required', 
        checkLoginIframe: true*/ 
        onLoad: 'check-sso', 
        silentCheckSsoRedirectUri: 
          window.location.origin + '/assets/silent-check-sso.html' 
      } 
    }); 
}
@NgModule({
  declarations: [
    AppComponent,
    SmartphonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule 
  ],
  providers: [ { 
    provide: APP_INITIALIZER, 
    useFactory: initializeKeycloak, 
    multi: true, 
    deps: [KeycloakService] 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
