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
      if(user){
        this.userData = user;
        if(user.displayName == null){
          // this.setName(user.email);
          this.getUserDashboard(user);
        }else{
          // this.setName(user.displayName);
        }
       
      }else{
        this.router.navigate(['login']);
      }
    });
    
  }

  setName(username){
    this.userName = username;
  }

  // Check whether new user or member
  checkUser(){
    
  }

  // Get user data from firebase
  getUserDashboard(user){
    let rootRef = firebase.database().ref();
    let usersRef = rootRef.child('users');
    let departuresRef = rootRef.child('departures');
    let departure_joinee = rootRef.child('departure_joinee');
    let userRef = usersRef.child(user.uid);

    userRef.once('value')
    .then((snapshot)=>{
      if(!snapshot.val()){
        this.registerNewUser();
      }else{
        console.log(snapshot.val());
      }
    }).catch((error)=>{
      console.log(error);
    });
  }

  // Register new user into database
  registerNewUser(){

    let rootRef = firebase.database().ref();
    let usersRef = rootRef.child('users');
    let departuresRef = rootRef.child('departures');
    let departure_joinee = rootRef.child('departure_joinee');
    let userRef = usersRef.child(this.userData.uid);

    userRef.set({
      name:{
        firstname: 'John',
        lastname: 'Plouk',
        username: 'Plouk Thom'
      },
      info:{
        batch: '1',
        bio: 'we are developer team',
        email: 'vinei@gmail.com',
        gender: 'male',
        mobile: '016630095'
      },
      profile_url: 'https://lh6.googleusercontent.com/-YjdKNQBc6yQ/AAAAAAAAAAI/AAAAAAAAAAA/N37mCk6ke2o/W96-H96/photo.jpg',
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
