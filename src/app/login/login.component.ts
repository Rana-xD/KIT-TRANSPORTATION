import { Component, Inject, Injectable, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseApp, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
import { authEmailConfig } from '../app.module';

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
	constructor(@Inject(FirebaseApp) public firebaseApp: firebase.app.App){
		// const dbRoot = firebaseApp.database().ref('users');
		// dbRoot.on('value', snapshot => console.log(snapshot.val()));
		
	}

	// Register user with email and password
	createUserWithEmailPassword(formData: NgForm){
		if(formData.valid){
			this.firebaseApp.auth().createUserWithEmailAndPassword(
				formData.value.email,
				formData.value.password
			).then((data)=> function(data){
				// TO DO 
				// Register user to firebase
			}).catch((error)=> function(error){
				// TO DO 
				// Notify user regarding on error code
				if(error.code == 'auth/email-already-in-use'){
					alert(error.message);
				}
			});
		}
	}

	// Signin with email and password
	signInWithEmailPassword(formData: NgForm){
		if(formData.valid){
			console.log(formData);
			this.firebaseApp.auth().signInWithEmailAndPassword(
				formData.value.email,
				formData.value.password
			).then(function(data){
				console.log(data.uid);
			}).catch(function(error){
				
			});
		}
	}

	// Singin with google account
	signInWithGoogle(){

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
	onSuccessAuth(user){
		if(user){
			console.log("logged in succeed");
			// TO DO
			// Redirect user to dashboard
		}
	}

	//Authentication failed
	onErrorAuth(error){
		console.log(error.val());
		// TO DO
		// Notify user
	}

	// Signout
	signOut(){
		this.firebaseApp.auth().signOut()
		.then()
	}
}
