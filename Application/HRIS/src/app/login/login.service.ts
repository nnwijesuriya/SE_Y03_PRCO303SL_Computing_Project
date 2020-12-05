import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    private eventAuthError = new BehaviorSubject<string>("");
    eventAuthError$ = this.eventAuthError.asObservable();
    newUser;
    constructor(private afAuth: AngularFireAuth, private route: Router, private navctrl: NavController, private db: AngularFireDatabase) { }
  
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

    // to make the user presense be offline when he sign out
    getuser()
  {
      return this.afAuth.authState.pipe(first()).toPromise();
  }

    async setavailability(status: string)
    {
        const user = await this.getuser();
        if(user)
        {
            return this.db.object(`status/${user.uid}`).update({status})
        }
    }
    
    signout(){
      this.afAuth.signOut().then(exit =>{
        this.setavailability('offline');
        this.route.navigateByUrl('login');
      })
    }
}