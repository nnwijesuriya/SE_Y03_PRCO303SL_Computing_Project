import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, first } from 'rxjs/operators';

const Token_Key = 'user-access-token'
@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    private eventAuthError = new BehaviorSubject<string>("");
    eventAuthError$ = this.eventAuthError.asObservable();
    newUser;
    constructor(private afAuth: AngularFireAuth,private storage: Storage ,private route: Router, private navctrl: NavController, private db: AngularFireDatabase) {
      this.loadUser();
      this.user = this.authstate.asObservable().pipe(
        filter(response => response)
      );
     }
  
    isfound;
    user: Observable<any>;
    authstate = new BehaviorSubject(null)


    loadUser()
    {
      this.storage.create();
      this.storage.get(Token_Key).then(data =>{
        console.log(data)
        if(data)
        {
          this.authstate.next(data);
        }else
        {
          this.authstate.next({ email: null, role: null})
        }
      })
    }
  
    login( email: string, password: string){
      let user = null;
      this.afAuth.signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.eventAuthError.next(error);
        })
        .then(userCredential => {
          
          if(userCredential) {
            if(this.isfound= email.includes("@managers"))
            {
              this.navctrl.navigateRoot(['managers/dashboard']);
              user = {email, role:'managers'}
            }else
            {
              this.navctrl.navigateRoot(['employees/dashboard']);
              user = {email, role:'employees'}
            }
          }

          this.authstate.next(user);

          this.storage.create()
          this.storage.set(Token_Key, user)
          console.log(user)
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
      this.setavailability('offline');
      this.afAuth.signOut().then(exit =>{
        this.storage.set(Token_Key, null);
        this.authstate.next(null);
        this.route.navigateByUrl('login');
      })
    }
}