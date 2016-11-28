var KIT;
if(!KIT) KIT = {};
if(!KIT.firebase) KIT.firebase = {};

(function(){
	var func = KIT.firebase;

	this.auth = firebase.auth();
	this.database = firebase.database();
	this.storage = firebase.storage();
	this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));

	func.initFirebase = function(){
		  // Initialize Firebase
	  	var config = {
		    apiKey: "AIzaSyA3x3oprl6wycGy3I8sPXAxVGYEJaFVa2Q",
		    authDomain: "kitbus-e6972.firebaseapp.com",
		    databaseURL: "https://kitbus-e6972.firebaseio.com",
		    storageBucket: "kitbus-e6972.appspot.com",
		    messagingSenderId: "859157996774"
  		};
  		firebase.initializeApp(config);
	}

})();

$(document).load(function(){
	KIT.firebase.initFirebase();
});