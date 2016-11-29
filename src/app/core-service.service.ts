import { Injectable, Inject } from '@angular/core';
import { FirebaseApp, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class CoreServiceService {
  public data:any;
  constructor(@Inject(FirebaseApp) public firebaseApp: firebase.app.App) { }
  public uid: string;
  setLoginInfo (uid: string)
  {
    this.uid = uid;
  }
  getUserInfo ()
  {
    return this.uid;
  }
  

}
