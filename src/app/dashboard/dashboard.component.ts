import { Component, Inject } from '@angular/core';
import {CoreServiceService} from '../core-service.service';
import * as firebase from 'firebase';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  userEmail: any;
  userName: any;
  userData: any;
  constructor(private router: Router,private core: CoreServiceService){ 

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){ // Already signed in
        this.userData = user;

        if(this.checkUser(user.uid)){
          this.getUserDashboard(user.uid);
        }else{
          this.registerNewUser(user.uid);
        }

      }else{ // Not yet signed in
        this.router.navigate(['login']);
      }
    });
    
  }

  setName(username){
    this.userName = username;
  }

  // Check whether new user or member
  checkUser(uid, err = 0){
    let userRef = firebase.database().ref('users/'+uid);
    let errCount = err;
    userRef.once('value')
    .then((snapshot)=>{
      if(!snapshot.val()){
        return false;
      }else{
        return true;
      }
    }).catch((error)=>{
      errCount ++;
      if(errCount<5){
        this.checkUser(uid, errCount);
      }else{
        alert('Oop! sorry something went wrong!');
        return;
      }
    });

  }

  // Get user data from firebase
  getUserDashboard(uid){
    let rootRef = firebase.database().ref();
    let usersRef = rootRef.child('users');
    let departuresRef = rootRef.child('departures');
    let departure_joinee = rootRef.child('departure_joinee');
    let userRef = usersRef.child(uid);

    
  }

  // Register new user into database
  registerNewUser(uid){

    let userRef = firebase.database().ref('user/'+uid);

    userRef.set({
      name:{
        firstname: 'New',
        lastname: 'User',
        username: 'Annonymous'
      },
      info:{
        batch: '1',
        bio: '',
        email: this.userData.email,
        gender: 'male',
        mobile: ''
      },
      profile_url: '',
      joined_date: Date.now()

    }).then((success)=>{
      console.log("success register user : "+success);
    }).catch((error)=>{
      console.log("failed register user : "+error);

    });

  }

  // 

  logout(){
    firebase.auth().signOut();
  }

}
