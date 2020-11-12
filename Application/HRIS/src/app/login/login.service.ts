import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    private eventAuthError = new BehaviorSubject<string>("");
    eventAuthError$ = this.eventAuthError.asObservable();
    newUser;
    constructor(private afAuth: AngularFireAuth, private route: Router) { }
  
    isfound;
  
    login( email: string, password: string) {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.eventAuthError.next(error);
        })
        .then(userCredential => {
          if(userCredential) {
            if(this.isfound= email.includes("@managers"))
            {
              this.route.navigate(['dashboard']);
            }else
            {
              this.route.navigate(['login']);
            }
          }
        })
    }
}