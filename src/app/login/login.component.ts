import { Component, Inject, Injectable, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {CoreServiceService} from '../core-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent{
	user = {
		email: '',
		password: ''
	};
	constructor(private router: Router, private core: CoreServiceService){
		// @Inject(FirebaseApp) public firebaseApp: firebase.app.App,
		// const dbRoot = firebaseApp.database().ref('users');
		// dbRoot.on('value', snapshot => console.log(snapshot.val()));
		firebase.auth().onAuthStateChanged((user)=> {
	  		if(user){
	    		this.router.navigate(['dashboard']);
	  		}else{
    			this.router.navigate(['']);
  			}
		});
		
	}

	// Register user with email and password
	createUserWithEmailPassword(formData: NgForm){
		if(formData.valid){
			console.log(formData.value);
			firebase.auth().createUserWithEmailAndPassword(
				formData.value.uemail,
				formData.value.upassword
			).then((user)=> {
				console.log(user);
				this.registerNewUser(formData.value, user.uid);
			}).catch((error)=> {
				// TO DO 
				// Notify user regarding on error code	
				console.log("error sign up: "+error.message);
				
			});
		}
	}

	  // Register new user into database
	registerNewUser(info, uid){

	    let userRef = firebase.database().ref('user/'+uid);
	    userRef.set({
	      name:{
	        firstname: info.firstname.toString(),
	        lastname: info.lastname.toString(),
	        username: info.uusername.toString()
	      },
	      info:{
	        batch: info.batch.toString(),
	        bio: 'I am me, I love myself and really love me myself',
	        email: info.email.toString(),
	        gender: info.gender.toString(),
	        mobile: '016630095'
	      },
	      profile_url: 'https://lh6.googleusercontent.com/-YjdKNQBc6yQ/AAAAAAAAAAI/AAAAAAAAAAA/N37mCk6ke2o/W96-H96/photo.jpg',
	      joined_date: Date.now().toString()
	    }).then((success)=>{
	      console.log("success register user : "+success);
	    }).catch((error)=>{
	      console.log("failed register user : "+error);
	    });

	}

	// Signin with email and password
	signInWithEmailPassword(formData: NgForm){
		if(formData.valid){
			firebase.auth().signInWithEmailAndPassword(
				formData.value.email,
				formData.value.password
			).then((data)=>{
				this.core.setLoginInfo(data.uid);
				this.onSuccessAuth();
			}).catch((error)=>{
				alert(error);
			});
			
		}
	}


	// Singin with google account
	signInWithGoogle(){
		let provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then((googleAuthData)=>{
			console.log(googleAuthData);
		}).catch((googleAuthError)=>{
			console.log(googleAuthError);
		});

	}

	// Signin with facebook account
	signInWithFacebook(){

	}

	// Signin with twitter account
	signInWithTwitter(){

	}

	// Signin with github account
	signInWithGithub(){

	}

	// Authentication successfully
	onSuccessAuth(){
		let user = this.core.getUserInfo();
		if(user){
			this.router.navigate(['dashboard']);
		}
	}

	//Authentication failed
	onErrorAuth(error){
		console.log(error.code + " : " + error.message);
		// TO DO
		// Notify user
	}

	// Signout
	signOut(){
		
	}
}
