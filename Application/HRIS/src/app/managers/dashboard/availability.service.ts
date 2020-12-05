import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(private afs: AngularFireAuth, private db: AngularFireDatabase) {
    this.offline().subscribe();
    this.updateuser().subscribe();
    this.away()
  }
  presense(uid: string){
      return this.db.object(`status/${uid}`).valueChanges();
  }
  getuser()
  {
      return this.afs.authState.pipe(first()).toPromise();
  }
  async setavailability(status: string)
  {
      const user = await this.getuser();
      if(user)
      {
          return this.db.object(`status/${user.uid}`).update({status})
      }
  }
  updateuser()
  {
      const connecction = this.db.object('.info/connected').valueChanges().pipe(
          map(connecction => connecction ? 'online' : 'offline')
      );

      return this.afs.authState.pipe(
          switchMap(user => user ? connecction : of('offline')),
          tap(status => this.setavailability(status))
      );
  }
  away()
  {
      document.onvisibilitychange = (e) => {
          if(document.visibilityState === 'hidden')
          {
            this.setavailability('away');
          }else 
          {
            this.setavailability('online');
          }
      };
  }
  offline(){
      return this.afs.authState.pipe(
        tap(user => {
            if(user){
                this.db.object(`status/${user.uid}`).query.ref.onDisconnect().update
                ({
                    status: 'offline'
                });
            }
        })
      );
  }

}