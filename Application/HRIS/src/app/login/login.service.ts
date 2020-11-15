import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    private eventAuthError = new BehaviorSubject<string>("");
    eventAuthError$ = this.eventAuthError.asObservable();
    newUser;
    constructor(private afAuth: AngularFireAuth, private route: Router, private navctrl: NavController) { }
  
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
              this.navctrl.navigateRoot(['dashboard']);
            }else
            {
              this.route.navigate(['login']);
            }
          }
        })
    }

    signout(){
      this.afAuth.signOut().then(exit =>{
        this.navctrl.navigateRoot('login');
      })
    }
}