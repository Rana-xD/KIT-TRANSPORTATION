import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import * as firebase from 'firebase';
import { Router} from '@angular/router';
import {Injectable, EventEmitter} from '@angular/core';
@Injectable()

export class AuthUser implements CanActivate {
  user:any;
    constructor(protected router: Router){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.user = user; 
        }
      });

    }
   canActivate(): Observable<boolean> | boolean {
  
        if (this.user){
          this.router.navigate(['dashboard/registerbus']);
          return true;
        }else{
          this.router.navigate(['']);
          return false;
        }
   }
}

