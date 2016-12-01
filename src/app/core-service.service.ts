import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class CoreServiceService {
  public data:any;
  constructor() { }
  public uid: string;
  setLoginInfo (uid: string){
    this.uid = uid;
  }
  getUserInfo (){
    return this.uid;
  }
  

}
