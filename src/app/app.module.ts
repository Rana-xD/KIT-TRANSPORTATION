import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA3x3oprl6wycGy3I8sPXAxVGYEJaFVa2Q",
  authDomain: "kitbus-e6972.firebaseapp.com",
  databaseURL: "https://kitbus-e6972.firebaseio.com",
  storageBucket: "kitbus-e6972.appspot.com",
  messagingSenderId: "859157996774"
}

export const authEmailConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

export const authGoogleConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

export const authFacebookConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
}

export const authTwitterConfig = {
  provider: AuthProviders.Twitter,
  method: AuthMethods.Popup
}

export const authGithubConfig = {
  provider: AuthProviders.Github,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,authEmailConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
