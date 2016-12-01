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
import { RegisterbusComponent } from './dashboard/registerbus.component';
import { UserticketsComponent } from './dashboard/usertickets.component';
import { HistoryComponent } from './dashboard/history.component';
import { ReportsComponent } from './dashboard/reports.component';
import { AccountsComponent } from './dashboard/accounts.component';
import { SettingsComponent } from './dashboard/settings.component';

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
    MainComponent,
    RegisterbusComponent,
    UserticketsComponent,
    HistoryComponent,
    ReportsComponent,
    AccountsComponent,
    SettingsComponent
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
