import { Component, Inject } from '@angular/core';
import {CoreServiceService} from '../core-service.service';
import { FirebaseApp, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  uid:string;
  user:string;
  constructor(private core: CoreServiceService, @Inject(FirebaseApp) public firebaseApp: firebase.app.App) { 
    this.getUserInfo();
    
  }
  getUserInfo()
  {
   this.uid = this.core.getUserInfo();
  }
}
