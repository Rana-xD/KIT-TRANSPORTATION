import { Component, Inject } from '@angular/core';
import {CoreServiceService} from '../core-service.service';
// import { FirebaseApp, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  userEmail:any;
  userName:any;
  constructor(private router: Router,private core: CoreServiceService){ 
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user.displayName == null){
          this.userName = user.email;
        }else{
          this.userName = user.displayName;
        }
        console.log(this.userName);
      }else{
        this.router.navigate(['login']);
      }
    });
    
  }
  // getUserInfo(){
  //  this.uid = this.core.getUserInfo();
  // }
}
