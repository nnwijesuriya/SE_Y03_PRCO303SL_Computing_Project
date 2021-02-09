import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface mark {
    id?: string,
    userid: string,
    name: string,
    department: string,
    email: any,
    date: any
  }

@Injectable({
  providedIn: 'root'
})
export class MarkingService {

    private Ausers: Observable<mark[]>;
    private usersCollection: AngularFirestoreCollection<mark>;
  
    constructor(private afs: AngularFirestore) {
  
      this.usersCollection = this.afs.collection<mark>('attendance/employees/present employees');
      this.Ausers = this.usersCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

markattendance(value: mark)
{
  return this.usersCollection.doc(value.userid).set(value);
}

getusers()
{
  return this.Ausers;
}




}