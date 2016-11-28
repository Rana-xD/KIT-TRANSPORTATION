import { Component, Inject, Injectable, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseApp, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
import { authEmailConfig } from '../app.module';
import {Router} from '@angular/router';
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
	constructor(@Inject(FirebaseApp) public firebaseApp: firebase.app.App,private router: Router){
		// const dbRoot = firebaseApp.database().ref('users');
		// dbRoot.on('value', snapshot => console.log(snapshot.val()));
		
	}

	// Signin with email and password
	signInWithEmailPassword(formData: NgForm){
		if(formData.valid){
			console.log(formData);
			this.firebaseApp.auth().signInWithEmailAndPassword(
				formData.value.email,
				formData.value.password
			).then((data)=>{
				this.onSuccessAuth(data.uid);
			}).catch((error)=>{
				this.onErrorAuth(error);
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
	public onSuccessAuth(user){
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
}
