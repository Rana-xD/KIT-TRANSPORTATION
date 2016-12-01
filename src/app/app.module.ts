import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { routing } from './root.route';
import { Router} from '@angular/router';
import {CoreServiceService} from './core-service.service';
import {AuthUser} from './main.guard';

export const firebaseConfig = {
  apiKey: "AIzaSyA3x3oprl6wycGy3I8sPXAxVGYEJaFVa2Q",
  authDomain: "kitbus-e6972.firebaseapp.com",
  databaseURL: "https://kitbus-e6972.firebaseio.com",
  storageBucket: "kitbus-e6972.appspot.com",
  messagingSenderId: "859157996774"
}

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoreServiceService,
  AuthUser],
  bootstrap: [AppComponent]
})
export class AppModule {

}
