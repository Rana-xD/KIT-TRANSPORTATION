import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import * as firebase from 'firebase';
import { Router} from '@angular/router';
import {Injectable, EventEmitter} from '@angular/core';
@Injectable()
export class AuthUser implements CanActivate 
{
    constructor(protected router: Router)
    {

    }
   canActivate(): boolean
   {
       firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.router.navigate(['dashboard']);  
        return true;
      }
      });
    this.router.navigate(['']);
    return false;
   }
}