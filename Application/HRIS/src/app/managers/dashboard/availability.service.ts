import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';

export interface notes{
    id?: string,
    title: string,
    description: string
  }

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

    private note: Observable<notes[]>;
    private notesCollection: AngularFirestoreCollection<notes>;

    private noteC: Observable<notes[]>;
    private notesCollectionC: AngularFirestoreCollection<notes>;

  constructor(private afs: AngularFireAuth, private db: AngularFireDatabase, private store: AngularFirestore) {
    this.offline().subscribe();
    this.updateuser().subscribe();
    this.away()

    this.notesCollection = this.store.collection<notes>('notepad/notes/Task To Do');
    this.note = this.notesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.notesCollectionC = this.store.collection<notes>('notepad/notes/Task Completed');
    this.noteC = this.notesCollectionC.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

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

  addnotes( notes: notes): Promise<DocumentReference>
  {
    return this.notesCollection.add(notes);
  }

  addnotesC( notes: notes): Promise<DocumentReference>
  {
    return this.notesCollectionC.add(notes);
  }

  addcompletednotes()
  {
    return this.noteC;
  }

  shownotes()
  {
   return this.note;
  }

  deletenoteWithIDs(id : string) {
    return this.notesCollection.doc(id).delete();
}

  deletenoteWithIDsComp(id : string) {
    return this.notesCollectionC.doc(id).delete();
  }

}